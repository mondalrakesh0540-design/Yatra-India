import app from '../backend/server.js';
import { connectDB } from '../backend/config/db.js';

/**
 * Vercel Serverless Function Handler
 * Connects to MongoDB (cached connection) and delegates to Express app.
 */
export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.error('[Vercel Serverless] MongoDB connection warning:', error.message);
  }
  return app(req, res);
}
