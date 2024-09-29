import React from 'react';
import {  FaUserShield, FaFileAlt, FaList, FaPills, FaClipboard } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MedicalInfo = ({ register, errors }: any) => {
  return (
    <>
      <div className='w-full'>
        <h1 className='text-3xl text-left px-2 mt-12'>Medical Information</h1>
        
        {/* Insurance Provider */}
        <div className='w-full  flex md:flex-row gap-2 flex-col'>
          <div className="relative w-full mt-6">
            <FaUserShield className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700">
              Insurance Provider
            </Label>
            <Input
              id="insuranceProvider"
              {...register("insuranceProvider", { required: "Insurance provider is required" })}
              placeholder="Enter your insurance provider"
              className="pl-12 pr-3 w-full border rounded-md"
            />
            <div className="min-h-[24px] mt-1">
              {errors.insuranceProvider && <p className="text-red-500 text-sm">{errors.insuranceProvider.message}</p>}
            </div>
          </div>

          {/* Insurance Policy Number */}
          <div className="relative w-full mt-6">
            <FaFileAlt className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="insurancePolicy" className="block text-sm font-medium text-gray-700">
              Insurance Policy Number
            </Label>
            <Input
              id="insurancePolicy"
              {...register("insurancePolicy", { required: "Insurance policy number is required" })}
              placeholder="Enter your insurance policy number"
              className="pl-12 pr-3 w-full border rounded-md"
            />
            <div className="min-h-[24px] mt-1">
              {errors.insurancePolicy && <p className="text-red-500 text-sm">{errors.insurancePolicy.message}</p>}
            </div>
          </div>
        </div>

        {/* Allergies */}
        <div className='w-full  flex md:flex-row gap-2 flex-col'>
          <div className="relative w-full mt-6">
            <FaList className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
              Allergies
            </Label>
            <Textarea
              id="allergies"
              {...register("allergies")}
              placeholder="Enter any known allergies"
              className="pl-12 pr-3 w-full border rounded-md"
              rows={3}
            />
            <div className="min-h-[24px] mt-1">
              {errors.allergies && <p className="text-red-500 text-sm">{errors.allergies.message}</p>}
            </div>
          </div>

          {/* Current Medications */}
          <div className="relative w-full mt-6">
            <FaPills className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="medications" className="block text-sm font-medium text-gray-700">
              Current Medications
            </Label>
            <Textarea
              id="medications"
              {...register("medications")}
              placeholder="Enter current medications"
              className="pl-12 pr-3 w-full border rounded-md"
              rows={3}
            />
            <div className="min-h-[24px] mt-1">
              {errors.medications && <p className="text-red-500 text-sm">{errors.medications.message}</p>}
            </div>
          </div>
        </div>

        {/* Family Medical History */}
        <div className='w-full  flex md:flex-row gap-2 flex-col'>
          <div className="relative w-full mt-6">
            <FaClipboard className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="familyMedicalHistory" className="block text-sm font-medium text-gray-700">
              Family Medical History
            </Label>
            <Textarea
              id="familyMedicalHistory"
              {...register("familyMedicalHistory")}
              placeholder="Enter family medical history"
              className="pl-12 pr-3 w-full border rounded-md"
              rows={3}
            />
            <div className="min-h-[24px] mt-1">
              {errors.familyMedicalHistory && <p className="text-red-500 text-sm">{errors.familyMedicalHistory.message}</p>}
            </div>
          </div>

          {/* Past Medical History */}
          <div className="relative w-full mt-6">
            <FaClipboard className="absolute left-3 top-[37px] transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl" />
            <Label htmlFor="pastMedicalHistory" className="block text-sm font-medium text-gray-700">
              Past Medical History
            </Label>
            <Textarea
              id="pastMedicalHistory"
              {...register("pastMedicalHistory")}
              placeholder="Enter past medical history"
              className="pl-12 pr-3 w-full border rounded-md"
              rows={3}
            />
            <div className="min-h-[24px] mt-1">
              {errors.pastMedicalHistory && <p className="text-red-500 text-sm">{errors.pastMedicalHistory.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalInfo;
