import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/app/api/schema/user';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { Resend } from "resend";
import EmailTemplate from '@/lib/EmailTemplate'; // Import your email template

interface SigninRequestBody {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  await dbConnect();
  const resend = new Resend("re_7Efe9VUV_MNJcunLJG7kQycruNAhgf6RU");
  try {
    const { email, password }: SigninRequestBody = await req.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    console.log(user.name);
    console.log('h', user.isComplete);

    // Generate JWT token
    const token = await new SignJWT({
      userId: user._id,
      email: user.email,
      isComplete: user.isComplete,
      isAdmin: user.isAdmin,
      username: user.name,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));
    
    console.log(token);

    // Set cookie with token
    cookies().set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });

    // Send login confirmation email using Resend
    const { data, error } = await resend.emails.send({
      from: 'noReply@tradenexusonline.com',
      to: [user.email], // Assuming user object has an email field
      subject: 'Login Confirmation',
      react: EmailTemplate({name:user.name}) // Pass the username to your template
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', data);
    }

    // Remove password from user data before returning response
  

    return NextResponse.json({ message: 'Sign-in successful'}, { status: 200 });
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
