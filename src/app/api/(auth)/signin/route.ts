import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/app/api/schema/user';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

interface SigninRequestBody {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  console.log("hello")
  

  await dbConnect(); 

  try {
   
    const { email, password }: SigninRequestBody = await req.json();
    console.log(email, password)

    
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      //console.log("user not found")
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      //console.log("password not match")
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Generate JWT token
    const token = await new SignJWT({ userId: user._id, email: user.email,isComplete:user.isComplete,isAdmin:user.isAdmin,username:user.name })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h') 
      .sign(new TextEncoder().encode(process.env.JWT_SECRET)); 

    // Set cookie with token
    const cookieHeader = cookies().set('token', token, {
      httpOnly: true,
     
      sameSite: 'strict',
      maxAge: 3600, 
      path: '/',
    });

  
    const { password: _, ...userData } = user.toObject(); 
    return NextResponse.json({ message: 'Sign-in successful', user: userData }, { status: 200 });
  } catch (error) {
    console.error('Signin error:', error); 
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
