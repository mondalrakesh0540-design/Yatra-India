import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Instagram, Youtube, Facebook, Twitter, ArrowUp, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-glow-saffron overflow-hidden border border-white/20">
                <img src={`${import.meta.env.BASE_URL}logo-emblem.png`} alt="Yatra India Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider font-serif text-white">
                  YATRA <span className="text-saffron-500">INDIA</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
                  Explore The True Essence
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              “Discover India. Experience the Extraordinary.” <br />
              A premium travel discovery platform and smart trip planner curated for explorers seeking authentic destinations across all 28 states and 8 union territories.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-saffron-500 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-saffron-500 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-saffron-500 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-saffron-500 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore India */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore India
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/states" className="hover:text-saffron-400 transition-colors">
                  All 28 States
                </Link>
              </li>
              <li>
                <Link to="/states" className="hover:text-saffron-400 transition-colors">
                  8 Union Territories
                </Link>
              </li>
              <li>
                <Link to="/destinations?filter=hidden-gems" className="hover:text-saffron-400 transition-colors">
                  India's Hidden Gems
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-saffron-400 transition-colors">
                  Top 100+ Destinations
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-saffron-400 transition-colors">
                  Compare Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Travel Styles */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Travel Styles
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/destinations?category=mountains" className="hover:text-saffron-400 transition-colors">
                  Himalayan Mountains
                </Link>
              </li>
              <li>
                <Link to="/destinations?category=beaches" className="hover:text-saffron-400 transition-colors">
                  Tropical Beaches
                </Link>
              </li>
              <li>
                <Link to="/destinations?category=heritage" className="hover:text-saffron-400 transition-colors">
                  Heritage Forts & Palaces
                </Link>
              </li>
              <li>
                <Link to="/destinations?category=spiritual" className="hover:text-saffron-400 transition-colors">
                  Spiritual & Sacred
                </Link>
              </li>
              <li>
                <Link to="/destinations?category=wildlife" className="hover:text-saffron-400 transition-colors">
                  Wildlife Safaris
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Magazine & Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Resources & About
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/stories" className="hover:text-saffron-400 transition-colors">
                  Travel Stories & Blogs
                </Link>
              </li>
              <li>
                <Link to="/plan-trip" className="hover:text-saffron-400 transition-colors">
                  Smart Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-saffron-400 transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-saffron-400 transition-colors">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-saffron-400 transition-colors">
                  Privacy Policy & Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>for discovering India. © {new Date().getFullYear()} YATRA INDIA. All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-saffron-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
