import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      default: ''
    },
    subject: {
      type: String,
      required: [true, 'Please select or provide a subject'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Please write your message'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    status: {
      type: String,
      enum: ['new', 'in_progress', 'resolved'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

export const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
