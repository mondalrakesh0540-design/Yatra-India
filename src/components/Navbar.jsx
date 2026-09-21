import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, MapPin, Compass, BookOpen, Layers, Menu, X, ArrowRight, Sparkles, Scale, User } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { savedDestinations, compareList } = useSaved();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'States & UTs', path: '/states' },
    { name: 'Visual Albums', path: '/albums' },
    { name: 'Travel Styles', path: '/#categories' },
    { name: 'Stories', path: '/stories' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 shadow-glass py-3.5'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center shadow-glow-saffron group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider font-serif text-white flex items-center gap-1.5">
                YATRA <span className="text-saffron-500 font-extrabold tracking-widest text-sm uppercase bg-saffron-500/10 px-1.5 py-0.5 rounded border border-saffron-500/30">INDIA</span>
              </span>
              <span className="text-[10px] text-slate-300 tracking-widest uppercase font-medium">Experience Extraordinary</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-saffron-400 relative py-1 ${
                  location.pathname === link.path ? 'text-saffron-400 font-semibold' : 'text-slate-200'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-500 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search destinations"
              className="p-2.5 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors relative"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Compare */}
            <Link
              to="/compare"
              aria-label="Compare destinations"
              className="p-2.5 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors relative hidden sm:flex items-center justify-center"
            >
              <Scale className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 text-navy-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* Wishlist / Saved */}
            <Link
              to="/saved"
              aria-label="Saved wishlist"
              className="p-2.5 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {savedDestinations.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-saffron-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {savedDestinations.length}
                </span>
              )}
            </Link>

            {/* Sign In Link */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-saffron-500 text-white transition-all border border-white/15 hover:shadow-glow-saffron ml-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg font-medium text-slate-200 hover:text-saffron-400 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/compare"
              className="flex items-center justify-between text-lg font-medium text-slate-200 hover:text-saffron-400 py-2 border-b border-white/5"
            >
              <span>Compare Destinations</span>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
                {compareList.length} selected
              </span>
            </Link>
            <Link
              to="/saved"
              className="flex items-center justify-between text-lg font-medium text-slate-200 hover:text-saffron-400 py-2 border-b border-white/5"
            >
              <span>Saved Wishlist</span>
              <span className="text-xs bg-saffron-500/20 text-saffron-400 px-2 py-0.5 rounded-full">
                {savedDestinations.length} saved
              </span>
            </Link>
          </div>

          <div className="pt-6">
            <Link
              to="/login"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 mb-3"
            >
              <User className="w-4 h-4 text-saffron-400" />
              <span>Sign In / Register</span>
            </Link>
            <Link
              to="/destinations"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white font-semibold shadow-glow-saffron"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore All Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
