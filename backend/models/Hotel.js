import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide hotel name'],
      trim: true
    },
    destinationId: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    destinationName: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 1,
      max: 5
    },
    pricePerNight: {
      type: Number,
      default: 3500
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    amenities: {
      type: [String],
      default: ['Free Wi-Fi', 'Breakfast Included', 'Swimming Pool', 'Mountain View']
    },
    contactPhone: {
      type: String,
      default: '+91 98765 43210'
    },
    status: {
      type: String,
      enum: ['Available', 'Booked Out', 'Maintenance'],
      default: 'Available'
    }
  },
  {
    timestamps: true
  }
);

export const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
