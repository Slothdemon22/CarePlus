import mongoose, { Schema, Document } from 'mongoose';

interface IAppointmentDetails extends Document {
  doctor: string;
  appointmentReason: string;
  comments: string;
  dateTime: Date;
  User: Schema.Types.ObjectId;
  userName: string; // New field for user's name
  status: "pending" | "accepted" | "rejected";
}

const AppointmentDetailsSchema: Schema = new Schema({
  doctor: {
    type: String,
    required: true,
  },
  appointmentReason: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: false, // Optional
  },
  dateTime: {
    type: Date,
    required: true,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userName: { // New field for user's name
    type: String,
    required: true, // This should be required to ensure it's always provided
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending', // This will be used if no status is provided
  },
}, { timestamps: true });

// Check if the model already exists, otherwise create it
const AppointmentDetails = mongoose.models.AppointmentDetails || mongoose.model<IAppointmentDetails>('AppointmentDetails', AppointmentDetailsSchema);

export default AppointmentDetails;
