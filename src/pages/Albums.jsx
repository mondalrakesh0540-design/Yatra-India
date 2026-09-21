import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Sparkles, SlidersHorizontal, ArrowRight, Grid3X3 } from 'lucide-react';
import InteractiveImageBentoGallery from '@/components/ui/bento-gallery';
import InteractiveImageBentoGalleryDemo from '@/components/ui/demo';
import { STATE_ALBUMS } from '../data/stateAlbums';
import { STATES } from '../data/states';

export const Albums = () => {
  const [selectedStateId, setSelectedStateId] = useState('west-bengal');
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'demo'

  const currentAlbum = STATE_ALBUMS[selectedStateId] || STATE_ALBUMS['west-bengal'];
  const currentState = STATES.find((s) => s.id === selectedStateId) || {
    name: currentAlbum.stateName,
    capital: 'Capital',
    category: 'State'
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>Interactive Bento Visual Albums</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
          India Through the Lens
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Explore authentic photographs across all 28 States and 8 Union Territories from your desktop collection.
          Drag horizontally, hover to reveal details, and click any picture to enlarge in full resolution.
        </p>

        {/* Mode Toggle */}
        <div className="mt-6 inline-flex items-center p-1.5 bg-navy-900/80 border border-white/10 rounded-2xl shadow-glass">
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'desktop'
                ? 'bg-saffron-500 text-white shadow-glow-saffron'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>State Desktop Albums (384 Photos)</span>
          </button>
          <button
            onClick={() => setViewMode('demo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'demo'
                ? 'bg-saffron-500 text-white shadow-glow-saffron'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Default Demo Showcase</span>
          </button>
        </div>
      </div>

      {viewMode === 'desktop' ? (
        <>
          {/* State Selector Bar */}
          <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-glass">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-saffron-400" />
              <div>
                <h2 className="text-sm font-bold text-white">Select a State or Union Territory</h2>
                <p className="text-xs text-slate-400">
                  Showing {currentAlbum.items?.length || 0} photos for {currentAlbum.stateName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <select
                value={selectedStateId}
                onChange={(e) => setSelectedStateId(e.target.value)}
                className="w-full md:w-64 bg-navy-950 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500"
              >
                {Object.keys(STATE_ALBUMS).map((key) => {
                  const alb = STATE_ALBUMS[key];
                  return (
                    <option key={key} value={key} className="bg-navy-950 text-white">
                      {alb.stateName} ({alb.totalPhotos} photos)
                    </option>
                  );
                })}
              </select>

              <Link
                to={`/state/${selectedStateId}`}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <span>State Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Gallery Display */}
          <div className="bg-navy-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <InteractiveImageBentoGallery
              imageItems={currentAlbum.items || []}
              title={currentAlbum.albumTitle}
              description={currentAlbum.albumDescription}
            />
          </div>

          {/* Quick Stats Footer */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-white/10 text-center">
              <span className="text-2xl font-bold text-saffron-400">{currentAlbum.totalPhotos}</span>
              <p className="text-xs text-slate-400 mt-1">Photos in Album</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-white/10 text-center">
              <span className="text-2xl font-bold text-emerald-400">36</span>
              <p className="text-xs text-slate-400 mt-1">States & UTs Covered</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-white/10 text-center">
              <span className="text-2xl font-bold text-sky-400">384</span>
              <p className="text-xs text-slate-400 mt-1">Total Desktop Photos</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-white/10 text-center">
              <span className="text-2xl font-bold text-purple-400">100%</span>
              <p className="text-xs text-slate-400 mt-1">Auto-Identified Titles</p>
            </div>
          </div>
        </>
      ) : (
        /* Demo Showcase */
        <div className="bg-navy-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6">
          <InteractiveImageBentoGalleryDemo />
        </div>
      )}
    </div>
  );
};
export default Albums;
