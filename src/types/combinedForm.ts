export interface CombinedFormValues {
    firstName: string;
    phoneNo: string;
    dob: Date | string;
    address: string;
    gender: string;
    occupation: string;
    insuranceProvider: string;
    insurancePolicy: string;
    allergies?: string;
    medications?: string;
    familyMedicalHistory?: string;
    pastMedicalHistory?: string;
    idNumber: string;
    otherConsent: boolean;
  }
  