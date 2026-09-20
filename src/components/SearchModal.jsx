import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Compass, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { STATES } from '../data/states';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();

    // Match destinations
    const matchedDestinations = DESTINATIONS.filter(d => 
      d.name.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q)) ||
      d.topAttractions.some(a => a.toLowerCase().includes(q))
    ).slice(0, 6);

    // Match states
    const matchedStates = STATES.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.capital.toLowerCase().includes(q) ||
      s.topDestinations.some(td => td.toLowerCase().includes(q))
    ).slice(0, 3);

    setResults({
      destinations: matchedDestinations,
      states: matchedStates
    });
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = [
    'Goa', 'Kashmir', 'Darjeeling', 'Rajasthan', 'Kerala', 'Varanasi', 'Meghalaya', 'Hampi', 'Ladakh'
  ];

  const handleSelectDestination = (id) => {
    onClose();
    navigate(`/destination/${id}`);
  };

  const handleSelectState = (id) => {
    onClose();
    navigate(`/state/${id}`);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        className="w-full max-w-2xl bg-navy-900 border border-white/10 rounded-2xl shadow-glass overflow-hidden flex flex-col max-h-[80vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-navy-950/50">
          <Search className="w-5 h-5 text-saffron-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, states, attractions (e.g. Goa, Kashmir, Darjeeling)..."
            className="w-full bg-transparent text-white placeholder:text-slate-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-white/10 text-slate-300 hover:bg-white/20 ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="overflow-y-auto p-4 space-y-4 divide-y divide-white/5">
          {!query.trim() ? (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                Popular Indian Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-saffron-500/20 hover:text-saffron-300 border border-white/10 text-sm text-slate-300 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Destinations Matches */}
              {results.destinations?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Destinations
                  </h4>
                  <div className="space-y-1">
                    {results.destinations.map((dest) => (
                      <div
                        key={dest.id}
                        onClick={() => handleSelectDestination(dest.id)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors"
                      >
                        <img
                          src={dest.heroImage}
                          alt={dest.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white group-hover:text-saffron-400 transition-colors truncate">
                              {dest.name}
                            </span>
                            <span className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">
                              {dest.state}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            {dest.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-saffron-400 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* States Matches */}
              {results.states?.length > 0 && (
                <div className="pt-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    States & Territories
                  </h4>
                  <div className="space-y-1">
                    {results.states.map((st) => (
                      <div
                        key={st.id}
                        onClick={() => handleSelectState(st.id)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors"
                      >
                        <img
                          src={st.heroImage}
                          alt={st.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white group-hover:text-saffron-400 transition-colors">
                              {st.name}
                            </span>
                            {st.isUT && (
                              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
                                UT
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            Capital: {st.capital} • Best season: {st.bestSeason}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-saffron-400 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.destinations?.length === 0 && results.states?.length === 0 && (
                <div className="py-8 text-center text-slate-400">
                  <Compass className="w-8 h-8 mx-auto text-slate-500 mb-2 opacity-50" />
                  <p className="text-sm">No destinations found matching "{query}".</p>
                  <p className="text-xs text-slate-500 mt-1">Try searching for states like "Kerala", "Rajasthan", or styles like "Beaches".</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-white/5 bg-navy-950/40 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Search across 28 States, 8 UTs & 100+ Destinations</span>
          <span className="text-saffron-400 font-medium">Yatra India Discovery</span>
        </div>
      </div>
    </div>
  );
};
