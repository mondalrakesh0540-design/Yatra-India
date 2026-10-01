import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yatra_india';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✓ MongoDB Connected Successfully: ${conn.connection.host}/${conn.connection.name}`);
    return true;
  } catch (error) {
    console.warn(`! MongoDB Connection Notice: Could not connect to ${uri}`);
    console.warn(`  Reason: ${error.message}`);
    console.warn(`  To connect to live MongoDB:`);
    console.warn(`  1. Start local MongoDB (mongod / Services) OR`);
    console.warn(`  2. Add your MongoDB Atlas connection string to server/.env (MONGODB_URI=mongodb+srv://...)`);
    console.warn(`  The Express API server is still active and handling requests.`);
    return false;
  }
};
