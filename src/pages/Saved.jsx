import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, Sparkles } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';

export const Saved = () => {
  const { savedDestinations } = useSaved();
  const destinationsList = DESTINATIONS.filter((d) => savedDestinations.includes(d.id));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-saffron-500/20">
            <Heart className="w-3.5 h-3.5" />
            <span>Wishlist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-2">
            Saved Destinations
          </h1>
          <p className="text-slate-400 text-sm font-light">
            Your personal collection of bookmarked Indian places to visit.
          </p>
        </div>

        <span className="text-xs font-semibold px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-saffron-400 self-start sm:self-auto">
          {destinationsList.length} Saved Place{destinationsList.length === 1 ? '' : 's'}
        </span>
      </div>

      {/* Destinations Grid */}
      {destinationsList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsList.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="p-16 rounded-3xl bg-navy-900/40 border border-white/10 text-center max-w-lg mx-auto">
          <Heart className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-40" />
          <h3 className="text-xl font-bold font-serif text-white mb-2">
            No Saved Destinations Yet
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
            Click the heart icon on any destination card to bookmark it for quick access when exploring India.
          </p>
          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white text-xs font-bold shadow-glow-saffron inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Destinations</span>
          </Link>
        </div>
      )}
    </div>
  );
};
