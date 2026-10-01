import express from 'express';
import {
  getAllUsers,
  updateUserRole,
  deleteUser
} from '../controllers/userController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// Only Admin & Superadmin can list users
router.get('/', protect, authorizeRoles('admin', 'superadmin'), getAllUsers);

// Only Superadmin can promote or demote roles
router.put('/:id/role', protect, authorizeRoles('superadmin'), updateUserRole);

// Admin & Superadmin can remove users
router.delete('/:id', protect, authorizeRoles('admin', 'superadmin'), deleteUser);

export default router;
