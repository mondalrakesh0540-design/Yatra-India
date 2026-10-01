import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  authApi, 
  getToken, 
  getCurrentCachedUser, 
  checkBackendHealth 
} from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentCachedUser());
  const [loading, setLoading] = useState(true);
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  // Initialize and check user session & backend health
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      // Check MongoDB backend health
      const isOnline = await checkBackendHealth();
      if (mounted) setIsBackendConnected(isOnline);

      const token = getToken();
      if (token) {
        try {
          const profile = await authApi.getMe();
          if (mounted && profile) {
            setUser(profile);
          }
        } catch {
          // If token failed, keep cached user or clear
        }
      }
      if (mounted) setLoading(false);
    }

    initAuth();

    return () => {
      mounted = false;
    };
  }, []);

  // Register / Sign Up
  const signup = async (email, password, name = 'Traveler') => {
    const newUser = await authApi.register(name, email, password);
    setUser(newUser);
    return newUser;
  };

  // Sign In / Login
  const login = async (email, password) => {
    const loggedUser = await authApi.login(email, password);
    setUser(loggedUser);
    return loggedUser;
  };

  // Google Login fallback simulator
  const loginWithGoogle = async () => {
    const demoUser = await authApi.login('aarav.sharma@example.com', 'password123');
    demoUser.name = 'Aarav Sharma';
    demoUser.photoURL = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80';
    setUser(demoUser);
    return demoUser;
  };

  // Sign Out
  const logout = () => {
    authApi.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isBackendConnected,
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
