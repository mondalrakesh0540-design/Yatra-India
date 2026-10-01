import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  pnr: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true
  },
  userId: {
    type: String,
    index: true
  },
  type: {
    type: String,
    enum: ['flights', 'trains', 'buses'],
    required: true
  },
  passengerName: {
    type: String,
    required: true,
    trim: true
  },
  passengerAge: {
    type: String,
    default: '28'
  },
  passengerGender: {
    type: String,
    default: 'Male'
  },
  passengerEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true
  },
  passengerPhone: {
    type: String,
    default: '+91 98765 43210'
  },
  fromCity: {
    type: String,
    required: true
  },
  toCity: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  itinerary: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  fareDetails: {
    baseFare: Number,
    discount: Number,
    totalFare: Number,
    passengers: Number
  },
  couponCode: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['CONFIRMED', 'CANCELLED'],
    default: 'CONFIRMED'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Booking = mongoose.model('Booking', bookingSchema);
