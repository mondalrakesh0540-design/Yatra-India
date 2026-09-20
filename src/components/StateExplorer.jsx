import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Compass, ArrowRight, Search, Sparkles, Landmark } from 'lucide-react';
import { STATES } from '../data/states';

export const StateExplorer = () => {
  const [filterType, setFilterType] = useState('all'); // 'all', 'states', 'uts'
  const [searchState, setSearchState] = useState('');

  const filtered = STATES.filter((s) => {
    if (filterType === 'states' && s.isUT) return false;
    if (filterType === 'uts' && !s.isUT) return false;
    if (searchState.trim()) {
      const q = searchState.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.capital.toLowerCase().includes(q) ||
        (s.iconicLandmark && s.iconicLandmark.toLowerCase().includes(q)) ||
        s.topDestinations.some((d) => d.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>State-by-State Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Explore India State by State
          </h2>
          <p className="text-slate-300 text-base mt-2 max-w-xl">
            Dive into the distinctive culture, topography, and signature destinations of every Indian territory.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="Filter states or capital..."
              className="pl-9 pr-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-saffron-500 w-full sm:w-56"
            />
          </div>

          {/* Type Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-navy-900 border border-white/10 text-xs font-medium">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterType === 'all' ? 'bg-saffron-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All (36)
            </button>
            <button
              onClick={() => setFilterType('states')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterType === 'states' ? 'bg-saffron-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              States (28)
            </button>
            <button
              onClick={() => setFilterType('uts')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterType === 'uts' ? 'bg-saffron-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              UTs (8)
            </button>
          </div>
        </div>
      </div>

      {/* Grid of State Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((st) => (
          <Link
            key={st.id}
            to={`/state/${st.id}`}
            className="group bg-navy-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-saffron-500/50 shadow-glass transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Hero Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={st.heroImage}
                alt={st.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-saffron-400 backdrop-blur-md border border-white/10">
                  {st.isUT ? 'Union Territory' : 'State'}
                </span>
              </div>

              {/* Title & Capital Overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-saffron-400 transition-colors truncate">
                  {st.name}
                </h3>
                <span className="text-xs text-slate-300">Capital: {st.capital}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
              {/* Famous Landmark Identifier */}
              <div className="p-2.5 rounded-xl bg-saffron-500/10 border border-saffron-500/25 flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-saffron-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[9px] font-extrabold text-saffron-400 uppercase tracking-widest block">
                    Famous Landmark
                  </span>
                  <span className="text-xs font-bold text-white line-clamp-1">
                    {st.iconicLandmark}
                  </span>
                </div>
              </div>

              {/* Best Season */}
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span className="truncate">Best: {st.bestSeason}</span>
              </div>

              {/* Top Destinations Snippet */}
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Top Destinations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {st.topDestinations.slice(0, 4).map((dest, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300"
                    >
                      {dest}
                    </span>
                  ))}
                  {st.topDestinations.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-saffron-500/10 text-[11px] text-saffron-300 font-medium">
                      +{st.topDestinations.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Explore Button */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-saffron-400 transition-colors">
                <span>Explore destinations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
