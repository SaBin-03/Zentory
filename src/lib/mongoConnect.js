import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOURI}/products`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
