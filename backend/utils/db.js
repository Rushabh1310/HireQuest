import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;