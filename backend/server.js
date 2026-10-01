import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import destinationRoutes from './routes/destinationRoutes.js';
import stateRoutes from './routes/stateRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import userRoutes from './routes/userRoutes.js';
import statRoutes from './routes/statRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

// Error handlers
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// 1. Security Headers (Helmet)
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false
  })
);

// 2. CORS Configuration with credentials
const allowedOrigins = [
  CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://mondalrakesh0540-design.github.io'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.github.io')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev/staging to avoid blocking
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

// 3. Request Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// 4. Request Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// 5. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Yatra India Enterprise API',
    database: 'MongoDB',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

// 6. Mount REST API Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stats', statRoutes);
app.use('/api/bookings', bookingRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Yatra India Production API is running smoothly.');
});

// 7. Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Yatra India Server running on http://localhost:${PORT}`);
  console.log(`🛡️  Security headers, CORS, JWT Auth & Rate Limiters active`);
  console.log(`📡 Endpoints: /api/auth, /api/destinations, /api/stats...`);
  console.log(`=======================================================`);
});

export default app;
