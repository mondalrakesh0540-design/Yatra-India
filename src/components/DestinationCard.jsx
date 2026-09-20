import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Calendar, IndianRupee, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useSaved } from '../context/SavedContext';

export const DestinationCard = ({ destination, className = '' }) => {
  const { isSaved, toggleSaveDestination } = useSaved();
  const saved = isSaved(destination.id);

  return (
    <div
      className={`group relative bg-navy-900/90 rounded-2xl overflow-hidden border border-white/10 hover:border-saffron-500/50 shadow-glass transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${className}`}
    >
      {/* Image Container with Badges & Save Action */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'; }}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {destination.isHiddenGem && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-900/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Hidden Gem
            </span>
          )}
          {destination.isTrending && !destination.isHiddenGem && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-saffron-500/80 text-white backdrop-blur-md border border-saffron-400/30 flex items-center gap-1 shadow-sm">
              Trending
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-navy-950/70 text-slate-200 backdrop-blur-md border border-white/10 capitalize">
            {destination.category}
          </span>
        </div>

        {/* Save Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaveDestination(destination.id);
          }}
          aria-label={saved ? "Remove from wishlist" : "Save destination"}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            saved
              ? 'bg-saffron-500 text-white shadow-glow-saffron'
              : 'bg-navy-950/60 text-white hover:bg-navy-950/90 hover:scale-110'
          }`}
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        {/* Floating Rating on Image */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-md border border-white/10 text-xs">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="font-bold text-white">{destination.rating}</span>
          <span className="text-slate-400 text-[10px]">({destination.reviewsCount})</span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* State Tag */}
          <div className="flex items-center gap-1.5 text-xs text-saffron-400 font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.state}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-serif text-white group-hover:text-saffron-400 transition-colors line-clamp-1 mb-2">
            {destination.name}
          </h3>

          {/* Short description */}
          <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-4">
            {destination.shortDescription}
          </p>
        </div>

        {/* Footer Meta: Best Time & Budget */}
        <div className="pt-3 border-t border-white/10 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{destination.bestTimeToVisit ? destination.bestTimeToVisit.split('(')[0].trim() : 'Year-round'}</span>
            </span>
            <span className="font-bold text-white flex items-center">
              {destination.formattedBudget}
            </span>
          </div>

          {/* Explore Button */}
          <Link
            to={`/destination/${destination.id}`}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-saffron-500 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-saffron-500 transition-all flex items-center justify-center gap-2 group-hover:bg-saffron-500 group-hover:text-white"
          >
            <span>Explore Destination</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
