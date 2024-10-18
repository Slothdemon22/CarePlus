import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/app/api/schema/user';

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

export const POST=async(req: NextRequest) =>{
  await dbConnect(); // Ensure database connection

  try {
    // Parse the request body
    const { name, email, password }: SignupRequestBody = await req.json();
    console.log(name, email, password)

    // Validate request body
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      isComplete: false,
    });

    await user.save(); // Save user to the database

    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error); // Log error for debugging
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
