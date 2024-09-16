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

const SignUp = () => {
    return (
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
                            <form className="space-y-6">
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
                                        className="w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
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
                                        className="w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
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
                                        className="w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="confirm-password"
                                        className="block mb-2 text-lg font-medium text-gray-700"
                                    >
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="w-full text-lg py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className="w-full mt-6 py-3 text-lg font-bold bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 transition ease-in-out">
                                Sign Up
                            </Button>
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
    );
};

export default SignUp;
