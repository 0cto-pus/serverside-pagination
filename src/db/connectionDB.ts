import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO URI must be defined');
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
