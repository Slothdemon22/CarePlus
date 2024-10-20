import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import dbConnect from '@/lib/dbConnect';
import AppointmentDetails from '../schema/appointment'; // Adjust path based on your folder structure
import UserModel from '../schema/user'; // Import the User model
import { Resend } from "resend"; // Import Resend service
import EmailTemplate from '@/lib/AppointmentTemplate'; // Import your email template

export async function POST(req: NextRequest) {
  await dbConnect();
  const resend = new Resend("re_7Efe9VUV_MNJcunLJG7kQycruNAhgf6RU");
  try {
    const token = req.cookies.get("token");

    // Verify the token and extract the payload
    if (!token) {
      return NextResponse.json({ success: false, message: "Token not found" }, { status: 401 });
    }

    const { payload } = await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET));

    // Extract userId and name from the token payload
    const userId = payload.userId; // Adjust based on your token structure
    const userName = payload.username as string; // Assuming the token includes the user's name
    console.log(userId, "username", userName);

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID not found in token" }, { status: 401 });
    }

    const body = await req.json();
    console.log(body); // For debugging

    // Destructure the required fields from the request body
    const {
      data: {
        doctor,
        appointmentReason,
        comments = "", // Default to empty string if not provided
      },
      dateTime, // Ensure this is included in the request body
    } = body;

    // Check if all required fields are present
    if (!doctor || !appointmentReason || !dateTime) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: doctor, appointmentReason, or dateTime" },
        { status: 400 }
      );
    }

    // Create the appointment document in the database
    const newAppointment = await AppointmentDetails.create({
      doctor,
      appointmentReason,
      comments,
      dateTime,
      User: userId, // Use the userId extracted from the token
      status: "pending",
    });

    // Update the user's appointments array with the new appointment ID
    await UserModel.findByIdAndUpdate(
      userId,
      { $addToSet: { appointments: newAppointment._id } }, // Add the appointment ID to the appointments array
      { new: true } // Return the updated user document
    );

    // Send appointment confirmation email using Resend
   

    const emailContent = EmailTemplate({
      name: userName,
      doctor: doctor,
      appointmentReason: appointmentReason,
      dateTime: new Date(dateTime).toLocaleString(), // Format date and time
    });
const email=payload.email as string
    const { data, error } = await resend.emails.send({
      from: 'noReply@tradenexusonline.com',
      to: [email], // Use the email from the token payload
      subject: 'Appointment Confirmation',
      react: emailContent, // Pass the email template with the appointment details
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', data);
    }

    // Return a success response with the created appointment
    return NextResponse.json({ success: true, data: newAppointment }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ success: false, message: "Failed to create appointment", error }, { status: 500 });
  }
}
