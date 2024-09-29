"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation"; // Move this import to the top
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Define the Zod schema for form validation
const signInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Define types for form data
type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Move the useRouter hook here
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger, // Manually triggers validation
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = async (data: SignInFormData) => {
        setLoading(true); // Start loading
        try {
            const res = await axios.post("/api/signin", data);
            console.log(res);
            toast.success("Sign-in successful!"); // Display success toast
            router.push("/"); // Redirect after successful sign-in
        } catch (error) {
            toast.error("Sign-in failed. Please try again."); // Display error toast
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="flex flex-col lg:flex-row h-screen max-h-screen bg-gradient-to-r from-gray-100 to-blue-50">
                {/* Form Section */}
                <section className="flex flex-1 items-center justify-center p-4 lg:p-8">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-2xl border border-gray-200 p-6 lg:p-8 backdrop-filter backdrop-blur-md bg-opacity-90">
                        <Card className="border-none shadow-none">
                            <CardHeader>
                                <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-800">
                                    Sign In
                                </CardTitle>
                                <CardDescription className="text-gray-600 mt-2">
                                    Access your account to continue.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    className="space-y-4 lg:space-y-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <Label
                                            htmlFor="email"
                                            className="block mb-2 text-base lg:text-lg font-medium text-gray-700"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            {...register("email")}
                                            onBlur={() => trigger("email")}
                                            className={`w-full text-base lg:text-lg py-2 lg:py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        <div className="min-h-[24px]">
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="password"
                                            className="block mb-2 text-base lg:text-lg font-medium text-gray-700"
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            {...register("password")}
                                            onBlur={() => trigger("password")}
                                            className={`w-full text-base lg:text-lg py-2 lg:py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        <div className="min-h-[24px]">
                                            {errors.password && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full mt-4 lg:mt-6 py-2 lg:py-3 text-base lg:text-lg font-bold bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 transition ease-in-out ${
                                            loading ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {loading ? "Signing In..." : "Sign In"}
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <div className="text-center mt-4">
                                    <p className="text-gray-600">
                                        Don&apos;t have an account?{" "}
                                        <Link
                                            href="/signUp"
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* Image Section */}
                <div className="flex-1 hidden lg:flex">
                    <Image
                        src="/login.png"
                        alt="Sign In Illustration"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default SignIn;
