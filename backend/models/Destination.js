import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
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
      required: [true, 'Please provide a destination name'],
      trim: true
    },
    state: {
      type: String,
      required: [true, 'Please provide a state name'],
      trim: true
    },
    stateId: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    category: {
      type: String,
      enum: ['mountains', 'beaches', 'heritage', 'nature', 'spiritual', 'lakes', 'wildlife', 'desert', 'cities'],
      default: 'mountains'
    },
    bestTimeToVisit: {
      type: String,
      default: 'October to March'
    },
    idealMonths: {
      type: [String],
      default: ['October', 'November', 'December', 'January', 'February', 'March']
    },
    rating: {
      type: Number,
      default: 4.8,
      min: 1,
      max: 5
    },
    reviewsCount: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 2500
    },
    isPopular: {
      type: Boolean,
      default: false
    },
    isTrending: {
      type: Boolean,
      default: false
    },
    isHiddenGem: {
      type: Boolean,
      default: false
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    },
    gallery: {
      type: [String],
      default: []
    },
    shortDescription: {
      type: String,
      required: [true, 'Please provide a short description']
    },
    topAttractions: {
      type: [String],
      default: []
    },
    thingsToDo: {
      type: [String],
      default: []
    },
    foodToTry: {
      type: [String],
      default: []
    },
    weatherInfo: {
      summer: { type: String, default: '22°C - 32°C' },
      winter: { type: String, default: '8°C - 18°C' },
      monsoon: { type: String, default: 'Moderate rainfall' }
    },
    howToReach: {
      airport: { type: String, default: 'Nearest Airport' },
      railway: { type: String, default: 'Nearest Railway Station' },
      road: { type: String, default: 'Well-connected via National Highway' },
      busStand: { type: String, default: 'Central Bus Terminal' },
      localTransport: { type: String, default: 'Taxis, auto-rickshaws, and local buses' }
    },
    transit: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    safetyTips: {
      type: [String],
      default: ['Keep government ID handy', 'Stay hydrated during travel', 'Respect local heritage guidelines']
    }
  },
  {
    timestamps: true
  }
);

export const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;
