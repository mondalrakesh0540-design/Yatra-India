import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    destinationId: {
      type: String,
      required: [true, 'Destination ID is required'],
      trim: true
    },
    destinationName: {
      type: String,
      default: ''
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    userName: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true
    },
    userEmail: {
      type: String,
      lowercase: true,
      trim: true
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required between 1 and 5'],
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: [true, 'Review comment is required'],
      trim: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters']
    },
    status: {
      type: String,
      enum: ['approved', 'pending', 'flagged'],
      default: 'approved'
    }
  },
  {
    timestamps: true
  }
);

export const Review = mongoose.model('Review', reviewSchema);
export default Review;
