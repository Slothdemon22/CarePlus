import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for the user model
interface User extends Document {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isComplete: boolean;
    Details: Schema.Types.ObjectId;
    appointments: Schema.Types.ObjectId[];
}

// Define the user schema
const userSchema: Schema<User> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    Details: {
        type: Schema.Types.ObjectId,
        ref: "Details"
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]
}, { timestamps: true });


const UserModel: Model<User> = mongoose.models.User || mongoose.model<User>("User", userSchema);

export default UserModel;
