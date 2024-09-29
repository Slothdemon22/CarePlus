import mongoose, { Schema, Document } from 'mongoose';

// Define the TypeScript interface for the Details document
interface IDetails extends Document {
  firstName: string;
  phoneNo: string;
  dob: Date | null;
  address: string;
  gender: 'male' | 'female' | 'other';
  occupation: string;
  insuranceProvider: string;
  insurancePolicy: string;
  allergies?: string;
  medications?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  
  idNumber: string;
  documentUpload: string | null; // File path or URL

  User: Schema.Types.ObjectId;
}

// Define the Mongoose schema
const DetailsSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: false, // Nullable, so it can be missing or null
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  insuranceProvider: {
    type: String,
    required: true,
  },
  insurancePolicy: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    required: false,
    default: "", // Optional field
  },
  medications: {
    type: String,
    required: false,
    default: "",// Optional field
  },
  familyMedicalHistory: {
    type: String,
    required: false,
    default: "",// Optional field
  },
  pastMedicalHistory: {
    type: String,
    required: false,
    default: "",// Optional field
  },
 
  idNumber: {
    type: String,
    required: true,
  },
  documentUpload: {
    type: String,
    required: false, // Optional field, usually stores file path or URL
  },

  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
},{ timestamps: true,});

// Create or retrieve the model
const Details = mongoose.models.Details || mongoose.model<IDetails>('Details', DetailsSchema);

export default Details;
