import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Compass, ArrowRight, Info } from 'lucide-react';
import { FESTIVALS } from '../data/festivals';

export const FestivalSection = () => {
  const [selectedFestival, setSelectedFestival] = useState(FESTIVALS[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cultural Extravaganza</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Experience India Through Its Festivals
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          India’s soul lives in its celebrations. Immerse yourself in the colors of Holi, the illuminated ghats of Diwali, the royal camel sands of Pushkar, and the tribal drums of Hornbill.
        </p>
      </div>

      {/* Interactive Festival Spotlight Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Quick Festival Picker List */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[560px] overflow-y-auto pr-2">
          {FESTIVALS.map((fest, idx) => {
            const isSelected = selectedFestival.id === fest.id;
            return (
              <motion.button
                key={fest.id}
                onClick={() => setSelectedFestival(fest)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className={`w-full p-4 rounded-xl text-left transition-colors border flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-gradient-to-r from-saffron-500/20 to-amber-600/10 border-saffron-500 text-white shadow-sm ring-1 ring-saffron-500/30'
                    : 'bg-navy-900/60 hover:bg-navy-900 border-white/10 text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm sm:text-base font-serif text-white">
                      {fest.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-saffron-400" />
                      <span>{fest.month}</span>
                    </span>
                    <span className="flex items-center gap-1 truncate max-w-[150px]">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{fest.state}</span>
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-saffron-400 translate-x-1' : 'text-slate-500'
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Right: Detailed Festival Showcase Card */}
        <motion.div
          key={selectedFestival.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-navy-900/90 border border-white/15 rounded-2xl overflow-hidden shadow-glass"
        >
          {/* Festival Banner Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={selectedFestival.image}
              alt={selectedFestival.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

            <div className="absolute bottom-5 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-saffron-500 text-white shadow-md">
                  {selectedFestival.month}
                </span>
                <span className="text-xs text-slate-200 flex items-center gap-1 bg-navy-950/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                  {selectedFestival.location}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                {selectedFestival.name}
              </h3>
            </div>
          </div>

          {/* Festival Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Cultural Significance */}
            <div>
              <h4 className="text-xs font-semibold text-saffron-400 uppercase tracking-wider mb-2">
                Cultural Significance
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedFestival.culture}
              </p>
            </div>

            {/* Things to Experience */}
            <div>
              <h4 className="text-xs font-semibold text-saffron-400 uppercase tracking-wider mb-3">
                Signature Experiences
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedFestival.thingsToExperience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tips Box */}
            <div className="p-4 rounded-xl bg-saffron-500/10 border border-saffron-500/20 text-xs sm:text-sm text-saffron-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-saffron-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold mb-0.5">Insider Travel Tips:</strong>
                <span>{selectedFestival.travelTips}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
