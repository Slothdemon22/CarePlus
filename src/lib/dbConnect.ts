import mongoose from 'mongoose';



const dbConnect = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("Please define the MONGO_URI environment variable inside .env");
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error; // Rethrow error to handle it in calling function
    }
};

export default dbConnect;
