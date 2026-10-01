import express from 'express';
import {
  getHotels,
  createHotel,
  updateHotel,
  deleteHotel
} from '../controllers/hotelController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getHotels);

router.post('/', protect, authorizeRoles('admin', 'superadmin'), createHotel);
router.put('/:id', protect, authorizeRoles('admin', 'superadmin'), updateHotel);
router.delete('/:id', protect, authorizeRoles('admin', 'superadmin'), deleteHotel);

export default router;
