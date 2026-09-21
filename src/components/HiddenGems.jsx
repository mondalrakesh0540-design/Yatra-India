import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, ArrowRight, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export const HiddenGems = () => {
  // Filter destinations flagged as hidden gems
  const gems = DESTINATIONS.filter((d) => d.isHiddenGem || d.category === 'offbeat').slice(0, 6);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-emerald-950/20 to-navy-950 overflow-hidden">
      {/* Ambient background glows for mysterious mood */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-saffron-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
              <Eye className="w-3.5 h-3.5" />
              <span>Untouched & Uncharted</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              India’s Hidden Gems
            </h2>
            <p className="text-slate-300 text-base mt-2 max-w-2xl font-light">
              Step away from the tourist trails into the mystical realm of uncharted valleys, ancient crater lakes, and living bamboo civilizations.
            </p>
          </div>

          <Link
            to="/destinations?filter=hidden-gems"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-300 hover:text-white border border-emerald-500/30 text-sm font-semibold transition-all backdrop-blur-md self-start md:self-auto"
          >
            <span>Explore All Hidden Gems</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gems Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gems.map((gem) => (
            <Link
              key={gem.id}
              to={`/destination/${gem.id}`}
              className="group relative h-[380px] rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/60 shadow-glass transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end p-6"
            >
              {/* Background Image with Dark Gradient */}
              <img
                src={gem.heroImage}
                alt={gem.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />

              {/* Secret Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Hidden Secret</span>
                </span>
              </div>

              {/* Card Information */}
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{gem.state}</span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {gem.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {gem.shortDescription}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-300">
                  <span className="text-emerald-400 font-medium">
                    Best: {gem.bestTimeToVisit.split('(')[0].trim()}
                  </span>
                  <span className="font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Uncover</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
