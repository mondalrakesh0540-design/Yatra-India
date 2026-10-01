/**
 * Centralized API Client for Yatra India (MongoDB + Express Backend)
 * With automatic resilient fallback for GitHub Pages and offline mode.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const TOKEN_KEY = 'yatra_auth_token';
const USER_KEY = 'yatra_current_user';
const LOCAL_BOOKINGS_KEY = 'yatra_user_bookings';
const LOCAL_REVIEWS_KEY = 'yatra_destination_reviews';

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
    console.error(e);
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
    console.error(e);
  }
};

/**
 * Robust fetch wrapper with timeout
 */
async function request(endpoint, options = {}, timeoutMs = 4000) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal
    });
    clearTimeout(timer);

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data.message || `Request failed with status ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

/**
 * Health check to verify if Express + MongoDB backend is reachable
 */
export async function checkBackendHealth() {
  try {
    const res = await request('/health', { method: 'GET' }, 2000);
    return res && res.status === 'ok';
  } catch {
    return false;
  }
}

/**
 * ----------------------------------------------------
 * AUTHENTICATION API
 * ----------------------------------------------------
 */
export const authApi = {
  // Register with MongoDB backend (or fallback to local session)
  async register(name, email, password) {
    try {
      const data = await request('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      });
      if (data.token) setToken(data.token);
      if (data.user) setCurrentCachedUser(data.user);
      return data.user;
    } catch (err) {
      // If network / server unavailable, fallback locally
      console.warn('Backend unavailable, creating local demo user:', err.message);
      const demoUser = {
        id: `local_${Date.now()}`,
        name: name || 'Traveler',
        email: email.toLowerCase(),
        role: 'user',
        isLocalFallback: true,
        savedDestinations: ['darjeeling', 'srinagar', 'munnar']
      };
      setToken(`demo_token_${Date.now()}`);
      setCurrentCachedUser(demoUser);
      return demoUser;
    }
  },

  // Login with MongoDB backend (or fallback to local session)
  async login(email, password) {
    try {
      const data = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      if (data.token) setToken(data.token);
      if (data.user) setCurrentCachedUser(data.user);
      return data.user;
    } catch (err) {
      if (err.status === 401 || err.status === 400) {
        throw err; // Real invalid credential error from server
      }
      console.warn('Backend unavailable, signing in locally:', err.message);
      const demoUser = {
        id: `local_${Date.now()}`,
        name: email.split('@')[0] || 'Traveler',
        email: email.toLowerCase(),
        role: 'user',
        isLocalFallback: true,
        savedDestinations: ['darjeeling', 'srinagar', 'munnar']
      };
      setToken(`demo_token_${Date.now()}`);
      setCurrentCachedUser(demoUser);
      return demoUser;
    }
  },

  // Get current user profile
  async getMe() {
    try {
      const data = await request('/auth/me', { method: 'GET' });
      if (data.user) setCurrentCachedUser(data.user);
      return data.user;
    } catch {
      return getCurrentCachedUser();
    }
  },

  // Sync wishlist to user profile in MongoDB
  async syncSaved(savedDestinations) {
    try {
      return await request('/auth/saved', {
        method: 'PUT',
        body: JSON.stringify({ savedDestinations })
      });
    } catch (e) {
      console.warn('Could not sync wishlist to backend:', e);
      return null;
    }
  },

  // Logout
  logout() {
    setToken(null);
    setCurrentCachedUser(null);
  }
};

/**
 * ----------------------------------------------------
 * BOOKINGS API
 * ----------------------------------------------------
 */
export const bookingsApi = {
  // Create booking
  async createBooking(bookingPayload) {
    const pnr = bookingPayload.pnr || `YTR${Math.floor(10000000 + Math.random() * 90000000)}`;
    const fullPayload = {
      ...bookingPayload,
      pnr,
      createdAt: new Date().toISOString(),
      status: 'CONFIRMED'
    };

    // Always cache locally for immediate offline reliability
    try {
      const raw = localStorage.getItem(LOCAL_BOOKINGS_KEY);
      const list = raw ? JSON.parse(raw) : [];
      localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify([fullPayload, ...list]));
    } catch (e) {
      console.error(e);
    }

    // Try MongoDB backend
    try {
      const data = await request('/bookings', {
        method: 'POST',
        body: JSON.stringify(fullPayload)
      });
      return data.booking || fullPayload;
    } catch (err) {
      console.info('Booking stored locally (backend unavailable):', err.message);
      return fullPayload;
    }
  },

  // Fetch bookings for user
  async getUserBookings(userId, userEmail) {
    let cloudList = [];
    try {
      const params = new URLSearchParams();
      if (userId) params.append('userId', userId);
      if (userEmail) params.append('email', userEmail);
      const data = await request(`/bookings?${params.toString()}`, { method: 'GET' });
      cloudList = data.bookings || [];
    } catch (err) {
      // Fallback
    }

    // Merge with local storage bookings
    let localList = [];
    try {
      const raw = localStorage.getItem(LOCAL_BOOKINGS_KEY);
      localList = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error(e);
    }

    const merged = new Map();
    [...cloudList, ...localList].forEach((b) => {
      if (b && b.pnr) {
        merged.set(b.pnr, b);
      }
    });

    return Array.from(merged.values()).sort(
      (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    );
  },

  // Get booking by PNR
  async getBookingByPnr(pnr) {
    if (!pnr) return null;
    try {
      const data = await request(`/bookings/${pnr.toUpperCase()}`, { method: 'GET' });
      return data.booking;
    } catch {
      try {
        const raw = localStorage.getItem(LOCAL_BOOKINGS_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return list.find((b) => b.pnr?.toUpperCase() === pnr.toUpperCase()) || null;
      } catch {
        return null;
      }
    }
  }
};

/**
 * ----------------------------------------------------
 * REVIEWS API
 * ----------------------------------------------------
 */
export const reviewsApi = {
  // Get reviews for destination
  async getDestinationReviews(destinationId) {
    let cloudReviews = [];
    try {
      const data = await request(`/reviews/${destinationId}`, { method: 'GET' });
      cloudReviews = data.reviews || [];
    } catch {
      // Ignore backend fail
    }

    // Merge with local reviews
    let localReviews = [];
    try {
      const raw = localStorage.getItem(LOCAL_REVIEWS_KEY);
      const list = raw ? JSON.parse(raw) : [];
      localReviews = list.filter((r) => r.destinationId === destinationId);
    } catch {
      // Ignore
    }

    const map = new Map();
    [...cloudReviews, ...localReviews].forEach((r) => {
      const key = `${r.destinationId}_${r.userName}_${r.comment}`;
      map.set(key, r);
    });

    return Array.from(map.values()).sort(
      (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    );
  },

  // Add review for destination
  async addDestinationReview(destinationId, reviewData) {
    const fullReview = {
      ...reviewData,
      destinationId,
      createdAt: new Date().toISOString()
    };

    // Cache locally
    try {
      const raw = localStorage.getItem(LOCAL_REVIEWS_KEY);
      const list = raw ? JSON.parse(raw) : [];
      localStorage.setItem(LOCAL_REVIEWS_KEY, JSON.stringify([fullReview, ...list]));
    } catch (e) {
      console.error(e);
    }

    // Try MongoDB backend
    try {
      const data = await request(`/reviews/${destinationId}`, {
        method: 'POST',
        body: JSON.stringify(fullReview)
      });
      return data.review || fullReview;
    } catch (e) {
      console.info('Review stored locally (backend unavailable):', e.message);
      return fullReview;
    }
  }
};
