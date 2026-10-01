import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, MapPin, ArrowRight, CheckCircle2, RotateCcw, Star, Calendar } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export function AIRecommender() {
  const [mood, setMood] = useState('heritage');
  const [duration, setDuration] = useState('week');
  const [budget, setBudget] = useState('moderate');
  const [region, setRegion] = useState('all');
  const [results, setResults] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const moods = [
    { id: 'heritage', label: 'Royal Heritage & Forts', category: 'heritage' },
    { id: 'mountains', label: 'Himalayan Serenity & Treks', category: 'mountains' },
    { id: 'beaches', label: 'Tropical Sun & Beaches', category: 'beaches' },
    { id: 'spiritual', label: 'Sacred Temples & Ghats', category: 'spiritual' },
    { id: 'wildlife', label: 'Jungles & Wildlife Safaris', category: 'wildlife' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setResults(null);

    setTimeout(() => {
      // Filter matching destinations
      let filtered = DESTINATIONS.filter((d) => {
        const matchesCategory = d.category?.toLowerCase() === mood;
        return matchesCategory;
      });

      if (filtered.length < 3) {
        filtered = DESTINATIONS.slice(0, 10);
      }

      // Shuffle & pick top 3
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3).map((item, idx) => ({
        ...item,
        matchScore: 98 - idx * 4,
        suggestedDays: duration === 'weekend' ? '2-3 Days' : duration === 'week' ? '4-6 Days' : '7-10 Days',
        vibe: mood === 'heritage' ? 'Regal & Historical' : mood === 'mountains' ? 'Crisp Air & Alpine Peaks' : 'Tropical Relaxation'
      }));

      setResults(selected);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="bg-gradient-to-br from-navy-900/90 via-navy-950 to-indigo-950/40 border border-saffron-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/15 border border-saffron-500/30 text-saffron-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Itinerary Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Personalized Travel Matcher
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
            Tell us your travel mood, duration, and pace — our smart engine curates the ideal Indian destination for you.
          </p>
        </div>

        {results && (
          <button
            onClick={() => setResults(null)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {!results ? (
        <div className="space-y-6">
          {/* 1. Travel Mood */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              1. What's your travel mood?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMood(m.category)}
                  className={`p-3 rounded-2xl text-xs font-semibold text-center border transition-all ${
                    mood === m.category
                      ? 'bg-saffron-500 text-white border-saffron-400 shadow-glow-saffron'
                      : 'bg-navy-950/60 text-slate-400 hover:text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Duration & Budget in 2 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                2. Travel Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'weekend', label: 'Weekend (2-3 D)' },
                  { id: 'week', label: '4-7 Days' },
                  { id: 'long', label: '8+ Days' }
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDuration(d.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      duration === d.id
                        ? 'bg-saffron-500 text-white border-saffron-400'
                        : 'bg-navy-950/60 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Budget Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'budget', label: 'Economy' },
                  { id: 'moderate', label: 'Comfort' },
                  { id: 'luxury', label: 'Luxury Palaces' }
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBudget(b.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      budget === b.id
                        ? 'bg-saffron-500 text-white border-saffron-400'
                        : 'bg-navy-950/60 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-saffron-500 via-amber-500 to-saffron-600 hover:brightness-110 text-white font-extrabold text-sm shadow-glow-saffron transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Analyzing 180+ Tourist Destinations...' : 'Find My Perfect Destinations'}</span>
          </button>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((dest) => (
              <div
                key={dest.id}
                className="rounded-2xl bg-navy-950/80 border border-white/10 overflow-hidden shadow-glass flex flex-col group hover:border-saffron-500/50 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500 text-navy-950 text-[11px] font-extrabold shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>{dest.matchScore}% Match</span>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-navy-950/80 text-amber-400 text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{dest.rating || 4.8}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] text-saffron-400 font-bold uppercase tracking-wider block">
                      {dest.state} • {dest.category}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-white mt-0.5">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-light">
                      {dest.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 inline mr-1 text-slate-500" />
                      <span>{dest.suggestedDays}</span>
                    </div>

                    <Link
                      to={`/destination/${dest.id}`}
                      className="px-3.5 py-1.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleGenerate}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Shuffle More Suggestions</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIRecommender;
