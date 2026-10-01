/**
 * Yatra India — Enterprise Production REST API Client
 * Connects Frontend with Node.js/Express + MongoDB backend
 * Features: JWT Bearer Tokens, HTTP-only cookie support, robust fallback.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const TOKEN_KEY = 'yatra_auth_token';
const USER_KEY = 'yatra_current_user';

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY) || null;
  } catch {
    return null;
  }
};

export const setToken = (token) => {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch (e) {
    console.error('Error saving token to localStorage:', e);
  }
};

export const getCurrentCachedUser = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setCurrentCachedUser = (user) => {
  try {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  } catch (e) {
    console.error('Error saving user to localStorage:', e);
  }
};

/**
 * Robust fetch wrapper with authentication, credentials, and error handling
 */
async function request(endpoint, options = {}, timeoutMs = 8000) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE}${cleanEndpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include', // Includes HTTP-only cookies
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const err = new Error(data.message || `Request failed with status ${response.status}`);
      err.status = response.status;
      err.data = data;
      throw err;
    }

    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      const timeoutError = new Error('Network request timed out. Please check your connection.');
      timeoutError.status = 408;
      throw timeoutError;
    }
    throw err;
  }
}

/**
 * Health check endpoint
 */
export const checkBackendHealth = async () => {
  try {
    const res = await request('/health', { method: 'GET' }, 2500);
    return res.status === 'ok';
  } catch {
    return false;
  }
};

/**
 * ----------------------------------------------------
 * AUTHENTICATION API
 * ----------------------------------------------------
 */
export const authApi = {
  // User Registration
  async register(name, email, password, confirmPassword) {
    const data = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, confirmPassword })
    });
    if (data.token) setToken(data.token);
    if (data.user) setCurrentCachedUser(data.user);
    return data.user;
  },

  // User Login
  async login(email, password, rememberMe = false) {
    const data = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, rememberMe })
    });
    if (data.token) setToken(data.token);
    if (data.user) setCurrentCachedUser(data.user);
    return data.user;
  },

  // Dedicated Admin Login
  async adminLogin(email, password, rememberMe = false) {
    const data = await request('/auth/admin-login', {
      method: 'POST',
      body: JSON.stringify({ email, password, rememberMe })
    });
    if (data.token) setToken(data.token);
    if (data.user) setCurrentCachedUser(data.user);
    return data.user;
  },

  // Get Current Profile
  async getMe() {
    try {
      const data = await request('/auth/me', { method: 'GET' });
      if (data.user) setCurrentCachedUser(data.user);
      return data.user;
    } catch (err) {
      if (err.status === 401) {
        setToken(null);
        setCurrentCachedUser(null);
      }
      return null;
    }
  },

  // Update Profile
  async updateProfile(profileData) {
    const data = await request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
    if (data.user) setCurrentCachedUser(data.user);
    return data.user;
  },

  // Change Password
  async changePassword(currentPassword, newPassword, confirmNewPassword) {
    return await request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword, confirmNewPassword })
    });
  },

  // Request Password Reset Token
  async forgotPassword(email) {
    return await request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  },

  // Complete Password Reset
  async resetPassword(token, password, confirmPassword) {
    const data = await request('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password, confirmPassword })
    });
    if (data.token) setToken(data.token);
    if (data.user) setCurrentCachedUser(data.user);
    return data;
  },

  // Sync Wishlist
  async syncSaved(savedDestinations) {
    return await request('/auth/saved', {
      method: 'PUT',
      body: JSON.stringify({ savedDestinations })
    });
  },

  // Logout
  async logout() {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors during logout
    } finally {
      setToken(null);
      setCurrentCachedUser(null);
    }
  }
};

/**
 * ----------------------------------------------------
 * DESTINATIONS CMS API
 * ----------------------------------------------------
 */
export const destinationsApi = {
  async getDestinations(params = {}) {
    const query = new URLSearchParams(params).toString();
    const data = await request(`/destinations${query ? `?${query}` : ''}`, { method: 'GET' });
    return data.destinations || [];
  },

  async getDestinationById(id) {
    const data = await request(`/destinations/${id}`, { method: 'GET' });
    return data.destination;
  },

  async createDestination(payload) {
    const data = await request('/destinations', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return data.destination;
  },

  async updateDestination(id, payload) {
    const data = await request(`/destinations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
    return data.destination;
  },

  async deleteDestination(id) {
    return await request(`/destinations/${id}`, { method: 'DELETE' });
  }
};

/**
 * ----------------------------------------------------
 * STATES API
 * ----------------------------------------------------
 */
export const statesApi = {
  async getStates() {
    const data = await request('/states', { method: 'GET' });
    return data.states || [];
  },

  async getStateById(id) {
    const data = await request(`/states/${id}`, { method: 'GET' });
    return data.state;
  }
};

/**
 * ----------------------------------------------------
 * HOTELS API
 * ----------------------------------------------------
 */
export const hotelsApi = {
  async getHotels(params = {}) {
    const query = new URLSearchParams(params).toString();
    const data = await request(`/hotels${query ? `?${query}` : ''}`, { method: 'GET' });
    return data.hotels || [];
  },

  async createHotel(payload) {
    const data = await request('/hotels', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return data.hotel;
  },

  async updateHotel(id, payload) {
    const data = await request(`/hotels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
    return data.hotel;
  },

  async deleteHotel(id) {
    return await request(`/hotels/${id}`, { method: 'DELETE' });
  }
};

/**
 * ----------------------------------------------------
 * REVIEWS API
 * ----------------------------------------------------
 */
export const reviewsApi = {
  async getReviews(params = {}) {
    const query = new URLSearchParams(params).toString();
    const data = await request(`/reviews${query ? `?${query}` : ''}`, { method: 'GET' });
    return data.reviews || [];
  },

  async getDestinationReviews(destinationId) {
    const data = await request(`/reviews/${destinationId}`, { method: 'GET' });
    return data.reviews || [];
  },

  async addDestinationReview(destinationId, reviewData) {
    const data = await request(`/reviews/${destinationId}`, {
      method: 'POST',
      body: JSON.stringify(reviewData)
    });
    return data.review;
  },

  async deleteReview(id) {
    return await request(`/reviews/${id}`, { method: 'DELETE' });
  }
};

/**
 * ----------------------------------------------------
 * USERS MANAGEMENT API (Admin / Superadmin)
 * ----------------------------------------------------
 */
export const usersApi = {
  async getAllUsers() {
    const data = await request('/users', { method: 'GET' });
    return data.users || [];
  },

  async updateUserRole(id, role) {
    const data = await request(`/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role })
    });
    return data.user;
  },

  async deleteUser(id) {
    return await request(`/users/${id}`, { method: 'DELETE' });
  }
};

/**
 * ----------------------------------------------------
 * STATISTICS API (Admin Dashboard)
 * ----------------------------------------------------
 */
export const statsApi = {
  async getOverviewStats() {
    const data = await request('/stats', { method: 'GET' });
    return data;
  }
};

/**
 * ----------------------------------------------------
 * BOOKINGS API
 * ----------------------------------------------------
 */
export const bookingsApi = {
  async createBooking(bookingData) {
    const data = await request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    });
    return data.booking;
  },

  async getUserBookings(userId, email) {
    const query = new URLSearchParams();
    if (userId) query.append('userId', userId);
    if (email) query.append('email', email);
    const data = await request(`/bookings${query.toString() ? `?${query.toString()}` : ''}`, {
      method: 'GET'
    });
    return data.bookings || [];
  },

  async getBookingByPnr(pnr) {
    const data = await request(`/bookings/${pnr.toUpperCase()}`, { method: 'GET' });
    return data.booking;
  },

  async cancelBooking(pnr) {
    const data = await request(`/bookings/${pnr.toUpperCase()}`, { method: 'DELETE' });
    return data.booking;
  }
};
