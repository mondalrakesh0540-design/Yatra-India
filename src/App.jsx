import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

// Pages
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { States } from './pages/States';
import { StateDetail } from './pages/StateDetail';
import { PlanTrip } from './pages/PlanTrip';
import { Saved } from './pages/Saved';
import { Compare } from './pages/Compare';
import { Stories } from './pages/Stories';
import { StoryDetail } from './pages/StoryDetail';
import { AdminDashboard } from './pages/AdminDashboard';

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

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <SavedProvider>
      <Router>
        <ScrollToTop />
        <ScrollProgressBar />
        <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
          {/* Navbar */}
          <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

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
              <Route path="/plan-trip" element={<PlanTrip />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/story/:id" element={<StoryDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </SavedProvider>
  );
}

export default App;
