import express from 'express';
import { getOverviewStats } from '../controllers/statController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, authorizeRoles('admin', 'superadmin'), getOverviewStats);

export default router;
