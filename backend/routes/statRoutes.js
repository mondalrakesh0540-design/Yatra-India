import express from 'express';
import { getOverviewStats } from '../controllers/statController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

import Destination from '../models/Destination.js';
import State from '../models/State.js';
import Hotel from '../models/Hotel.js';
import Review from '../models/Review.js';
import Booking from '../models/Booking.js';
import User from '../models/User.js';

router.get('/', protect, authorizeRoles('admin', 'superadmin'), getOverviewStats);

// Database backup export (JSON)
router.get('/backup', protect, authorizeRoles('admin', 'superadmin'), async (req, res, next) => {
  try {
    const [destinations, states, hotels, reviews, bookings, users] = await Promise.all([
      Destination.find(),
      State.find(),
      Hotel.find(),
      Review.find(),
      Booking.find(),
      User.find()
    ]);

    const backupData = {
      platform: 'Yatra India',
      timestamp: new Date().toISOString(),
      counts: {
        destinations: destinations.length,
        states: states.length,
        hotels: hotels.length,
        reviews: reviews.length,
        bookings: bookings.length,
        users: users.length
      },
      data: {
        destinations,
        states,
        hotels,
        reviews,
        bookings,
        users
      }
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="yatra_india_backup_${Date.now()}.json"`);
    return res.status(200).send(JSON.stringify(backupData, null, 2));
  } catch (error) {
    next(error);
  }
});

export default router;
