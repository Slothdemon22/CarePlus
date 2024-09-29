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
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


// Define the Zod schema for form validation
const signUpSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
        .string()
        .min(8, "Confirm password must be at least 8 characters long")
       
});

// Define types for form data
type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: SignUpFormData) => {
        setLoading(true);
        try {
            console.log(data);
            if (data.password !== data.confirmPassword) {
                toast.error("Passwords do not match. Please try again.");
                return;
            }

            const res = await axios.post("/api/signup", data);
            console.log(res);
            toast.success("Sign-up successful!");
           

           
        } catch (error) {
            toast.error("Sign-up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="flex h-screen max-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
                {/* Form Section */}
                <section className="h-full w-full flex items-center justify-center p-8">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-2xl border border-gray-200 p-8 backdrop-filter backdrop-blur-md bg-opacity-90">
                        <Card className="border-none shadow-none">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold text-gray-800">
                                    Sign Up
                                </CardTitle>
                                <CardDescription className="text-gray-600 mt-2">
                                    Create a new account to get started.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    className="space-y-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <Label
                                            htmlFor="name"
                                            className="block mb-2 text-lg font-medium text-gray-700"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            {...register("name")}
                                            onBlur={() => trigger("name")}
                                            className={`w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="email"
                                            className="block mb-2 text-lg font-medium text-gray-700"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            {...register("email")}
                                            onBlur={() => trigger("email")}
                                            className={`w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="password"
                                            className="block mb-2 text-lg font-medium text-gray-700"
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Create a password"
                                            {...register("password")}
                                            onBlur={() => trigger("password")}
                                            className={`w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="block mb-2 text-lg font-medium text-gray-700"
                                        >
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your password"
                                            {...register("confirmPassword")}
                                            onBlur={() => trigger("confirmPassword")}
                                            className={`w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out ${
                                                errors.confirmPassword
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full mt-6 py-3 text-lg font-bold bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 transition ease-in-out ${
                                            loading
                                                ? "opacity-50 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        {loading ? "Signing Up..." : "Sign Up"}
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <div className="text-center mt-4">
                                    <p className="text-gray-600">
                                        Already have an account?{" "}
                                        <Link
                                            href="/signin"
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* Image Section */}
                <Image
                    src="/login.png"
                    alt="Signup Illustration"
                    width={1000}
                    height={1000}
                    className="side-img w-full h-full hidden lg:block object-cover"
                />
            </div>
        </>
    );
};

export default SignUp;
