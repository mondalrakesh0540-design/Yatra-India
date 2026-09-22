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

  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 relative">
      {/* Global Realistic Travel Video Background with Subtle Blur */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-[2.5px] opacity-75 transition-opacity duration-1000"
        >
          <source src={`${cleanBase}videos/clouds-travel.webm`} type="video/webm" />
          <source src={`${cleanBase}videos/varanasi-boat.webm`} type="video/webm" />
        </video>
        {/* Cinematic Subtle Dark Tint so the video is clearly visible while text stays readable */}
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)]" />
      </div>

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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
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
    <SavedProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppContent />
      </Router>
    </SavedProvider>
  );
}

export default App;
