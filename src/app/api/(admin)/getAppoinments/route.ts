import {  NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import AppointmentDetails from '@/app/api/schema/appointment'; // Adjust path based on your folder structure

export async function GET() {
  await dbConnect();
  console.log("Fetching appointments...");

  try {
    // Fetch all appointments from the database
    const appointments = await AppointmentDetails.find({})

    // Return a success response with the appointments
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ success: false, message: "Failed to retrieve appointments", error }, { status: 500 });
  }
}
