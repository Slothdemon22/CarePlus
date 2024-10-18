import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Set CORS headers (for preflight and actual requests)
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "https://main.d1qe4cj838e38d.amplifyapp.com");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }

  // Check for the presence of the token in cookies
  const token = req.cookies.get("token")?.value;
  if (!token) {
    // Redirect to the home page if no token is found
    return NextResponse.redirect(new URL("/signin", req.url)); 
  }

  try {
    // Verify the token
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

    // Check if the current route is "/appointment" and if any user-specific conditions should apply
    if (pathname === "/appointment") {
      // Add any custom logic or checks here, if needed
      // For example: check if the user's data is complete and redirect to "/Details"
      console.log(payload);
      if(!payload.isComplete) {
        return NextResponse.redirect(new URL("/Details", req.url));
      }
      return res; 
    }

    // If route is "/Dashboard", check if the email matches the admin's email
    if (pathname === "/Dashboard") {
      if (payload.email !== "www.basilslothdemon@gmail.com") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

  } catch (error) {
    // If JWT verification fails, redirect to home
    console.error("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Return the response if no redirects were triggered
  return res;
}

export const config = {
  matcher: ["/Details", "/appointment", "/Dashboard"],
};
