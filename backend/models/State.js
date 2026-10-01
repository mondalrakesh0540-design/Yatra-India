import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    name: {
      type: String,
      required: [true, 'Please provide state name'],
      trim: true
    },
    capital: {
      type: String,
      default: ''
    },
    region: {
      type: String,
      enum: ['North', 'South', 'East', 'West', 'Central', 'North-East', 'Islands'],
      default: 'North'
    },
    isUnionTerritory: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    heroImage: {
      type: String,
      default: ''
    },
    bestTimeToVisit: {
      type: String,
      default: 'October to March'
    },
    touristSpotsCount: {
      type: Number,
      default: 0
    },
    popularSpots: {
      type: [String],
      default: []
    },
    festivals: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const State = mongoose.model('State', stateSchema);
export default State;
