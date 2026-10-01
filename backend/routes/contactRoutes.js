import express from 'express';
import Contact from '../models/Contact.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

const router = express.Router();

// Public: Submit inquiry
router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return sendError(res, 400, 'Please provide name, email, and message.');
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message: message.trim()
    });

    return sendSuccess(res, 201, { contact }, 'Your message has been received! Our travel team will respond within 24 hours.');
  } catch (error) {
    next(error);
  }
});

// Admin: List all inquiries
router.get('/', protect, authorizeRoles('admin', 'superadmin'), async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, { count: contacts.length, contacts });
  } catch (error) {
    next(error);
  }
});

export default router;
