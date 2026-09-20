import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Compass, Sparkles, ArrowRight, Wallet } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

export const BudgetExplorer = () => {
  const budgetTiers = [
    {
      id: 'budget',
      title: 'Budget Travel',
      range: '₹5,000 – ₹10,000',
      description: 'Backpacker hostels, local state transport, street food trails, and free natural monuments.',
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'comfortable',
      title: 'Comfortable',
      range: '₹10,000 – ₹25,000',
      description: 'Charming 3-star boutique hotels, hired AC cabs, guided tours, and authentic regional dhabas.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'premium',
      title: 'Premium',
      range: '₹25,000 – ₹50,000',
      description: 'Heritage havelis, luxury houseboats, private safari jeeps, and fine-dining experiences.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'luxury',
      title: 'Royal Luxury',
      range: '₹50,000+',
      description: 'Opulent palace hotels, private catamarans, helicopter transfers, and personalized royal butler service.',
      image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const [activeTier, setActiveTier] = useState('budget');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (activeTier === 'budget') return d.startingBudget <= 10000;
    if (activeTier === 'comfortable') return d.startingBudget > 10000 && d.startingBudget <= 25000;
    if (activeTier === 'premium') return d.startingBudget > 25000 && d.startingBudget <= 50000;
    return d.startingBudget > 20000; // Luxury fallback
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Wallet className="w-3.5 h-3.5" />
          <span>Transparent Travel Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Travel Budget Explorer
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          From pocket-friendly student trips to imperial royal palace vacations, find destinations that perfectly align with your budget.
        </p>
      </div>

      {/* Budget Tier Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {budgetTiers.map((tier, idx) => {
          const isSelected = activeTier === tier.id;
          return (
            <motion.button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl text-left transition-colors border flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-navy-900 to-navy-950 border-saffron-500 shadow-glow-saffron ring-1 ring-saffron-500/40'
                  : 'bg-navy-900/60 hover:bg-navy-900 border-white/10 text-slate-300'
              }`}
            >
              <div>
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/15 shadow-md mb-3.5">
                  <img
                    src={tier.image}
                    alt={tier.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <span className="text-xs font-bold text-saffron-400 uppercase tracking-wider block mb-1">
                  {tier.title}
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">
                  {tier.range}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className={isSelected ? 'text-saffron-400' : ''}>
                  {isSelected ? 'Viewing Selected' : 'Select Tier'}
                </span>
                <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-saffron-400 translate-x-1' : ''}`} />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Filtered Destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.slice(0, 6).map((dest, idx) => (
          <DestinationCard key={dest.id} destination={dest} index={idx} />
        ))}
      </div>
    </section>
  );
};
