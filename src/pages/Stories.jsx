import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { STORIES } from '../data/stories';

export const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mountains', 'Offbeat', 'Budget Travel', 'Itineraries', 'Seasonal'];

  const filtered = STORIES.filter((s) => {
    if (selectedCategory === 'All') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Travel Journal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-3">
          Stories & Guides from India
        </h1>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Deep-dive destination profiles, offbeat expedition logs, budget strategies, and cultural chronicles.
        </p>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                  : 'bg-navy-900 border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            className="group bg-navy-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-saffron-500/50 shadow-glass transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Cover Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={story.coverImage}
                alt={story.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-saffron-400 backdrop-blur-md border border-white/10">
                  {story.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{story.readTime}</span>
                  </span>
                  <span>•</span>
                  <span>{story.date}</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-white group-hover:text-saffron-400 transition-colors line-clamp-2 mb-2 leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-saffron-400 transition-colors">
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
