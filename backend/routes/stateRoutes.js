import express from 'express';
import {
  getStates,
  getStateById,
  createState,
  updateState,
  deleteState
} from '../controllers/stateController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getStates);
router.get('/:id', getStateById);

router.post('/', protect, authorizeRoles('admin', 'superadmin'), createState);
router.put('/:id', protect, authorizeRoles('admin', 'superadmin'), updateState);
router.delete('/:id', protect, authorizeRoles('admin', 'superadmin'), deleteState);

export default router;
