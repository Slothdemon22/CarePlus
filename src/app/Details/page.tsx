"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PersonalInfo from "../../comp/PersonalInfo";
import MedicalInfo from "../../comp/MedicalInfo";
import Identity from "../../comp/Identity";
import Image from "next/image";
import { FaStethoscope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import axios from "axios";
import { useEdgeStore } from "@/lib/edgestore";
import { CombinedFormValues } from "@/types/combinedForm";

const Details = () => {
    const { edgestore } = useEdgeStore();
    const [file, setFile] = React.useState<File | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CombinedFormValues>({
        defaultValues: {
            dob: "",
            gender: "",
            // Add other default values here if needed
        },
    });

    const router = useRouter();

    const onSubmit = async (data: CombinedFormValues) => { // Use CombinedFormValues for type
        if (file === null) {
            toast.error("Please upload an image");
            return;
        }

        if (data.dob === "") {
            toast.error("Please enter your date of birth");
            return;
        }

        try {
            // Step 1: Upload the file using Edge Store
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    console.log("Upload progress:", progress);
                },
            });

            // Get the uploaded image URL
            const imageUrl = res.url; // Assuming 'res.url' contains the uploaded file's URL
            console.log("Uploaded image URL:", imageUrl);

            // Step 2: Submit the form data along with the image URL
            const response = await axios.post("/api/Details", {
                ...data,
                imageUrl, // Include the image URL
            });

            console.log(response);
            toast.success("Details uploaded successfully");

            // Redirect to the /appointment page
            router.push("/appointment");

        } catch (error: any) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between bg-gradient-to-r from-gray-100 to-blue-50 pb-20">
            {/* Form Section */}
            <div className="lg:w-[70%] p-8 min-h-[90vh] lg:min-h-screen">
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

                    <PersonalInfo register={register} errors={errors} setValue={setValue} />
                    <MedicalInfo register={register} errors={errors} />
                    <Identity register={register} errors={errors} file={file} setFile={setFile} />

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
    );
};

export default Details;
