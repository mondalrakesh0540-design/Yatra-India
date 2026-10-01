import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  auth, 
  db,
  googleProvider,
  isFirebaseConfigured, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged,
  doc,
  setDoc,
  serverTimestamp
} from '../services/firebase';

const AuthContext = createContext();

const LOCAL_STORAGE_USER_KEY = 'yatra_demo_auth_user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync user profile to Firestore `users` collection
  const syncUserToFirestore = async (firebaseUser, extraData = {}) => {
    if (!db || !firebaseUser) return;
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      await setDoc(userRef, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || extraData.displayName || 'Traveler',
        photoURL: firebaseUser.photoURL || null,
        lastLogin: serverTimestamp(),
        ...extraData
      }, { merge: true });
    } catch (err) {
      console.warn('Could not sync user to Firestore:', err);
    }
  };

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          await syncUserToFirestore(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Local/Demo Mode fallback
      try {
        const savedDemo = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        if (savedDemo) {
          setUser(JSON.parse(savedDemo));
        }
      } catch (e) {
        console.error('Error loading demo user:', e);
      }
      setLoading(false);
    }
  }, []);

  // Sign Up with Email and Password
  const signup = async (email, password, displayName = 'Traveler') => {
    if (isFirebaseConfigured && auth) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }
      await syncUserToFirestore(userCredential.user, { displayName, role: 'user', createdAt: serverTimestamp() });
      setUser(userCredential.user);
      return userCredential.user;
    } else {
      // Fallback demo account creation
      const demoUser = {
        uid: `demo_user_${Date.now()}`,
        email,
        displayName,
        photoURL: null,
        isDemo: true
      };
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser));
      setUser(demoUser);
      return demoUser;
    }
  };

  // Sign In with Email and Password
  const login = async (email, password) => {
    if (isFirebaseConfigured && auth) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await syncUserToFirestore(userCredential.user);
      setUser(userCredential.user);
      return userCredential.user;
    } else {
      // Fallback demo login
      const demoUser = {
        uid: `demo_user_${Date.now()}`,
        email,
        displayName: email.split('@')[0] || 'Traveler',
        photoURL: null,
        isDemo: true
      };
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser));
      setUser(demoUser);
      return demoUser;
    }
  };

  // Sign In with Google
  const loginWithGoogle = async () => {
    if (isFirebaseConfigured && auth && googleProvider) {
      const userCredential = await signInWithPopup(auth, googleProvider);
      await syncUserToFirestore(userCredential.user, { role: 'user' });
      setUser(userCredential.user);
      return userCredential.user;
    } else {
      // Fallback demo Google login
      const demoUser = {
        uid: `google_demo_${Date.now()}`,
        email: 'aarav.sharma@example.com',
        displayName: 'Aarav Sharma',
        photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        isDemo: true
      };
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser));
      setUser(demoUser);
      return demoUser;
    }
  };

  // Sign Out
  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isFirebaseConfigured,
        signup,
        login,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
