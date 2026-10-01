import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Heart, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  ArrowUp, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { newsletterApi } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null); // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setSubStatus('loading');
      setMessage('');
      const res = await newsletterApi.subscribe(email);
      setSubStatus('success');
      setMessage(res.message || 'Thank you for subscribing to Yatra India!');
      setEmail('');
    } catch (err) {
      setSubStatus('error');
      setMessage(err.message || 'Unable to subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Card (Roadmap Step 6) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90 border border-white/10 shadow-glass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-saffron-500/10 text-saffron-400 border border-saffron-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Yatra India Dispatch</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide">
                Get Hidden Gems & Cultural Guides in Your Inbox
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Join over 50,000+ passionate explorers. Handcrafted itineraries, secret monsoons, and verified transport routes sent once every week. No spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      disabled={subStatus === 'loading'}
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-navy-950/80 border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-saffron-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={subStatus === 'loading'}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-glow-saffron transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-50"
                  >
                    {subStatus === 'loading' ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {message && (
                  <div className={`flex items-center gap-1.5 text-xs pt-1 ${
                    subStatus === 'success' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {subStatus === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center shadow-glow-saffron">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider font-serif text-white">
                  YATRA <span className="text-saffron-500">INDIA</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-medium">
                  Experience Extraordinary
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              “Discover India. Experience the Extraordinary.” <br />
              A premium travel discovery platform curated for explorers seeking authentic destinations across all 28 states and 8 union territories.
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
                  Top 180+ Destinations
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

          {/* Column 3: Resources, About & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              About & Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-saffron-400 transition-colors font-semibold text-slate-200">
                  About Yatra India
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-saffron-400 transition-colors font-semibold text-slate-200">
                  Contact Us & Helpdesk
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-saffron-400 transition-colors">
                  Travel Stories & Blogs
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
