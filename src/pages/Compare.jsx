import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, X, Plus, Star, MapPin, Calendar, Clock, Plane, Train, Sparkles } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { DESTINATIONS } from '../data/destinations';

export const Compare = () => {
  const { compareList, toggleCompare } = useSaved();
  const [selectorOpen, setSelectorOpen] = useState(false);

  const destinations = DESTINATIONS.filter((d) => compareList.includes(d.id));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/20">
            <Scale className="w-3.5 h-3.5" />
            <span>Side-by-Side Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Compare Destinations
          </h1>
          <p className="text-slate-400 text-sm font-light mt-1">
            Compare season, weather, duration, attractions, and accessibility to make the perfect choice.
          </p>
        </div>

        {compareList.length < 4 && (
          <button
            onClick={() => setSelectorOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron flex items-center gap-2 self-start sm:self-auto transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Destination ({compareList.length}/4)</span>
          </button>
        )}
      </div>

      {/* Comparison Table / Matrix */}
      {destinations.length > 0 ? (
        <div className="overflow-x-auto pb-6">
          <div className="min-w-[800px] grid grid-cols-5 gap-4">
            {/* Metric Labels Column */}
            <div className="space-y-6 pt-52 text-xs font-bold text-slate-400 uppercase tracking-wider border-r border-white/10 pr-4">
              <div className="h-10 flex items-center">State / Region</div>
              <div className="h-10 flex items-center">Travel Style</div>
              <div className="h-10 flex items-center">Rating</div>
              <div className="h-10 flex items-center">Ideal Duration</div>
              <div className="h-10 flex items-center">Best Season</div>
              <div className="h-14 flex items-center">Summer Weather</div>
              <div className="h-14 flex items-center">Winter Weather</div>
              <div className="h-20 flex items-center">Top Attractions</div>
              <div className="h-14 flex items-center">Nearest Airport</div>
              <div className="h-14 flex items-center">Railway Access</div>
            </div>

            {/* Destination Columns */}
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-navy-900/80 border border-white/10 rounded-2xl p-4 shadow-glass space-y-6 relative flex flex-col justify-between"
              >
                {/* Remove Button */}
                <button
                  onClick={() => toggleCompare(dest.id)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-navy-950/80 text-slate-400 hover:text-white hover:bg-red-500/80 transition-colors z-10"
                  title="Remove from comparison"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Card Top Preview */}
                <div>
                  <div className="h-32 w-full rounded-xl overflow-hidden mb-3">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white truncate">
                    {dest.name}
                  </h3>
                  <Link
                    to={`/destination/${dest.id}`}
                    className="text-[11px] text-saffron-400 hover:underline inline-block mt-0.5"
                  >
                    View Destination →
                  </Link>
                </div>

                {/* Metric Rows */}
                <div className="space-y-6 text-xs text-slate-200 divide-y divide-white/5">
                  <div className="h-10 flex items-center pt-2 font-medium">{dest.state}</div>
                  <div className="h-10 flex items-center pt-2 capitalize text-saffron-400 font-semibold">{dest.category}</div>
                  <div className="h-10 flex items-center pt-2 font-bold text-amber-400">★ {dest.rating} ({dest.reviewsCount})</div>
                  <div className="h-10 flex items-center pt-2 font-medium">{dest.recommendedDuration}</div>
                  <div className="h-10 flex items-center pt-2 text-slate-300">{dest.bestTimeToVisit ? dest.bestTimeToVisit.split('(')[0].trim() : 'Year-round'}</div>
                  <div className="h-14 flex items-center pt-2 text-slate-400 leading-snug">{dest.weatherInfo?.summer || '25°C to 35°C'}</div>
                  <div className="h-14 flex items-center pt-2 text-slate-400 leading-snug">{dest.weatherInfo?.winter || '15°C to 25°C'}</div>
                  <div className="h-20 flex items-center pt-2 text-slate-300 leading-snug line-clamp-3">
                    {dest.topAttractions?.slice(0, 3).join(', ')}
                  </div>
                  <div className="h-14 flex items-center pt-2 text-slate-400 line-clamp-2 leading-snug">{dest.howToReach?.airport}</div>
                  <div className="h-14 flex items-center pt-2 text-slate-400 line-clamp-2 leading-snug">{dest.howToReach?.railway}</div>
                </div>
              </div>
            ))}

            {/* Empty Slot Card to prompt adding more destinations */}
            {destinations.length < 4 && (
              <button
                onClick={() => setSelectorOpen(true)}
                className="bg-navy-900/40 border-2 border-dashed border-white/15 hover:border-saffron-500/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all group min-h-[400px]"
              >
                <div className="w-12 h-12 rounded-full bg-saffron-500/10 text-saffron-400 group-hover:bg-saffron-500 group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-white group-hover:text-saffron-400 transition-colors">
                  Add Destination
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Compare side-by-side ({destinations.length}/4)
                </span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-16 rounded-3xl bg-navy-900/40 border border-white/10 text-center max-w-lg mx-auto">
          <Scale className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-40" />
          <h3 className="text-xl font-bold font-serif text-white mb-2">
            No Destinations Selected for Comparison
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
            Select up to 4 destinations from our discovery pages to compare them side-by-side.
          </p>
          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white text-xs font-bold shadow-glow-saffron inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Browse Destinations</span>
          </Link>
        </div>
      )}

      {/* Add Destination Picker Modal */}
      {selectorOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-white/15 rounded-2xl max-w-lg w-full max-h-[80vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-serif">
                Select Destination to Compare
              </h3>
              <button
                onClick={() => setSelectorOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-2">
              {DESTINATIONS.filter((d) => !compareList.includes(d.id)).map((d) => (
                <div
                  key={d.id}
                  onClick={() => {
                    toggleCompare(d.id);
                    setSelectorOpen(false);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <img
                    src={d.heroImage}
                    alt={d.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm truncate">{d.name}</h4>
                    <span className="text-xs text-slate-400 capitalize">{d.state} • {d.category}</span>
                  </div>
                  <Plus className="w-4 h-4 text-saffron-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
