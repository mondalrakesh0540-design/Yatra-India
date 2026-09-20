import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, Calendar, Compass, ArrowRight, Sparkles, MapPin, Bookmark } from 'lucide-react';
import { useSaved } from '../context/SavedContext';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';

export const Saved = () => {
  const { savedDestinations, toggleSaveDestination, savedTrips, deleteTrip } = useSaved();
  const [activeTab, setActiveTab] = useState('destinations'); // 'destinations' or 'trips'

  const destinationsList = DESTINATIONS.filter((d) => savedDestinations.includes(d.id));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-2">
            My Travel Collection
          </h1>
          <p className="text-slate-400 text-sm font-light">
            Your personal wishlist of Indian destinations and customized travel itineraries saved in this browser.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-navy-900 border border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'destinations'
                ? 'bg-saffron-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Saved Places ({destinationsList.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('trips')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'trips'
                ? 'bg-saffron-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>My Trips ({savedTrips.length})</span>
          </button>
        </div>
      </div>

      {/* Destinations Tab */}
      {activeTab === 'destinations' && (
        <div>
          {destinationsList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationsList.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="p-16 rounded-3xl bg-navy-900/40 border border-white/10 text-center max-w-lg mx-auto">
              <Heart className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-40" />
              <h3 className="text-xl font-bold font-serif text-white mb-2">
                No Saved Destinations Yet
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Click the heart icon on any destination card to bookmark it for quick access when planning your vacation.
              </p>
              <Link
                to="/destinations"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white text-xs font-bold shadow-glow-saffron inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Destinations</span>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Saved Trips Tab */}
      {activeTab === 'trips' && (
        <div>
          {savedTrips.length > 0 ? (
            <div className="space-y-6">
              {savedTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs font-bold text-saffron-400 uppercase tracking-wider block">
                        Saved Itinerary
                      </span>
                      <h3 className="text-xl font-bold font-serif text-white capitalize">
                        {trip.days}-Day {trip.destination} Tour
                      </h3>
                      <span className="text-xs text-slate-400">
                        Budget: ₹{trip.budget?.toLocaleString()} • {trip.travelers} Traveler(s)
                      </span>
                    </div>

                    <button
                      onClick={() => deleteTrip(trip.id)}
                      className="p-2 text-slate-400 hover:text-red-400 self-start sm:self-auto transition-colors"
                      title="Delete Trip"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {trip.itinerary?.map((day) => (
                      <div key={day.day} className="text-xs text-slate-300 p-3 rounded-xl bg-white/5">
                        <strong className="text-saffron-400 font-semibold mr-2">Day {day.day}:</strong>
                        <span>{day.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-16 rounded-3xl bg-navy-900/40 border border-white/10 text-center max-w-lg mx-auto">
              <Bookmark className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-40" />
              <h3 className="text-xl font-bold font-serif text-white mb-2">
                No Saved Itineraries
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Use our Smart Trip Planner to generate custom day-by-day itineraries and save them here.
              </p>
              <Link
                to="/plan-trip"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white text-xs font-bold shadow-glow-saffron inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Create New Itinerary</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
