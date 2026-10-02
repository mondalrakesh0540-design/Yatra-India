import mongoose from 'mongoose';

/**
 * Global cache for MongoDB connection across Vercel serverless function invocations
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yatra_india';

  // Return existing active connection if already established
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(uri, opts).then((conn) => {
      console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
      return conn;
    }).catch((error) => {
      console.error(`[MongoDB] Connection error: ${error.message}`);
      console.warn(`[MongoDB] Ensure MONGODB_URI is properly configured.`);
      cached.promise = null;
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
};

export default connectDB;
