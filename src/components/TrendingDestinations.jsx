import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Compass, Sparkles, ArrowRight } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { DESTINATIONS } from '../data/destinations';

export const TrendingDestinations = () => {
  const scrollRef = useRef(null);

  // Filter trending / popular destinations
  const popularList = DESTINATIONS.filter((d) => d.isPopular || d.isTrending);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Carousel Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Iconic Escapes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-slate-300 text-base mt-2 max-w-xl">
            From the snow peaks of Kashmir and Ladakh to the palm backwaters of Kerala and golden forts of Rajasthan.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="p-3 rounded-full bg-navy-900 border border-white/15 text-white hover:bg-saffron-500 hover:border-saffron-500 transition-colors shadow-glass"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="p-3 rounded-full bg-navy-900 border border-white/15 text-white hover:bg-saffron-500 hover:border-saffron-500 transition-colors shadow-glass"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <Link
            to="/destinations"
            className="ml-2 hidden sm:flex items-center gap-1.5 text-xs font-semibold text-saffron-400 hover:text-saffron-300 transition-colors"
          >
            <span>View All (100+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {popularList.map((dest, idx) => (
          <div
            key={dest.id}
            className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] shrink-0 snap-start"
          >
            <DestinationCard destination={dest} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};
