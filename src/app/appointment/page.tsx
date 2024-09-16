"use client";
import React, { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { Check, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import DateTimePicker from "@/app/comp/DateTimePicker"; // Adjust the import path accordingly
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

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
  {
    value: "dr-jones",
    label: "Dr. Jones",
    image: "/placeholder.svg?height=40&width=40",
  },
];

export default function DoctorSelect() {
  const [value, setValue] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [comments, setComments] = useState("");

  const selectedDoctor = doctors.find((doctor) => doctor.value === value);

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full h-auto gap-6">
      {/* Main content */}
      <div className="w-full lg:w-3/4 p-4">
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
        <div className="mt-6 w-full max-w-5xl lg:max-w-6xl"> {/* Adjusted width for larger screens */}
          <Select onValueChange={setValue}>
            <SelectTrigger
              className={cn(
                "w-full flex justify-between items-center",
                "border border-gray-300 rounded-md p-3",
                "hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
                "transition-all duration-150 ease-in-out bg-white"
              )}
            >
              {value ? (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={selectedDoctor?.image}
                      alt={selectedDoctor?.label}
                    />
                    <AvatarFallback>{selectedDoctor?.label[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-700">
                    {selectedDoctor?.label}
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
        </div>

        {/* Expected Date and Time Picker */}
        <div className="mt-6 w-full max-w-5xl lg:max-w-6xl"> {/* Adjusted width for larger screens */}
          <DateTimePicker />
        </div>

        {/* Appointment Reason and Comments */}
              <div className="w-fill flex gap-4 lg:flex-row flex-col">
              <div className="mt-6 w-full max-w-5xl lg:max-w-6xl"> {/* Adjusted width for larger screens */}
          <label className="block text-gray-700 text-lg mb-2">
            Appointment Reason
          </label>
          <Textarea
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Reason for appointment"
          />
        </div>

        <div className="mt-6 w-full max-w-5xl lg:max-w-6xl"> {/* Adjusted width for larger screens */}
          <label className="block text-gray-700 text-lg mb-2">Comments</label>
          <Textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Additional comments"
          />
        </div>
            </div>
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
