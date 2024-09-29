import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FileUpload } from '@/components/ui/file-upload';
import { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form';

// Define a type for props
interface IdentityProps {
  register: UseFormRegister<any>; // Use the actual form data type if known
  errors: FieldErrors; // Use FieldErrors type from react-hook-form
  setFile: (file: File | null) => void;
  file: File | null;
}

const Identity: React.FC<IdentityProps> = ({ register, errors, setFile, file }) => {
  
  const handleFileChange = (file: File | null) => {
    setFile(file);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-left px-2 mt-12">Identification</h1>

      {/* ID Number */}
      <div className="relative w-full mt-6">
        <Label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
          ID Number
        </Label>
        <Input
          id="idNumber"
          {...register('idNumber', { required: 'ID number is required' })}
          placeholder="Enter your ID number"
          className="w-full border rounded-md"
        />
        <div className="min-h-[24px] mt-1">
          {errors.idNumber && (
            <p className="text-red-500 text-sm">
              {(errors.idNumber as FieldError).message}
            </p>
          )}
        </div>
      </div>

      {/* Document Upload */}
      <div className="relative w-full mt-6">
        <Label className="block text-sm font-medium text-gray-700">
          Upload Document
        </Label>
        <div className="mt-2">
          <FileUpload 
            onChange={handleFileChange} // Handle file change in local state
          />
        </div>
        <div className="min-h-[24px] mt-1">
          {file === null && <p className="text-red-500 text-sm">File upload is required.</p>}
        </div>
      </div>

      {/* Consent */}
      <div className="relative w-full mt-6">
        <Label className="block text-sm font-medium text-gray-700">
          Consent
        </Label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="otherConsent"
            {...register('otherConsent', { required: 'You must agree to the terms.' })}
            className="mr-2"
          />
          <Label htmlFor="otherConsent" className="text-sm text-gray-700">I agree to the additional terms and conditions.</Label>
        </div>
        <div className="min-h-[24px] mt-1">
          {errors.otherConsent && (
            <p className="text-red-500 text-sm">
              {(errors.otherConsent as FieldError).message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Identity;
