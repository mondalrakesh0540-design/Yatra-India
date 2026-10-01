import express from 'express';
import {
  getReviews,
  addReview,
  deleteReview
} from '../controllers/reviewController.js';
import { protect, optionalAuth, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getReviews);
router.get('/:destinationId', (req, res, next) => {
  req.query.destinationId = req.params.destinationId;
  return getReviews(req, res, next);
});

router.post('/:destinationId', optionalAuth, addReview);
router.delete('/:id', protect, authorizeRoles('admin', 'superadmin'), deleteReview);

export default router;
