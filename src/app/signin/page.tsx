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


const SignIn = () => {
    return (
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
                            <form className="space-y-4 lg:space-y-6">
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
                                        className="w-full text-base lg:text-lg py-2 lg:py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
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
                                        className="w-full text-base lg:text-lg py-2 lg:py-3 px-4 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                                    />
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className="w-full mt-4 lg:mt-6 py-2 lg:py-3 text-base lg:text-lg font-bold bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 transition ease-in-out">
                                Sign In
                            </Button>
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
    );
};

export default SignIn;
