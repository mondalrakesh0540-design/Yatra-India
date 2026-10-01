import express from 'express';
import {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} from '../controllers/destinationController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getDestinations);
router.get('/:id', getDestinationById);

// Admin / Superadmin protected routes
router.post('/', protect, authorizeRoles('admin', 'superadmin'), createDestination);
router.put('/:id', protect, authorizeRoles('admin', 'superadmin'), updateDestination);
router.delete('/:id', protect, authorizeRoles('admin', 'superadmin'), deleteDestination);

export default router;
