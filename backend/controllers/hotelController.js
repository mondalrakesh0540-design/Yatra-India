import Hotel from '../models/Hotel.js';
import { sendSuccess, sendError } from '../utils/sendResponse.js';

export const getHotels = async (req, res, next) => {
  try {
    const { destinationId, state } = req.query;
    let query = {};
    if (destinationId) query.destinationId = destinationId.toLowerCase();
    if (state) query.state = new RegExp(state, 'i');

    const hotels = await Hotel.find(query).sort({ rating: -1 });
    return sendSuccess(res, 200, { count: hotels.length, hotels });
  } catch (error) {
    next(error);
  }
};

export const createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    return sendSuccess(res, 201, { hotel }, 'Hotel listing created successfully.');
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!hotel) return sendError(res, 404, 'Hotel listing not found.');
    return sendSuccess(res, 200, { hotel }, 'Hotel listing updated successfully.');
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) return sendError(res, 404, 'Hotel listing not found.');
    return sendSuccess(res, 200, { id: req.params.id }, 'Hotel listing deleted successfully.');
  } catch (error) {
    next(error);
  }
};
