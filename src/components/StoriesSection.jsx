import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { STORIES } from '../data/stories';

export const StoriesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Travel Magazine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Stories from India
          </h2>
          <p className="text-slate-300 text-base mt-2 max-w-xl">
            In-depth guides, insider itineraries, budget blueprints, and photo essays crafted by seasoned explorers.
          </p>
        </div>

        <Link
          to="/stories"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 hover:bg-navy-800 text-saffron-400 hover:text-saffron-300 border border-white/10 text-sm font-semibold transition-all self-start md:self-auto"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid of Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORIES.map((story, idx) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="h-full"
          >
            <Link
              to={`/story/${story.id}`}
              className="group bg-navy-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-saffron-500/50 shadow-glass flex flex-col justify-between h-full"
            >
            {/* Cover Image */}
            <div className="relative h-52 w-full overflow-hidden">
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

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-saffron-400 transition-colors">
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      </div>
    </section>
  );
};
