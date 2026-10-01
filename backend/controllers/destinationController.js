import Destination from '../models/Destination.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

/**
 * @desc    Get all destinations with optional filtering & search
 * @route   GET /api/destinations
 * @access  Public
 */
export const getDestinations = async (req, res, next) => {
  try {
    const { category, state, search, sort } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category.toLowerCase();
    }

    if (state && state !== 'all') {
      query.$or = [
        { state: new RegExp(state, 'i') },
        { stateId: state.toLowerCase() }
      ];
    }

    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { state: new RegExp(search, 'i') },
        { shortDescription: new RegExp(search, 'i') }
      ];
    }

    let result = Destination.find(query);

    // Sorting
    if (sort === 'rating') {
      result = result.sort({ rating: -1 });
    } else if (sort === 'price_asc') {
      result = result.sort({ price: 1 });
    } else if (sort === 'price_desc') {
      result = result.sort({ price: -1 });
    } else {
      result = result.sort({ createdAt: -1 });
    }

    const destinations = await result;
    return sendSuccess(res, 200, { count: destinations.length, destinations });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single destination by id or slug
 * @route   GET /api/destinations/:id
 * @access  Public
 */
export const getDestinationById = async (req, res, next) => {
  try {
    const destination = await Destination.findOne({
      $or: [{ id: req.params.id.toLowerCase() }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }]
    });

    if (!destination) {
      return sendError(res, 404, `Destination '${req.params.id}' not found.`);
    }

    return sendSuccess(res, 200, { destination });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create new destination
 * @route   POST /api/destinations
 * @access  Private/Admin
 */
export const createDestination = async (req, res, next) => {
  try {
    const data = { ...req.body };

    if (!data.name || !data.state) {
      return sendError(res, 400, 'Destination name and state are required.');
    }

    if (!data.id) {
      data.id = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    if (!data.stateId) {
      data.stateId = data.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    // Check duplicate id
    const existing = await Destination.findOne({ id: data.id });
    if (existing) {
      data.id = `${data.id}-${Date.now().toString().slice(-4)}`;
    }

    const created = await Destination.create(data);
    return sendSuccess(res, 201, { destination: created }, 'Destination created successfully.');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update destination
 * @route   PUT /api/destinations/:id
 * @access  Private/Admin
 */
export const updateDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findOneAndUpdate(
      { $or: [{ id: req.params.id }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }] },
      req.body,
      { new: true, runValidators: true }
    );

    if (!destination) {
      return sendError(res, 404, `Destination '${req.params.id}' not found.`);
    }

    return sendSuccess(res, 200, { destination }, 'Destination updated successfully.');
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete destination
 * @route   DELETE /api/destinations/:id
 * @access  Private/Admin
 */
export const deleteDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findOneAndDelete({
      $or: [{ id: req.params.id }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }]
    });

    if (!destination) {
      return sendError(res, 404, `Destination '${req.params.id}' not found.`);
    }

    return sendSuccess(res, 200, { id: req.params.id }, 'Destination deleted successfully.');
  } catch (error) {
    next(error);
  }
};
