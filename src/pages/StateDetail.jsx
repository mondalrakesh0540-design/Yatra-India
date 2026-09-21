import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Compass, Sparkles, ArrowRight, Layers, Utensils, Landmark } from 'lucide-react';
import { STATES } from '../data/states';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import InteractiveImageBentoGallery from '@/components/ui/bento-gallery';
import { STATE_ALBUMS } from '../data/stateAlbums';

export const StateDetail = () => {
  const { id } = useParams();
  const state = STATES.find((s) => s.id === id) || STATES[0];
  const stateDestinations = DESTINATIONS.filter((d) => d.stateId === state.id);
  const album = STATE_ALBUMS[state.id];

  return (
    <div className="pt-20 pb-24">
      {/* State Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={state.heroImage}
          alt={state.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/20" />

        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-500 text-white shadow-md">
              {state.isUT ? 'Union Territory of India' : 'Indian State'}
            </span>
            <span className="text-xs text-slate-200 bg-navy-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              Capital: {state.capital}
            </span>
            <span className="text-xs text-saffron-300 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-saffron-500/30 flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-saffron-400" />
              <span>{state.iconicLandmark}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white tracking-tight">
            {state.name}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mt-2 font-light">
            {state.description}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
        {/* Quick Stats & Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
          <div>
            <span className="text-xs font-semibold text-saffron-400 uppercase tracking-wider block mb-1">
              Famous Landmark
            </span>
            <span className="text-base font-bold font-serif text-white flex items-center gap-2">
              <Landmark className="w-4 h-4 text-saffron-500 shrink-0" />
              <span>{state.iconicLandmark}</span>
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold text-saffron-400 uppercase tracking-wider block mb-1">
              Best Season to Visit
            </span>
            <span className="text-base font-bold font-serif text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-saffron-500 shrink-0" />
              <span>{state.bestSeason}</span>
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
              Regional Climate
            </span>
            <span className="text-sm text-slate-200">{state.climate}</span>
          </div>

          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Famous Across the World For
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {state.famousFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Destinations in this State */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Destinations in {state.name}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Explore signature tourist hubs, hill retreats, and cultural centers.
              </p>
            </div>
          </div>

          {stateDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-3xl bg-navy-900/40 border border-white/10 text-center">
              <Compass className="w-10 h-10 text-slate-500 mx-auto mb-3 opacity-50" />
              <h3 className="text-lg font-bold text-white mb-1">
                Top Destinations in {state.name}
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
                Featured destinations include: {state.topDestinations.join(', ')}.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {state.topDestinations.map((d, i) => (
                  <Link
                    key={i}
                    to={`/destinations?search=${encodeURIComponent(d)}`}
                    className="px-4 py-2 rounded-xl bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 text-xs font-semibold hover:bg-saffron-500 hover:text-white transition-colors"
                  >
                    Search {d}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* State Photo Album using Interactive Bento Gallery */}
        {album && album.items && album.items.length > 0 && (
          <section className="bg-navy-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-glass">
            <InteractiveImageBentoGallery
              imageItems={album.items}
              title={`${state.name} Visual Album`}
              description={`An interactive photo journey through ${state.name} featuring ${album.totalPhotos} authentic photographs. Drag horizontally to browse the collection, click any photo to view in full resolution.`}
            />
          </section>
        )}

        {/* State Highlights */}
        <section className="bg-navy-900/70 border border-white/10 rounded-3xl p-8 shadow-glass">
          <h2 className="text-2xl font-bold font-serif text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-saffron-400" />
            <span>Key Cultural & Natural Highlights</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {state.highlights.map((h, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 text-sm text-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-saffron-500 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
