import React from 'react';
import { FaPassport, FaIdCard, FaIdBadge } from 'react-icons/fa';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FileUpload } from '@/components/ui/file-upload';

const Identity = ({ register, errors }: any) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-left px-2 mt-12">Identification</h1>

      {/* Identification Type */}
      <div className="relative w-full mt-6">
        <Label htmlFor="idType" className="block text-sm font-medium text-gray-700">
          Identification Type
        </Label>
        <Select>
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select an identification type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="passport" className="flex items-center p-2">
              <FaPassport className="text-gray-500 mr-3 text-xl" />
              Passport
            </SelectItem>
            <SelectItem value="drivingLicense" className="flex items-center p-2">
              <FaIdCard className="text-gray-500 mr-3 text-xl" />
              Driver's License
            </SelectItem>
            <SelectItem value="cnicNumber" className="flex items-center p-2">
              <FaIdBadge className="text-gray-500 mr-3 text-xl" />
              CNIC Number
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="min-h-[24px] mt-1">
          {errors.idType && <p className="text-red-500 text-sm">{errors.idType.message}</p>}
        </div>
      </div>

      {/* ID Number */}
      <div className="relative w-full mt-6">
        <Label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
          ID Number
        </Label>
        <Input
          id="idNumber"
          {...register('idNumber', { required: 'ID number is required' })}
          placeholder="Enter your ID number"
          className="w-full border rounded-md "
        />
        <div className="min-h-[24px] mt-1">
          {errors.idNumber && <p className="text-red-500 text-sm">{errors.idNumber.message}</p>}
        </div>
      </div>

      {/* Document Upload */}
      <div className="relative w-full mt-6">
        <Label className="block text-sm font-medium text-gray-700">
          Upload Document
        </Label>
        <div className="mt-2">
          <FileUpload onChange={(file) => console.log(file)} />
        </div>
        <div className="min-h-[24px] mt-1">
          {errors.documentUpload && <p className="text-red-500 text-sm">{errors.documentUpload.message}</p>}
        </div>
      </div>

      {/* Consent and Medical Information */}
      <div className="relative w-full mt-6">
        <Label className="block text-sm font-medium text-gray-700">
          Consent and Medical Information
        </Label>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              {...register('consent', { required: 'Consent is required' })}
              className="mr-2"
            />
            <Label htmlFor="consent" className="text-sm text-gray-700">I consent to the processing of my personal data.</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="medicalHistory"
              {...register('medicalHistory', { required: 'Medical history is required' })}
              className="mr-2"
            />
            <Label htmlFor="medicalHistory" className="text-sm text-gray-700">I provide my medical history information.</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="otherConsent"
              {...register('otherConsent', { required: 'Other consent is required' })}
              className="mr-2"
            />
            <Label htmlFor="otherConsent" className="text-sm text-gray-700">I agree to the additional terms and conditions.</Label>
          </div>
          <div className="min-h-[24px] mt-1">
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
            {errors.medicalHistory && <p className="text-red-500 text-sm">{errors.medicalHistory.message}</p>}
            {errors.otherConsent && <p className="text-red-500 text-sm">{errors.otherConsent.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
