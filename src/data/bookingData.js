// Curated realistic data for Indian Flight, Train (IRCTC), and Bus networks

export const AIRPORTS = [
  { code: 'DEL', city: 'New Delhi', name: 'Indira Gandhi International Airport', state: 'Delhi' },
  { code: 'BOM', city: 'Mumbai', name: 'Chhatrapati Shivaji Maharaj Intl Airport', state: 'Maharashtra' },
  { code: 'BLR', city: 'Bengaluru', name: 'Kempegowda International Airport', state: 'Karnataka' },
  { code: 'CCU', city: 'Kolkata', name: 'Netaji Subhash Chandra Bose Intl Airport', state: 'West Bengal' },
  { code: 'MAA', city: 'Chennai', name: 'Chennai International Airport', state: 'Tamil Nadu' },
  { code: 'HYD', city: 'Hyderabad', name: 'Rajiv Gandhi International Airport', state: 'Telangana' },
  { code: 'GOI', city: 'Goa', name: 'Dabolim / Mopa International Airport', state: 'Goa' },
  { code: 'SXR', city: 'Srinagar', name: 'Sheikh ul-Alam International Airport', state: 'Jammu & Kashmir' },
  { code: 'VNS', city: 'Varanasi', name: 'Lal Bahadur Shastri International Airport', state: 'Uttar Pradesh' },
  { code: 'JAI', city: 'Jaipur', name: 'Jaipur International Airport', state: 'Rajasthan' },
  { code: 'COK', city: 'Kochi', name: 'Cochin International Airport', state: 'Kerala' },
  { code: 'IXB', city: 'Bagdogra (Darjeeling)', name: 'Bagdogra Airport', state: 'West Bengal' },
  { code: 'IXL', city: 'Leh Ladakh', name: 'Kushok Bakula Rimpochee Airport', state: 'Ladakh' },
  { code: 'GAU', city: 'Guwahati', name: 'Lokpriya Gopinath Bordoloi Airport', state: 'Assam' },
];

export const TRAIN_STATIONS = [
  { code: 'NDLS', name: 'New Delhi Railway Station', city: 'Delhi', state: 'Delhi' },
  { code: 'MMCT', name: 'Mumbai Central', city: 'Mumbai', state: 'Maharashtra' },
  { code: 'HWH', name: 'Howrah Junction', city: 'Kolkata', state: 'West Bengal' },
  { code: 'SBC', name: 'KSR Bengaluru City Junction', city: 'Bengaluru', state: 'Karnataka' },
  { code: 'MAS', name: 'MGR Chennai Central', city: 'Chennai', state: 'Tamil Nadu' },
  { code: 'BSB', name: 'Varanasi Junction (Cantonment)', city: 'Varanasi', state: 'Uttar Pradesh' },
  { code: 'JP', name: 'Jaipur Junction', city: 'Jaipur', state: 'Rajasthan' },
  { code: 'PURI', name: 'Puri Terminus', city: 'Puri', state: 'Odisha' },
  { code: 'MAO', name: 'Madgaon Junction', city: 'Goa', state: 'Goa' },
  { code: 'SVDK', name: 'Shri Mata Vaishno Devi Katra', city: 'Katra', state: 'Jammu & Kashmir' },
  { code: 'ERS', name: 'Ernakulam Junction', city: 'Kochi', state: 'Kerala' },
  { code: 'GHY', name: 'Guwahati Junction', city: 'Guwahati', state: 'Assam' },
  { code: 'ASR', name: 'Amritsar Junction', city: 'Amritsar', state: 'Punjab' },
];

export const BUS_CITIES = [
  { city: 'New Delhi', terminal: 'ISBT Kashmiri Gate / Anand Vihar', state: 'Delhi' },
  { city: 'Mumbai', terminal: 'Borivali / Dadar TT / Vashi', state: 'Maharashtra' },
  { city: 'Bengaluru', terminal: 'Majestic / Electronic City / Kempegowda', state: 'Karnataka' },
  { city: 'Pune', terminal: 'Swargate / Wakad / Shivajinagar', state: 'Maharashtra' },
  { city: 'Hyderabad', terminal: 'MGBS / Gachibowli / Ameerpet', state: 'Telangana' },
  { city: 'Kolkata', terminal: 'Esplanade / Babughat / Karunamoyee', state: 'West Bengal' },
  { city: 'Manali', terminal: 'Private Bus Stand / Mall Road', state: 'Himachal Pradesh' },
  { city: 'Shimla', terminal: 'ISBT Tutikandi', state: 'Himachal Pradesh' },
  { city: 'Jaipur', terminal: 'Sindhi Camp / Narayan Singh Circle', state: 'Rajasthan' },
  { city: 'Goa (Panaji)', terminal: 'Panaji KTC Bus Stand / Mapusa', state: 'Goa' },
  { city: 'Varanasi', terminal: 'Cantt Bus Stand', state: 'Uttar Pradesh' },
  { city: 'Agra', terminal: 'Idgah Bus Stand / ISBT Agra', state: 'Uttar Pradesh' },
  { city: 'Haridwar', terminal: 'Haridwar Bus Stand near Railway Station', state: 'Uttarakhand' },
  { city: 'Rishikesh', terminal: 'Nepali Farm / Natraj Chowk', state: 'Uttarakhand' },
];

export const POPULAR_ROUTES = {
  flights: [
    { from: 'DEL', to: 'BOM', label: 'Delhi ⇄ Mumbai' },
    { from: 'DEL', to: 'GOI', label: 'Delhi ⇄ Goa' },
    { from: 'BLR', to: 'CCU', label: 'Bengaluru ⇄ Kolkata' },
    { from: 'BOM', to: 'SXR', label: 'Mumbai ⇄ Srinagar' },
    { from: 'DEL', to: 'VNS', label: 'Delhi ⇄ Varanasi' },
  ],
  trains: [
    { from: 'NDLS', to: 'BSB', label: 'New Delhi ⇄ Varanasi (Vande Bharat)' },
    { from: 'HWH', to: 'PURI', label: 'Howrah ⇄ Puri (Vande Bharat)' },
    { from: 'MMCT', to: 'MAO', label: 'Mumbai ⇄ Goa (Tejas Express)' },
    { from: 'NDLS', to: 'JP', label: 'New Delhi ⇄ Jaipur (Shatabdi)' },
    { from: 'SBC', to: 'MAS', label: 'Bengaluru ⇄ Chennai (Vande Bharat)' },
  ],
  buses: [
    { from: 'New Delhi', to: 'Manali', label: 'Delhi ⇄ Manali (Volvo AC)' },
    { from: 'Bengaluru', to: 'Goa (Panaji)', label: 'Bengaluru ⇄ Goa (Sleeper)' },
    { from: 'Mumbai', to: 'Pune', label: 'Mumbai ⇄ Pune (Electric AC)' },
    { from: 'New Delhi', to: 'Jaipur', label: 'Delhi ⇄ Jaipur (Volvo)' },
    { from: 'New Delhi', to: 'Rishikesh', label: 'Delhi ⇄ Rishikesh (AC)' },
  ],
};

export const COUPONS = [
  { code: 'YATRA100', discount: 100, label: 'Flat ₹100 instant discount on all bookings' },
  { code: 'EXPLOREINDIA', discount: 250, minAmount: 1500, label: '₹250 off on orders above ₹1,500' },
  { code: 'FESTIVE500', discount: 500, minAmount: 3000, label: 'Mega Festival ₹500 off above ₹3,000' },
];

// Generator for realistic mock flight itineraries
export const generateFlightResults = (fromCode, toCode, date) => {
  const airlines = [
    { name: 'IndiGo', code: '6E', logoBg: 'bg-blue-600', flightNums: ['2041', '5093', '6112'] },
    { name: 'Air India', code: 'AI', logoBg: 'bg-red-600', flightNums: ['803', '441', '102'] },
    { name: 'Vistara', code: 'UK', logoBg: 'bg-purple-800', flightNums: ['927', '814', '772'] },
    { name: 'Akasa Air', code: 'QP', logoBg: 'bg-orange-600', flightNums: ['1321', '1105'] },
    { name: 'SpiceJet', code: 'SG', logoBg: 'bg-red-500', flightNums: ['8169', '3002'] },
  ];

  const slots = [
    { dep: '06:15', arr: '08:30', duration: '2h 15m', basePrice: 4250, badge: 'Early Morning Special' },
    { dep: '09:40', arr: '11:55', duration: '2h 15m', basePrice: 5120, badge: 'Popular Choice' },
    { dep: '13:10', arr: '15:20', duration: '2h 10m', basePrice: 4680, badge: 'Fastest Non-stop' },
    { dep: '17:35', arr: '19:50', duration: '2h 15m', basePrice: 5890, badge: 'Prime Evening' },
    { dep: '21:00', arr: '23:15', duration: '2h 15m', basePrice: 3990, badge: 'Lowest Fare' },
  ];

  return slots.map((slot, idx) => {
    const airline = airlines[idx % airlines.length];
    const flightNumber = `${airline.code}-${airline.flightNums[idx % airline.flightNums.length]}`;
    return {
      id: `flt-${idx + 1}`,
      type: 'flight',
      airline: airline.name,
      flightNumber,
      logoBg: airline.logoBg,
      from: fromCode,
      to: toCode,
      date,
      departureTime: slot.dep,
      arrivalTime: slot.arr,
      duration: slot.duration,
      stops: 'Non-stop',
      cabin: 'Economy (7kg cabin + 15kg check-in)',
      price: slot.basePrice,
      badge: slot.badge,
      availableSeats: Math.floor(Math.random() * 8) + 2,
    };
  });
};

// Generator for realistic mock train itineraries
export const generateTrainResults = (fromCode, toCode, date) => {
  const trains = [
    {
      name: 'Vande Bharat Express',
      number: '22436',
      dep: '06:00',
      arr: '14:00',
      duration: '8h 00m',
      classes: [
        { name: 'CC (Chair Car)', price: 1450, status: 'AVL 42', statusType: 'avl' },
        { name: 'EC (Exec Class)', price: 2850, status: 'AVL 12', statusType: 'avl' },
      ],
      speed: '160 km/h High Speed',
      badge: 'Vande Bharat Special',
      runsOn: 'Mon, Tue, Wed, Fri, Sat, Sun',
    },
    {
      name: 'Tejas Rajdhani Express',
      number: '12301',
      dep: '16:55',
      arr: '09:55',
      duration: '17h 00m',
      classes: [
        { name: '3A (AC 3 Tier)', price: 1980, status: 'AVL 24', statusType: 'avl' },
        { name: '2A (AC 2 Tier)', price: 2980, status: 'AVL 08', statusType: 'avl' },
        { name: '1A (First AC)', price: 4890, status: 'RAC 4', statusType: 'rac' },
      ],
      speed: 'Superfast Premier',
      badge: 'Meals Included',
      runsOn: 'All Days',
    },
    {
      name: 'Shatabdi Express',
      number: '12004',
      dep: '06:10',
      arr: '12:45',
      duration: '6h 35m',
      classes: [
        { name: 'CC (Chair Car)', price: 1120, status: 'AVL 65', statusType: 'avl' },
        { name: 'EC (Exec Class)', price: 2190, status: 'AVL 16', statusType: 'avl' },
      ],
      speed: 'Superfast Express',
      badge: 'Complimentary Breakfast',
      runsOn: 'All Days',
    },
    {
      name: 'Garib Rath Express',
      number: '12204',
      dep: '11:20',
      arr: '05:30',
      duration: '18h 10m',
      classes: [
        { name: '3A (AC 3 Economy)', price: 1040, status: 'WL 14', statusType: 'wl' },
        { name: 'CC (Chair Car)', price: 820, status: 'AVL 38', statusType: 'avl' },
      ],
      speed: 'Budget AC Express',
      badge: 'Economical AC',
      runsOn: 'Tue, Fri, Sun',
    },
    {
      name: 'Sampark Kranti Superfast',
      number: '12650',
      dep: '19:15',
      arr: '14:20',
      duration: '19h 05m',
      classes: [
        { name: 'SL (Sleeper)', price: 540, status: 'AVL 88', statusType: 'avl' },
        { name: '3A (AC 3 Tier)', price: 1420, status: 'AVL 29', statusType: 'avl' },
        { name: '2A (AC 2 Tier)', price: 2150, status: 'RAC 6', statusType: 'rac' },
      ],
      speed: 'Express',
      badge: 'Direct Connectivity',
      runsOn: 'Mon, Wed, Thu, Sat',
    },
  ];

  return trains.map((t, idx) => ({
    id: `trn-${idx + 1}`,
    type: 'train',
    trainName: t.name,
    trainNumber: t.number,
    from: fromCode,
    to: toCode,
    date,
    departureTime: t.dep,
    arrivalTime: t.arr,
    duration: t.duration,
    classes: t.classes,
    speed: t.speed,
    badge: t.badge,
    runsOn: t.runsOn,
  }));
};

// Generator for realistic mock bus itineraries
export const generateBusResults = (fromCity, toCity, date) => {
  const buses = [
    {
      operator: 'Zingbus Premium Lounge',
      busType: 'Volvo 9600 Multi-Axle AC Sleeper (2+1)',
      rating: 4.8,
      reviewsCount: 1420,
      dep: '20:30',
      arr: '06:00',
      duration: '9h 30m',
      price: 1199,
      amenities: ['Free WiFi', 'Charging Point', 'Blanket & Pillow', 'Water Bottle', 'Live Tracking'],
      badge: 'Top Rated Luxury',
      availableSeats: 6,
    },
    {
      operator: 'IntrCity SmartBus',
      busType: 'Scania AC Multi-Axle Semi-Sleeper',
      rating: 4.6,
      reviewsCount: 2890,
      dep: '21:15',
      arr: '07:00',
      duration: '9h 45m',
      price: 949,
      amenities: ['Lounge Access', 'Live GPS', 'Mineral Water', 'Emergency Button'],
      badge: 'SmartBus Verified',
      availableSeats: 11,
    },
    {
      operator: 'NueGo Green Electric',
      busType: 'Ultra-Silent 100% Electric AC Coach',
      rating: 4.7,
      reviewsCount: 960,
      dep: '07:00',
      arr: '14:30',
      duration: '7h 30m',
      price: 799,
      amenities: ['Zero Emission', 'CCTV Surveillance', 'AC', 'USB Ports'],
      badge: 'Eco Friendly ⚡',
      availableSeats: 14,
    },
    {
      operator: 'State Express Royal Transport',
      busType: 'BharatBenz AC Sleeper (2+1)',
      rating: 4.4,
      reviewsCount: 3120,
      dep: '22:00',
      arr: '08:15',
      duration: '10h 15m',
      price: 849,
      amenities: ['Reading Light', 'Blanket', 'Luggage Compartment'],
      badge: 'Government Certified',
      availableSeats: 18,
    },
  ];

  return buses.map((b, idx) => ({
    id: `bus-${idx + 1}`,
    type: 'bus',
    operator: b.operator,
    busType: b.busType,
    rating: b.rating,
    reviewsCount: b.reviewsCount,
    from: fromCity,
    to: toCity,
    date,
    departureTime: b.dep,
    arrivalTime: b.arr,
    duration: b.duration,
    price: b.price,
    amenities: b.amenities,
    badge: b.badge,
    availableSeats: b.availableSeats,
  }));
};
