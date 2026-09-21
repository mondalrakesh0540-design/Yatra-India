import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, MapPin, Search, Landmark, Calendar, Globe2,
  ArrowRight, Sparkles, SlidersHorizontal, Filter, Star
} from 'lucide-react';
import { STATES } from '../data/states';
import { DESTINATIONS } from '../data/destinations';

const REGIONS = [
  { name: 'All', label: 'All India' },
  { name: 'North', label: 'North India', states: ['jammu-and-kashmir','ladakh','himachal-pradesh','uttarakhand','punjab','haryana','delhi','chandigarh','uttar-pradesh'] },
  { name: 'South', label: 'South India', states: ['kerala','karnataka','tamil-nadu','andhra-pradesh','telangana','puducherry','lakshadweep'] },
  { name: 'West', label: 'West India', states: ['rajasthan','gujarat','goa','maharashtra','dadra-nagar-haveli-daman-diu'] },
  { name: 'East', label: 'East India', states: ['west-bengal','odisha','bihar','jharkhand','andaman-and-nicobar'] },
  { name: 'Central', label: 'Central India', states: ['madhya-pradesh','chhattisgarh'] },
  { name: 'Northeast', label: 'Northeast India', states: ['assam','arunachal-pradesh','meghalaya','sikkim','nagaland','manipur','mizoram','tripura'] },
];

export const States = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');
  const [showUTsOnly, setShowUTsOnly] = useState(false);

  // Count destinations per state
  const destCountMap = useMemo(() => {
    const map = {};
    DESTINATIONS.forEach((d) => {
      map[d.stateId] = (map[d.stateId] || 0) + 1;
    });
    return map;
  }, []);

  const filteredStates = useMemo(() => {
    return STATES.filter((st) => {
      const matchSearch =
        searchQuery === '' ||
        st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.iconicLandmark.toLowerCase().includes(searchQuery.toLowerCase());
      const matchRegion =
        activeRegion === 'All' ||
        REGIONS.find((r) => r.name === activeRegion)?.states?.includes(st.id);
      const matchUT = !showUTsOnly || st.isUT;
      return matchSearch && matchRegion && matchUT;
    });
  }, [searchQuery, activeRegion, showUTsOnly]);

  const stateCount = STATES.filter((s) => !s.isUT).length;
  const utCount = STATES.filter((s) => s.isUT).length;

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Page Hero */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80"
            alt="Map of India"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/80 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/15 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-saffron-500/25">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Complete India Directory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white tracking-tight mb-5">
            All States &amp;{' '}
            <span className="bg-gradient-to-r from-saffron-400 to-amber-400 bg-clip-text text-transparent">
              Union Territories
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Explore every corner of India — from the icy heights of Ladakh to the tropical shores of Lakshadweep. Click any state to discover its top tourist destinations and iconic landmarks.
          </p>

          {/* Stats Strip */}
          <div className="grid grid-cols-3 max-w-lg mx-auto gap-6 pt-6 border-t border-white/10 text-center">
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-white">{stateCount}</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">States</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-saffron-400">{utCount}</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Union Territories</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-amber-400">{DESTINATIONS.length}+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Destinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-navy-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 shadow-glass space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search state, capital, or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-saffron-500 transition-colors"
            />
          </div>

          {/* Region Tabs & UT Toggle */}
          <div className="flex flex-wrap items-center gap-2.5">
            {REGIONS.map((reg) => (
              <button
                key={reg.name}
                onClick={() => setActiveRegion(reg.name)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeRegion === reg.name
                    ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {reg.label}
              </button>
            ))}
            <button
              onClick={() => setShowUTsOnly(!showUTsOnly)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                showUTsOnly
                  ? 'bg-amber-500 text-navy-950'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>UTs Only</span>
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredStates.length}</strong> of {STATES.length} states &amp; UTs
          </p>
        </div>
      </div>

      {/* States Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredStates.map((state, index) => {
              const destCount = destCountMap[state.id] || 0;
              return (
                <motion.div
                  key={state.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link
                    to={`/state/${state.id}`}
                    className="group block bg-navy-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-saffron-500/50 transition-all duration-300 hover:shadow-glow-saffron hover:-translate-y-1 shadow-glass"
                  >
                    {/* State Image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={state.heroImage}
                        alt={state.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                      {/* UT Badge */}
                      {state.isUT && (
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-500 text-navy-950 shadow-sm">
                          UT
                        </span>
                      )}

                      {/* Destination Count Badge */}
                      {destCount > 0 && (
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-saffron-500/90 backdrop-blur-md text-white flex items-center gap-1">
                          <Star className="w-2.5 h-2.5" />
                          {destCount} spots
                        </span>
                      )}

                      {/* State Name on Image */}
                      <div className="absolute bottom-3 left-4">
                        <h3 className="text-lg font-bold font-serif text-white group-hover:text-saffron-200 transition-colors">
                          {state.name}
                        </h3>
                      </div>
                    </div>

                    {/* State Info */}
                    <div className="p-4 space-y-2.5">
                      {/* Iconic Landmark */}
                      <div className="flex items-center gap-2 text-xs text-saffron-400">
                        <Landmark className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate font-medium">{state.iconicLandmark}</span>
                      </div>

                      {/* Capital & Season */}
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>Capital: <strong className="text-slate-300">{state.capital}</strong></span>
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Calendar className="w-3 h-3" />
                          <span className="text-[10px]">{state.bestSeason?.split(' ')[0]}</span>
                        </span>
                      </div>

                      {/* Famous For Tags */}
                      <div className="flex flex-wrap gap-1">
                        {(state.famousFor || []).slice(0, 3).map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] bg-white/5 border border-white/8 text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          {destCount > 0 ? `${destCount} destinations listed` : 'View highlights'}
                        </span>
                        <span className="flex items-center gap-1 text-saffron-400 text-xs font-semibold group-hover:gap-2 transition-all">
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>

        {filteredStates.length === 0 && (
          <div className="text-center py-20">
            <Compass className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No states found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your search or filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveRegion('All'); setShowUTsOnly(false); }}
              className="mt-4 px-5 py-2 rounded-xl bg-saffron-500 text-white text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
