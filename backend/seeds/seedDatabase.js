import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { DESTINATIONS } from '../../src/data/destinations.js';
import { STATES } from '../../src/data/states.js';
import User from '../models/User.js';
import Destination from '../models/Destination.js';
import State from '../models/State.js';
import Hotel from '../models/Hotel.js';
import Review from '../models/Review.js';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yatra_india';

const sampleHotels = [
  {
    name: 'Mayfair Darjeeling Heritage Resort',
    destinationId: 'darjeeling',
    destinationName: 'Darjeeling',
    state: 'West Bengal',
    rating: 4.8,
    pricePerNight: 7500,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    amenities: ['Himalayan View', 'Spa & Wellness', 'Fireplace Dining', 'Free Wi-Fi', 'Breakfast Included'],
    contactPhone: '+91 354 225 6476',
    status: 'Available'
  },
  {
    name: 'The Lalit Grand Palace Srinagar',
    destinationId: 'srinagar',
    destinationName: 'Srinagar',
    state: 'Jammu and Kashmir',
    rating: 4.9,
    pricePerNight: 12500,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    amenities: ['Dal Lake View', 'Heated Indoor Pool', 'Heritage Architecture', 'Chinar Gardens'],
    contactPhone: '+91 194 250 1001',
    status: 'Available'
  },
  {
    name: 'Spice Tree Munnar Nature Retreat',
    destinationId: 'munnar',
    destinationName: 'Munnar',
    state: 'Kerala',
    rating: 4.7,
    pricePerNight: 8900,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    amenities: ['Tea Plantation View', 'Solar Heated Pool', 'Ayurveda Spa', 'Mountain Treks'],
    contactPhone: '+91 486 828 2777',
    status: 'Available'
  },
  {
    name: 'Umaid Bhawan Palace Luxury Suites',
    destinationId: 'jodhpur',
    destinationName: 'Jodhpur',
    state: 'Rajasthan',
    rating: 5.0,
    pricePerNight: 35000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    amenities: ['Royal Butler Service', 'Art Deco Suites', 'Subterranean Pool', 'Private Museum Tour'],
    contactPhone: '+91 291 251 0101',
    status: 'Available'
  },
  {
    name: 'Taj Ganges Heritage Hotel',
    destinationId: 'varanasi',
    destinationName: 'Varanasi',
    state: 'Uttar Pradesh',
    rating: 4.8,
    pricePerNight: 9800,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: ['Lush Tropical Gardens', 'Ganga Aarti Excursion', 'Fine Dining', 'Lotus Pool'],
    contactPhone: '+91 542 666 0001',
    status: 'Available'
  }
];

const sampleReviews = [
  {
    destinationId: 'darjeeling',
    destinationName: 'Darjeeling',
    userName: 'Priya Mukherjee',
    userEmail: 'priya.travels@gmail.com',
    rating: 5,
    comment: 'Waking up to Kanchenjunga sunrise from Tiger Hill was pure magic! The steam toy train journey is a must-experience.',
    status: 'approved'
  },
  {
    destinationId: 'srinagar',
    destinationName: 'Srinagar',
    userName: 'Rohan Verma',
    userEmail: 'rohan.v@outlook.com',
    rating: 5,
    comment: 'Staying in a cedar houseboat on Dal Lake and shikara rides at sunset are unforgettable memories. Absolutely heavenly.',
    status: 'approved'
  },
  {
    destinationId: 'munnar',
    destinationName: 'Munnar',
    userName: 'Ananya Nair',
    userEmail: 'ananya.n@yahoo.com',
    rating: 5,
    comment: 'The rolling emerald tea plantations and crisp morning breeze took my breath away. Perfect mountain sanctuary.',
    status: 'approved'
  }
];

export const seedDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`\n======================================================`);
    console.log(`🌱 YATRA INDIA — MONGODB SEEDING PROCESS`);
    console.log(`======================================================`);
    console.log(`Target Database: ${uri}\n`);

    // 1. Seed Admin Account
    const existingAdmin = await User.findOne({ email: 'admin@yatraindia.com' });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash('YatraAdmin2026!', salt);
      await User.create({
        name: 'Super Admin',
        email: 'admin@yatraindia.com',
        passwordHash,
        role: 'superadmin',
        lastLogin: new Date()
      });
      console.log(`✅ Default Superadmin created: admin@yatraindia.com / YatraAdmin2026!`);
    } else {
      console.log(`ℹ️  Admin account already exists: ${existingAdmin.email} (${existingAdmin.role})`);
    }

    // 2. Seed Destinations
    const destCount = await Destination.countDocuments();
    if (destCount === 0 || process.argv.includes('--force')) {
      if (process.argv.includes('--force')) await Destination.deleteMany({});
      
      const formattedDestinations = DESTINATIONS.map((d) => ({
        id: d.id,
        name: d.name,
        state: d.state,
        stateId: d.stateId || d.state.toLowerCase().replace(/\s+/g, '-'),
        category: d.category || 'mountains',
        bestTimeToVisit: d.bestTimeToVisit || 'October to March',
        idealMonths: d.idealMonths || ['October', 'November', 'December'],
        rating: d.rating || 4.8,
        reviewsCount: d.reviewsCount || 100,
        price: d.price || 2500,
        isPopular: !!d.isPopular,
        isTrending: !!d.isTrending,
        isHiddenGem: !!d.isHiddenGem,
        heroImage: d.heroImage || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        gallery: d.gallery || [],
        shortDescription: d.shortDescription || d.overview || 'Incredible destination in India.',
        topAttractions: d.topAttractions || ['Signature Landmark', 'Local Heritage Spot'],
        thingsToDo: d.thingsToDo || ['Sightseeing', 'Photography'],
        foodToTry: d.foodToTry || ['Local Delicacy'],
        weatherInfo: d.weatherInfo || { summer: '22°C - 32°C', winter: '8°C - 18°C', monsoon: 'Moderate' },
        howToReach: d.howToReach || { airport: 'Regional Airport', railway: 'Nearest Junction', road: 'Highway', localTransport: 'Taxis' },
        transit: d.transit || {},
        safetyTips: d.safetyTips || ['Keep ID handy']
      }));

      await Destination.insertMany(formattedDestinations, { ordered: false });
      console.log(`✅ Seeded ${formattedDestinations.length} destinations into MongoDB.`);
    } else {
      console.log(`ℹ️  Destinations collection already has ${destCount} records.`);
    }

    // 3. Seed States
    const stateCount = await State.countDocuments();
    if (stateCount === 0 || process.argv.includes('--force')) {
      if (process.argv.includes('--force')) await State.deleteMany({});

      const formattedStates = STATES.map((s) => ({
        id: s.id,
        name: s.name,
        capital: s.capital || '',
        region: s.region || 'North',
        isUnionTerritory: !!s.isUnionTerritory,
        description: s.description || '',
        heroImage: s.heroImage || '',
        bestTimeToVisit: s.bestTimeToVisit || 'October to March',
        touristSpotsCount: s.touristSpotsCount || 0,
        popularSpots: s.popularSpots || [],
        festivals: s.festivals || []
      }));

      await State.insertMany(formattedStates, { ordered: false });
      console.log(`✅ Seeded ${formattedStates.length} Indian States & UTs into MongoDB.`);
    } else {
      console.log(`ℹ️  States collection already has ${stateCount} records.`);
    }

    // 4. Seed Hotels
    const hotelCount = await Hotel.countDocuments();
    if (hotelCount === 0) {
      await Hotel.insertMany(sampleHotels);
      console.log(`✅ Seeded ${sampleHotels.length} luxury & boutique hotels.`);
    } else {
      console.log(`ℹ️  Hotels collection already has ${hotelCount} records.`);
    }

    // 5. Seed Reviews
    const reviewCount = await Review.countDocuments();
    if (reviewCount === 0) {
      await Review.insertMany(sampleReviews);
      console.log(`✅ Seeded ${sampleReviews.length} community reviews.`);
    } else {
      console.log(`ℹ️  Reviews collection already has ${reviewCount} records.`);
    }

    console.log(`\n🎉 DATABASE SEEDING COMPLETED SUCCESSFULLY!`);
    console.log(`======================================================\n`);
  } catch (err) {
    console.error(`❌ Seeding error:`, err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

// Auto-run if executed directly
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  seedDatabase();
}
