import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Plane, 
  Train, 
  Bus, 
  Hotel,
  Star,
  BedDouble,
  ArrowLeftRight, 
  Calendar, 
  Users, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Ticket, 
  Clock, 
  ShieldCheck, 
  Tag, 
  X,
  CreditCard,
  Luggage,
  Coffee,
  Wifi,
  Zap,
  Info,
  Copy,
  Check,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { bookingsApi, hotelsApi } from '../services/api';
import { 
  AIRPORTS, 
  TRAIN_STATIONS, 
  BUS_CITIES, 
  POPULAR_ROUTES, 
  COUPONS,
  generateFlightResults, 
  generateTrainResults, 
  generateBusResults 
} from '../data/bookingData';

export const BookingSection = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('flights');

  // Flight form state
  const [flightTripType, setFlightTripType] = useState('oneway');
  const [flightFrom, setFlightFrom] = useState('DEL');
  const [flightTo, setFlightTo] = useState('BOM');
  const [flightDepDate, setFlightDepDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [flightRetDate, setFlightRetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 6);
    return d.toISOString().split('T')[0];
  });
  const [flightClass, setFlightClass] = useState('Economy');
  const [passengers, setPassengers] = useState(1);
  const [specialFare, setSpecialFare] = useState('');

  // Train form state
  const [trainFrom, setTrainFrom] = useState('NDLS');
  const [trainTo, setTrainTo] = useState('BSB');
  const [trainDate, setTrainDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [trainQuota, setTrainQuota] = useState('GN');

  // Bus form state
  const [busFrom, setBusFrom] = useState('New Delhi');
  const [busTo, setBusTo] = useState('Manali');
  const [busDate, setBusDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [busType, setBusType] = useState('ALL');

  // Hotel form state (Roadmap Step 11)
  const [hotelDestination, setHotelDestination] = useState('ALL');
  const [hotelCheckIn, setHotelCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [hotelCheckOut, setHotelCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().split('T')[0];
  });
  const [hotelGuests, setHotelGuests] = useState(2);
  const [hotelRooms, setHotelRooms] = useState(1);
  const [hotelsList, setHotelsList] = useState([]);
  const [loadingHotels, setLoadingHotels] = useState(false);

  const loadHotels = async (destFilter = hotelDestination) => {
    setLoadingHotels(true);
    try {
      const data = await hotelsApi.getHotels();
      if (destFilter && destFilter !== 'ALL') {
        const filtered = (data || []).filter((h) => 
          h.destinationId?.toLowerCase().includes(destFilter.toLowerCase()) || 
          h.destinationName?.toLowerCase().includes(destFilter.toLowerCase()) ||
          h.state?.toLowerCase().includes(destFilter.toLowerCase())
        );
        setHotelsList(filtered);
      } else {
        setHotelsList(data || []);
      }
    } catch (e) {
      console.warn('Unable to load hotels from API:', e);
    } finally {
      setLoadingHotels(false);
    }
  };

  // Search Results state
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [bookingStep, setBookingStep] = useState('form'); // 'form' | 'confirmed'

  // Booking details in modal
  const [passengerName, setPassengerName] = useState('Aarav Sharma');
  const [passengerAge, setPassengerAge] = useState('28');
  const [passengerGender, setPassengerGender] = useState('Male');
  const [passengerEmail, setPassengerEmail] = useState('traveler@yatraindia.com');
  const [passengerPhone, setPassengerPhone] = useState('+91 98765 43210');
  const [couponCode, setCouponCode] = useState('YATRA100');
  const [appliedDiscount, setAppliedDiscount] = useState(100);
  const [couponMessage, setCouponMessage] = useState('Coupon YATRA100 applied successfully!');
  const [generatedPnr, setGeneratedPnr] = useState('');

  // MongoDB Auth & Bookings Integration
  const { user, isBackendConnected } = useAuth();
  const [myBookingsList, setMyBookingsList] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [copiedPnr, setCopiedPnr] = useState(null);

  // Sync passenger info from logged-in user
  useEffect(() => {
    if (user) {
      if (user.name || user.displayName) setPassengerName(user.name || user.displayName);
      if (user.email) setPassengerEmail(user.email);
    }
  }, [user]);

  // Load user bookings from MongoDB / Local Storage
  const loadBookings = async () => {
    setLoadingBookings(true);
    try {
      const list = await bookingsApi.getUserBookings(user?.id || user?.uid, user?.email);
      setMyBookingsList(list);
    } catch (e) {
      console.warn('Error fetching bookings:', e);
    } finally {
      setLoadingBookings(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, [user, activeTab]);

  // Handle cross-navigation from Destination Detail "How to Reach" CTAs
  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const tabParam = searchParams.get('bookingTab') || location.state?.bookingTab;
      const toParam = searchParams.get('bookingTo') || location.state?.bookingTo;

      if (tabParam && ['flights', 'trains', 'buses', 'my-bookings'].includes(tabParam)) {
        setActiveTab(tabParam);
        setSearchResults(null);
      }

      if (toParam) {
        if (tabParam === 'trains') {
          setTrainTo(toParam);
        } else if (tabParam === 'buses') {
          setBusTo(toParam);
        } else {
          setFlightTo(toParam);
        }
      }
    } catch (e) {
      console.warn('Booking cross-navigation param error:', e);
    }
  }, [location]);

  // Swappers
  const handleSwapFlights = () => {
    setFlightFrom(flightTo);
    setFlightTo(flightFrom);
  };

  const handleSwapTrains = () => {
    setTrainFrom(trainTo);
    setTrainTo(trainFrom);
  };

  const handleSwapBuses = () => {
    setBusFrom(busTo);
    setBusTo(busFrom);
  };

  // Search Handler
  const handleSearch = () => {
    setSearching(true);
    setSearchResults(null);

    setTimeout(() => {
      let results = [];
      if (activeTab === 'flights') {
        results = generateFlightResults(flightFrom, flightTo, flightDepDate);
      } else if (activeTab === 'trains') {
        results = generateTrainResults(trainFrom, trainTo, trainDate);
      } else {
        results = generateBusResults(busFrom, busTo, busDate);
      }
      setSearchResults(results);
      setSearching(false);

      // Smooth scroll to results
      setTimeout(() => {
        const el = document.getElementById('booking-results-anchor');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 450);
  };

  // Open booking modal
  const handleInitiateBooking = (item, chosenClass = null) => {
    setSelectedItinerary({ ...item, chosenClass });
    setBookingStep('form');
    setGeneratedPnr('');
  };

  // Coupon apply
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const found = COUPONS.find((c) => c.code.toUpperCase() === couponCode.trim().toUpperCase());
    if (found) {
      setAppliedDiscount(found.discount);
      setCouponMessage(`Discount of ₹${found.discount} applied!`);
    } else {
      setAppliedDiscount(0);
      setCouponMessage('Invalid coupon code. Try YATRA100 or EXPLOREINDIA');
    }
  };

  // Final confirmation & MongoDB / Local Persistence
  const handleConfirmBooking = async () => {
    const pnr = `YTR${Math.floor(10000000 + Math.random() * 90000000)}`;
    setGeneratedPnr(pnr);
    setBookingStep('confirmed');

    const basePrice = selectedItinerary.chosenClass ? selectedItinerary.chosenClass.price : (selectedItinerary.price || 0);
    const finalPrice = Math.max(0, (basePrice * passengers) - appliedDiscount);

    const bookingPayload = {
      pnr,
      type: activeTab,
      userId: user?.id || user?.uid || null,
      passengerName,
      passengerAge,
      passengerGender,
      passengerEmail,
      passengerPhone,
      fromCity: selectedItinerary.from || (activeTab === 'flights' ? flightFrom : activeTab === 'trains' ? trainFrom : busFrom),
      toCity: selectedItinerary.to || (activeTab === 'flights' ? flightTo : activeTab === 'trains' ? trainTo : busTo),
      departureDate: selectedItinerary.date || (activeTab === 'flights' ? flightDepDate : activeTab === 'trains' ? trainDate : busDate),
      itinerary: selectedItinerary,
      fareDetails: {
        baseFare: basePrice,
        discount: appliedDiscount,
        totalFare: finalPrice,
        passengers
      },
      couponCode: appliedDiscount > 0 ? couponCode : null,
      status: 'CONFIRMED'
    };

    try {
      await bookingsApi.createBooking(bookingPayload);
      loadBookings();
    } catch (err) {
      console.warn('Booking persistence notification:', err);
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#fbbf24', '#ffffff', '#385ba3']
    });
  };

  return (
    <section id="booking-section" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20 shadow-sm">
          <Ticket className="w-3.5 h-3.5" />
          <span>Complete Travel Mobility</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-3">
          Book Flights, Trains & Buses
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Fast, transparent, and seamless ticketing across 100+ airlines, Indian Railways IRCTC routes, and luxury intercity Volvo coaches.
        </p>
      </div>

      {/* Main Booking Card */}
      <div className="relative rounded-3xl border border-white/15 bg-navy-900/85 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl">
        {/* Navigation Tabs: Flights / Trains / Buses */}
        <div className="flex items-center justify-center sm:justify-start gap-2 border-b border-white/10 pb-5 mb-7 overflow-x-auto">
          <button
            onClick={() => { setActiveTab('flights'); setSearchResults(null); }}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === 'flights'
                ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Flights</span>
          </button>

          <button
            onClick={() => { setActiveTab('trains'); setSearchResults(null); }}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === 'trains'
                ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Train className="w-4 h-4" />
            <span>Trains (IRCTC)</span>
          </button>

          <button
            onClick={() => { setActiveTab('buses'); setSearchResults(null); }}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === 'buses'
                ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>Buses</span>
          </button>

          <button
            onClick={() => { setActiveTab('hotels'); setSearchResults(null); loadHotels(); }}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === 'hotels'
                ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>Hotels & Stays</span>
          </button>

          <button
            onClick={() => { setActiveTab('my-bookings'); setSearchResults(null); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 sm:ml-auto ${
              activeTab === 'my-bookings'
                ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-white/10'
            }`}
          >
            <Ticket className="w-4 h-4 text-saffron-400" />
            <span>My Bookings</span>
            {myBookingsList.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-saffron-500 text-white font-bold text-[10px] flex items-center justify-center">
                {myBookingsList.length}
              </span>
            )}
          </button>
        </div>

        {/* ======================================================== */}
        {/* 1. FLIGHTS TAB FORM */}
        {/* ======================================================== */}
        {activeTab === 'flights' && (
          <div className="space-y-6">
            {/* Trip Type & Cabin Class Selection */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4 text-slate-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="flightTripType"
                    checked={flightTripType === 'oneway'}
                    onChange={() => setFlightTripType('oneway')}
                    className="accent-saffron-500 w-3.5 h-3.5"
                  />
                  <span>One Way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="flightTripType"
                    checked={flightTripType === 'roundtrip'}
                    onChange={() => setFlightTripType('roundtrip')}
                    className="accent-saffron-500 w-3.5 h-3.5"
                  />
                  <span>Round Trip</span>
                </label>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                  className="bg-navy-950/80 text-slate-200 border border-white/15 rounded-lg px-3 py-1.5 focus:border-saffron-500 outline-none"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business Class</option>
                </select>

                <div className="flex items-center gap-2 bg-navy-950/80 border border-white/15 rounded-lg px-3 py-1.5 text-slate-200">
                  <Users className="w-3.5 h-3.5 text-saffron-400" />
                  <span>{passengers} Traveler(s)</span>
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      type="button"
                      disabled={passengers <= 1}
                      onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      disabled={passengers >= 9}
                      onClick={() => setPassengers((p) => Math.min(9, p + 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Origin */}
              <div className="md:col-span-3.5 relative bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">From</span>
                <select
                  value={flightFrom}
                  onChange={(e) => setFlightFrom(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {AIRPORTS.map((apt) => (
                    <option key={apt.code} value={apt.code} className="bg-navy-950 text-white">
                      {apt.city} ({apt.code})
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {AIRPORTS.find((a) => a.code === flightFrom)?.name}
                </span>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 md:my-0 md:col-span-1">
                <button
                  type="button"
                  onClick={handleSwapFlights}
                  aria-label="Swap origin and destination"
                  className="w-10 h-10 rounded-full bg-navy-800 border border-white/15 text-saffron-400 hover:text-white hover:bg-saffron-500 flex items-center justify-center transition-all shadow-md active:scale-95"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* Destination */}
              <div className="md:col-span-3.5 relative bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">To</span>
                <select
                  value={flightTo}
                  onChange={(e) => setFlightTo(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {AIRPORTS.map((apt) => (
                    <option key={apt.code} value={apt.code} className="bg-navy-950 text-white">
                      {apt.city} ({apt.code})
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {AIRPORTS.find((a) => a.code === flightTo)?.name}
                </span>
              </div>

              {/* Departure Date */}
              <div className={`${flightTripType === 'roundtrip' ? 'md:col-span-2' : 'md:col-span-4'} bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors`}>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-saffron-400" /> Departure
                </span>
                <input
                  type="date"
                  value={flightDepDate}
                  onChange={(e) => setFlightDepDate(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                />
              </div>

              {/* Return Date (if Round trip) */}
              {flightTripType === 'roundtrip' && (
                <div className="md:col-span-2 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-saffron-400" /> Return
                  </span>
                  <input
                    type="date"
                    value={flightRetDate}
                    onChange={(e) => setFlightRetDate(e.target.value)}
                    className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Special Fares & Popular Routes */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-400" /> Popular Routes:
                </span>
                {POPULAR_ROUTES.flights.map((rt) => (
                  <button
                    key={rt.label}
                    type="button"
                    onClick={() => { setFlightFrom(rt.from); setFlightTo(rt.to); }}
                    className="px-2.5 py-1 rounded-lg bg-navy-950/70 hover:bg-saffron-500/20 text-slate-300 hover:text-saffron-300 border border-white/10 hover:border-saffron-500/30 transition-colors"
                  >
                    {rt.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleSearch}
                disabled={searching}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 text-white font-bold text-base shadow-glow-saffron hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5"
              >
                <Search className="w-5 h-5" />
                <span>{searching ? 'Searching Flights...' : 'Search Flights'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. TRAINS (IRCTC) TAB FORM */}
        {/* ======================================================== */}
        {activeTab === 'trains' && (
          <div className="space-y-6">
            {/* Train Quota Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-emerald-400">IRCTC Official Authorized Partner</span>
                <span className="text-slate-500">|</span>
                <span>Instant PNR & Live Running Status</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Quota:</span>
                <select
                  value={trainQuota}
                  onChange={(e) => setTrainQuota(e.target.value)}
                  className="bg-navy-950/80 text-slate-200 border border-white/15 rounded-lg px-3 py-1.5 focus:border-saffron-500 outline-none"
                >
                  <option value="GN">General Quota (GN)</option>
                  <option value="TQ">Tatkal (TQ)</option>
                  <option value="PT">Premium Tatkal (PT)</option>
                  <option value="LD">Ladies (LD)</option>
                </select>
              </div>
            </div>

            {/* Train Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Origin Station */}
              <div className="md:col-span-4 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">From Station</span>
                <select
                  value={trainFrom}
                  onChange={(e) => setTrainFrom(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {TRAIN_STATIONS.map((st) => (
                    <option key={st.code} value={st.code} className="bg-navy-950 text-white">
                      {st.city} - {st.code}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {TRAIN_STATIONS.find((s) => s.code === trainFrom)?.name}
                </span>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 md:my-0 md:col-span-1">
                <button
                  type="button"
                  onClick={handleSwapTrains}
                  aria-label="Swap stations"
                  className="w-10 h-10 rounded-full bg-navy-800 border border-white/15 text-saffron-400 hover:text-white hover:bg-saffron-500 flex items-center justify-center transition-all shadow-md active:scale-95"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* Destination Station */}
              <div className="md:col-span-4 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">To Station</span>
                <select
                  value={trainTo}
                  onChange={(e) => setTrainTo(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {TRAIN_STATIONS.map((st) => (
                    <option key={st.code} value={st.code} className="bg-navy-950 text-white">
                      {st.city} - {st.code}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {TRAIN_STATIONS.find((s) => s.code === trainTo)?.name}
                </span>
              </div>

              {/* Date */}
              <div className="md:col-span-3 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-saffron-400" /> Travel Date
                </span>
                <input
                  type="date"
                  value={trainDate}
                  onChange={(e) => setTrainDate(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Popular Routes & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-400" /> Vande Bharat Routes:
                </span>
                {POPULAR_ROUTES.trains.map((rt) => (
                  <button
                    key={rt.label}
                    type="button"
                    onClick={() => { setTrainFrom(rt.from); setTrainTo(rt.to); }}
                    className="px-2.5 py-1 rounded-lg bg-navy-950/70 hover:bg-saffron-500/20 text-slate-300 hover:text-saffron-300 border border-white/10 hover:border-saffron-500/30 transition-colors"
                  >
                    {rt.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleSearch}
                disabled={searching}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 text-white font-bold text-base shadow-glow-saffron hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5"
              >
                <Search className="w-5 h-5" />
                <span>{searching ? 'Checking IRCTC Seats...' : 'Search Trains'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 3. BUSES TAB FORM */}
        {/* ======================================================== */}
        {activeTab === 'buses' && (
          <div className="space-y-6">
            {/* Bus Type Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="font-semibold text-saffron-400">Live Seat Selection & Free Cancellation</span>
                <span className="text-slate-500">|</span>
                <span>Zingbus, IntrCity, NueGo Electric AC</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Bus Type:</span>
                <select
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                  className="bg-navy-950/80 text-slate-200 border border-white/15 rounded-lg px-3 py-1.5 focus:border-saffron-500 outline-none"
                >
                  <option value="ALL">All Coaches</option>
                  <option value="VOLVO">Volvo AC Multi-Axle</option>
                  <option value="SLEEPER">AC Sleeper (2+1)</option>
                  <option value="ELECTRIC">NueGo Green Electric ⚡</option>
                </select>
              </div>
            </div>

            {/* Bus Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Origin City */}
              <div className="md:col-span-4 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">From City</span>
                <select
                  value={busFrom}
                  onChange={(e) => setBusFrom(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {BUS_CITIES.map((c) => (
                    <option key={c.city} value={c.city} className="bg-navy-950 text-white">
                      {c.city}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {BUS_CITIES.find((c) => c.city === busFrom)?.terminal}
                </span>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 md:my-0 md:col-span-1">
                <button
                  type="button"
                  onClick={handleSwapBuses}
                  aria-label="Swap cities"
                  className="w-10 h-10 rounded-full bg-navy-800 border border-white/15 text-saffron-400 hover:text-white hover:bg-saffron-500 flex items-center justify-center transition-all shadow-md active:scale-95"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* Destination City */}
              <div className="md:col-span-4 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">To City</span>
                <select
                  value={busTo}
                  onChange={(e) => setBusTo(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {BUS_CITIES.map((c) => (
                    <option key={c.city} value={c.city} className="bg-navy-950 text-white">
                      {c.city}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  {BUS_CITIES.find((c) => c.city === busTo)?.terminal}
                </span>
              </div>

              {/* Date */}
              <div className="md:col-span-3 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-saffron-400" /> Travel Date
                </span>
                <input
                  type="date"
                  value={busDate}
                  onChange={(e) => setBusDate(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Popular Routes & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-400" /> Popular Bus Corridors:
                </span>
                {POPULAR_ROUTES.buses.map((rt) => (
                  <button
                    key={rt.label}
                    type="button"
                    onClick={() => { setBusFrom(rt.from); setBusTo(rt.to); }}
                    className="px-2.5 py-1 rounded-lg bg-navy-950/70 hover:bg-saffron-500/20 text-slate-300 hover:text-saffron-300 border border-white/10 hover:border-saffron-500/30 transition-colors"
                  >
                    {rt.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleSearch}
                disabled={searching}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 text-white font-bold text-base shadow-glow-saffron hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5"
              >
                <Search className="w-5 h-5" />
                <span>{searching ? 'Finding Coaches...' : 'Search Buses'}</span>
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. HOTELS & HOMESTAYS TAB (Roadmap Step 11) */}
        {/* ======================================================== */}
        {activeTab === 'hotels' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
                <span>Handpicked heritage palaces, mountain homestays, and beachside luxury villas</span>
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-navy-950/80 border border-white/15 rounded-lg px-3 py-1.5 text-slate-200">
                  <BedDouble className="w-3.5 h-3.5 text-saffron-400" />
                  <span>{hotelRooms} Room(s)</span>
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      type="button"
                      disabled={hotelRooms <= 1}
                      onClick={() => setHotelRooms((r) => Math.max(1, r - 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      disabled={hotelRooms >= 5}
                      onClick={() => setHotelRooms((r) => Math.min(5, r + 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-navy-950/80 border border-white/15 rounded-lg px-3 py-1.5 text-slate-200">
                  <Users className="w-3.5 h-3.5 text-saffron-400" />
                  <span>{hotelGuests} Guest(s)</span>
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      type="button"
                      disabled={hotelGuests <= 1}
                      onClick={() => setHotelGuests((g) => Math.max(1, g - 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      disabled={hotelGuests >= 12}
                      onClick={() => setHotelGuests((g) => Math.min(12, g + 1))}
                      className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 text-center leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Destination Filter */}
              <div className="md:col-span-5 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">
                  Destination / City
                </span>
                <select
                  value={hotelDestination}
                  onChange={(e) => {
                    setHotelDestination(e.target.value);
                    loadHotels(e.target.value);
                  }}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  <option value="ALL" className="bg-navy-950 text-white">All Destinations (India-wide)</option>
                  <option value="jodhpur" className="bg-navy-950 text-white">Jodhpur, Rajasthan</option>
                  <option value="jaipur" className="bg-navy-950 text-white">Jaipur, Rajasthan</option>
                  <option value="agra" className="bg-navy-950 text-white">Agra, Uttar Pradesh</option>
                  <option value="varanasi" className="bg-navy-950 text-white">Varanasi, Uttar Pradesh</option>
                  <option value="manali" className="bg-navy-950 text-white">Manali, Himachal Pradesh</option>
                  <option value="goa" className="bg-navy-950 text-white">Goa (Beaches & Resorts)</option>
                  <option value="munnar" className="bg-navy-950 text-white">Munnar, Kerala</option>
                </select>
                <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                  Verified stays with direct host contact
                </span>
              </div>

              {/* Check-In */}
              <div className="md:col-span-3.5 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-saffron-400" /> Check-in Date
                </span>
                <input
                  type="date"
                  value={hotelCheckIn}
                  onChange={(e) => setHotelCheckIn(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                />
              </div>

              {/* Check-Out */}
              <div className="md:col-span-3.5 bg-navy-950/80 rounded-2xl p-3.5 border border-white/15 focus-within:border-saffron-500 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-saffron-400" /> Check-out Date
                </span>
                <input
                  type="date"
                  value={hotelCheckOut}
                  onChange={(e) => setHotelCheckOut(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Hotel Cards Grid */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-saffron-400" />
                  <span>Available Boutique Stays & Palaces ({hotelsList.length})</span>
                </h4>
                <button
                  type="button"
                  onClick={() => loadHotels(hotelDestination)}
                  className="text-xs text-saffron-400 hover:text-saffron-300 font-semibold flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${loadingHotels ? 'animate-spin' : ''}`} />
                  <span>Update Listings</span>
                </button>
              </div>

              {loadingHotels ? (
                <div className="py-12 text-center text-slate-400 text-sm">
                  Fetching verified luxury stays...
                </div>
              ) : hotelsList.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-sm border border-dashed border-white/10 rounded-2xl">
                  No hotels found for the selected destination. Try selecting "All Destinations".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {hotelsList.map((hotel) => (
                    <div
                      key={hotel._id || hotel.name}
                      className="group rounded-2xl bg-navy-950/90 border border-white/10 overflow-hidden hover:border-saffron-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                          <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-saffron-400 flex items-center gap-1 border border-white/10">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span>{hotel.rating}</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            {hotel.status || 'Verified'}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <h5 className="font-bold font-serif text-white text-base group-hover:text-saffron-400 transition-colors line-clamp-1">
                            {hotel.name}
                          </h5>
                          <p className="text-xs text-slate-400 flex items-center gap-1">
                            <span>{hotel.destinationName || hotel.destinationId}</span>
                            <span>•</span>
                            <span className="text-slate-300 font-medium">{hotel.state}</span>
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {(hotel.amenities || []).slice(0, 3).map((amenity) => (
                              <span
                                key={amenity}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 pt-2 border-t border-white/10 flex items-center justify-between bg-white/[0.02]">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Per Night</span>
                          <span className="text-base font-extrabold text-emerald-400">
                            ₹{(hotel.pricePerNight || 3500).toLocaleString('en-IN')}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedItinerary({
                              airline: hotel.name,
                              trainName: hotel.name,
                              operator: `${hotel.destinationName || 'Luxury'} Boutique Resort`,
                              from: hotel.destinationName || 'Destination',
                              to: hotel.name,
                              departureDate: hotelCheckIn,
                              arrivalDate: hotelCheckOut,
                              departureTime: 'Check-in: 12:00 PM',
                              arrivalTime: 'Check-out: 11:00 AM',
                              class: `${hotelRooms} Room(s), ${hotelGuests} Guest(s)`,
                              price: (hotel.pricePerNight || 3500) * hotelRooms * 2,
                              type: 'hotels'
                            });
                            setBookingStep('form');
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:brightness-110 text-white font-bold text-xs shadow-glow-saffron transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Ticket className="w-3.5 h-3.5" />
                          <span>Reserve Stay</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 5. MY BOOKINGS TAB */}
        {/* ======================================================== */}
        {activeTab === 'my-bookings' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-saffron-400" />
                  <span>Your Travel Bookings & E-Tickets</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {user ? `Showing bookings linked to ${user.email}` : 'Showing current device and session bookings'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={loadBookings}
                  disabled={loadingBookings}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingBookings ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-navy-950 border border-white/10 text-slate-300">
                  {isBackendConnected ? 'MongoDB API' : 'Local Storage Mode'}
                </span>
              </div>
            </div>

            {loadingBookings ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-saffron-400 mb-3" />
                <p>Loading your verified bookings...</p>
              </div>
            ) : myBookingsList.length === 0 ? (
              <div className="py-16 px-4 text-center rounded-2xl bg-navy-950/50 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-saffron-500/10 border border-saffron-500/20 text-saffron-400 mx-auto flex items-center justify-center mb-4">
                  <Ticket className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">No Bookings Found</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
                  You haven't made any flight, train, or bus reservations yet. Choose a route above to generate your instant e-ticket with PNR!
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('flights')}
                    className="px-4 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-semibold shadow-glow-saffron transition-colors"
                  >
                    Book Flights
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('trains')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                  >
                    Book Trains
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('buses')}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                  >
                    Book Buses
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myBookingsList.map((b) => (
                  <div
                    key={b.pnr}
                    className="p-5 rounded-2xl bg-navy-950/80 border border-white/10 hover:border-saffron-500/40 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      {/* Top Row: Type & PNR */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-saffron-500/15 border border-saffron-500/30 text-saffron-400 flex items-center justify-center">
                            {b.type === 'flights' ? <Plane className="w-4 h-4" /> : b.type === 'trains' ? <Train className="w-4 h-4" /> : b.type === 'hotels' ? <Hotel className="w-4 h-4" /> : <Bus className="w-4 h-4" />}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              {b.type === 'flights' ? 'Flight Ticket' : b.type === 'trains' ? 'IRCTC Train' : b.type === 'hotels' ? 'Hotel Stay' : 'Intercity Bus'}
                            </span>
                            <span className="text-xs font-semibold text-white">
                              {b.itinerary?.airline || b.itinerary?.trainName || b.itinerary?.operator || 'Confirmed Journey'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                            {b.pnr}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard?.writeText(b.pnr);
                              setCopiedPnr(b.pnr);
                              setTimeout(() => setCopiedPnr(null), 1500);
                            }}
                            title="Copy PNR"
                            className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                          >
                            {copiedPnr === b.pnr ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Route & Passenger */}
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>
                          <span className="text-[10px] text-slate-400 block">From ➔ To</span>
                          <strong className="text-white text-sm">{b.fromCity} ➔ {b.toCity}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Travel Date</span>
                          <strong className="text-slate-200">{b.departureDate}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Passenger</span>
                          <span className="text-slate-300">{b.passengerName}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Paid Fare</span>
                          <span className="text-emerald-400 font-bold">₹{(b.fareDetails?.totalFare || 0).toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-white/10 pt-3 flex items-center justify-between mt-2">
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                        {b.status || 'CONFIRMED'}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedItinerary(b.itinerary || {
                            airline: b.itinerary?.airline || 'Travel Partner',
                            trainName: b.itinerary?.trainName || 'Express',
                            operator: b.itinerary?.operator || 'Volvo Bus',
                            from: b.fromCity,
                            to: b.toCity,
                            date: b.departureDate,
                            type: b.type === 'flights' ? 'flight' : b.type === 'trains' ? 'train' : 'bus',
                            departureTime: b.itinerary?.departureTime || '08:00 AM',
                            arrivalTime: b.itinerary?.arrivalTime || '11:30 AM',
                            price: b.fareDetails?.totalFare || 0
                          });
                          setPassengerName(b.passengerName || 'Traveler');
                          setPassengerEmail(b.passengerEmail || 'traveler@yatraindia.com');
                          setPassengerAge(b.passengerAge || '28');
                          setPassengerGender(b.passengerGender || 'Any');
                          setGeneratedPnr(b.pnr);
                          setBookingStep('confirmed');
                        }}
                        className="text-xs font-semibold text-saffron-400 hover:text-saffron-300 flex items-center gap-1"
                      >
                        <span>View E-Ticket</span>
                        <Ticket className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* SEARCH RESULTS ANCHOR & SECTION */}
      {/* ======================================================== */}
      <div id="booking-results-anchor" className="scroll-mt-24 pt-8">
        {searchResults && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Available {activeTab === 'flights' ? 'Flights' : activeTab === 'trains' ? 'Trains' : 'Buses'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Showing verified schedules for{' '}
                  <span className="text-saffron-400 font-medium">
                    {activeTab === 'flights' ? `${flightFrom} ➔ ${flightTo}` : activeTab === 'trains' ? `${trainFrom} ➔ ${trainTo}` : `${busFrom} ➔ ${busTo}`}
                  </span>
                </p>
              </div>
              <span className="text-xs bg-saffron-500/15 border border-saffron-500/30 text-saffron-400 font-semibold px-3 py-1 rounded-full">
                {searchResults.length} Options Found
              </span>
            </div>

            {/* Results List */}
            <div className="space-y-3.5">
              {/* FLIGHT CARDS */}
              {activeTab === 'flights' &&
                searchResults.map((flt) => (
                  <div
                    key={flt.id}
                    className="p-5 rounded-2xl bg-navy-900/80 border border-white/10 hover:border-saffron-500/40 backdrop-blur-xl shadow-glass transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Airline info */}
                    <div className="flex items-center gap-3.5 min-w-[200px]">
                      <div className={`w-11 h-11 rounded-xl ${flt.logoBg} flex items-center justify-center text-white font-black text-sm shadow-md`}>
                        {flt.airline.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">{flt.airline}</div>
                        <div className="text-xs text-slate-400">{flt.flightNumber} • {flt.badge}</div>
                      </div>
                    </div>

                    {/* Schedule & Duration */}
                    <div className="flex items-center justify-between md:justify-center gap-6 flex-1 text-center">
                      <div>
                        <div className="text-xl font-bold text-white">{flt.departureTime}</div>
                        <div className="text-xs text-slate-400">{flt.from}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[11px] text-slate-400">{flt.duration}</span>
                        <div className="w-24 sm:w-32 h-px bg-white/20 relative my-1">
                          <Plane className="w-3.5 h-3.5 text-saffron-400 absolute left-1/2 -top-1.5 -translate-x-1/2" />
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">{flt.stops}</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{flt.arrivalTime}</div>
                        <div className="text-xs text-slate-400">{flt.to}</div>
                      </div>
                    </div>

                    {/* Price & Book CTA */}
                    <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                      <div className="text-left md:text-right">
                        <div className="text-xs text-slate-400">Starts at</div>
                        <div className="text-2xl font-black text-saffron-400">₹{flt.price.toLocaleString('en-IN')}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInitiateBooking(flt)}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white font-bold text-sm shadow-glow-saffron hover:brightness-110 active:scale-95 transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}

              {/* TRAIN CARDS */}
              {activeTab === 'trains' &&
                searchResults.map((trn) => (
                  <div
                    key={trn.id}
                    className="p-5 rounded-2xl bg-navy-900/80 border border-white/10 hover:border-saffron-500/40 backdrop-blur-xl shadow-glass transition-all space-y-4"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center text-white shadow-sm">
                          <Train className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-base flex items-center gap-2">
                            <span>{trn.trainName}</span>
                            <span className="text-xs font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">#{trn.trainNumber}</span>
                          </div>
                          <div className="text-xs text-slate-400">Runs: {trn.runsOn} • {trn.badge}</div>
                        </div>
                      </div>

                      {/* Timings */}
                      <div className="flex items-center gap-6 text-sm text-slate-200">
                        <div><strong className="text-white text-base">{trn.departureTime}</strong> ({trn.from})</div>
                        <div className="text-xs text-slate-400">➔ {trn.duration} ➔</div>
                        <div><strong className="text-white text-base">{trn.arrivalTime}</strong> ({trn.to})</div>
                      </div>
                    </div>

                    {/* Classes Availability & Pricing */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      {trn.classes.map((cls) => (
                        <div
                          key={cls.name}
                          onClick={() => handleInitiateBooking(trn, cls)}
                          className="p-3 rounded-xl border border-white/10 bg-navy-950/60 hover:border-saffron-500/50 hover:bg-navy-950 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-200 group-hover:text-saffron-400">{cls.name}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              cls.statusType === 'avl'
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : cls.statusType === 'rac'
                                ? 'bg-amber-500/15 text-amber-400'
                                : 'bg-red-500/15 text-red-400'
                            }`}>
                              {cls.status}
                            </span>
                          </div>
                          <div className="mt-2 flex items-baseline justify-between">
                            <span className="text-base font-black text-white">₹{cls.price}</span>
                            <span className="text-[11px] text-saffron-400 font-semibold group-hover:underline">Book ➔</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              {/* BUS CARDS */}
              {activeTab === 'buses' &&
                searchResults.map((bus) => (
                  <div
                    key={bus.id}
                    className="p-5 rounded-2xl bg-navy-900/80 border border-white/10 hover:border-saffron-500/40 backdrop-blur-xl shadow-glass transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Operator & Type */}
                    <div className="min-w-[240px]">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{bus.operator}</span>
                        <span className="text-xs bg-emerald-500/15 text-emerald-400 font-bold px-1.5 py-0.5 rounded">
                          ★ {bus.rating}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{bus.busType}</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {bus.amenities.slice(0, 3).map((am) => (
                          <span key={am} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-center justify-between md:justify-center gap-6 flex-1 text-center">
                      <div>
                        <div className="text-xl font-bold text-white">{bus.departureTime}</div>
                        <div className="text-xs text-slate-400">{bus.from}</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[11px] text-slate-400">{bus.duration}</span>
                        <div className="w-24 h-px bg-white/20 relative my-1">
                          <Bus className="w-3.5 h-3.5 text-saffron-400 absolute left-1/2 -top-1.5 -translate-x-1/2" />
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">{bus.availableSeats} Seats Left</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{bus.arrivalTime}</div>
                        <div className="text-xs text-slate-400">{bus.to}</div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                      <div className="text-left md:text-right">
                        <div className="text-xs text-slate-400">Fare per seat</div>
                        <div className="text-2xl font-black text-saffron-400">₹{bus.price}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInitiateBooking(bus)}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white font-bold text-sm shadow-glow-saffron hover:brightness-110 active:scale-95 transition-all"
                      >
                        Select Seat
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* BOOKING MODAL & E-TICKET CONFIRMATION */}
      {/* ======================================================== */}
      {selectedItinerary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-navy-950 p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
            {/* Close button */}
            <button
              onClick={() => setSelectedItinerary(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === 'form' ? (
              <div className="space-y-5">
                {/* Modal Header */}
                <div>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-400 uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Secure Traveler Booking</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Confirm Your {selectedItinerary.type === 'flight' ? 'Flight' : selectedItinerary.type === 'train' ? 'Train Ticket' : 'Bus Ticket'}
                  </h3>
                </div>

                {/* Recap Box */}
                <div className="p-4 rounded-2xl bg-navy-900/80 border border-white/10 text-xs space-y-2">
                  <div className="flex items-center justify-between font-bold text-sm text-white">
                    <span>
                      {selectedItinerary.type === 'flight' && selectedItinerary.airline}
                      {selectedItinerary.type === 'train' && selectedItinerary.trainName}
                      {selectedItinerary.type === 'bus' && selectedItinerary.operator}
                    </span>
                    <span className="text-saffron-400">
                      {selectedItinerary.chosenClass ? selectedItinerary.chosenClass.name : selectedItinerary.cabin || selectedItinerary.busType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Route: <strong>{selectedItinerary.from}</strong> ➔ <strong>{selectedItinerary.to}</strong></span>
                    <span>Date: <strong>{selectedItinerary.date}</strong></span>
                  </div>
                  <div className="text-slate-400">
                    Departure: {selectedItinerary.departureTime} | Arrival: {selectedItinerary.arrivalTime} ({selectedItinerary.duration})
                  </div>
                </div>

                {/* Passenger Form */}
                <div className="space-y-3 text-xs">
                  <h4 className="font-bold text-slate-200 text-sm">Passenger Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="sm:col-span-2">
                      <label className="block text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        className="w-full bg-navy-900 border border-white/15 rounded-xl px-3 py-2 text-white outline-none focus:border-saffron-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Age</label>
                      <input
                        type="number"
                        value={passengerAge}
                        onChange={(e) => setPassengerAge(e.target.value)}
                        className="w-full bg-navy-900 border border-white/15 rounded-xl px-3 py-2 text-white outline-none focus:border-saffron-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-400 mb-1">Email for E-Ticket</label>
                      <input
                        type="email"
                        value={passengerEmail}
                        onChange={(e) => setPassengerEmail(e.target.value)}
                        className="w-full bg-navy-900 border border-white/15 rounded-xl px-3 py-2 text-white outline-none focus:border-saffron-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Mobile Number (SMS)</label>
                      <input
                        type="tel"
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                        className="w-full bg-navy-900 border border-white/15 rounded-xl px-3 py-2 text-white outline-none focus:border-saffron-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-saffron-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Enter coupon (e.g. YATRA100)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full bg-navy-900 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-white outline-none focus:border-saffron-500 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {couponMessage && (
                  <p className="text-[11px] text-emerald-400 -mt-2">{couponMessage}</p>
                )}

                {/* Price Breakdown */}
                {(() => {
                  const base = selectedItinerary.chosenClass ? selectedItinerary.chosenClass.price : selectedItinerary.price;
                  const total = Math.max(0, base - appliedDiscount);
                  return (
                    <div className="border-t border-white/10 pt-3 space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span>Base Fare</span>
                        <span>₹{base.toLocaleString('en-IN')}</span>
                      </div>
                      {appliedDiscount > 0 && (
                        <div className="flex justify-between text-emerald-400 font-semibold">
                          <span>Special Promo Discount</span>
                          <span>- ₹{appliedDiscount}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                        <span>Total Payable</span>
                        <span className="text-saffron-400">₹{total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  );
                })()}

                {/* CTA */}
                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 text-white font-bold text-base shadow-glow-saffron hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Instant Confirm & Book</span>
                </button>
              </div>
            ) : (
              /* CONFIRMED E-TICKET VIEW */
              <div className="text-center space-y-5 py-2">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">Booking Confirmed!</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Your official E-Ticket has been generated and sent to <strong className="text-white">{passengerEmail}</strong>.
                  </p>
                </div>

                {/* E-Ticket Display Card */}
                <div className="p-5 rounded-2xl bg-navy-900 border border-white/15 text-left space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold">Booking Reference (PNR)</span>
                      <div className="text-lg font-mono font-black text-saffron-400 tracking-wider">{generatedPnr}</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
                      CONFIRMED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Passenger</span>
                      <strong className="text-white">{passengerName}</strong> ({passengerAge} yrs, {passengerGender})
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Travel Date</span>
                      <strong className="text-white">{selectedItinerary.date}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">From</span>
                      <strong className="text-white">{selectedItinerary.from}</strong> ({selectedItinerary.departureTime})
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">To</span>
                      <strong className="text-white">{selectedItinerary.to}</strong> ({selectedItinerary.arrivalTime})
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-xs text-slate-400">
                    <span>Carrier / Operator:</span>
                    <strong className="text-slate-200">
                      {selectedItinerary.type === 'flight' && `${selectedItinerary.airline} (${selectedItinerary.flightNumber})`}
                      {selectedItinerary.type === 'train' && `${selectedItinerary.trainName} (#${selectedItinerary.trainNumber})`}
                      {selectedItinerary.type === 'bus' && selectedItinerary.operator}
                    </strong>
                  </div>
                </div>

                {/* Done Button */}
                <button
                  type="button"
                  onClick={() => setSelectedItinerary(null)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingSection;
