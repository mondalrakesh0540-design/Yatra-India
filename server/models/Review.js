import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  destinationId: {
    type: String,
    required: true,
    index: true
  },
  userId: {
    type: String
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    default: 'Traveler'
  },
  userEmail: {
    type: String,
    lowercase: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Review = mongoose.model('Review', reviewSchema);
