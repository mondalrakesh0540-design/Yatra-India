import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Heart, 
  MapPin, 
  Compass, 
  Menu, 
  X, 
  Scale, 
  User, 
  LogOut, 
  Ticket, 
  ChevronDown, 
  ShieldCheck, 
  UserPlus,
  KeyRound
} from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { useAuth } from '../context/AuthContext';

export const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { savedDestinations, compareList } = useSaved();
  const { user, isAuthenticated, isAdmin, isSuperAdmin, logout } = useAuth();

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
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Bookings', path: '/#booking-section' },
    { name: 'States & UTs', path: '/states' },
    { name: 'Visual Albums', path: '/albums' },
    { name: 'Stories', path: '/stories' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-glass py-3.5'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
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

          {/* Right Action Icons & Auth Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              aria-label="Search destinations"
              className="p-2.5 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Compare Tool */}
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

            {/* Wishlist */}
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

            {/* Admin Direct Button (Visible if logged in as Admin/Superadmin) */}
            {isAdmin && (
              <Link
                to="/admin"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin CMS</span>
              </Link>
            )}

            {/* AUTHENTICATION STATE CONTROLS */}
            {isAuthenticated ? (
              /* LOGGED IN USER DROPDOWN */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all border border-white/15 hover:border-saffron-500/40 shadow-sm"
                >
                  {user?.profileImage ? (
                    <img 
                      src={user.profileImage} 
                      alt={user.name || "User"} 
                      className="w-6 h-6 rounded-full object-cover border border-saffron-400"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-saffron-500 to-amber-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {(user?.name || user?.email || 'T')[0].toUpperCase()}
                    </div>
                  )}
                  <span className="max-w-[90px] sm:max-w-[120px] truncate">{user?.name || 'Traveler'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-white/15 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2.5 border-b border-white/10">
                      <p className="text-xs font-bold text-white truncate">{user?.name}</p>
                      <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
                      <span className={`inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isSuperAdmin ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                        isAdmin ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                        'bg-saffron-500/10 text-saffron-400 border-saffron-500/20'
                      }`}>
                        {user?.role}
                      </span>
                    </div>

                    <div className="py-1">
                      {isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-emerald-300 hover:text-white hover:bg-emerald-500/15 font-semibold transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>Admin Dashboard</span>
                        </Link>
                      )}

                      <Link
                        to="/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <User className="w-4 h-4 text-saffron-400" />
                        <span>My Profile</span>
                      </Link>

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
                        <span>Wishlist ({savedDestinations.length})</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-white/10">
                      <button
                        onClick={async () => {
                          setUserDropdownOpen(false);
                          await logout();
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
              /* LOGGED OUT BUTTONS: LOGIN & SIGN UP */
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white transition-all border border-white/10 shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron hover:brightness-110 transition-all flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-200 hover:bg-white/10 ml-1"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-navy-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-4">
            {/* User Info if logged in */}
            {isAuthenticated ? (
              <div className="p-4 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron-500 text-white font-bold flex items-center justify-center shadow-glow-saffron">
                    {(user?.name || user?.email || 'T')[0].toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{user?.name}</h4>
                    <span className="text-[10px] text-slate-400 capitalize">{user?.role}</span>
                  </div>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold text-white"
                >
                  Profile
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-navy-900 border border-white/10 text-white text-xs font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-saffron-500 text-white text-xs font-bold shadow-glow-saffron"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Admin Dashboard</span>
              </Link>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-saffron-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-medium text-slate-200"
            >
              <span>Saved Places</span>
              <span className="px-2 py-0.5 rounded-full bg-saffron-500 text-white text-xs font-bold">
                {savedDestinations.length}
              </span>
            </Link>
          </div>

          {isAuthenticated && (
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={async () => {
                  setMobileMenuOpen(false);
                  await logout();
                }}
                className="w-full py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
