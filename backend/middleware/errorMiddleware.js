import { sendError } from '../utils/sendResponse.js';

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for developers
  console.error('[Error Middleware]:', err);

  // Mongoose bad ObjectId (CastError)
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    return sendError(res, 404, message);
  }

  // Mongoose duplicate key (Code 11000)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    const message = `Duplicate value entered for ${field}. Please use another value.`;
    return sendError(res, 400, message);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message).join(', ');
    return sendError(res, 400, message);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return sendError(res, 401, 'Invalid authentication token.');
  }

  if (err.name === 'TokenExpiredError') {
    return sendError(res, 401, 'Authentication token has expired. Please log in again.');
  }

  return sendError(res, error.statusCode || 500, error.message || 'Internal Server Error');
};

export const notFound = (req, res) => {
  return sendError(res, 404, `API route not found: ${req.originalUrl}`);
};
