import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Compass, ArrowRight, Sparkles, Calendar, Layers, Landmark, 
  Star, Clock, IndianRupee, ExternalLink, ChevronRight, Eye, Navigation, 
  CheckCircle2, Utensils, Award, Info, Search
} from 'lucide-react';
import { STATES } from '../data/states';
import { DESTINATIONS } from '../data/destinations';
import { INDIA_MAP_VIEWBOX, INDIA_MAP_LOCATIONS } from '../data/indiaMapData';

export const IndiaMap = () => {
  const [selectedStateId, setSelectedStateId] = useState('rajasthan');
  const [hoveredLoc, setHoveredLoc] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [activeRegion, setActiveRegion] = useState('All');
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const [viewMode, setViewMode] = useState('map'); // 'map' | 'list'
  const [searchQuery, setSearchQuery] = useState('');
  
  const mapContainerRef = useRef(null);
  const spotsSectionRef = useRef(null);
  const navigate = useNavigate();

  const selectedState = STATES.find((s) => s.id === selectedStateId) || STATES[0];
  const stateDestinations = DESTINATIONS.filter((d) => d.stateId === selectedStateId);

  // Grouping for easy exploration
  const regions = [
    { name: 'All', count: 36 },
    { name: 'North', states: ['jammu-and-kashmir', 'ladakh', 'himachal-pradesh', 'uttarakhand', 'punjab', 'haryana', 'delhi', 'chandigarh'] },
    { name: 'South', states: ['kerala', 'karnataka', 'tamil-nadu', 'andhra-pradesh', 'telangana', 'puducherry', 'lakshadweep'] },
    { name: 'West', states: ['rajasthan', 'gujarat', 'goa', 'maharashtra', 'dadra-nagar-haveli-daman-diu'] },
    { name: 'East', states: ['west-bengal', 'odisha', 'bihar', 'jharkhand', 'andaman-and-nicobar'] },
    { name: 'Central', states: ['madhya-pradesh', 'chhattisgarh', 'uttar-pradesh'] },
    { name: 'Northeast', states: ['assam', 'arunachal-pradesh', 'meghalaya', 'sikkim', 'nagaland', 'manipur', 'mizoram', 'tripura'] },
  ];

  const filteredStates = STATES.filter((st) => {
    const matchesRegion = activeRegion === 'All' || regions.find((r) => r.name === activeRegion)?.states?.includes(st.id);
    const matchesSearch = searchQuery === '' || 
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      st.iconicLandmark.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.capital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Handle state selection
  const handleSelectState = (stateId) => {
    setSelectedStateId(stateId);
    setActiveSpotIndex(0);
    // On mobile, smoothly scroll down to spots
    if (window.innerWidth < 1024 && spotsSectionRef.current) {
      spotsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Find location object for selected state
  const selectedLoc = INDIA_MAP_LOCATIONS.find((l) => l.stateId === selectedStateId);

  // Active spot
  const activeSpot = stateDestinations[activeSpotIndex] || stateDestinations[0];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive India Map & Spot Explorer</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Discover India State by State
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Click any state or union territory on the map below to <strong className="text-saffron-400 font-semibold">instantly open its famous tourist spots</strong>, iconic landmarks, and travel highlights with authentic photography.
        </p>

        {/* Region Filter Bar & View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-white/10">
          {/* Region Tabs (Scrollable on mobile) */}
          <div className="w-full sm:w-auto flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none sm:flex-wrap justify-start sm:justify-start">
            {regions.map((reg) => (
              <button
                key={reg.name}
                onClick={() => setActiveRegion(reg.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  activeRegion === reg.name
                    ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {reg.name} {reg.name !== 'All' && `(${reg.states?.length})`}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 bg-navy-900/80 p-1 rounded-xl border border-white/10 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'map'
                  ? 'bg-saffron-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>SVG Map</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-saffron-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>State Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 6 Columns: Full Interactive Vector SVG Map or State Grid */}
        <div className="lg:col-span-6 xl:col-span-6 bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-white/10 rounded-3xl p-4 sm:p-6 shadow-glass backdrop-blur-xl relative overflow-hidden">
          {/* Header & Selected State Quick Badge */}
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                {viewMode === 'map' ? 'Click Any State on Map' : 'Select From Grid'}
              </span>
            </div>
            <div className="text-xs text-saffron-400 font-medium flex items-center gap-1">
              <span>Active:</span>
              <strong className="text-white">{selectedState.name}</strong>
            </div>
          </div>

          {/* Mobile Quick State Selector Dropdown */}
          <div className="lg:hidden mb-4">
            <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
              Quick State Select (Mobile):
            </label>
            <select
              value={selectedStateId}
              onChange={(e) => handleSelectState(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-navy-950 border border-white/20 text-xs font-semibold text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              {STATES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} {s.isUT ? '(UT)' : ''} — {s.iconicLandmark.split('&')[0]}
                </option>
              ))}
            </select>
          </div>

          {viewMode === 'map' ? (
            /* Interactive SVG Map Canvas */
            <div 
              ref={mapContainerRef}
              className="relative w-full aspect-[612/696] max-w-[540px] mx-auto flex items-center justify-center select-none"
              onMouseMove={(e) => {
                const rect = mapContainerRef.current?.getBoundingClientRect();
                if (rect) {
                  setTooltipPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }
              }}
            >
              <svg
                viewBox={INDIA_MAP_VIEWBOX}
                className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                <defs>
                  {/* Selected State Glowing Gradient */}
                  <linearGradient id="selectedStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>

                  {/* Hover State Gradient */}
                  <linearGradient id="hoverStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>

                  {/* Region State Gradient */}
                  <linearGradient id="regionStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#0f2744" />
                  </linearGradient>

                  {/* Outer Glow Filter */}
                  <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Render All 36 Locations as Interactive SVG Paths */}
                {INDIA_MAP_LOCATIONS.map((loc) => {
                  const isSelected = loc.stateId === selectedStateId;
                  const isHovered = hoveredLoc?.id === loc.id;
                  const isInRegion = activeRegion === 'All' || regions.find((r) => r.name === activeRegion)?.states?.includes(loc.stateId);

                  let fillColor = '#162032';
                  if (isInRegion) fillColor = '#1e2d42';
                  if (isHovered) fillColor = 'url(#hoverStateGrad)';
                  if (isSelected) fillColor = 'url(#selectedStateGrad)';

                  let strokeColor = isInRegion ? '#334e68' : '#1e293b';
                  let strokeWidth = 0.8;
                  if (isHovered) {
                    strokeColor = '#ffffff';
                    strokeWidth = 1.6;
                  }
                  if (isSelected) {
                    strokeColor = '#ffffff';
                    strokeWidth = 2.2;
                  }

                  return (
                    <path
                      key={loc.id}
                      d={loc.path}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      filter={isSelected ? 'url(#mapGlow)' : undefined}
                      className="transition-all duration-300 ease-out cursor-pointer hover:opacity-100"
                      style={{
                        transformOrigin: `${loc.center.x}px ${loc.center.y}px`,
                        filter: isHovered ? 'brightness(1.15)' : undefined
                      }}
                      onMouseEnter={() => setHoveredLoc(loc)}
                      onMouseLeave={() => setHoveredLoc(null)}
                      onClick={() => handleSelectState(loc.stateId)}
                    />
                  );
                })}

                {/* Animated Pulsing Pin Marker for Selected State */}
                {selectedLoc && (
                  <g className="pointer-events-none" transform={`translate(${selectedLoc.center.x}, ${selectedLoc.center.y})`}>
                    {/* Radar wave 1 */}
                    <circle r="18" fill="none" stroke="#ff6b35" strokeWidth="1.5" opacity="0.6">
                      <animate attributeName="r" values="6;22;6" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    {/* Radar wave 2 */}
                    <circle r="12" fill="none" stroke="#fbbf24" strokeWidth="1.2" opacity="0.8">
                      <animate attributeName="r" values="4;15;4" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                    </circle>
                    {/* Center Pin */}
                    <circle r="5" fill="#ffffff" stroke="#ff6b35" strokeWidth="2.5" />
                    <circle r="2" fill="#ff6b35" />
                  </g>
                )}
              </svg>

              {/* Floating Hover Tooltip */}
              {hoveredLoc && (
                <div
                  className="absolute pointer-events-none z-30 transform -translate-x-1/2 -translate-y-full mb-3 px-3 py-2 rounded-xl bg-navy-950/95 border border-saffron-500/50 shadow-2xl backdrop-blur-md min-w-[160px] text-center animate-fadeIn"
                  style={{
                    left: `${tooltipPos.x}px`,
                    top: `${tooltipPos.y}px`,
                  }}
                >
                  <div className="flex items-center justify-center gap-1 text-[10px] text-saffron-400 font-bold uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    <span>Click to Open Spots</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mt-0.5">
                    {hoveredLoc.name}
                  </h4>
                  {STATES.find((s) => s.id === hoveredLoc.stateId) && (
                    <p className="text-[11px] text-slate-300 truncate mt-0.5 max-w-[180px]">
                      🏛️ {STATES.find((s) => s.id === hoveredLoc.stateId)?.iconicLandmark?.split('&')[0]}
                    </p>
                  )}
                </div>
              )}

              {/* Map Legend & Helper */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-slate-400 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-saffron-500" />
                  <span>Selected State</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Hover to Preview</span>
                </span>
                <span className="hidden sm:inline">28 States + 8 UTs Interactive</span>
              </div>
            </div>
          ) : (
            /* State Grid Mode */
            <div className="space-y-3">
              {/* Quick Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search state, landmark, or capital..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-saffron-500 transition-colors"
                />
              </div>

              {/* States Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredStates.map((st) => {
                  const isSelected = selectedStateId === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => handleSelectState(st.id)}
                      className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-gradient-to-br from-saffron-500/20 to-amber-600/10 border-saffron-500 text-white shadow-sm ring-1 ring-saffron-500/30'
                          : 'bg-white/5 hover:bg-white/10 border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-semibold text-sm truncate">{st.name}</span>
                        {st.isUT && (
                          <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded uppercase font-bold shrink-0">
                            UT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-saffron-400 truncate mt-0.5">
                        <Landmark className="w-3 h-3 shrink-0" />
                        <span className="truncate">{st.iconicLandmark}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 truncate mt-1">
                        Capital: {st.capital}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right 6 Columns: Animated State Spots Showcase */}
        <div ref={spotsSectionRef} className="lg:col-span-6 xl:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedState.id}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-b from-navy-900 to-navy-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* State Header Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={selectedState.heroImage}
                  alt={selectedState.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                
                {/* Header Overlay Badges & Title */}
                <div className="absolute bottom-4 left-5 right-5 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-saffron-500 text-white shadow-sm">
                      {selectedState.isUT ? 'Union Territory' : 'Indian State'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-md text-slate-200 border border-white/10">
                      Capital: {selectedState.capital}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-md text-amber-300 border border-white/10">
                      🗓️ {selectedState.bestSeason}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                    {selectedState.name}
                  </h3>
                </div>
              </div>

              {/* State Body & Spots */}
              <div className="p-6 sm:p-7 space-y-6">
                {/* Famous Landmark Identifier Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-saffron-500/20 via-amber-500/10 to-transparent border border-saffron-500/40 flex items-start gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-saffron-500 text-white flex items-center justify-center shrink-0 shadow-glow-saffron">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-saffron-400 block mb-0.5">
                      Signature Identity • Famous Landmark
                    </span>
                    <h4 className="text-white font-bold text-base sm:text-lg">
                      {selectedState.iconicLandmark}
                    </h4>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      {selectedState.description}
                    </p>
                  </div>
                </div>

                {/* Tourist Spots Header & Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Tourist Spots in {selectedState.name} ({stateDestinations.length})
                      </h4>
                    </div>
                    <Link
                      to={`/state/${selectedState.id}`}
                      className="text-xs text-saffron-400 hover:text-saffron-300 font-semibold flex items-center gap-1 group"
                    >
                      <span>Explore Full State</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* If Multiple Spots, Render Tabs */}
                  {stateDestinations.length > 1 && (
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
                      {stateDestinations.map((dest, idx) => (
                        <button
                          key={dest.id}
                          onClick={() => setActiveSpotIndex(idx)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            activeSpotIndex === idx
                              ? 'bg-saffron-500 text-white shadow-sm'
                              : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          <span>{dest.name}</span>
                          <span className="text-[10px] opacity-75">★ {dest.rating}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Active Spot Card with Animated Transition */}
                  {activeSpot ? (
                    <motion.div
                      key={activeSpot.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-navy-950/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg group hover:border-saffron-500/40 transition-colors"
                    >
                      {/* Spot Image & Meta */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={activeSpot.heroImage}
                          alt={activeSpot.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                        
                        {/* Rating & Category */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-saffron-400 border border-white/10">
                            {activeSpot.category}
                          </span>
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/10">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{activeSpot.rating}</span>
                          </div>
                        </div>

                        {/* Title & Timing on Image Bottom */}
                        <div className="absolute bottom-3 left-4 right-4">
                          <h5 className="text-xl font-bold text-white font-serif">
                            {activeSpot.name}
                          </h5>
                          <div className="flex items-center gap-3 text-xs text-slate-200 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-saffron-400" />
                              <span>{activeSpot.recommendedDuration}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <IndianRupee className="w-3 h-3 text-emerald-400" />
                              <span>From {activeSpot.formattedBudget}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Spot Content */}
                      <div className="p-5 space-y-4">
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {activeSpot.shortDescription}
                        </p>

                        {/* Top Attractions Pills */}
                        {activeSpot.topAttractions?.length > 0 && (
                          <div>
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                              Must-Visit Attractions:
                            </span>
                            <div className="flex items-center flex-wrap gap-1.5">
                              {activeSpot.topAttractions.slice(0, 4).map((attr, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-slate-200"
                                >
                                  {attr}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Food Recommendation */}
                        {activeSpot.foodToTry?.length > 0 && (
                          <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                            <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="text-slate-400">Famous Cuisine:</span>
                            <span className="text-white font-medium truncate">
                              {activeSpot.foodToTry.slice(0, 3).join(', ')}
                            </span>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          <Link
                            to={`/destination/${activeSpot.id}`}
                            className="py-3 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-glow-saffron transition-all"
                          >
                            <span>Explore Spot</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => navigate(`/plan-trip?dest=${selectedState.id}&days=5`)}
                            className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-white/10 transition-all"
                          >
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span>Plan 5-Day Trip</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <p className="text-slate-400 text-xs">
                        Select a tourist spot from the list above to view full details.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
