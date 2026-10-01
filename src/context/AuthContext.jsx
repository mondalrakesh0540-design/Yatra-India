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
  const [isBackendConnected, setIsBackendConnected] = useState(true);

  // Initialize session and verify token with MongoDB on load/refresh
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      try {
        const isOnline = await checkBackendHealth();
        if (mounted) setIsBackendConnected(isOnline);

        const token = getToken();
        if (token) {
          const profile = await authApi.getMe();
          if (mounted && profile) {
            setUser(profile);
          } else if (mounted && !profile) {
            // Token is invalid/expired
            setUser(null);
          }
        }
      } catch (err) {
        console.warn('Auth initialization:', err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    initAuth();

    return () => {
      mounted = false;
    };
  }, []);

  // Real User Registration
  const register = async (name, email, password, confirmPassword) => {
    const newUser = await authApi.register(name, email, password, confirmPassword);
    setUser(newUser);
    return newUser;
  };

  // Real User Login
  const login = async (email, password, rememberMe = false) => {
    const loggedUser = await authApi.login(email, password, rememberMe);
    setUser(loggedUser);
    return loggedUser;
  };

  // Real Admin Portal Login
  const adminLogin = async (email, password, rememberMe = false) => {
    const adminUser = await authApi.adminLogin(email, password, rememberMe);
    setUser(adminUser);
    return adminUser;
  };

  // Real Profile Update
  const updateProfile = async (profileData) => {
    const updated = await authApi.updateProfile(profileData);
    setUser(updated);
    return updated;
  };

  // Change Password
  const changePassword = async (currentPassword, newPassword, confirmNewPassword) => {
    return await authApi.changePassword(currentPassword, newPassword, confirmNewPassword);
  };

  // Forgot Password Request
  const forgotPassword = async (email) => {
    return await authApi.forgotPassword(email);
  };

  // Reset Password Execution
  const resetPassword = async (token, password, confirmPassword) => {
    const result = await authApi.resetPassword(token, password, confirmPassword);
    if (result.user) setUser(result.user);
    return result;
  };

  // Logout
  const logout = async () => {
    await authApi.logout();
    setUser(null);
  };

  // Role helpers
  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
  const isSuperAdmin = user?.role === 'superadmin';

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isBackendConnected,
        isAuthenticated,
        isAdmin,
        isSuperAdmin,
        register,
        signup: register, // Alias for backward compatibility
        login,
        adminLogin,
        logout,
        updateProfile,
        changePassword,
        forgotPassword,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
