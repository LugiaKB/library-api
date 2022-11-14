import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/library");
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB");
        throw error;
    }
};

export default connectDB;
