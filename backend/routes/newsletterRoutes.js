import express from 'express';
import Newsletter from '../models/Newsletter.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return sendError(res, 400, 'Please provide an email address.');
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await Newsletter.findOne({ email: normalizedEmail });
    if (existing) {
      return sendSuccess(res, 200, { email: normalizedEmail }, 'You are already subscribed to Yatra India bulletins!');
    }

    await Newsletter.create({ email: normalizedEmail });
    return sendSuccess(res, 201, { email: normalizedEmail }, 'Thank you for subscribing to Yatra India travel updates!');
  } catch (error) {
    next(error);
  }
});

router.get('/', protect, authorizeRoles('admin', 'superadmin'), async (req, res, next) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, { count: subscribers.length, subscribers });
  } catch (error) {
    next(error);
  }
});

export default router;
