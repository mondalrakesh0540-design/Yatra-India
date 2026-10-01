import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { BackgroundVideo } from './components/BackgroundVideo';

// Pages
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { States } from './pages/States';
import { StateDetail } from './pages/StateDetail';
import { Saved } from './pages/Saved';
import { Compare } from './pages/Compare';
import { Stories } from './pages/Stories';
import { StoryDetail } from './pages/StoryDetail';
import { AdminDashboard } from './pages/AdminDashboard';
import { Albums } from './pages/Albums';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Profile } from './pages/Profile';

// Helper component to scroll to top or hash anchor on navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// Protected Route Component for User Profile
const ProtectedUserRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 text-xs">
        Loading session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const authRoutes = ['/login', '/register', '/forgot-password', '/reset-password', '/admin/login'];
  const isAuthPage = authRoutes.some((path) => location.pathname === path || location.pathname.endsWith(path));

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 relative">
      {/* Global Realistic Travel Video Background */}
      <BackgroundVideo />

      {/* Navbar */}
      <div className="relative z-50">
        {!isAuthPage && <Navbar onOpenSearch={() => setIsSearchOpen(true)} />}
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main Application Routes */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/states" element={<States />} />
          <Route path="/state/:id" element={<StateDetail />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/plan-trip" element={<Navigate to="/destinations" replace />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          
          {/* Authentication & User Routes */}
          <Route path="/login" element={<Login defaultIsAdmin={false} />} />
          <Route path="/admin/login" element={<Login defaultIsAdmin={true} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/profile"
            element={
              <ProtectedUserRoute>
                <Profile />
              </ProtectedUserRoute>
            }
          />

          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <SavedProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <AppContent />
        </Router>
      </SavedProvider>
    </AuthProvider>
  );
}

export default App;
