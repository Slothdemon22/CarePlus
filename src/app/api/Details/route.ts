import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Details from '../schema/detail';
import { jwtVerify, SignJWT } from 'jose'; // Include SignJWT for creating a new token
import User from '../schema/user';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();

    // Get the token from cookies
    const tokenCookie = req.cookies.get("token");
    if (!tokenCookie || !tokenCookie.value) {
      return NextResponse.json({ success: false, message: "Authentication token is missing" }, { status: 401 });
    }

    // Verify the token
    const { payload } = await jwtVerify(tokenCookie.value, new TextEncoder().encode(process.env.JWT_SECRET));
    const userId = payload.userId; // Extract userId from the token payload
    if (!userId) {
      return NextResponse.json({ success: false, message: "Invalid token payload" }, { status: 400 });
    }

    // Destructure the required fields and set default values for optional fields
    const {
      firstName,
      phoneNo,
      dob = null, // Allow nullable date
      address,
      gender,
      occupation,
      insuranceProvider,
      insurancePolicy,
      allergies = "", // Default to empty string if not provided
      medications = "", // Default to empty string if not provided
      familyMedicalHistory = "", // Default to empty string if not provided
      pastMedicalHistory = "", // Default to empty string if not provided
      idType,
      idNumber,
      documentUpload = "" // Default to empty string if not provided
    } = body;

    // Save the details to the database
    const newDetails = await Details.create({
      firstName,
      phoneNo,
      dob,
      address,
      gender,
      occupation,
      insuranceProvider,
      insurancePolicy,
      allergies,
      medications,
      familyMedicalHistory,
      pastMedicalHistory,
      idType,
      idNumber,
      documentUpload,
      user: userId // Associate the user from the token
    });

    console.log("Saved details:", newDetails);

    // Update the user's `isComplete` field to true
    const existingUser = await User.findOneAndUpdate(
      { _id: userId },
      { isComplete: true }, // Set isComplete to true
      { new: true } // Return the updated document
    );

    console.log("Updated user:", existingUser);

    // Create a new token with the updated `isComplete` field
    const newToken = await new SignJWT({ userId: payload.userId, email: payload.email, isComplete: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('2h') // Set token expiry
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    // Set the new token in cookies
    const response = NextResponse.json({ success: true, data: newDetails }, { status: 201 });
    response.cookies.set('token', newToken, { httpOnly: true, secure: true, path: '/', maxAge: 2 * 60 * 60 });

    return response;

  } catch (error) {
    console.error("Error saving details:", error);
    return NextResponse.json({ success: false, message: "Failed to save details",error }, { status: 500 });
  }
}
