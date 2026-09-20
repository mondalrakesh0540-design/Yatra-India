import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Users, IndianRupee, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export const TripPlannerCTA = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('kerala');
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState('nature');

  const handleStartPlanning = (e) => {
    e.preventDefault();
    navigate(`/plan-trip?dest=${selectedDestination}&days=${days}&travelers=${travelers}&style=${style}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-white/15 p-8 sm:p-12 lg:p-16 shadow-glass">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-saffron-500/15 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider border border-saffron-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Smart Itinerary Generator</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Plan Your Dream Trip to India in Minutes
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              Customize your duration, budget, and travel style. Our smart planner creates a complete day-by-day itinerary with verified attractions, authentic food recommendations, and travel times.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div>
                <span className="block text-2xl font-bold font-serif text-saffron-400">100%</span>
                <span className="text-xs text-slate-400">Customizable</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-amber-400">Day-by-Day</span>
                <span className="text-xs text-slate-400">Smart Plans</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif text-emerald-400">Free</span>
                <span className="text-xs text-slate-400">Save & Export</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Trip Builder Widget */}
          <div className="lg:col-span-6 bg-navy-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-glass">
            <h3 className="text-xl font-bold font-serif text-white mb-6 flex items-center gap-2">
              <span>Quick Itinerary Builder</span>
            </h3>

            <form onSubmit={handleStartPlanning} className="space-y-4">
              {/* Destination */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Destination or Region
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-saffron-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 appearance-none cursor-pointer"
                  >
                    <option value="kerala">Kerala (Munnar, Alleppey & Varkala)</option>
                    <option value="rajasthan">Rajasthan (Jaipur, Udaipur & Jaisalmer)</option>
                    <option value="kashmir">Kashmir (Srinagar, Gulmarg & Pahalgam)</option>
                    <option value="goa">Goa (Beaches, Forts & Waterfalls)</option>
                    <option value="ladakh">Ladakh (Leh, Pangong & Nubra)</option>
                    <option value="darjeeling">Darjeeling & Sikkim</option>
                    <option value="himachal">Himachal Pradesh (Manali & Spiti)</option>
                    <option value="meghalaya">Meghalaya (Cherrapunji & Dawki)</option>
                    <option value="varanasi">Varanasi & Spiritual North</option>
                  </select>
                </div>
              </div>

              {/* Days & Travelers Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Trip Duration
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-saffron-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 appearance-none cursor-pointer"
                    >
                      <option value="3">3 Days (Weekend)</option>
                      <option value="5">5 Days (Standard)</option>
                      <option value="7">7 Days (Week)</option>
                      <option value="10">10 Days (Deep Dive)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Travelers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-saffron-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 appearance-none cursor-pointer"
                    >
                      <option value="1">Solo Explorer (1)</option>
                      <option value="2">Couple (2)</option>
                      <option value="4">Family / Friends (4)</option>
                      <option value="6">Group (6+)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Primary Travel Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'nature', label: '🌿 Nature' },
                    { id: 'heritage', label: '🏛️ Heritage' },
                    { id: 'adventure', label: '🎒 Adventure' },
                    { id: 'romantic', label: '❤️ Romantic' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setStyle(st.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                        style === st.id
                          ? 'bg-saffron-500 text-white border-saffron-400 font-semibold'
                          : 'bg-navy-900 border-white/10 text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-white font-bold text-sm shadow-glow-saffron transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Day-by-Day Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
