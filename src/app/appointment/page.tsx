"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaStethoscope } from "react-icons/fa";
import { Check, ChevronDown, Loader } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import DateTimePicker from "@/comp/DateTimePicker"; // Adjust the import path accordingly
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import axios from "axios";
// Define the Zod schema for validation
const appointmentSchema = z.object({
  doctor: z.string().nonempty("Please select a doctor."),
  appointmentReason: z.string().nonempty("Please enter the reason for the appointment."),
  comments: z.string().optional(),
});

const doctors = [
  {
    value: "dr-smith",
    label: "Dr. Smith",
    image: "/d2.jpg",
  },
  {
    value: "dr-johnson",
    label: "Dr. Johnson",
    image: "/d4.jpg",
  },
  {
    value: "dr-williams",
    label: "Dr. Williams",
    image: "/d3.jpg",
  },
  {
    value: "dr-brown",
    label: "Dr. Brown",
    image: "/d5.jpeg",
  },
];

type Doctor = typeof doctors[number]; // Type for the doctors array

export default function DoctorSelect() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
  });

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | undefined>();
  const [dob, setDob] = useState<Date | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    if (!dob) {
      toast.error("Please enter Appointment time");
      return;
    }

    // Set loading state to true when form submission starts
    setLoading(true);

    try {
      console.log(dob);
      console.log("Form submitted:", data);

      // Simulate API call or form submission
      const res = await axios.post("/api/appointment", { data, dateTime: dob });

      console.log(res);

      // Handle form submission logic here (e.g., send data to API)
      toast.success("Appointment submitted successfully!");

      // Reset form or handle any further logic
    } catch (error) {
      toast.error("Failed to submit appointment.");
    } finally {
      // Set loading state back to false when submission ends
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full h-auto gap-6">
      {/* Main content */}
      <div className="w-full lg:w-2/3 p-4">
        {/* Heading and Introduction */}
        <h1 className="text-3xl text-left flex items-center gap-2 mx-0">
          <FaStethoscope />
          CarePlus
        </h1>
        <h1 className="text-3xl text-left mt-10 px-2">Welcome 👋</h1>
        <p className="text-xl text-left px-2 mt-3 font-gilroy">
          Let us help you schedule your appointment
        </p>

        {/* Appointment Details Section */}
        <h1 className="text-3xl text-left px-2 mt-12">Appointment Details</h1>

        {/* Doctor Selection */}
        <div className="mt-6 w-full">
          <Select
            onValueChange={(value) => {
              const doctor = doctors.find((doc) => doc.value === value);
              setValue("doctor", value);
              setSelectedDoctor(doctor);
            }}
            disabled={loading} // Disable select if loading
          >
            <SelectTrigger
              className={cn(
                "w-full flex justify-between items-center",
                "border border-gray-300 rounded-md p-3",
                "hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
                "transition-all duration-150 ease-in-out bg-white"
              )}
            >
              {selectedDoctor ? (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={selectedDoctor.image}
                      alt={selectedDoctor.label}
                    />
                    <AvatarFallback>{selectedDoctor.label[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-700">
                    {selectedDoctor.label}
                  </span>
                </div>
              ) : (
                <span className="text-gray-400">Select doctor...</span>
              )}
              <ChevronDown className="ml-auto h-4 w-4 opacity-50 shrink-0" />
            </SelectTrigger>
            <SelectContent className="rounded-md shadow-lg border border-gray-200 mt-1 bg-white">
              {doctors.map((doctor) => (
                <SelectItem
                  key={doctor.value}
                  value={doctor.value}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md",
                    "hover:bg-blue-50 transition-colors duration-150"
                  )}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={doctor.image} alt={doctor.label} />
                    <AvatarFallback>{doctor.label[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-700">{doctor.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.doctor?.message && (
            <p className="text-red-500 mt-2 min-h-[1.25rem]">
              {errors.doctor.message as string}
            </p>
          )}
        </div>

        {/* Expected Date and Time Picker */}
        <div className="mt-6 w-full">
          <DateTimePicker onDateChange={setDob}  /> {/* Pass loading prop */}
        </div>

        {/* Appointment Reason and Comments */}
        <div className="w-fill flex gap-4 lg:flex-row flex-col">
          <div className="mt-6 w-full max-w-5xl lg:max-w-6xl">
            <label className="block text-gray-700 text-lg mb-2">
              Appointment Reason
            </label>
            <Textarea
              {...register("appointmentReason")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Reason for appointment"
              disabled={loading} // Disable textarea if loading
            />
            {errors.appointmentReason?.message && (
              <p className="text-red-500 mt-2 min-h-[1.25rem]">
                {errors.appointmentReason.message as string}
              </p>
            )}
          </div>

          <div className="mt-6 w-full max-w-5xl lg:max-w-6xl">
            <label className="block text-gray-700 text-lg mb-2">Comments</label>
            <Textarea
              {...register("comments")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Additional comments"
              disabled={loading} // Disable textarea if loading
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit(onSubmit)}
          className={cn(
            "mt-6 w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition-colors duration-150",
            loading && "opacity-50 cursor-not-allowed" // Add visual feedback when loading
          )}
          disabled={loading} // Disable button if loading
        >
          {loading ? <Loader className="animate-spin" /> : "Submit Appointment"}
        </button>
      </div>

      {/* Side Image */}
      <div className="w-full lg:w-1/4 sticky top-16 right-0 h-auto hidden lg:block">
        <Image
          src="/side1.png" // Adjust the image path as necessary
          alt="Appointment illustration"
          width={500}
          height={500}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
