import express from 'express';
import { Booking } from '../models/Booking.js';
import { optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create a new travel reservation (Flight, Train, Bus)
router.post('/', optionalAuth, async (req, res) => {
  try {
    const {
      type,
      passengerName,
      passengerAge,
      passengerGender,
      passengerEmail,
      passengerPhone,
      fromCity,
      toCity,
      departureDate,
      itinerary,
      fareDetails,
      couponCode,
      pnr: clientPnr
    } = req.body;

    const pnr = clientPnr || `YTR${Math.floor(10000000 + Math.random() * 90000000)}`;

    const booking = await Booking.create({
      pnr,
      userId: req.user ? req.user._id.toString() : (req.body.userId || null),
      type: type || 'flights',
      passengerName: passengerName || 'Traveler',
      passengerAge: passengerAge || '28',
      passengerGender: passengerGender || 'Male',
      passengerEmail: passengerEmail || 'traveler@yatraindia.com',
      passengerPhone: passengerPhone || '+91 98765 43210',
      fromCity: fromCity || 'Delhi',
      toCity: toCity || 'Mumbai',
      departureDate: departureDate || new Date().toISOString().split('T')[0],
      itinerary: itinerary || {},
      fareDetails: fareDetails || { totalFare: 0 },
      couponCode: couponCode || null,
      status: 'CONFIRMED'
    });

    return res.status(201).json({
      success: true,
      booking
    });
  } catch (error) {
    console.error('Error creating booking in MongoDB:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error creating booking'
    });
  }
});

// @route   GET /api/bookings
// @desc    Get user bookings
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { email, userId } = req.query;
    const query = {};

    if (req.user) {
      query.$or = [{ userId: req.user._id.toString() }, { passengerEmail: req.user.email }];
    } else if (userId) {
      query.userId = userId;
    } else if (email) {
      query.passengerEmail = email.toLowerCase();
    }

    const bookings = await Booking.find(query).sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error fetching bookings'
    });
  }
});

// @route   GET /api/bookings/:pnr
// @desc    Get single booking by PNR
router.get('/:pnr', async (req, res) => {
  try {
    const booking = await Booking.findOne({ pnr: req.params.pnr.toUpperCase() });
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: `Booking with PNR ${req.params.pnr} not found`
      });
    }
    return res.json({
      success: true,
      booking
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Error looking up PNR'
    });
  }
});

// @route   DELETE /api/bookings/:pnr
// @desc    Cancel booking
router.delete('/:pnr', optionalAuth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { pnr: req.params.pnr.toUpperCase() },
      { status: 'CANCELLED' },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    return res.json({
      success: true,
      message: 'Booking cancelled successfully',
      booking
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Error cancelling booking'
    });
  }
});

export default router;
