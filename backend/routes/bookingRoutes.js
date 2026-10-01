import express from 'express';
import {
  createBooking,
  getBookings,
  getBookingByPnr,
  cancelBooking
} from '../controllers/bookingController.js';
import { optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', optionalAuth, createBooking);
router.get('/', optionalAuth, getBookings);
router.get('/:pnr', getBookingByPnr);
router.delete('/:pnr', optionalAuth, cancelBooking);

export default router;
