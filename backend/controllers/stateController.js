import State from '../models/State.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

export const getStates = async (req, res, next) => {
  try {
    const states = await State.find().sort({ name: 1 });
    return sendSuccess(res, 200, { count: states.length, states });
  } catch (error) {
    next(error);
  }
};

export const getStateById = async (req, res, next) => {
  try {
    const state = await State.findOne({
      $or: [{ id: req.params.id.toLowerCase() }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }]
    });

    if (!state) {
      return sendError(res, 404, `State '${req.params.id}' not found.`);
    }

    return sendSuccess(res, 200, { state });
  } catch (error) {
    next(error);
  }
};

export const createState = async (req, res, next) => {
  try {
    const state = await State.create(req.body);
    return sendSuccess(res, 201, { state }, 'State created successfully.');
  } catch (error) {
    next(error);
  }
};

export const updateState = async (req, res, next) => {
  try {
    const state = await State.findOneAndUpdate(
      { $or: [{ id: req.params.id }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }] },
      req.body,
      { new: true, runValidators: true }
    );
    if (!state) return sendError(res, 404, 'State not found.');
    return sendSuccess(res, 200, { state }, 'State updated successfully.');
  } catch (error) {
    next(error);
  }
};

export const deleteState = async (req, res, next) => {
  try {
    const state = await State.findOneAndDelete({
      $or: [{ id: req.params.id }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }]
    });
    if (!state) return sendError(res, 404, 'State not found.');
    return sendSuccess(res, 200, { id: req.params.id }, 'State deleted successfully.');
  } catch (error) {
    next(error);
  }
};
