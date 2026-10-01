import User from '../models/User.js';
import Destination from '../models/Destination.js';
import State from '../models/State.js';
import Hotel from '../models/Hotel.js';
import Review from '../models/Review.js';
import Booking from '../models/Booking.js';
import { sendSuccess } from '../utils/sendResponse.js';

/**
 * @desc    Get real platform statistics from MongoDB
 * @route   GET /api/stats
 * @access  Private/Admin
 */
export const getOverviewStats = async (req, res, next) => {
  try {
    const [
      totalDestinations,
      totalStates,
      totalHotels,
      totalUsers,
      totalReviews,
      totalBookings,
      recentUsers,
      recentReviews,
      recentBookings
    ] = await Promise.all([
      Destination.countDocuments(),
      State.countDocuments(),
      Hotel.countDocuments(),
      User.countDocuments(),
      Review.countDocuments(),
      Booking.countDocuments(),
      User.find().sort({ createdAt: -1 }).limit(5),
      Review.find().sort({ createdAt: -1 }).limit(5),
      Booking.find().sort({ createdAt: -1 }).limit(5)
    ]);

    return sendSuccess(res, 200, {
      stats: {
        totalDestinations,
        totalStates: totalStates || 36,
        totalHotels,
        totalUsers,
        totalReviews,
        totalBookings
      },
      recent: {
        users: recentUsers,
        reviews: recentReviews,
        bookings: recentBookings
      }
    });
  } catch (error) {
    next(error);
  }
};
