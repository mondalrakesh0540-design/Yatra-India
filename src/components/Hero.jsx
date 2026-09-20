import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Compass, Sparkles, ArrowRight, MapPin, Calendar, Heart, Shield } from 'lucide-react';

export const Hero = ({ onOpenSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      onOpenSearch();
    }
  };

  const trendingTags = ['Goa', 'Kashmir', 'Darjeeling', 'Rajasthan', 'Kerala', 'Varanasi', 'Meghalaya'];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Background with Deep Gradient & Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic India"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '14s' }}
        />
        {/* Soft Multi-stop Vignette for extreme legibility and luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
        {/* Subtle decorative golden mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-saffron-300 text-xs sm:text-sm font-medium mb-6 shadow-glass animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Discover India. Experience the Extraordinary.</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif tracking-tight text-white leading-[1.15] max-w-4xl mb-6 drop-shadow-md">
          India is not just a destination. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-saffron-200 to-amber-400 bg-clip-text text-transparent">
            It is a thousand stories waiting to be explored.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200/90 max-w-2xl mb-10 leading-relaxed font-light">
          Explore the places, cultures, adventures and hidden gems that make India unforgettable across all 28 states and 8 union territories.
        </p>

        {/* Cinematic Search Bar */}
        <div className="w-full max-w-3xl mb-8">
          <form
            onSubmit={handleSearchSubmit}
            className="p-2 sm:p-2.5 rounded-2xl bg-navy-900/80 backdrop-blur-xl border border-white/20 shadow-glass flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:border-saffron-500/80 focus-within:ring-2 focus-within:ring-saffron-500/20"
          >
            <div className="flex items-center gap-3 w-full px-3 py-1.5">
              <MapPin className="w-5 h-5 text-saffron-500 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Where do you want to go? (e.g. Kashmir, Goa, Kerala...)"
                className="w-full bg-transparent text-white placeholder:text-slate-400 text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-white font-semibold text-sm shadow-glow-saffron transition-all shrink-0 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </form>

          {/* Quick Search Suggestions */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-3 text-xs text-slate-300">
            <span className="text-slate-400">Popular:</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => navigate(`/destinations?search=${encodeURIComponent(tag)}`)}
                className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate('/destinations')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-navy-950 hover:bg-slate-100 font-bold text-base shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-saffron-600" />
            <span>Explore India</span>
          </button>
          <button
            onClick={() => navigate('/plan-trip')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Key Highlights Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-center">
          <div>
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-white">28</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Diverse States</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-white">8</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Union Territories</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-saffron-400">100+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Destinations</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-amber-400">5,000+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Years of Heritage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
