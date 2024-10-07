import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURL, {
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
