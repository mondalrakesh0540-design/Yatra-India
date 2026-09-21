import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

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

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname.endsWith('/login');

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      {/* Navbar */}
      {!isAuthPage && <Navbar onOpenSearch={() => setIsSearchOpen(true)} />}

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main Application Routes */}
      <main className="flex-1">
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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export function App() {
  return (
    <SavedProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppContent />
      </Router>
    </SavedProvider>
  );
}

export default App;
