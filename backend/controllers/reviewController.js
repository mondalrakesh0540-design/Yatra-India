import Review from '../models/Review.js';
import Destination from '../models/Destination.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

export const getReviews = async (req, res, next) => {
  try {
    const { destinationId, status } = req.query;
    let query = {};
    if (destinationId) query.destinationId = destinationId.toLowerCase();
    if (status) query.status = status;

    const reviews = await Review.find(query).sort({ createdAt: -1 });
    return sendSuccess(res, 200, { count: reviews.length, reviews });
  } catch (error) {
    next(error);
  }
};

export const addReview = async (req, res, next) => {
  try {
    const { destinationId } = req.params;
    const { userName, userEmail, rating, comment } = req.body;

    if (!rating || !comment) {
      return sendError(res, 400, 'Please provide both rating and review comment.');
    }

    const dest = await Destination.findOne({
      $or: [{ id: destinationId.toLowerCase() }, { _id: destinationId.match(/^[0-9a-fA-F]{24}$/) ? destinationId : null }]
    });

    const review = await Review.create({
      destinationId: destinationId.toLowerCase(),
      destinationName: dest ? dest.name : destinationId,
      userId: req.user ? req.user._id : null,
      userName: req.user ? req.user.name : (userName || 'Fellow Traveler'),
      userEmail: req.user ? req.user.email : (userEmail || ''),
      rating: Number(rating),
      comment: comment.trim(),
      status: 'approved'
    });

    // Optionally increment reviewsCount in destination
    if (dest) {
      dest.reviewsCount = (dest.reviewsCount || 0) + 1;
      await dest.save({ validateBeforeSave: false });
    }

    return sendSuccess(res, 201, { review }, 'Review posted successfully.');
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return sendError(res, 404, 'Review not found.');
    return sendSuccess(res, 200, { id: req.params.id }, 'Review deleted successfully.');
  } catch (error) {
    next(error);
  }
};
