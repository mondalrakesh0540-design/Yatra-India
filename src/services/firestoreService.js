import { 
  db, 
  isFirebaseConfigured, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  addDoc, 
  serverTimestamp 
} from './firebase';

const LOCAL_STORAGE_BOOKINGS_KEY = 'yatra_user_bookings';
const LOCAL_STORAGE_REVIEWS_KEY = 'yatra_destination_reviews';

/**
 * Helper to get local bookings backup
 */
const getLocalBookings = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_BOOKINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading local bookings:', e);
    return [];
  }
};

/**
 * Helper to save local bookings backup
 */
const saveLocalBookings = (bookings) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_BOOKINGS_KEY, JSON.stringify(bookings));
  } catch (e) {
    console.error('Error saving local bookings:', e);
  }
};

/**
 * Create and persist a new travel booking (Flight, Train, or Bus)
 */
export const createBooking = async (bookingData) => {
  const pnr = bookingData.pnr || `YTR${Math.floor(10000000 + Math.random() * 90000000)}`;
  const timestamp = new Date().toISOString();

  const record = {
    ...bookingData,
    pnr,
    createdAt: timestamp,
    status: bookingData.status || 'CONFIRMED'
  };

  // Always save to local storage for immediate offline resilience
  const currentLocal = getLocalBookings();
  saveLocalBookings([record, ...currentLocal]);

  // If live Firebase is configured, persist to Cloud Firestore
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'bookings', pnr);
      await setDoc(docRef, {
        ...record,
        serverTimestamp: serverTimestamp()
      });
      console.info(`✓ Booking ${pnr} successfully saved to Cloud Firestore`);
    } catch (error) {
      console.warn('Could not save booking to Firestore, cached locally:', error);
    }
  }

  return record;
};

/**
 * Fetch all bookings for a user by User ID or Passenger Email
 */
export const getUserBookings = async (userId, userEmail) => {
  let cloudBookings = [];

  if (isFirebaseConfigured && db && (userId || userEmail)) {
    try {
      const bookingsRef = collection(db, 'bookings');
      let q;
      if (userId) {
        q = query(bookingsRef, where('userId', '==', userId));
      } else {
        q = query(bookingsRef, where('passengerEmail', '==', userEmail));
      }

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        cloudBookings.push({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.warn('Error fetching bookings from Firestore, falling back to local:', error);
    }
  }

  // Merge with local bookings, avoiding duplicates by PNR
  const localBookings = getLocalBookings();
  const mergedMap = new Map();

  [...cloudBookings, ...localBookings].forEach((b) => {
    if (b && b.pnr) {
      // If user is specified, filter matching bookings
      if (userId && b.userId && b.userId !== userId) return;
      if (userEmail && b.passengerEmail && b.passengerEmail.toLowerCase() !== userEmail.toLowerCase()) return;
      mergedMap.set(b.pnr, b);
    }
  });

  return Array.from(mergedMap.values()).sort(
    (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  );
};

/**
 * Retrieve a single booking by PNR code
 */
export const getBookingByPnr = async (pnr) => {
  if (!pnr) return null;
  const cleanPnr = pnr.trim().toUpperCase();

  // Try Firestore first
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'bookings', cleanPnr);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
    } catch (e) {
      console.warn('Firestore PNR query error:', e);
    }
  }

  // Fallback to local storage
  const localList = getLocalBookings();
  return localList.find((b) => b.pnr && b.pnr.toUpperCase() === cleanPnr) || null;
};

/**
 * Synchronize user wishlist/saved destinations to Firestore
 */
export const syncUserSavedDestinations = async (userId, savedIds) => {
  if (!userId) return;
  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, { savedDestinations: savedIds, updatedAt: serverTimestamp() }, { merge: true });
    } catch (e) {
      console.warn('Error syncing saved destinations to Firestore:', e);
    }
  }
};

/**
 * Fetch user saved destinations from Firestore
 */
export const getUserSavedDestinations = async (userId) => {
  if (!userId || !isFirebaseConfigured || !db) return null;
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);
    if (snap.exists() && snap.data().savedDestinations) {
      return snap.data().savedDestinations;
    }
  } catch (e) {
    console.warn('Error fetching saved destinations from Firestore:', e);
  }
  return null;
};

/**
 * Submit a community destination review
 */
export const addDestinationReview = async (destinationId, reviewData) => {
  const newReview = {
    ...reviewData,
    destinationId,
    createdAt: new Date().toISOString()
  };

  if (isFirebaseConfigured && db) {
    try {
      await addDoc(collection(db, 'reviews'), {
        ...newReview,
        serverTimestamp: serverTimestamp()
      });
    } catch (e) {
      console.warn('Error saving review to Firestore:', e);
    }
  }

  // Cache locally
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_REVIEWS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    localStorage.setItem(LOCAL_STORAGE_REVIEWS_KEY, JSON.stringify([newReview, ...list]));
  } catch (e) {
    console.error(e);
  }

  return newReview;
};

/**
 * Fetch reviews for a specific destination
 */
export const getDestinationReviews = async (destinationId) => {
  const reviews = [];
  if (isFirebaseConfigured && db) {
    try {
      const q = query(
        collection(db, 'reviews'),
        where('destinationId', '==', destinationId)
      );
      const snap = await getDocs(q);
      snap.forEach((d) => reviews.push({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn('Error fetching reviews from Firestore:', e);
    }
  }

  // Also check local storage reviews
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_REVIEWS_KEY);
    if (raw) {
      const list = JSON.parse(raw);
      const filtered = list.filter((r) => r.destinationId === destinationId);
      filtered.forEach((r) => {
        if (!reviews.some((cr) => cr.createdAt === r.createdAt && cr.userName === r.userName)) {
          reviews.push(r);
        }
      });
    }
  } catch (e) {
    console.error(e);
  }

  return reviews;
};
