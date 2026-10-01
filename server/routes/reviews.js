import express from 'express';
import { Review } from '../models/Review.js';
import { optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/reviews/:destinationId
// @desc    Get reviews for a destination
router.get('/:destinationId', async (req, res) => {
  try {
    const reviews = await Review.find({ destinationId: req.params.destinationId }).sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error fetching reviews'
    });
  }
});

// @route   POST /api/reviews/:destinationId
// @desc    Create a new community destination review
router.post('/:destinationId', optionalAuth, async (req, res) => {
  try {
    const { userName, userEmail, rating, comment } = req.body;

    if (!comment || !comment.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Review comment cannot be empty'
      });
    }

    const review = await Review.create({
      destinationId: req.params.destinationId,
      userId: req.user ? req.user._id.toString() : null,
      userName: userName || (req.user ? req.user.name : 'Fellow Traveler'),
      userEmail: userEmail || (req.user ? req.user.email : null),
      rating: Number(rating) || 5,
      comment: comment.trim()
    });

    return res.status(201).json({
      success: true,
      review
    });
  } catch (error) {
    console.error('Error adding review:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error submitting review'
    });
  }
});

export default router;
