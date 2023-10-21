import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "food_delivery",
    });

    isConnected = true;
    console.log("Connection to MongoDB successfully installed");
  } catch (error) {
    console.log(error);
  }
};
