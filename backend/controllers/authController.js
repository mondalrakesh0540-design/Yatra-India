import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';
import emailService from '../services/emailService.js';

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, termsAccepted } = req.body;

    // Basic input validation
    if (!name || !email || !password) {
      return sendError(res, 400, 'Please provide name, email, and password.');
    }

    if (confirmPassword && password !== confirmPassword) {
      return sendError(res, 400, 'Passwords do not match.');
    }

    if (password.length < 6) {
      return sendError(res, 400, 'Password must be at least 6 characters long.');
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate email
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return sendError(res, 400, 'An account with this email address already exists.');
    }

    // Hash password with bcrypt (10 rounds)
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Security: Normal registration ALWAYS creates 'user' role
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: 'user',
      lastLogin: new Date()
    });

    // Generate JWT and set HTTP-only cookie
    const token = generateToken(res, user, false);

    return sendSuccess(
      res,
      201,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
          savedDestinations: user.savedDestinations,
          createdAt: user.createdAt
        },
        token
      },
      'Account created successfully.'
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Login existing user
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res, next) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return sendError(res, 400, 'Please provide email and password.');
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find user
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return sendError(res, 401, 'Invalid email or password.');
    }

    // Verify password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return sendError(res, 401, 'Invalid email or password.');
    }

    // Update lastLogin
    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    // Generate JWT token
    const token = generateToken(res, user, rememberMe);

    return sendSuccess(
      res,
      200,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
          savedDestinations: user.savedDestinations,
          createdAt: user.createdAt,
          lastLogin: user.lastLogin
        },
        token
      },
      'Logged in successfully.'
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Login Admin portal explicitly
 * @route   POST /api/auth/admin-login
 * @access  Public (Enforces Admin/Superadmin role)
 */
export const adminLogin = async (req, res, next) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return sendError(res, 400, 'Please provide admin email and password.');
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return sendError(res, 401, 'Invalid administrator credentials.');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return sendError(res, 401, 'Invalid administrator credentials.');
    }

    // Enforce administrative role
    if (user.role !== 'admin' && user.role !== 'superadmin') {
      return sendError(
        res,
        403,
        'Access denied: This account does not possess administrator privileges.'
      );
    }

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    const token = generateToken(res, user, rememberMe);

    return sendSuccess(
      res,
      200,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
          createdAt: user.createdAt,
          lastLogin: user.lastLogin
        },
        token
      },
      'Administrator authenticated successfully.'
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get currently logged in user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return sendError(res, 404, 'User profile not found.');
    }

    return sendSuccess(res, 200, {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        savedDestinations: user.savedDestinations,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/auth/profile
 * @access  Private
 */
export const updateProfile = async (req, res, next) => {
  try {
    const { name, profileImage } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return sendError(res, 404, 'User not found.');
    }

    if (name) user.name = name.trim();
    if (profileImage !== undefined) user.profileImage = profileImage;

    await user.save();

    return sendSuccess(res, 200, {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        savedDestinations: user.savedDestinations
      }
    }, 'Profile updated successfully.');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Change password
 * @route   PUT /api/auth/change-password
 * @access  Private
 */
export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return sendError(res, 400, 'Please provide current and new passwords.');
    }

    if (newPassword !== confirmNewPassword) {
      return sendError(res, 400, 'New passwords do not match.');
    }

    if (newPassword.length < 6) {
      return sendError(res, 400, 'New password must be at least 6 characters.');
    }

    const user = await User.findById(req.user.id);
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return sendError(res, 400, 'Current password is incorrect.');
    }

    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(newPassword, salt);
    await user.save();

    return sendSuccess(res, 200, {}, 'Password changed successfully.');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Request password reset token
 * @route   POST /api/auth/forgot-password
 * @access  Public
 */
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return sendError(res, 400, 'Please provide your email address.');
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    // Security best practice: Do not reveal whether email exists
    if (!user) {
      return sendSuccess(
        res,
        200,
        {},
        'If an account with that email exists, password reset instructions have been sent.'
      );
    }

    // Generate reset token and expiration
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Build reset URL
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetUrl = `${clientUrl}/reset-password?token=${resetToken}`;

    await emailService.sendPasswordResetEmail({
      to: user.email,
      name: user.name,
      resetUrl
    });

    return sendSuccess(
      res,
      200,
      { resetToken: process.env.NODE_ENV !== 'production' ? resetToken : undefined },
      'If an account with that email exists, password reset instructions have been sent.'
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Reset password using token
 * @route   POST /api/auth/reset-password
 * @access  Public
 */
export const resetPassword = async (req, res, next) => {
  try {
    const { token, password, confirmPassword } = req.body;

    if (!token || !password) {
      return sendError(res, 400, 'Reset token and new password are required.');
    }

    if (confirmPassword && password !== confirmPassword) {
      return sendError(res, 400, 'Passwords do not match.');
    }

    if (password.length < 6) {
      return sendError(res, 400, 'Password must be at least 6 characters.');
    }

    // Hash the raw token to match database
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now()}
    });

    if (!user) {
      return sendError(res, 400, 'Password reset token is invalid or has expired.');
    }

    // Set new password
    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    // Auto login with new token
    const newToken = generateToken(res, user, false);

    return sendSuccess(
      res,
      200,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token: newToken
      },
      'Password reset successful. You are now logged in.'
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Sync user saved wishlist
 * @route   PUT /api/auth/saved
 * @access  Private
 */
export const syncSaved = async (req, res, next) => {
  try {
    const { savedDestinations } = req.body;
    if (!Array.isArray(savedDestinations)) {
      return sendError(res, 400, 'savedDestinations must be an array.');
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return sendError(res, 404, 'User not found.');
    }

    user.savedDestinations = savedDestinations;
    await user.save({ validateBeforeSave: false });

    return sendSuccess(res, 200, { savedDestinations: user.savedDestinations }, 'Saved destinations synchronized.');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Logout user & clear cookie
 * @route   POST /api/auth/logout
 * @access  Public
 */
export const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  return sendSuccess(res, 200, {}, 'Logged out successfully.');
};
