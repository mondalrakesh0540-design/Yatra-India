import React, { useState } from 'react';
import { Calendar, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

export const SeasonalDestinations = () => {
  const months = [
    { key: 'January', label: 'Jan', season: 'Winter / Snow / Beaches' },
    { key: 'February', label: 'Feb', season: 'Crisp & Pleasant' },
    { key: 'March', label: 'Mar', season: 'Spring Blossoms' },
    { key: 'April', label: 'Apr', season: 'Himalayan Escapes' },
    { key: 'May', label: 'May', season: 'Summer Retreats' },
    { key: 'June', label: 'Jun', season: 'High Passes / Ladakh' },
    { key: 'July', label: 'Jul', season: 'Monsoon Magic' },
    { key: 'August', label: 'Aug', season: 'Waterfalls & Backwaters' },
    { key: 'September', label: 'Sep', season: 'Post-Monsoon Green' },
    { key: 'October', label: 'Oct', season: 'Festive Season' },
    { key: 'November', label: 'Nov', season: 'Pleasant Pan-India' },
    { key: 'December', label: 'Dec', season: 'Winter Sun & Snow' },
  ];

  const [selectedMonth, setSelectedMonth] = useState('October');

  // Filter destinations ideal for the selected month
  const matchingDestinations = DESTINATIONS.filter((d) => 
    d.idealMonths.some(m => m.toLowerCase().includes(selectedMonth.toLowerCase()))
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Calendar className="w-3.5 h-3.5" />
          <span>Month-by-Month Calendar</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Best Time to Visit India
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          India is a subcontinent of micro-climates. Select any month to discover which destinations are at their absolute prime.
        </p>
      </div>

      {/* Month Selector Carousel / Tabs */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-2 pb-6 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
        {months.map((m) => {
          const isSelected = selectedMonth === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setSelectedMonth(m.key)}
              className={`px-5 py-3 rounded-2xl shrink-0 transition-all flex flex-col items-center border ${
                isSelected
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-600 border-saffron-400 text-white shadow-glow-saffron scale-105'
                  : 'bg-navy-900/80 hover:bg-white/10 border-white/10 text-slate-300'
              }`}
            >
              <span className="text-sm font-bold">{m.label}</span>
              <span className="text-[10px] opacity-80 uppercase tracking-wider mt-0.5">{m.key}</span>
            </button>
          );
        })}
      </div>

      {/* Matching Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchingDestinations.slice(0, 6).map((dest, idx) => (
          <DestinationCard key={dest.id} destination={dest} index={idx} />
        ))}
      </div>
    </section>
  );
};
