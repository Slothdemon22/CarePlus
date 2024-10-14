"use client";
import React from "react";

import { Input } from "@/components/ui/input";
import { IoPersonOutline, IoCall, IoCalendar } from "react-icons/io5";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaAddressCard, FaBriefcase } from "react-icons/fa";
import { format } from "date-fns";

// Define the form data interface


// Define the component props with correct types

const PersonalInfo= ({ register, errors, setValue }:any) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setValue("dob", date, { shouldValidate: true });
    } else {
      setValue("dob", "");
    }
  };

  return (
    <div className="relative w-full space-y-4">
      {/* First Name */}
      <div className="relative">
        <IoPersonOutline className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
        <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </Label>
        <Input
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
          placeholder="Enter your first name"
          className="pl-12 pr-3 w-full border rounded-md"
        />
        <div className="min-h-[24px] mt-1">
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex md:flex-row gap-2 flex-col">
        <div className="relative w-full">
          <IoCall className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
          <Label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
            Phone No
          </Label>
          <Input
            id="phoneNo"
            {...register("phoneNo", { required: "Phone number is required" })}
            placeholder="Enter your phone number"
            className="pl-12 pr-3 w-full border rounded-md"
          />
          <div className="min-h-[24px] mt-1">
            {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="relative w-full">
          <Label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full border rounded-md px-3 py-2 text-left flex items-center justify-between ${errors.dob ? "border-red-500" : ""}`}
              >
                <span>{selectedDate ? format(selectedDate, "MMM d, yyyy") : "Select Date"}</span>
                <IoCalendar className="text-gray-500 text-lg sm:text-xl" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
          <div className="min-h-[24px] mt-1">
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="relative md:w-1/2 w-full">
        <FaAddressCard className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
        <Label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</Label>
        <Input
          id="address"
          {...register("address", { required: "Address is required" })}
          placeholder="Enter your address"
          className="pl-12 pr-3 w-full border rounded-md"
        />
        <div className="min-h-[24px] mt-1">
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>
      </div>

      {/* Gender */}
      <div className="relative md:w-1/2 w-full space-x-4">
        <Label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gender</Label>
        <RadioGroup defaultValue="female">
          <div className="flex gap-4">
            <RadioGroupItem value="female" id="gender-female" {...register("gender")} />
            <Label htmlFor="gender-female">Female</Label>
            <RadioGroupItem value="male" id="gender-male" {...register("gender")} />
            <Label htmlFor="gender-male">Male</Label>
            <RadioGroupItem value="other" id="gender-other" {...register("gender")} />
            <Label htmlFor="gender-other">Other</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Occupation */}
      <div className="relative w-full">
        <FaBriefcase className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
        <Label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</Label>
        <Input
          id="occupation"
          {...register("occupation", { required: "Occupation is required" })}
          placeholder="Enter your occupation"
          className="pl-12 pr-3 w-full border rounded-md"
        />
        <div className="min-h-[24px] mt-1">
          {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
