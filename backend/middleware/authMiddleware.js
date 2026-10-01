import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { sendError } from '../utils/sendResponse.js';

/**
 * Protect routes - Verifies JWT from Authorization header or HTTP-only cookie
 */
export const protect = async (req, res, next) => {
  let token;

  // 1. Check Authorization Bearer header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } 
  // 2. Check HTTP-only cookie
  else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return sendError(res, 401, 'Authentication required. Please log in to access this resource.');
  }

  try {
    const secret = process.env.JWT_SECRET || 'yatra_india_production_secret_key_2026_secured';
    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.id);
    if (!user) {
      return sendError(res, 401, 'The account belonging to this token no longer exists.');
    }

    req.user = user;
    next();
  } catch (error) {
    return sendError(res, 401, 'Invalid or expired token. Please log in again.');
  }
};

/**
 * Role-Based Access Control (RBAC) - Restrict access to specified roles
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return sendError(res, 401, 'Authentication required.');
    }

    if (!roles.includes(req.user.role)) {
      return sendError(
        res,
        403,
        `Access denied. Role '${req.user.role}' is not authorized to perform this administrative action.`
      );
    }

    next();
  };
};

/**
 * Optional authentication - attaches user if valid token exists, doesn't block if missing
 */
export const optionalAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      const secret = process.env.JWT_SECRET || 'yatra_india_production_secret_key_2026_secured';
      const decoded = jwt.verify(token, secret);
      req.user = await User.findById(decoded.id);
    } catch {
      // Ignore invalid token for optional endpoints
    }
  }
  next();
};
