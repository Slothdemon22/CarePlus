
import { NextRequest, NextResponse } from 'next/server';

import connectToDatabase from '@/lib/dbConnect';
import Appointment from '@/app/api/schema/appointment';

import mongoose from 'mongoose';

export async function POST(req: NextRequest)
{
    await connectToDatabase();
    
  
    try {
        const { appointmentId, status } = await req.json();
      console.log(appointmentId, status);
      const isValidObjectId = mongoose.Types.ObjectId.isValid('66e942128f858d69c32b43ae');
      console.log(isValidObjectId);
  
      if (!appointmentId || !status) {
        return NextResponse.json({ message: 'Appointment ID and status are required' }, { status: 400 });
      }
  
      // Find and update the appointment
      const result = await Appointment.find({ _id: appointmentId }).updateOne({ status: status });
      const ans=await Appointment.find({ _id: appointmentId })
      
     
      if (!result) {
        return NextResponse.json({ message: 'Appointment not found' }, { status: 404 });
      }
  
      return NextResponse.json(ans, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
  }