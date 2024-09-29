import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import dbConnect from "@/lib/dbConnect"; // Ensure this path is correct
import User from "@/app/api/schema/user"; // Ensure this path is correct

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set("Access-Control-Allow-Origin", "https://main.d1qe4cj838e38d.amplifyapp.com");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }

  const token = req.cookies.get("token") as any;
  if (!token) {
    // If no token is present, redirect to the home page
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // Verify the token and extract the payload
    const { payload } = await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET));
    //console.log("Decoded Payload:", payload);

    // Check if the current route requires `isComplete` check
    if (pathname === "/appointment") {
     // console.log(payload.isComplete, "h");
      if (!payload.isComplete) {
        // If `isComplete` is false or not present, redirect to `/Details`
        return NextResponse.redirect(new URL("/Details", req.url));
      }
    }

    // Check if the current route is the dashboard and verify the user's email
    if (pathname === "/Dashboard") {
      if (payload.email !== "www.basilslothdemon@gmail.com") {
        // Redirect to home if the email doesn't match the admin's email
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

  } catch (error) {
    console.error("JWT verification failed:", error);
    // If verification fails, redirect to the home page
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res; // Proceed if no redirects are triggered
}

export const config = {
  matcher: ["/Details", "/", "/appointment", "/Dashboard"],
};
