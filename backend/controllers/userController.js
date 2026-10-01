import User from '../models/User.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

/**
 * @desc    Get all registered users (Admin/Superadmin)
 * @route   GET /api/users
 * @access  Private/Admin
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, { count: users.length, users });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update user role (Superadmin only)
 * @route   PUT /api/users/:id/role
 * @access  Private/Superadmin
 */
export const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    if (!['user', 'admin', 'superadmin'].includes(role)) {
      return sendError(res, 400, 'Invalid role. Must be user, admin, or superadmin.');
    }

    // Prevent changing own role
    if (req.user._id.toString() === req.params.id) {
      return sendError(res, 400, 'You cannot modify your own administrative role.');
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return sendError(res, 404, 'User not found.');
    }

    user.role = role;
    await user.save({ validateBeforeSave: false });

    return sendSuccess(res, 200, { user }, `User role updated to '${role}'.`);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete user account (Admin/Superadmin)
 * @route   DELETE /api/users/:id
 * @access  Private/Admin
 */
export const deleteUser = async (req, res, next) => {
  try {
    // Prevent deleting self
    if (req.user._id.toString() === req.params.id) {
      return sendError(res, 400, 'You cannot delete your own account from the administrator dashboard.');
    }

    const userToDelete = await User.findById(req.params.id);
    if (!userToDelete) {
      return sendError(res, 404, 'User not found.');
    }

    // An admin cannot delete a superadmin
    if (userToDelete.role === 'superadmin' && req.user.role !== 'superadmin') {
      return sendError(res, 403, 'Administrators cannot delete Superadministrator accounts.');
    }

    await User.findByIdAndDelete(req.params.id);
    return sendSuccess(res, 200, { id: req.params.id }, 'User account deleted successfully.');
  } catch (error) {
    next(error);
  }
};
