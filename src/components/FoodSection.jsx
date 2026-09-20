import React, { useState } from 'react';
import { Utensils, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { REGIONAL_FOODS } from '../data/food';

export const FoodSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Northern India', 'Southern India', 'Western India', 'Eastern India'];

  const filteredFoods = REGIONAL_FOODS.filter((item) => {
    if (selectedRegion === 'All') return true;
    return item.region === selectedRegion;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Utensils className="w-3.5 h-3.5" />
          <span>Culinary Journeys</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          Taste India: The Regional Gastronomy
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          From the fiery Rogan Josh of the Kashmir valley to the coconut-infused seafood curries of Kerala and the sweet syrupy Rosogollas of Bengal.
        </p>

        {/* Region Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedRegion === reg
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                  : 'bg-navy-900 border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="group bg-navy-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-saffron-500/50 shadow-glass transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Food Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-saffron-400 backdrop-blur-md border border-white/10">
                  {food.type}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-slate-200 font-medium bg-navy-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                <span>{food.state}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-saffron-400 transition-colors mb-2">
                  {food.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {food.description}
                </p>

                {/* Key Ingredients */}
                <div className="mb-3">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {food.keyIngredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-300"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Famous Spots */}
              <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                <span className="text-[10px] font-semibold text-saffron-400 uppercase tracking-wider block mb-0.5">
                  Famous Spots:
                </span>
                <span className="text-slate-300 line-clamp-1">
                  {food.famousSpots.join(' • ')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
