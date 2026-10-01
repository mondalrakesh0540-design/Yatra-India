import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Award, 
  Globe2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Yatra India</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
          Discover India. Experience the Extraordinary.
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          Yatra India was founded with a singular, passionate mission: to showcase the breathtaking diversity, royal heritage, spiritual sanctuaries, and untouched natural beauty of India across all 28 States and 8 Union Territories.
        </p>
      </div>

      {/* Impact Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 shadow-glass text-center">
          <span className="text-3xl sm:text-4xl font-extrabold font-serif text-saffron-400 block mb-1">180+</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">Curated Destinations</span>
          <p className="text-[11px] text-slate-400 mt-1">Verified with real transit routes</p>
        </div>
        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 shadow-glass text-center">
          <span className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-400 block mb-1">36</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">States & UTs Covered</span>
          <p className="text-[11px] text-slate-400 mt-1">From Ladakh to Kanyakumari</p>
        </div>
        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 shadow-glass text-center">
          <span className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-400 block mb-1">100%</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">Authentic Heritage</span>
          <p className="text-[11px] text-slate-400 mt-1">Local culture, cuisine & crafts</p>
        </div>
        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 shadow-glass text-center">
          <span className="text-3xl sm:text-4xl font-extrabold font-serif text-purple-400 block mb-1">50K+</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">Happy Travelers</span>
          <p className="text-[11px] text-slate-400 mt-1">Empowering domestic & global tourists</p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-8 shadow-glass space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-saffron-500/10 text-saffron-400 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-white">Curated Exploration</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Every destination is selected with care, complete with authentic photographs, historical context, best seasons, and step-by-step transit connectivity by air, rail, and road.
          </p>
        </div>

        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-8 shadow-glass space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-white">Trust & Verification</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            We avoid generic marketing copy. Our guides feature real community traveler ratings, realistic budget estimations, safety guidelines, and nearest transit junctions.
          </p>
        </div>

        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-8 shadow-glass space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Globe2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-white">Sustainable Tourism</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            We champion responsible travel that honors local tribal communities, protects ecologically sensitive Himalayan valleys, and supports indigenous artisans.
          </p>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-saffron-500/20 via-navy-900 to-amber-500/20 border border-saffron-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          Ready to Begin Your Incredible Journey?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Explore our collection of 180+ tourist spots, check real-time transit guides, or create a personalized itinerary today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-glow-saffron transition-all flex items-center gap-2"
          >
            <span>Explore 180+ Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 transition-all"
          >
            Contact Travel Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
