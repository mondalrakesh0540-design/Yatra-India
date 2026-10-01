import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    pnr: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
    },
    type: {
      type: String,
      enum: ['flights', 'trains', 'buses'],
      required: true
    },
    userId: {
      type: String,
      default: null
    },
    passengerName: {
      type: String,
      required: [true, 'Passenger name is required'],
      trim: true
    },
    passengerAge: String,
    passengerGender: String,
    passengerEmail: {
      type: String,
      lowercase: true,
      trim: true
    },
    passengerPhone: String,
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
      required: true
    },
    fareDetails: {
      baseFare: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      totalFare: { type: Number, required: true },
      passengers: { type: Number, default: 1 }
    },
    couponCode: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ['CONFIRMED', 'CANCELLED', 'PENDING'],
      default: 'CONFIRMED'
    }
  },
  {
    timestamps: true
  }
);

export const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
