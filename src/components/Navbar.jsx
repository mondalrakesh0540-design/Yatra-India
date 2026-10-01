import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, MapPin, Compass, BookOpen, Layers, Menu, X, ArrowRight, Sparkles, Scale, User, LogOut, Ticket, ChevronDown } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { useAuth } from '../context/AuthContext';

export const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { savedDestinations, compareList } = useSaved();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    { name: 'Bookings', path: '/#booking-section' },
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

            {/* User Profile or Sign In */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="hidden sm:inline-flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all border border-white/15 hover:border-saffron-500/40 ml-1 shadow-sm"
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || "User"} 
                      className="w-6 h-6 rounded-full object-cover border border-saffron-400"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-saffron-500 to-amber-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {(user.displayName || user.email || 'T')[0].toUpperCase()}
                    </div>
                  )}
                  <span className="max-w-[100px] truncate">{user.displayName || user.email?.split('@')[0] || 'Traveler'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-white/15 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-white/10">
                      <p className="text-xs font-semibold text-white truncate">{user.displayName || 'Traveler'}</p>
                      <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                      <span className="inline-block mt-1 text-[10px] text-saffron-400 font-medium bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                        {user.isDemo ? 'Demo Mode' : 'Firebase Verified'}
                      </span>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/#booking-section"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Ticket className="w-4 h-4 text-saffron-400" />
                        <span>My Bookings</span>
                      </Link>
                      <Link
                        to="/saved"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Heart className="w-4 h-4 text-saffron-400" />
                        <span>Saved Wishlist ({savedDestinations.length})</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-white/10">
                      <button
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-saffron-500 text-white transition-all border border-white/15 hover:shadow-glow-saffron ml-1"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </Link>
            )}

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

          <div className="pt-6 border-t border-white/10">
            {user ? (
              <div className="mb-4 p-3 rounded-xl bg-navy-900 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || "User"} 
                      className="w-10 h-10 rounded-full object-cover border border-saffron-400"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-amber-600 text-white font-bold text-sm flex items-center justify-center">
                      {(user.displayName || user.email || 'T')[0].toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white truncate">{user.displayName || 'Traveler'}</p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-xs font-semibold border border-red-500/30 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 mb-3"
              >
                <User className="w-4 h-4 text-saffron-400" />
                <span>Sign In / Register</span>
              </Link>
            )}
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
