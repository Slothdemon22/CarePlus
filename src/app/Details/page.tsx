"use client";
import React from "react";
import PersonalInfo from "../comp/PersonalInfo";
import MedicalInfo from "../comp/MedicalInfo";
import Identity from "../comp/Identity";
import Image from "next/image";
import { FaStethoscope } from "react-icons/fa";
import { useForm, FieldValues, FieldErrors } from "react-hook-form"; // Import correct types
import { Button } from "@/components/ui/button"; // Assuming this is a custom button component
import { format } from "date-fns";
const Details = () => {
    // Destructure useForm without specifying the types explicitly (useForm infers the types)
    const { register, handleSubmit,watch,setValue, formState: { errors } } = useForm();

    const onSubmit = (data: FieldValues) => {
        data.dob = format(new Date(data.dob), "yyyy-MM-dd");
        console.log("Form Data:", data);
    };

    return (
        <>
            <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-gray-100 to-blue-50 pb-20">
                {/* Form Section */}
                <div className="w-1/2 lg:w-[70%] p-8 min-h-[90vh] lg:min-h-screen">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Form Header */}
                        <h1 className="text-3xl text-left flex items-center gap-2 mx-0">
                            <FaStethoscope />
                            CarePlus
                        </h1>
                        <h1 className="text-3xl text-left mt-10 px-2">Welcome 👋</h1>
                        <p className="text-xl text-left px-2 mt-3 font-gilroy">
                            Let us know more about you
                        </p>

                        {/* Personal Information Section */}
                        <h1 className="text-3xl text-left px-2 mt-12">Personal Information</h1>

                        {/* Render form components */}
                        <PersonalInfo register={register} errors={errors} setValue={setValue} />
                       
                        <MedicalInfo register={register} errors={errors} />
                        <Identity register={register} errors={errors} />
                       

                        {/* Submit Button */}
                        <div className="px-2">
                            <Button type="submit" className="w-full mt-4">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Image Section */}
                <div className="sticky top-16 right-0 h-auto hidden lg:block">
                    <Image
                        src="/side1.png"
                        alt="Side image"
                        width={500}
                        height={500}
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default Details;
