import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
