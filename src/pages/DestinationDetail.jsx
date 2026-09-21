import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, Share2, Plus, Star, MapPin, Calendar, Clock, 
  Plane, Train, Car, ShieldAlert, Sparkles, Utensils, Compass, ArrowRight, Check, Info,
  Camera, ChevronLeft, ChevronRight, X, Maximize2
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { useSaved } from '../context/SavedContext';

export const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleSaveDestination, isCompared, toggleCompare } = useSaved();
  const [copied, setCopied] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const destination = DESTINATIONS.find((d) => d.id === id) || DESTINATIONS[0];
  const saved = isSaved(destination.id);
  const compared = isCompared(destination.id);
  const nearbySpots = DESTINATIONS.filter((d) => d.stateId === destination.stateId && d.id !== destination.id).slice(0, 3);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => 
          prev > 0 ? prev - 1 : (destination.gallery?.length || 1) - 1
        );
      }
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => 
          prev < (destination.gallery?.length || 1) - 1 ? prev + 1 : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, destination.gallery]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };


  return (
    <div className="pt-20 pb-24">
      {/* Fullscreen Hero Header */}
      <div className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/50" />

        {/* Hero Overlay Content */}
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              to={`/state/${destination.stateId}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-navy-950/80 text-saffron-400 backdrop-blur-md border border-white/15 flex items-center gap-1.5 hover:bg-navy-900 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.state}</span>
            </Link>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/10 capitalize">
              {destination.category}
            </span>
            {destination.isHiddenGem && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                Hidden Gem
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white tracking-tight leading-tight">
                {destination.name}
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl mt-2 font-light">
                {destination.shortDescription}
              </p>
            </div>

            {/* Action Buttons: Save, Share, Compare */}
            <div className="flex items-center gap-3 shrink-0">

              <button
                onClick={() => toggleSaveDestination(destination.id)}
                aria-label="Save destination"
                className={`p-3 rounded-full border transition-all ${
                  saved
                    ? 'bg-saffron-500 border-saffron-400 text-white shadow-glow-saffron'
                    : 'bg-navy-900/80 border-white/20 text-white hover:bg-navy-900'
                }`}
              >
                <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                aria-label="Share destination"
                className="p-3 rounded-full bg-navy-900/80 border border-white/20 text-white hover:bg-navy-900 transition-colors relative"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
              </button>

              <button
                onClick={() => toggleCompare(destination.id)}
                aria-label="Compare destination"
                className={`px-4 py-3 rounded-full border text-xs font-semibold transition-all ${
                  compared
                    ? 'bg-amber-500 border-amber-400 text-navy-950 font-bold'
                    : 'bg-navy-900/80 border-white/20 text-white hover:bg-navy-900'
                }`}
              >
                {compared ? 'Compared' : 'Compare'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left 8 Cols: Overview, Why Visit, Attractions, Things to Do, Culture, Gallery */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview & Why Visit */}
          <section className="bg-navy-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-serif text-white mb-3">
                About {destination.name}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {destination.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-saffron-500/10 to-amber-500/5 border border-saffron-500/20">
              <h3 className="text-sm font-bold text-saffron-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Why Visit</span>
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                {destination.whyVisit}
              </p>
            </div>
          </section>

          {/* Top Attractions Grid */}
          <section>
            <h2 className="text-2xl font-bold font-serif text-white mb-6">
              Top Attractions & Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.topAttractions.map((attr, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-navy-900/60 border border-white/10 flex items-start gap-3.5 hover:border-saffron-500/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-saffron-500/10 text-saffron-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-saffron-500/20">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{attr}</h4>
                    <p className="text-xs text-slate-400">Must-visit signature spot in {destination.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Things To Do */}
          <section className="bg-navy-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
            <h2 className="text-2xl font-bold font-serif text-white mb-6">
              Things to Do & Experiences
            </h2>
            <ul className="space-y-4">
              {destination.thingsToDo.map((todo, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{todo}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Food to Try */}
          <section className="bg-navy-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
            <h2 className="text-2xl font-bold font-serif text-white mb-6 flex items-center gap-2.5">
              <Utensils className="w-6 h-6 text-saffron-500" />
              <span>Culinary Delights to Try</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {destination.foodToTry.map((dish, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 font-medium hover:border-saffron-500/50 transition-colors flex items-center gap-2"
                >
                  <Utensils className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                  <span>{dish}</span>
                </span>
              ))}
            </div>
          </section>

          {/* Local Culture & Safety Tips */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-navy-900/70 border border-white/10 space-y-3">
              <h3 className="text-base font-bold font-serif text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Local Culture & Heritage</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {destination.localCulture}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-navy-900/70 border border-white/10 space-y-3">
              <h3 className="text-base font-bold font-serif text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Traveler Safety Tips</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {destination.safetyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Luxury Photo Gallery */}
          {destination.gallery?.length > 0 && (
            <section className="bg-navy-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-saffron-500/20">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Visual Odyssey</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    Photo Gallery • {destination.name}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Authentic high-resolution photography capturing {destination.name}’s landmarks, landscapes, and culture. Click any image for full-screen view.
                  </p>
                </div>
                <div className="text-xs text-slate-400 shrink-0 font-medium">
                  {destination.gallery.length} Verified Photos
                </div>
              </div>

              {/* Multi-Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {destination.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-saffron-500/50 transition-all duration-300"
                  >
                    <img
                      src={imgUrl}
                      alt={`${destination.name} photo ${idx + 1}`}
                      onError={(e) => { e.target.src = destination.heroImage; }}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="self-end p-2 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron-400 block mb-0.5">
                          Photo {idx + 1} of {destination.gallery.length}
                        </span>
                        <p className="text-xs text-white font-medium line-clamp-1">
                          {destination.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Nearby Destinations */}
          {nearbySpots.length > 0 && (
            <section className="bg-navy-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
              <h2 className="text-2xl font-bold font-serif text-white mb-6">
                Explore More in {destination.state}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {nearbySpots.map((nearby) => (
                  <Link
                    key={nearby.id}
                    to={`/destination/${nearby.id}`}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-saffron-500/10 border border-white/10 hover:border-saffron-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] text-saffron-400 uppercase font-semibold">
                        {nearby.category}
                      </span>
                      <h4 className="font-bold text-white text-base group-hover:text-saffron-400 transition-colors">
                        {nearby.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {nearby.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-saffron-400">
                      <span>View spot</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right 4 Cols: Quick Info Card, How to Reach, Weather */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Summary Box */}
          <div className="bg-navy-900/90 border border-white/15 rounded-3xl p-6 shadow-glass space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Travel Style</span>
                <span className="text-xl font-bold font-serif text-white capitalize">{destination.category}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Ideal Duration</span>
                <span className="text-sm font-bold text-saffron-400">{destination.recommendedDuration}</span>
              </div>
            </div>

            {/* Best Time */}
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Best Season to Visit
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron-400" />
                <span>{destination.bestTimeToVisit}</span>
              </p>
            </div>

            {/* Ideal Months / Weather */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Prime Visiting Months
              </span>
              <div className="flex flex-wrap gap-1.5">
                {destination.idealMonths?.map((month, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* How to Reach Card */}
          <div className="bg-navy-900/90 border border-white/15 rounded-3xl p-6 shadow-glass space-y-5">
            <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-saffron-400" />
              <span>How to Reach</span>
            </h3>

            {/* Airport */}
            <div className="flex items-start gap-3 text-xs">
              <Plane className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Nearest Airport:</strong>
                <span className="text-slate-300">{destination.howToReach.airport}</span>
              </div>
            </div>

            {/* Railway */}
            <div className="flex items-start gap-3 text-xs">
              <Train className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Railway Station:</strong>
                <span className="text-slate-300">{destination.howToReach.railway}</span>
              </div>
            </div>

            {/* Road */}
            <div className="flex items-start gap-3 text-xs">
              <Car className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Road & Highway:</strong>
                <span className="text-slate-300">{destination.howToReach.road}</span>
              </div>
            </div>

            {/* Local Transit */}
            <div className="flex items-start gap-3 text-xs pt-3 border-t border-white/10">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Local Transportation:</strong>
                <span className="text-slate-300">{destination.howToReach.localTransport}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && destination.gallery?.[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none animate-fadeIn"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div 
            className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto pb-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-semibold uppercase tracking-wider border border-saffron-500/30">
                Photo {activeLightboxIndex + 1} of {destination.gallery.length}
              </span>
              <h3 className="text-white font-medium text-sm sm:text-base truncate max-w-xs sm:max-w-md">
                {destination.name} • {destination.state}
              </h3>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-medium px-3"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Main Image View with Navigation */}
          <div 
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 max-w-6xl w-full mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => 
                prev > 0 ? prev - 1 : destination.gallery.length - 1
              )}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 hover:bg-saffron-500 text-white border border-white/20 transition-all shadow-xl hover:scale-110"
              title="Previous Photo (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Photograph */}
            <div className="relative max-h-[68vh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <img
                src={destination.gallery[activeLightboxIndex]}
                alt={`${destination.name} photo ${activeLightboxIndex + 1}`}
                onError={(e) => { e.target.src = destination.heroImage; }}
                className="max-h-[68vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => 
                prev < destination.gallery.length - 1 ? prev + 1 : 0
              )}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-saffron-500 text-white border border-white/20 transition-all shadow-xl hover:scale-110"
              title="Next Photo (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div 
            className="w-full max-w-4xl mx-auto pt-3 border-t border-white/10 flex flex-col items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-3 overflow-x-auto py-1 px-2 max-w-full">
              {destination.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeLightboxIndex === idx
                      ? 'border-saffron-500 scale-105 shadow-glow-saffron'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    onError={(e) => { e.target.src = destination.heroImage; }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Use ← / → arrow keys to navigate • Press ESC to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
