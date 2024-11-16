import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "user",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
