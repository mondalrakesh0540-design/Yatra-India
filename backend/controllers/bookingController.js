import Booking from '../models/Booking.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

export const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    return sendSuccess(res, 201, { booking }, 'Booking confirmed successfully.');
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const { userId, email } = req.query;
    let query = {};

    // If regular user, only view own bookings. Admins can view all.
    if (req.user && req.user.role === 'user') {
      query.$or = [{ userId: req.user._id.toString() }, { passengerEmail: req.user.email }];
    } else if (userId || email) {
      query.$or = [{ userId }, { passengerEmail: email }];
    }

    const bookings = await Booking.find(query).sort({ createdAt: -1 });
    return sendSuccess(res, 200, { count: bookings.length, bookings });
  } catch (error) {
    next(error);
  }
};

export const getBookingByPnr = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({ pnr: req.params.pnr.toUpperCase() });
    if (!booking) {
      return sendError(res, 404, `No booking found with PNR ${req.params.pnr.toUpperCase()}`);
    }
    return sendSuccess(res, 200, { booking });
  } catch (error) {
    next(error);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({ pnr: req.params.pnr.toUpperCase() });
    if (!booking) {
      return sendError(res, 404, 'Booking not found.');
    }

    // Check ownership or admin
    if (req.user && req.user.role === 'user' && booking.passengerEmail !== req.user.email && booking.userId !== req.user._id.toString()) {
      return sendError(res, 403, 'Unauthorized to cancel this booking.');
    }

    booking.status = 'CANCELLED';
    await booking.save();

    return sendSuccess(res, 200, { booking }, 'Booking cancelled successfully.');
  } catch (error) {
    next(error);
  }
};
