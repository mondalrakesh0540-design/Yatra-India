import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/categories';
import { Compass, ArrowRight } from 'lucide-react';

export const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Travel Styles</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Explore by Travel Style
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Whether you crave high-altitude adrenaline, tranquil backwaters, sacred ghats, or royal palace heritage, find your ideal Indian experience.
        </p>
      </div>

      {/* Grid of 12 Travel Style Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="h-full"
          >
            <Link
              to={`/destinations?category=${cat.id}`}
              className="group relative h-full bg-navy-900/80 rounded-2xl p-5 border border-white/10 hover:border-saffron-500/50 shadow-glass flex flex-col justify-between overflow-hidden"
            >
              {/* Ambient Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Real Photo Thumbnail & Count Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/15 shadow-md group-hover:scale-105 group-hover:border-saffron-500/60 transition-all duration-300 shrink-0">
                    <img
                      src={cat.heroImage}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {cat.count}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-saffron-400 transition-colors mb-1.5 font-serif">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="relative z-10 pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-saffron-400 transition-colors">
                <span>View places</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
