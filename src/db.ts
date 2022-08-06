import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
}