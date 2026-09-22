// Comprehensive transit connectivity data for all Yatra India destinations
// Maps exact nearest Airport, Railway Station, and Bus Stand/ISBT

export const DESTINATION_TRANSIT = {
  "tirupati": {
    "airport": {
      "name": "Tirupati International Airport (Renigunta)",
      "code": "TIR",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Domestic Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Hyderabad"
    },
    "railway": {
      "name": "Tirupati Main Railway Station",
      "code": "TPTY",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Major Junction (Cat A1)",
      "connectivity": "Vande Bharat, Rayalaseema & Superfast express lines"
    },
    "busStand": {
      "name": "Tirupati Central Bus Station (APSRTC CBS)",
      "distance": "2 km",
      "time": "8 mins",
      "type": "Interstate Bus Terminal",
      "operators": "APSRTC, KSRTC, SETC Volvo & Deluxe buses"
    },
    "road": {
      "highway": "NH-71 & NH-140 (4-Lane)",
      "condition": "Smooth highway corridor from Chennai (135 km) & Bengaluru (250 km)"
    },
    "localTransport": "APSRTC electric buses to Tirumala ghat, prepaid cabs, and 24x7 auto-rickshaws"
  },
  "visakhapatnam": {
    "airport": {
      "name": "Visakhapatnam International Airport",
      "code": "VTZ",
      "distance": "9 km",
      "time": "20 mins",
      "type": "Customs International",
      "directFlights": "Delhi, Mumbai, Kolkata, Bengaluru, Hyderabad, Singapore"
    },
    "railway": {
      "name": "Visakhapatnam Junction",
      "code": "VSKP",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Divisional Headquarters Junction",
      "connectivity": "Howrah-Chennai Main Line & Vande Bharat links"
    },
    "busStand": {
      "name": "Dwaraka Bus Station (RTC Complex)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Central RTC Terminal",
      "operators": "APSRTC, OSRTC, TSRTC Amaravati & Garuda Volvo buses"
    },
    "road": {
      "highway": "NH-16 (Golden Quadrilateral)",
      "condition": "High-speed coastal express highway"
    },
    "localTransport": "APSRTC metro city buses, app cabs (Uber/Ola), auto-rickshaws, and beach promenade shuttles"
  },
  "araku-valley": {
    "airport": {
      "name": "Visakhapatnam Airport",
      "code": "VTZ",
      "distance": "107 km",
      "time": "3h 15m",
      "type": "Domestic / Customs Airport",
      "directFlights": "Connecting flights via Visakhapatnam"
    },
    "railway": {
      "name": "Araku Railway Station",
      "code": "ARK",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Scenic Hill Station",
      "connectivity": "Famous Vistadome Glass-roof train from Visakhapatnam (VSKP-KRDL)"
    },
    "busStand": {
      "name": "Araku APSRTC Main Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Hill Depot",
      "operators": "Regular APSRTC Deluxe and Palle Velugu buses from Vizag"
    },
    "road": {
      "highway": "SH-39 & NH-516E Ghat Corridor",
      "condition": "Picturesque Eastern Ghats mountain curves with scenic viewpoints"
    },
    "localTransport": "Local rental scooters, shared jeeps, and tribal tour sumos"
  },
  "vijayawada": {
    "airport": {
      "name": "Vijayawada International Airport (Gannavaram)",
      "code": "VGA",
      "distance": "18 km",
      "time": "30 mins",
      "type": "International Hub",
      "directFlights": "Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Sharjah"
    },
    "railway": {
      "name": "Vijayawada Junction",
      "code": "BZA",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Grand Trunk Quadruple Junction",
      "connectivity": "One of India busiest railway hubs with 250+ daily trains"
    },
    "busStand": {
      "name": "Pandit Nehru Bus Station (PNBS)",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Mega Interstate Terminal (65+ platforms)",
      "operators": "APSRTC Amaravati, KSRTC, TSRTC express coaches"
    },
    "road": {
      "highway": "NH-16 & NH-65 Junction",
      "condition": "6-Lane express corridor spanning Krishna River barrage"
    },
    "localTransport": "BRTS city buses, app cabs, electric auto-rickshaws, and Krishna river boats"
  },
  "tawang": {
    "airport": {
      "name": "Arunachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Tawang Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Tawang Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Arunachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Tawang",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "ziro-valley": {
    "airport": {
      "name": "Arunachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Ziro Valley Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Ziro Valley Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Arunachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Ziro Valley",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dirang": {
    "airport": {
      "name": "Arunachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dirang Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dirang Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Arunachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dirang",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bomdila": {
    "airport": {
      "name": "Arunachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Bomdila Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Bomdila Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Arunachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Bomdila",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "mechuka": {
    "airport": {
      "name": "Arunachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Mechuka Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Mechuka Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Arunachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Mechuka",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kaziranga": {
    "airport": {
      "name": "Assam Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kaziranga Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kaziranga Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Assam State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kaziranga",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "guwahati": {
    "airport": {
      "name": "Assam Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Guwahati Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Guwahati Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Assam State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Guwahati",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "majuli": {
    "airport": {
      "name": "Assam Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Majuli Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Majuli Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Assam State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Majuli",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "sivasagar": {
    "airport": {
      "name": "Assam Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sivasagar Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sivasagar Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Assam State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sivasagar",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "manas": {
    "airport": {
      "name": "Assam Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Manas Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Manas Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Assam State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Manas",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bodh-gaya": {
    "airport": {
      "name": "Bihar Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Bodh Gaya Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Bodh Gaya Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Bihar State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Bodh Gaya",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "nalanda": {
    "airport": {
      "name": "Bihar Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Nalanda Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Nalanda Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Bihar State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Nalanda",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "rajgir": {
    "airport": {
      "name": "Bihar Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Rajgir Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Rajgir Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Bihar State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Rajgir",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "patna": {
    "airport": {
      "name": "Bihar Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Patna Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Patna Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Bihar State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Patna",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "vaishali": {
    "airport": {
      "name": "Bihar Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Vaishali Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Vaishali Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Bihar State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Vaishali",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "chitrakote-falls": {
    "airport": {
      "name": "Chhattisgarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Chitrakote Falls Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Chitrakote Falls Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chhattisgarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Chitrakote Falls",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "jagdalpur": {
    "airport": {
      "name": "Chhattisgarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Jagdalpur Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Jagdalpur Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chhattisgarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Jagdalpur",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bastar": {
    "airport": {
      "name": "Chhattisgarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Bastar Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Bastar Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chhattisgarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Bastar",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "sirpur": {
    "airport": {
      "name": "Chhattisgarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sirpur Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sirpur Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chhattisgarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sirpur",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kanger-valley": {
    "airport": {
      "name": "Chhattisgarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kanger Valley Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kanger Valley Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chhattisgarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kanger Valley",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "baga-beach": {
    "airport": {
      "name": "Manohar Intl Airport, Mopa (GOX) / Dabolim (GOI)",
      "code": "GOI",
      "distance": "25 to 35 km",
      "time": "35 mins",
      "type": "Dual International Airports",
      "directFlights": "Direct flights from all major Indian metros"
    },
    "railway": {
      "name": "Madgaon Junction (MAO) / Thivim (THVM)",
      "code": "MAO",
      "distance": "18 to 35 km",
      "time": "25 to 45 mins",
      "type": "Konkan Railway Hub",
      "connectivity": "Mumbai-Goa Vande Bharat & Tejas Express"
    },
    "busStand": {
      "name": "Panaji KTC Bus Stand / Mapusa Stand",
      "distance": "2 to 8 km",
      "time": "8 to 15 mins",
      "type": "Kadamba Central Stand",
      "operators": "KTC, KSRTC, MSRTC luxury Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-66 (Mumbai-Goa Coastal Highway)",
      "condition": "4-Lane coastal expressway"
    },
    "localTransport": "Rental self-drive cars, rental scooters, GoaMiles app cabs, local ferry boats"
  },
  "calangute": {
    "airport": {
      "name": "Manohar Intl Airport, Mopa (GOX) / Dabolim (GOI)",
      "code": "GOI",
      "distance": "25 to 35 km",
      "time": "35 mins",
      "type": "Dual International Airports",
      "directFlights": "Direct flights from all major Indian metros"
    },
    "railway": {
      "name": "Madgaon Junction (MAO) / Thivim (THVM)",
      "code": "MAO",
      "distance": "18 to 35 km",
      "time": "25 to 45 mins",
      "type": "Konkan Railway Hub",
      "connectivity": "Mumbai-Goa Vande Bharat & Tejas Express"
    },
    "busStand": {
      "name": "Panaji KTC Bus Stand / Mapusa Stand",
      "distance": "2 to 8 km",
      "time": "8 to 15 mins",
      "type": "Kadamba Central Stand",
      "operators": "KTC, KSRTC, MSRTC luxury Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-66 (Mumbai-Goa Coastal Highway)",
      "condition": "4-Lane coastal expressway"
    },
    "localTransport": "Rental self-drive cars, rental scooters, GoaMiles app cabs, local ferry boats"
  },
  "panjim": {
    "airport": {
      "name": "Manohar Intl Airport, Mopa (GOX) / Dabolim (GOI)",
      "code": "GOI",
      "distance": "25 to 35 km",
      "time": "35 mins",
      "type": "Dual International Airports",
      "directFlights": "Direct flights from all major Indian metros"
    },
    "railway": {
      "name": "Madgaon Junction (MAO) / Thivim (THVM)",
      "code": "MAO",
      "distance": "18 to 35 km",
      "time": "25 to 45 mins",
      "type": "Konkan Railway Hub",
      "connectivity": "Mumbai-Goa Vande Bharat & Tejas Express"
    },
    "busStand": {
      "name": "Panaji KTC Bus Stand / Mapusa Stand",
      "distance": "2 to 8 km",
      "time": "8 to 15 mins",
      "type": "Kadamba Central Stand",
      "operators": "KTC, KSRTC, MSRTC luxury Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-66 (Mumbai-Goa Coastal Highway)",
      "condition": "4-Lane coastal expressway"
    },
    "localTransport": "Rental self-drive cars, rental scooters, GoaMiles app cabs, local ferry boats"
  },
  "old-goa": {
    "airport": {
      "name": "Manohar Intl Airport, Mopa (GOX) / Dabolim (GOI)",
      "code": "GOI",
      "distance": "25 to 35 km",
      "time": "35 mins",
      "type": "Dual International Airports",
      "directFlights": "Direct flights from all major Indian metros"
    },
    "railway": {
      "name": "Madgaon Junction (MAO) / Thivim (THVM)",
      "code": "MAO",
      "distance": "18 to 35 km",
      "time": "25 to 45 mins",
      "type": "Konkan Railway Hub",
      "connectivity": "Mumbai-Goa Vande Bharat & Tejas Express"
    },
    "busStand": {
      "name": "Panaji KTC Bus Stand / Mapusa Stand",
      "distance": "2 to 8 km",
      "time": "8 to 15 mins",
      "type": "Kadamba Central Stand",
      "operators": "KTC, KSRTC, MSRTC luxury Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-66 (Mumbai-Goa Coastal Highway)",
      "condition": "4-Lane coastal expressway"
    },
    "localTransport": "Rental self-drive cars, rental scooters, GoaMiles app cabs, local ferry boats"
  },
  "dudhsagar-falls": {
    "airport": {
      "name": "Manohar Intl Airport, Mopa (GOX) / Dabolim (GOI)",
      "code": "GOI",
      "distance": "25 to 35 km",
      "time": "35 mins",
      "type": "Dual International Airports",
      "directFlights": "Direct flights from all major Indian metros"
    },
    "railway": {
      "name": "Madgaon Junction (MAO) / Thivim (THVM)",
      "code": "MAO",
      "distance": "18 to 35 km",
      "time": "25 to 45 mins",
      "type": "Konkan Railway Hub",
      "connectivity": "Mumbai-Goa Vande Bharat & Tejas Express"
    },
    "busStand": {
      "name": "Panaji KTC Bus Stand / Mapusa Stand",
      "distance": "2 to 8 km",
      "time": "8 to 15 mins",
      "type": "Kadamba Central Stand",
      "operators": "KTC, KSRTC, MSRTC luxury Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-66 (Mumbai-Goa Coastal Highway)",
      "condition": "4-Lane coastal expressway"
    },
    "localTransport": "Rental self-drive cars, rental scooters, GoaMiles app cabs, local ferry boats"
  },
  "statue-of-unity": {
    "airport": {
      "name": "Gujarat Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Statue of Unity Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Statue of Unity Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Gujarat State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Statue of Unity",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "ahmedabad": {
    "airport": {
      "name": "Gujarat Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Ahmedabad Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Ahmedabad Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Gujarat State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Ahmedabad",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "rann-of-kutch": {
    "airport": {
      "name": "Gujarat Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Rann of Kutch Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Rann of Kutch Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Gujarat State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Rann of Kutch",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dwarka": {
    "airport": {
      "name": "Gujarat Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dwarka Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dwarka Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Gujarat State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dwarka",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "somnath": {
    "airport": {
      "name": "Gujarat Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Somnath Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Somnath Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Gujarat State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Somnath",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kurukshetra": {
    "airport": {
      "name": "Haryana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kurukshetra Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kurukshetra Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Haryana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kurukshetra",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "sultanpur-national-park": {
    "airport": {
      "name": "Haryana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sultanpur National Park Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sultanpur National Park Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Haryana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sultanpur National Park",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "pinjore-gardens": {
    "airport": {
      "name": "Haryana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Pinjore Gardens Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Pinjore Gardens Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Haryana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Pinjore Gardens",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "morni-hills": {
    "airport": {
      "name": "Haryana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Morni Hills Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Morni Hills Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Haryana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Morni Hills",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "shimla": {
    "airport": {
      "name": "Shimla Airport (Jubbarhatti) / Chandigarh (IXC)",
      "code": "SLV",
      "distance": "22 km",
      "time": "50 mins",
      "type": "Tabletop Airport",
      "directFlights": "Regional ATR flights from Delhi / full connectivity via Chandigarh"
    },
    "railway": {
      "name": "Shimla Railway Station (UNESCO Toy Train)",
      "code": "SML",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "UNESCO Kalka-Shimla Toy Train",
      "connectivity": "Famous historic heritage toy train passing through 102 tunnels"
    },
    "busStand": {
      "name": "ISBT Tutikandi, Shimla",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Ultra-modern High Rise Bus Terminal",
      "operators": "HRTC Volvo, CTU, Haryana Roadways direct luxury coaches"
    },
    "road": {
      "highway": "NH-5 (Himalayan Expressway from Kalka & Chandigarh)",
      "condition": "Four-lane mountain expressway with flyovers and tunnels"
    },
    "localTransport": "Mall Road Municipal Passenger Elevator, HRTC local green buses, registered hill taxis"
  },
  "manali": {
    "airport": {
      "name": "Kullu-Manali Airport, Bhuntar",
      "code": "KUU",
      "distance": "50 km",
      "time": "1h 30m",
      "type": "Himalayan Regional Airport",
      "directFlights": "Flights from Delhi and Chandigarh"
    },
    "railway": {
      "name": "Chandigarh Junction (CDG) / Joginder Nagar",
      "code": "CDG",
      "distance": "310 km",
      "time": "6h 30m drive",
      "type": "Broad Gauge Railhead",
      "connectivity": "Connected via high-speed Chandigarh railhead"
    },
    "busStand": {
      "name": "Manali Inter State Bus Terminal (Mall Road)",
      "distance": "1 km",
      "time": "4 mins",
      "type": "Major Mountain Bus Terminal",
      "operators": "HRTC Himsuta Volvo, Himachal Tourism (HPTDC), Zingbus, IntrCity"
    },
    "road": {
      "highway": "NH-3 (Chandigarh-Manali 4-Lane Expressway & Atal Tunnel)",
      "condition": "Recently upgraded world-class mountain expressway reducing travel time by 3 hours"
    },
    "localTransport": "4x4 tourist cabs, auto-rickshaws, rental Royal Enfield motorcycles"
  },
  "dharamshala": {
    "airport": {
      "name": "Himachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dharamshala Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dharamshala Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Himachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dharamshala",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "spiti-valley": {
    "airport": {
      "name": "Himachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Spiti Valley Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Spiti Valley Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Himachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Spiti Valley",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dalhousie": {
    "airport": {
      "name": "Himachal Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dalhousie Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dalhousie Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Himachal Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dalhousie",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "deoghar": {
    "airport": {
      "name": "Jharkhand Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Deoghar Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Deoghar Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jharkhand State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Deoghar",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "netarhat": {
    "airport": {
      "name": "Jharkhand Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Netarhat Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Netarhat Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jharkhand State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Netarhat",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "hundru-falls": {
    "airport": {
      "name": "Jharkhand Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Hundru Falls Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Hundru Falls Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jharkhand State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Hundru Falls",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "betla-national-park": {
    "airport": {
      "name": "Jharkhand Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Betla National Park Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Betla National Park Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jharkhand State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Betla National Park",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dassam-falls": {
    "airport": {
      "name": "Jharkhand Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dassam Falls Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dassam Falls Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jharkhand State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dassam Falls",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "hampi": {
    "airport": {
      "name": "Kempegowda International Airport, Bengaluru (BLR)",
      "code": "BLR",
      "distance": "35 km",
      "time": "50 mins",
      "type": "Major International Airport",
      "directFlights": "Worldwide & Pan-India flights"
    },
    "railway": {
      "name": "Hampi / KSR Bengaluru City (SBC)",
      "code": "SBC",
      "distance": "3 to 10 km",
      "time": "10 to 20 mins",
      "type": "South Western Railway Hub",
      "connectivity": "Vande Bharat, Shatabdi & Express passenger trains"
    },
    "busStand": {
      "name": "Hampi KSRTC Bus Stand",
      "distance": "2 km",
      "time": "7 mins",
      "type": "KSRTC Divisional Depot",
      "operators": "KSRTC Airavat Club Class & Rajahamsa executive coaches"
    },
    "road": {
      "highway": "Bengaluru-Mysuru Expressway & NH-44",
      "condition": "High-speed 10-lane expressway"
    },
    "localTransport": "Namma Metro, BMTC city buses, metered auto-rickshaws, app cabs"
  },
  "coorg": {
    "airport": {
      "name": "Kempegowda International Airport, Bengaluru (BLR)",
      "code": "BLR",
      "distance": "35 km",
      "time": "50 mins",
      "type": "Major International Airport",
      "directFlights": "Worldwide & Pan-India flights"
    },
    "railway": {
      "name": "Coorg / KSR Bengaluru City (SBC)",
      "code": "SBC",
      "distance": "3 to 10 km",
      "time": "10 to 20 mins",
      "type": "South Western Railway Hub",
      "connectivity": "Vande Bharat, Shatabdi & Express passenger trains"
    },
    "busStand": {
      "name": "Coorg KSRTC Bus Stand",
      "distance": "2 km",
      "time": "7 mins",
      "type": "KSRTC Divisional Depot",
      "operators": "KSRTC Airavat Club Class & Rajahamsa executive coaches"
    },
    "road": {
      "highway": "Bengaluru-Mysuru Expressway & NH-44",
      "condition": "High-speed 10-lane expressway"
    },
    "localTransport": "Namma Metro, BMTC city buses, metered auto-rickshaws, app cabs"
  },
  "mysore": {
    "airport": {
      "name": "Kempegowda International Airport, Bengaluru (BLR)",
      "code": "BLR",
      "distance": "35 km",
      "time": "50 mins",
      "type": "Major International Airport",
      "directFlights": "Worldwide & Pan-India flights"
    },
    "railway": {
      "name": "Mysore / KSR Bengaluru City (SBC)",
      "code": "SBC",
      "distance": "3 to 10 km",
      "time": "10 to 20 mins",
      "type": "South Western Railway Hub",
      "connectivity": "Vande Bharat, Shatabdi & Express passenger trains"
    },
    "busStand": {
      "name": "Mysore KSRTC Bus Stand",
      "distance": "2 km",
      "time": "7 mins",
      "type": "KSRTC Divisional Depot",
      "operators": "KSRTC Airavat Club Class & Rajahamsa executive coaches"
    },
    "road": {
      "highway": "Bengaluru-Mysuru Expressway & NH-44",
      "condition": "High-speed 10-lane expressway"
    },
    "localTransport": "Namma Metro, BMTC city buses, metered auto-rickshaws, app cabs"
  },
  "gokarna": {
    "airport": {
      "name": "Kempegowda International Airport, Bengaluru (BLR)",
      "code": "BLR",
      "distance": "35 km",
      "time": "50 mins",
      "type": "Major International Airport",
      "directFlights": "Worldwide & Pan-India flights"
    },
    "railway": {
      "name": "Gokarna / KSR Bengaluru City (SBC)",
      "code": "SBC",
      "distance": "3 to 10 km",
      "time": "10 to 20 mins",
      "type": "South Western Railway Hub",
      "connectivity": "Vande Bharat, Shatabdi & Express passenger trains"
    },
    "busStand": {
      "name": "Gokarna KSRTC Bus Stand",
      "distance": "2 km",
      "time": "7 mins",
      "type": "KSRTC Divisional Depot",
      "operators": "KSRTC Airavat Club Class & Rajahamsa executive coaches"
    },
    "road": {
      "highway": "Bengaluru-Mysuru Expressway & NH-44",
      "condition": "High-speed 10-lane expressway"
    },
    "localTransport": "Namma Metro, BMTC city buses, metered auto-rickshaws, app cabs"
  },
  "bengaluru": {
    "airport": {
      "name": "Kempegowda International Airport, Bengaluru (BLR)",
      "code": "BLR",
      "distance": "35 km",
      "time": "50 mins",
      "type": "Major International Airport",
      "directFlights": "Worldwide & Pan-India flights"
    },
    "railway": {
      "name": "Bengaluru / KSR Bengaluru City (SBC)",
      "code": "SBC",
      "distance": "3 to 10 km",
      "time": "10 to 20 mins",
      "type": "South Western Railway Hub",
      "connectivity": "Vande Bharat, Shatabdi & Express passenger trains"
    },
    "busStand": {
      "name": "Bengaluru KSRTC Bus Stand",
      "distance": "2 km",
      "time": "7 mins",
      "type": "KSRTC Divisional Depot",
      "operators": "KSRTC Airavat Club Class & Rajahamsa executive coaches"
    },
    "road": {
      "highway": "Bengaluru-Mysuru Expressway & NH-44",
      "condition": "High-speed 10-lane expressway"
    },
    "localTransport": "Namma Metro, BMTC city buses, metered auto-rickshaws, app cabs"
  },
  "munnar": {
    "airport": {
      "name": "Cochin International Airport (COK) / Trivandrum (TRV)",
      "code": "COK",
      "distance": "30 to 75 km",
      "time": "45 mins to 1h 30m",
      "type": "International Gateway",
      "directFlights": "Metro hubs & Gulf routes"
    },
    "railway": {
      "name": "Munnar Railway Station / Ernakulam (ERS)",
      "code": "ERS",
      "distance": "3 to 15 km",
      "time": "10 to 30 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Kerala Vande Bharat & Superfast lines"
    },
    "busStand": {
      "name": "Munnar KSRTC Bus Depot",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central KSRTC Terminal",
      "operators": "KSRTC SWIFT, Minnal & Super Fast buses"
    },
    "road": {
      "highway": "NH-66 & NH-544 Coastal Corridor",
      "condition": "Well-surfaced multi-lane highway"
    },
    "localTransport": "Kochi Water Metro, backwater traditional ferries, auto-rickshaws, tourist taxis"
  },
  "alleppey": {
    "airport": {
      "name": "Cochin International Airport (COK) / Trivandrum (TRV)",
      "code": "COK",
      "distance": "30 to 75 km",
      "time": "45 mins to 1h 30m",
      "type": "International Gateway",
      "directFlights": "Metro hubs & Gulf routes"
    },
    "railway": {
      "name": "Alleppey Railway Station / Ernakulam (ERS)",
      "code": "ERS",
      "distance": "3 to 15 km",
      "time": "10 to 30 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Kerala Vande Bharat & Superfast lines"
    },
    "busStand": {
      "name": "Alleppey KSRTC Bus Depot",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central KSRTC Terminal",
      "operators": "KSRTC SWIFT, Minnal & Super Fast buses"
    },
    "road": {
      "highway": "NH-66 & NH-544 Coastal Corridor",
      "condition": "Well-surfaced multi-lane highway"
    },
    "localTransport": "Kochi Water Metro, backwater traditional ferries, auto-rickshaws, tourist taxis"
  },
  "wayanad": {
    "airport": {
      "name": "Cochin International Airport (COK) / Trivandrum (TRV)",
      "code": "COK",
      "distance": "30 to 75 km",
      "time": "45 mins to 1h 30m",
      "type": "International Gateway",
      "directFlights": "Metro hubs & Gulf routes"
    },
    "railway": {
      "name": "Wayanad Railway Station / Ernakulam (ERS)",
      "code": "ERS",
      "distance": "3 to 15 km",
      "time": "10 to 30 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Kerala Vande Bharat & Superfast lines"
    },
    "busStand": {
      "name": "Wayanad KSRTC Bus Depot",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central KSRTC Terminal",
      "operators": "KSRTC SWIFT, Minnal & Super Fast buses"
    },
    "road": {
      "highway": "NH-66 & NH-544 Coastal Corridor",
      "condition": "Well-surfaced multi-lane highway"
    },
    "localTransport": "Kochi Water Metro, backwater traditional ferries, auto-rickshaws, tourist taxis"
  },
  "kochi": {
    "airport": {
      "name": "Cochin International Airport (COK) / Trivandrum (TRV)",
      "code": "COK",
      "distance": "30 to 75 km",
      "time": "45 mins to 1h 30m",
      "type": "International Gateway",
      "directFlights": "Metro hubs & Gulf routes"
    },
    "railway": {
      "name": "Kochi Railway Station / Ernakulam (ERS)",
      "code": "ERS",
      "distance": "3 to 15 km",
      "time": "10 to 30 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Kerala Vande Bharat & Superfast lines"
    },
    "busStand": {
      "name": "Kochi KSRTC Bus Depot",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central KSRTC Terminal",
      "operators": "KSRTC SWIFT, Minnal & Super Fast buses"
    },
    "road": {
      "highway": "NH-66 & NH-544 Coastal Corridor",
      "condition": "Well-surfaced multi-lane highway"
    },
    "localTransport": "Kochi Water Metro, backwater traditional ferries, auto-rickshaws, tourist taxis"
  },
  "varkala": {
    "airport": {
      "name": "Cochin International Airport (COK) / Trivandrum (TRV)",
      "code": "COK",
      "distance": "30 to 75 km",
      "time": "45 mins to 1h 30m",
      "type": "International Gateway",
      "directFlights": "Metro hubs & Gulf routes"
    },
    "railway": {
      "name": "Varkala Railway Station / Ernakulam (ERS)",
      "code": "ERS",
      "distance": "3 to 15 km",
      "time": "10 to 30 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Kerala Vande Bharat & Superfast lines"
    },
    "busStand": {
      "name": "Varkala KSRTC Bus Depot",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central KSRTC Terminal",
      "operators": "KSRTC SWIFT, Minnal & Super Fast buses"
    },
    "road": {
      "highway": "NH-66 & NH-544 Coastal Corridor",
      "condition": "Well-surfaced multi-lane highway"
    },
    "localTransport": "Kochi Water Metro, backwater traditional ferries, auto-rickshaws, tourist taxis"
  },
  "khajuraho": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Khajuraho Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Khajuraho Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Khajuraho",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "ujjain": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Ujjain Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Ujjain Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Ujjain",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "pachmarhi": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Pachmarhi Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Pachmarhi Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Pachmarhi",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "sanchi": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sanchi Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sanchi Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sanchi",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kanha": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kanha Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kanha Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kanha",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bandhavgarh": {
    "airport": {
      "name": "Madhya Pradesh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Bandhavgarh Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Bandhavgarh Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Madhya Pradesh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Bandhavgarh",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "mumbai": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Mumbai / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Mumbai MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "lonavala": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Lonavala / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Lonavala MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "mahabaleshwar": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Mahabaleshwar / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Mahabaleshwar MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "ajanta": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Ajanta / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Ajanta MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "ellora": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Ellora / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Ellora MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "shirdi": {
    "airport": {
      "name": "Chhatrapati Shivaji Maharaj Intl Airport (BOM) / Pune (PNQ)",
      "code": "BOM",
      "distance": "45 to 110 km",
      "time": "1h to 2h",
      "type": "Major International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Shirdi / Pune Junction (PUNE)",
      "code": "MMCT",
      "distance": "3 to 20 km",
      "time": "10 to 35 mins",
      "type": "Central Railway Junction",
      "connectivity": "Vande Bharat, Deccan Queen & Express links"
    },
    "busStand": {
      "name": "Shirdi MSRTC Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Transport Stand",
      "operators": "MSRTC Shivneri AC Volvo & private sleeper coaches"
    },
    "road": {
      "highway": "Mumbai-Pune Expressway & NH-48",
      "condition": "India first 6-lane access-controlled expressway"
    },
    "localTransport": "Local auto-rickshaws, shared taxis, app cabs"
  },
  "loktak-lake": {
    "airport": {
      "name": "Manipur Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Loktak Lake Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Loktak Lake Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Manipur State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Loktak Lake",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "imphal": {
    "airport": {
      "name": "Manipur Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Imphal Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Imphal Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Manipur State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Imphal",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "keibul-lamjao": {
    "airport": {
      "name": "Manipur Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Keibul Lamjao Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Keibul Lamjao Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Manipur State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Keibul Lamjao",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "ukhrul": {
    "airport": {
      "name": "Manipur Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Ukhrul Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Ukhrul Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Manipur State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Ukhrul",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "shillong": {
    "airport": {
      "name": "Meghalaya Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Shillong Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Shillong Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Meghalaya State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Shillong",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "cherrapunji": {
    "airport": {
      "name": "Meghalaya Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Cherrapunji Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Cherrapunji Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Meghalaya State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Cherrapunji",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dawki": {
    "airport": {
      "name": "Meghalaya Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dawki Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dawki Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Meghalaya State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dawki",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "mawlynnong": {
    "airport": {
      "name": "Meghalaya Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Mawlynnong Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Mawlynnong Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Meghalaya State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Mawlynnong",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "nongriat": {
    "airport": {
      "name": "Meghalaya Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Nongriat Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Nongriat Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Meghalaya State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Nongriat",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "aizawl": {
    "airport": {
      "name": "Mizoram Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Aizawl Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Aizawl Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Mizoram State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Aizawl",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "reiek": {
    "airport": {
      "name": "Mizoram Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Reiek Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Reiek Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Mizoram State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Reiek",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "vantawng-falls": {
    "airport": {
      "name": "Mizoram Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Vantawng Falls Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Vantawng Falls Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Mizoram State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Vantawng Falls",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "champhai": {
    "airport": {
      "name": "Mizoram Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Champhai Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Champhai Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Mizoram State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Champhai",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kohima": {
    "airport": {
      "name": "Nagaland Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kohima Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kohima Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Nagaland State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kohima",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dzkou-valley": {
    "airport": {
      "name": "Nagaland Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dzükou Valley Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dzükou Valley Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Nagaland State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dzükou Valley",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "mokokchung": {
    "airport": {
      "name": "Nagaland Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Mokokchung Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Mokokchung Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Nagaland State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Mokokchung",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "mon": {
    "airport": {
      "name": "Nagaland Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Mon Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Mon Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Nagaland State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Mon",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "khonoma": {
    "airport": {
      "name": "Nagaland Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Khonoma Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Khonoma Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Nagaland State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Khonoma",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "puri": {
    "airport": {
      "name": "Biju Patnaik International Airport, Bhubaneswar",
      "code": "BBI",
      "distance": "58 km",
      "time": "1h 15m",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Kolkata, Bengaluru, Hyderabad, Bangkok, Dubai"
    },
    "railway": {
      "name": "Puri Railway Station",
      "code": "PURI",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Terminus Coastal Junction",
      "connectivity": "Puri-Howrah Vande Bharat, Puri-Rourkela Vande Bharat, Jagannath Express"
    },
    "busStand": {
      "name": "Puri Central Bus Stand (Gundicha Temple)",
      "distance": "1.2 km",
      "time": "4 mins",
      "type": "Interstate Bus Terminal",
      "operators": "OSRTC, WBTC Volvo buses, direct private luxury coaches"
    },
    "road": {
      "highway": "NH-316 (Bhubaneswar-Puri 4-Lane Expressway)",
      "condition": "Paved express highway with landscaped median"
    },
    "localTransport": "Cycle rickshaws on Grand Road (Bada Danda), auto-rickshaws, OTDC tourist cabs"
  },
  "konark": {
    "airport": {
      "name": "Odisha Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Konark Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Konark Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Odisha State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Konark",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bhubaneswar": {
    "airport": {
      "name": "Biju Patnaik International Airport",
      "code": "BBI",
      "distance": "4 km",
      "time": "10 mins",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Kolkata, Bengaluru, Chennai, Hyderabad, Singapore"
    },
    "railway": {
      "name": "Bhubaneswar Railway Station",
      "code": "BBS",
      "distance": "2 km",
      "time": "6 mins",
      "type": "East Coast Railway Headquarters",
      "connectivity": "Rajdhani, Vande Bharat, Duronto, and Coromandel Express"
    },
    "busStand": {
      "name": "Baramunda Interstate Bus Terminal (ISBT)",
      "distance": "6 km",
      "time": "15 mins",
      "type": "Modern Air-Conditioned ISBT",
      "operators": "OSRTC Mo Bus intercity, CSTC, TSRTC luxury coaches"
    },
    "road": {
      "highway": "NH-16 (Golden Quadrilateral)",
      "condition": "6-Lane express corridor passing through city center"
    },
    "localTransport": "Mo Bus smart city transit network, Mo E-Ride electric autos, Ola/Uber cabs"
  },
  "chilika-lake": {
    "airport": {
      "name": "Odisha Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Chilika Lake Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Chilika Lake Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Odisha State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Chilika Lake",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "simlipal": {
    "airport": {
      "name": "Odisha Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Simlipal Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Simlipal Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Odisha State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Simlipal",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "golden-temple": {
    "airport": {
      "name": "Sri Guru Ram Dass Jee International Airport",
      "code": "ATQ",
      "distance": "12 km",
      "time": "25 mins",
      "type": "International Airport",
      "directFlights": "Direct flights via Amritsar Airport"
    },
    "railway": {
      "name": "Amritsar Junction",
      "code": "ASR",
      "distance": "2.5 km",
      "time": "8 mins",
      "type": "Major Junction",
      "connectivity": "Free SGPC electric shuttles direct from station to Heritage Street"
    },
    "busStand": {
      "name": "Amritsar Bus Stand (City Center)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Central Bus Stand",
      "operators": "Regular city buses and state transit"
    },
    "road": {
      "highway": "Heritage Street Pedestrian Corridor via GT Road",
      "condition": "Cobblestoned pedestrian-only spiritual precinct"
    },
    "localTransport": "Free Golden Temple e-rickshaws for seniors, walking plaza, cycle rickshaws"
  },
  "amritsar": {
    "airport": {
      "name": "Sri Guru Ram Dass Jee International Airport",
      "code": "ATQ",
      "distance": "11 km",
      "time": "22 mins",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, London, Dubai, Singapore"
    },
    "railway": {
      "name": "Amritsar Junction",
      "code": "ASR",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Major Frontier Railhead",
      "connectivity": "Amritsar Vande Bharat, Golden Temple Mail, Swarna Shatabdi"
    },
    "busStand": {
      "name": "Amritsar Interstate Central Bus Stand (PUNBUS)",
      "distance": "2.5 km",
      "time": "8 mins",
      "type": "Central Punjab Terminal",
      "operators": "PUNBUS, PRTC, Haryana Roadways, Indo-Canadian transport"
    },
    "road": {
      "highway": "Grand Trunk Road (NH-3) & Amritsar-Jamnagar Expressway",
      "condition": "Wide multi-lane national expressway corridor"
    },
    "localTransport": "Free SGPC Golden Temple AC shuttle coaches, Amritsar BRTS, e-rickshaws, auto-rickshaws"
  },
  "wagah-border": {
    "airport": {
      "name": "Punjab Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Wagah Border Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Wagah Border Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Punjab State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Wagah Border",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "patiala": {
    "airport": {
      "name": "Punjab Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Patiala Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Patiala Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Punjab State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Patiala",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "anandpur-sahib": {
    "airport": {
      "name": "Punjab Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Anandpur Sahib Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Anandpur Sahib Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Punjab State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Anandpur Sahib",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "jaipur": {
    "airport": {
      "name": "Jaipur International Airport (Sanganer)",
      "code": "JAI",
      "distance": "12 km",
      "time": "25 mins",
      "type": "International Hub",
      "directFlights": "Delhi, Mumbai, Bengaluru, Kolkata, Dubai, Abu Dhabi, Muscat"
    },
    "railway": {
      "name": "Jaipur Junction",
      "code": "JP",
      "distance": "3 km",
      "time": "10 mins",
      "type": "North Western Railway Headquarters",
      "connectivity": "Ajmer Shatabdi, Vande Bharat, Double Decker & Superfast trains"
    },
    "busStand": {
      "name": "Sindhi Camp Central Bus Stand",
      "distance": "2.5 km",
      "time": "8 mins",
      "type": "Mega Interstate Terminal",
      "operators": "RSRTC Goldline, Volvo, Haryana Roadways, DTC coaches"
    },
    "road": {
      "highway": "Delhi-Mumbai Expressway & NH-48",
      "condition": "State-of-the-art 8-lane expressway reaching Delhi in under 3 hours"
    },
    "localTransport": "Jaipur Metro (Pink Line), low-floor AC city buses, e-rickshaws, Uber/Ola"
  },
  "udaipur": {
    "airport": {
      "name": "Maharana Pratap Airport (Dabok)",
      "code": "UDR",
      "distance": "22 km",
      "time": "35 mins",
      "type": "Domestic Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Hyderabad, Jaipur, Surat"
    },
    "railway": {
      "name": "Udaipur City Railway Station",
      "code": "UDZ",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Major Tourist Terminal",
      "connectivity": "Direct Vande Bharat to Jaipur, Chetak Express to Delhi, Mewar Express"
    },
    "busStand": {
      "name": "Udaipur Central Bus Depot (Udiapol)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Central RSRTC Stand",
      "operators": "RSRTC Volvo, Gujarat State Transport, private luxury sleeper coaches"
    },
    "road": {
      "highway": "NH-48 & NH-58",
      "condition": "Smooth 4-lane highway connecting Ahmedabad (260 km) and Jaipur (390 km)"
    },
    "localTransport": "Lake Pichola ferry boats, heritage auto-rickshaws, rental scooters, app cabs"
  },
  "jaisalmer": {
    "airport": {
      "name": "Jaisalmer Airport (Civil Enclave)",
      "code": "JSA",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Seasonal Commercial Airport",
      "directFlights": "Seasonal flights from Delhi, Mumbai, Jaipur, Ahmedabad"
    },
    "railway": {
      "name": "Jaisalmer Railway Station",
      "code": "JSM",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Golden City Railhead",
      "connectivity": "Jaisalmer-Delhi Intercity, Durg Express, Ranikhet Express"
    },
    "busStand": {
      "name": "Jaisalmer Central Bus Stand (Air Force Circle)",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Desert City Stand",
      "operators": "RSRTC, Hanuman Travels, desert luxury sleeper buses"
    },
    "road": {
      "highway": "NH-11 & Bharatmala Expressway",
      "condition": "Scenic wide desert highway across Thar sands with windmills view"
    },
    "localTransport": "4x4 Desert safari gypsies, camel carts, auto-rickshaws"
  },
  "jodhpur": {
    "airport": {
      "name": "Jodhpur Airport (Civil Enclave)",
      "code": "JDH",
      "distance": "6 km",
      "time": "15 mins",
      "type": "Domestic Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Ahmedabad, Hyderabad"
    },
    "railway": {
      "name": "Jodhpur Junction",
      "code": "JU",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Divisional Headquarters",
      "connectivity": "Vande Bharat to Sabarmati, Mandore Express to Delhi"
    },
    "busStand": {
      "name": "Raika Bagh Central Bus Stand",
      "distance": "2.5 km",
      "time": "8 mins",
      "type": "RSRTC Intercity Stand",
      "operators": "RSRTC Volvo and Express buses across Rajasthan and Gujarat"
    },
    "road": {
      "highway": "NH-62 & NH-25",
      "condition": "Well-maintained multi-lane highway network"
    },
    "localTransport": "Blue City auto-rickshaws, tourist taxis, prepaid cabs"
  },
  "mount-abu": {
    "airport": {
      "name": "Udaipur Airport (UDR) / Ahmedabad (AMD)",
      "code": "UDR",
      "distance": "165 km (UDR) / 220 km (AMD)",
      "time": "3h 15m",
      "type": "Domestic / International Hubs",
      "directFlights": "Connecting via Udaipur or Ahmedabad"
    },
    "railway": {
      "name": "Abu Road Railway Station",
      "code": "ABR",
      "distance": "27 km",
      "time": "50 mins",
      "type": "Main Western Line Station",
      "connectivity": "Delhi-Ahmedabad Rajdhani, Ashram Express, Suryanagari Express"
    },
    "busStand": {
      "name": "Mount Abu Central Bus Stand",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "Hill Station Stand",
      "operators": "RSRTC, GSRTC hill coaches from Ahmedabad, Surat and Jaipur"
    },
    "road": {
      "highway": "Abu Road-Mount Abu Hill Highway",
      "condition": "Scenic winding hill road ascending into Aravalli mountain ranges"
    },
    "localTransport": "Nakki Lake pedal boats, horse rides, rental scooters, local tourist taxis"
  },
  "pushkar": {
    "airport": {
      "name": "Kishangarh Airport (KQH) / Jaipur (JAI)",
      "code": "KQH",
      "distance": "45 km (KQH) / 145 km (JAI)",
      "time": "55 mins / 2h 45m",
      "type": "Regional Domestic",
      "directFlights": "Direct flights from Delhi, Hyderabad to Kishangarh"
    },
    "railway": {
      "name": "Ajmer Junction (AII)",
      "code": "AII",
      "distance": "14 km",
      "time": "30 mins",
      "type": "Major North Western Junction",
      "connectivity": "Ajmer Shatabdi & Vande Bharat from Delhi & Jaipur"
    },
    "busStand": {
      "name": "Pushkar Marwar Bus Stand & Ajmer Stand",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "Pilgrimage Town Stand",
      "operators": "RSRTC buses from Ajmer every 15 minutes"
    },
    "road": {
      "highway": "NH-58 & Pushkar Ghat Road",
      "condition": "Smooth hill pass highway crossing Snake Mountain (Nag Pahar)"
    },
    "localTransport": "Camel safari carts, rental mopeds/scooters, walking around holy lake ghats"
  },
  "gangtok": {
    "airport": {
      "name": "Bagdogra International Airport (IXB) / Pakyong (PYG)",
      "code": "IXB",
      "distance": "35 to 110 km",
      "time": "1h 30m to 3h 30m",
      "type": "Regional & International",
      "directFlights": "Kolkata, Delhi, Bengaluru via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "115 km",
      "time": "3h 45m",
      "type": "Broad Gauge Junction",
      "connectivity": "Vande Bharat & Rajdhani express trains"
    },
    "busStand": {
      "name": "Gangtok SNT Central Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Sikkim Nationalised Transport Terminal",
      "operators": "SNT luxury buses and shared 4x4 Bolero/Sumo jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River Valley",
      "condition": "Scenic mountain corridor connecting Siliguri to Sikkim"
    },
    "localTransport": "Shared mountain Sumos, Gangtok ropeway cable cars, local maruti cabs"
  },
  "nathula-pass": {
    "airport": {
      "name": "Bagdogra International Airport (IXB) / Pakyong (PYG)",
      "code": "IXB",
      "distance": "35 to 110 km",
      "time": "1h 30m to 3h 30m",
      "type": "Regional & International",
      "directFlights": "Kolkata, Delhi, Bengaluru via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "115 km",
      "time": "3h 45m",
      "type": "Broad Gauge Junction",
      "connectivity": "Vande Bharat & Rajdhani express trains"
    },
    "busStand": {
      "name": "Gangtok SNT Central Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Sikkim Nationalised Transport Terminal",
      "operators": "SNT luxury buses and shared 4x4 Bolero/Sumo jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River Valley",
      "condition": "Scenic mountain corridor connecting Siliguri to Sikkim"
    },
    "localTransport": "Shared mountain Sumos, Gangtok ropeway cable cars, local maruti cabs"
  },
  "pelling": {
    "airport": {
      "name": "Bagdogra International Airport (IXB) / Pakyong (PYG)",
      "code": "IXB",
      "distance": "35 to 110 km",
      "time": "1h 30m to 3h 30m",
      "type": "Regional & International",
      "directFlights": "Kolkata, Delhi, Bengaluru via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "115 km",
      "time": "3h 45m",
      "type": "Broad Gauge Junction",
      "connectivity": "Vande Bharat & Rajdhani express trains"
    },
    "busStand": {
      "name": "Gangtok SNT Central Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Sikkim Nationalised Transport Terminal",
      "operators": "SNT luxury buses and shared 4x4 Bolero/Sumo jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River Valley",
      "condition": "Scenic mountain corridor connecting Siliguri to Sikkim"
    },
    "localTransport": "Shared mountain Sumos, Gangtok ropeway cable cars, local maruti cabs"
  },
  "lachung": {
    "airport": {
      "name": "Bagdogra International Airport (IXB) / Pakyong (PYG)",
      "code": "IXB",
      "distance": "35 to 110 km",
      "time": "1h 30m to 3h 30m",
      "type": "Regional & International",
      "directFlights": "Kolkata, Delhi, Bengaluru via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "115 km",
      "time": "3h 45m",
      "type": "Broad Gauge Junction",
      "connectivity": "Vande Bharat & Rajdhani express trains"
    },
    "busStand": {
      "name": "Gangtok SNT Central Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Sikkim Nationalised Transport Terminal",
      "operators": "SNT luxury buses and shared 4x4 Bolero/Sumo jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River Valley",
      "condition": "Scenic mountain corridor connecting Siliguri to Sikkim"
    },
    "localTransport": "Shared mountain Sumos, Gangtok ropeway cable cars, local maruti cabs"
  },
  "yumthang-valley": {
    "airport": {
      "name": "Bagdogra International Airport (IXB) / Pakyong (PYG)",
      "code": "IXB",
      "distance": "35 to 110 km",
      "time": "1h 30m to 3h 30m",
      "type": "Regional & International",
      "directFlights": "Kolkata, Delhi, Bengaluru via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "115 km",
      "time": "3h 45m",
      "type": "Broad Gauge Junction",
      "connectivity": "Vande Bharat & Rajdhani express trains"
    },
    "busStand": {
      "name": "Gangtok SNT Central Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Sikkim Nationalised Transport Terminal",
      "operators": "SNT luxury buses and shared 4x4 Bolero/Sumo jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River Valley",
      "condition": "Scenic mountain corridor connecting Siliguri to Sikkim"
    },
    "localTransport": "Shared mountain Sumos, Gangtok ropeway cable cars, local maruti cabs"
  },
  "ooty": {
    "airport": {
      "name": "Coimbatore International Airport",
      "code": "CJB",
      "distance": "86 km",
      "time": "2h 45m",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Sharjah, Singapore"
    },
    "railway": {
      "name": "Mettupalayam (MTP) / Udhagamandalam (UAM)",
      "code": "MTP",
      "distance": "51 km (MTP) / 1 km (UAM)",
      "time": "2h drive / UNESCO Toy Train",
      "type": "Nilgiri Mountain Railway (UNESCO)",
      "connectivity": "UNESCO Steam Toy Train climbing through steep blue mountain rack-and-pinion track"
    },
    "busStand": {
      "name": "Ooty Central Bus Stand (Opposite Railway Station)",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "Hill Station Bus Stand",
      "operators": "TNSTC, KSRTC, SETC hill Volvo coaches from Coimbatore and Mysore"
    },
    "road": {
      "highway": "NH-181 (Nagapattinam-Gudalur-Mysore Highway)",
      "condition": "Famous 36 hairpin bends road with panoramic tea estate overlooks"
    },
    "localTransport": "Local tourist taxis, auto-rickshaws, shared sumos to tea estates"
  },
  "chennai": {
    "airport": {
      "name": "Chennai International Airport (Meenambakkam)",
      "code": "MAA",
      "distance": "18 km",
      "time": "40 mins",
      "type": "Major International Gateway",
      "directFlights": "All major domestic destinations + direct flights to Europe, Middle East, Southeast Asia"
    },
    "railway": {
      "name": "Puratchi Thalaivar Dr. MGR Central (MAS) & Egmore (MS)",
      "code": "MAS",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Southern Railway Headquarters",
      "connectivity": "Vande Bharat to Mysuru, Coimbatore, Vijayawada; Rajdhani & Shatabdi"
    },
    "busStand": {
      "name": "Kalaignar Centenary Bus Terminus (KCBT Kilambakkam)",
      "distance": "28 km (South) / 8 km (CMBT Koyambedu)",
      "time": "45 mins",
      "type": "Asia Largest Modern Bus Terminus",
      "operators": "SETC, TNSTC, KSRTC, APSRTC luxury air-conditioned coaches"
    },
    "road": {
      "highway": "NH-32, NH-48 & Outer Ring Road",
      "condition": "Expansive multi-lane expressway network"
    },
    "localTransport": "Chennai Metro Rail (Airport Direct), suburban EMU trains, MTC AC city buses, auto-rickshaws"
  },
  "kodaikanal": {
    "airport": {
      "name": "Madurai International Airport",
      "code": "IXM",
      "distance": "120 km",
      "time": "3h 15m",
      "type": "International Airport",
      "directFlights": "Direct flights via Madurai"
    },
    "railway": {
      "name": "Kodai Road Railway Station",
      "code": "KQN",
      "distance": "80 km",
      "time": "2h 10m",
      "type": "Foothills Railway Station",
      "connectivity": "Pandian Express, Vaigai Express & Southern superfast trains"
    },
    "busStand": {
      "name": "Kodaikanal Central Bus Stand (Near Coaker Walk)",
      "distance": "0.4 km",
      "time": "2 mins",
      "type": "Princess of Hill Stations Stand",
      "operators": "TNSTC, KSRTC, SETC sleeper coaches from Chennai, Bengaluru"
    },
    "road": {
      "highway": "Kodaikanal Ghat Road (SH-156)",
      "condition": "Scenic ghat curves through silver cascade waterfalls"
    },
    "localTransport": "Local rental bicycles around Kodai Lake, tourist cabs, horse rides"
  },
  "madurai": {
    "airport": {
      "name": "Madurai International Airport",
      "code": "IXM",
      "distance": "12 km",
      "time": "25 mins",
      "type": "Customs International Airport",
      "directFlights": "Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Dubai, Colombo"
    },
    "railway": {
      "name": "Madurai Junction",
      "code": "MDU",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Major Southern Railway Hub",
      "connectivity": "Vande Bharat to Chennai Egmore, Pandian Express"
    },
    "busStand": {
      "name": "Mattuthavani Integrated Bus Terminus (MIBT)",
      "distance": "5 km",
      "time": "15 mins",
      "type": "Integrated Bus Complex",
      "operators": "TNSTC, SETC, KSRTC ultra deluxe and Volvo buses"
    },
    "road": {
      "highway": "NH-44 & NH-38 (Kanyakumari Corridor)",
      "condition": "Smooth 4-lane high-speed corridor"
    },
    "localTransport": "City buses, metered auto-rickshaws, app cabs"
  },
  "rameswaram": {
    "airport": {
      "name": "Madurai Airport (IXM)",
      "code": "IXM",
      "distance": "175 km",
      "time": "3h 30m",
      "type": "International Airport",
      "directFlights": "Via Madurai Airport"
    },
    "railway": {
      "name": "Rameswaram Railway Station / Pamban Bridge",
      "code": "RMM",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Island Railway Terminus",
      "connectivity": "Iconic train crossing over the Indian Ocean via New Pamban Vertical Lift Bridge"
    },
    "busStand": {
      "name": "Rameswaram Municipal Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Island Bus Stand",
      "operators": "SETC, TNSTC express buses from all Tamil Nadu districts"
    },
    "road": {
      "highway": "NH-87 across Annai Indira Gandhi Road Bridge",
      "condition": "Breathtaking 2.3 km ocean bridge crossing over Palk Strait"
    },
    "localTransport": "Auto-rickshaws, temple pilgrimage vans to Dhanushkodi, Dhanushkodi 4x4 beach jeeps"
  },
  "thanjavur": {
    "airport": {
      "name": "Chennai International Airport (MAA) / Madurai (IXM)",
      "code": "MAA",
      "distance": "18 to 45 km",
      "time": "35 mins to 1h",
      "type": "International Gateway",
      "directFlights": "Pan-India & International"
    },
    "railway": {
      "name": "Thanjavur / MGR Chennai Central (MAS)",
      "code": "MAS",
      "distance": "3 to 12 km",
      "time": "10 to 25 mins",
      "type": "Southern Railway Junction",
      "connectivity": "Vande Bharat Express & Superfast lines"
    },
    "busStand": {
      "name": "Thanjavur Central Bus Stand (SETC / TNSTC)",
      "distance": "2 km",
      "time": "6 mins",
      "type": "State Bus Terminus",
      "operators": "SETC Ultra Deluxe, KSRTC, APSRTC Volvo coaches"
    },
    "road": {
      "highway": "NH-32 & NH-48 Express Corridors",
      "condition": "Smooth multi-lane national highway"
    },
    "localTransport": "City buses, auto-rickshaws, app cabs, tourist taxis"
  },
  "hyderabad": {
    "airport": {
      "name": "Rajiv Gandhi International Airport, Shamshabad",
      "code": "HYD",
      "distance": "22 km",
      "time": "35 mins",
      "type": "World-Class Mega International Airport",
      "directFlights": "Direct connections to all Indian cities, US, UK, Europe, Middle East, Southeast Asia"
    },
    "railway": {
      "name": "Secunderabad Junction (SC) & Hyderabad Deccan (HYB)",
      "code": "SC",
      "distance": "5 km",
      "time": "15 mins",
      "type": "South Central Railway Headquarters",
      "connectivity": "Vande Bharat to Visakhapatnam, Tirupati, Bengaluru; Rajdhani & Shatabdi"
    },
    "busStand": {
      "name": "Mahatma Gandhi Bus Station (MGBS / Imlibun)",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Asia Largest Bus Station by Area",
      "operators": "TSRTC Garuda Plus, APSRTC, KSRTC, MSRTC Volvo coaches"
    },
    "road": {
      "highway": "Nehru Outer Ring Road (158 km 8-Lane Expressway)",
      "condition": "120 km/h access-controlled expressway circling the metropolis"
    },
    "localTransport": "Hyderabad Metro (Red, Blue & Green lines), TSRTC AC electric buses, MMTS suburban trains, Uber/Ola"
  },
  "golconda-fort": {
    "airport": {
      "name": "Telangana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Golconda Fort Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Golconda Fort Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Telangana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Golconda Fort",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "charminar": {
    "airport": {
      "name": "Telangana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Charminar Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Charminar Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Telangana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Charminar",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "warangal": {
    "airport": {
      "name": "Telangana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Warangal Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Warangal Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Telangana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Warangal",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "nagarjuna-sagar": {
    "airport": {
      "name": "Telangana Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Nagarjuna Sagar Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Nagarjuna Sagar Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Telangana State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Nagarjuna Sagar",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "agartala": {
    "airport": {
      "name": "Tripura Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Agartala Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Agartala Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Tripura State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Agartala",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "ujjayanta-palace": {
    "airport": {
      "name": "Tripura Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Ujjayanta Palace Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Ujjayanta Palace Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Tripura State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Ujjayanta Palace",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "neermahal": {
    "airport": {
      "name": "Tripura Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Neermahal Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Neermahal Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Tripura State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Neermahal",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "unakoti": {
    "airport": {
      "name": "Tripura Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Unakoti Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Unakoti Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Tripura State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Unakoti",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "agra": {
    "airport": {
      "name": "Agra Airport (Kheria) / Delhi IGI",
      "code": "AGR",
      "distance": "8 km (AGR) / 210 km (DEL)",
      "time": "20 mins (AGR) / 3h (DEL)",
      "type": "Domestic / Military Civil Enclave",
      "directFlights": "Direct flights to Mumbai, Bengaluru, Lucknow, Jaipur"
    },
    "railway": {
      "name": "Agra Cantt Railway Station",
      "code": "AGC",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Major Central Junction",
      "connectivity": "Vande Bharat Express, Gatimaan Express (1h 40m from Delhi)"
    },
    "busStand": {
      "name": "ISBT Agra (Transport Nagar) & Idgah Bus Stand",
      "distance": "5 km",
      "time": "15 mins",
      "type": "Interstate Bus Terminal",
      "operators": "UPSRTC Janrath AC, Volvo & Rajasthan Roadways buses"
    },
    "road": {
      "highway": "Yamuna Expressway & Agra-Lucknow Expressway",
      "condition": "World-class 6-lane access-controlled expressways from Delhi and Lucknow"
    },
    "localTransport": "Eco-friendly battery e-rickshaws in Taj heritage zone, prepaid cabs, auto-rickshaws"
  },
  "varanasi": {
    "airport": {
      "name": "Lal Bahadur Shastri International Airport",
      "code": "VNS",
      "distance": "24 km",
      "time": "45 mins",
      "type": "International Hub",
      "directFlights": "Delhi, Mumbai, Bengaluru, Kolkata, Kathmandu, Sharjah"
    },
    "railway": {
      "name": "Varanasi Junction (BSB) / Banaras (BSBS)",
      "code": "BSB",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Sacred City Mega Terminus",
      "connectivity": "India first Vande Bharat Express route (New Delhi-Varanasi), 200+ express lines"
    },
    "busStand": {
      "name": "Varanasi Cantt Central Bus Stand (UPSRTC)",
      "distance": "3.5 km",
      "time": "10 mins",
      "type": "Interstate Bus Stand",
      "operators": "UPSRTC, Bihar State RTC, private Volvo sleeper buses"
    },
    "road": {
      "highway": "NH-19 (GT Road) & Purvanchal Expressway link",
      "condition": "4-6 Lane national highway network connecting Delhi-Kolkata corridor"
    },
    "localTransport": "E-rickshaws, cycle rickshaws through old ghat gullies, wooden rowboats & Alaknanda luxury cruise"
  },
  "ayodhya": {
    "airport": {
      "name": "Maharishi Valmiki International Airport",
      "code": "AYJ",
      "distance": "10 km",
      "time": "18 mins",
      "type": "New International Airport",
      "directFlights": "Delhi, Mumbai, Ahmedabad, Bengaluru, Kolkata, Chennai"
    },
    "railway": {
      "name": "Ayodhya Dham Junction (AY) & Ayodhya Cantt",
      "code": "AY",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Modernized Temple Theme Station",
      "connectivity": "Direct Vande Bharat & Amrit Bharat express trains"
    },
    "busStand": {
      "name": "Ayodhya Dham Central Bus Station",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Newly Renovated Bus Stand",
      "operators": "UPSRTC electric intercity buses from Lucknow, Gorakhpur, Varanasi"
    },
    "road": {
      "highway": "NH-27 & Lucknow-Ayodhya 4-Lane Highway",
      "condition": "High-speed modern highway corridor (~2h drive from Lucknow)"
    },
    "localTransport": "Electric auto-rickshaws, golf carts in Ram Mandir complex, Saryu river electric catamarans"
  },
  "mathura-vrindavan": {
    "airport": {
      "name": "Indira Gandhi International Airport, Delhi",
      "code": "DEL",
      "distance": "145 km",
      "time": "2h 30m",
      "type": "International Gateway",
      "directFlights": "Direct via Delhi IGI or Jewar Airport"
    },
    "railway": {
      "name": "Mathura Junction",
      "code": "MTJ",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Key 7-Way Rail Junction",
      "connectivity": "Connected on Delhi-Mumbai Rajdhani route with 200+ stops"
    },
    "busStand": {
      "name": "Mathura New Bus Stand / Vrindavan Chhatikara",
      "distance": "2.5 km",
      "time": "8 mins",
      "type": "Interstate Bus Stand",
      "operators": "UPSRTC, Haryana Roadways, RSRTC regular coaches"
    },
    "road": {
      "highway": "Yamuna Expressway & NH-19 (Delhi-Agra)",
      "condition": "Fast 6-lane toll expressway corridor (under 2.5 hours from Delhi/NCR)"
    },
    "localTransport": "Battery e-rickshaws, CNG auto-rickshaws, shared temples shuttles"
  },
  "lucknow": {
    "airport": {
      "name": "Chaudhary Charan Singh International Airport (Amausi)",
      "code": "LKO",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Major International Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Kolkata, Dubai, Riyadh, Muscat"
    },
    "railway": {
      "name": "Lucknow Charbagh Railway Station (LKO / LJN)",
      "code": "LKO",
      "distance": "3 km",
      "time": "10 mins",
      "type": "Architectural Landmark Junction",
      "connectivity": "Major Northern & North Eastern Railway junction; Tejas & Vande Bharat links"
    },
    "busStand": {
      "name": "Alambagh Bus Terminal & Kaisarbagh",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Air-Conditioned Mega Bus Terminal",
      "operators": "UPSRTC Scania, Volvo & Janrath express coaches"
    },
    "road": {
      "highway": "Agra-Lucknow Expressway & Purvanchal Expressway",
      "condition": "Twin world-class high-speed expressways connecting East and West UP"
    },
    "localTransport": "Lucknow Metro (Red Line connecting Airport to Charbagh), app cabs, CNG autos"
  },
  "prayagraj": {
    "airport": {
      "name": "Prayagraj Airport (IXD)",
      "code": "IXD",
      "distance": "12 km",
      "time": "25 mins",
      "type": "Civil Enclave Domestic",
      "directFlights": "Delhi, Mumbai, Bengaluru, Bhopal, Raipur, Lucknow"
    },
    "railway": {
      "name": "Prayagraj Junction (PRYJ) / Subedarganj",
      "code": "PRYJ",
      "distance": "2 km",
      "time": "6 mins",
      "type": "North Central Railway Headquarters",
      "connectivity": "Vande Bharat Express, Rajdhani & Prayagraj Express"
    },
    "busStand": {
      "name": "Civil Lines Bus Depot & Zero Road Bus Stand",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Interstate Bus Stand",
      "operators": "UPSRTC AC Volvo, Shatabdi & Janrath buses"
    },
    "road": {
      "highway": "NH-19 (Delhi-Kolkata) & NH-27",
      "condition": "New 6-lane bridge over Ganga & Yamuna rivers"
    },
    "localTransport": "E-rickshaws, cycle rickshaws, Triveni Sangam traditional wooden boats"
  },
  "rishikesh": {
    "airport": {
      "name": "Jolly Grant Airport, Dehradun",
      "code": "DED",
      "distance": "21 km",
      "time": "35 mins",
      "type": "Domestic Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Ahmedabad, Lucknow, Jaipur"
    },
    "railway": {
      "name": "Yog Nagari Rishikesh (YNRK) & Haridwar (HW)",
      "code": "YNRK",
      "distance": "3 km",
      "time": "8 mins",
      "type": "Modern Himalayan Terminal",
      "connectivity": "Direct express trains from Delhi, Kolkata, Mumbai, Jammu"
    },
    "busStand": {
      "name": "Rishikesh Sanyukta Yatra Bus Stand & Natraj Chowk",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Chardham Base Bus Stand",
      "operators": "UTC (Uttarakhand Transport), HRTC, UPSRTC Volvo coaches"
    },
    "road": {
      "highway": "NH-7 (Delhi-Haridwar-Rishikesh Highway)",
      "condition": "Upgraded 4-lane expressway corridor from Delhi (approx 4.5 hours)"
    },
    "localTransport": "Shared Vikram autos, rental automatic scooters, pedestrian suspension bridges (Ram Jhula, Janki Setu)"
  },
  "haridwar": {
    "airport": {
      "name": "Jolly Grant Airport, Dehradun",
      "code": "DED",
      "distance": "38 km",
      "time": "50 mins",
      "type": "Domestic Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru via Dehradun"
    },
    "railway": {
      "name": "Haridwar Junction",
      "code": "HW",
      "distance": "1 km",
      "time": "4 mins",
      "type": "Major Pilgrim Junction",
      "connectivity": "Shatabdi Express, Vande Bharat, Jan Shatabdi from New Delhi"
    },
    "busStand": {
      "name": "Haridwar Central Bus Stand (Opposite Station)",
      "distance": "0.8 km",
      "time": "3 mins",
      "type": "Interstate Terminal",
      "operators": "UTC, DTC, Haryana Roadways Volvo and Ordinary services"
    },
    "road": {
      "highway": "NH-334 (Delhi-Meerut Expressway & Haridwar Highway)",
      "condition": "Smooth express corridor under 4 hours from Delhi NCR"
    },
    "localTransport": "E-rickshaws to Har Ki Pauri, cycle rickshaws, ropeway cable cars to Mansa Devi & Chandi Devi"
  },
  "nainital": {
    "airport": {
      "name": "Pantnagar Airport (PGH) / Dehradun (DED)",
      "code": "PGH",
      "distance": "70 km",
      "time": "2h 15m",
      "type": "Regional Domestic",
      "directFlights": "Direct flights from Delhi to Pantnagar"
    },
    "railway": {
      "name": "Kathgodam Railway Station",
      "code": "KGM",
      "distance": "34 km",
      "time": "1h 10m",
      "type": "Himalayan Foothill Railhead",
      "connectivity": "Kathgodam Shatabdi & Ranikhet Express from Old Delhi & New Delhi"
    },
    "busStand": {
      "name": "Tallital Bus Stand, Nainital",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Lakeside Bus Stand",
      "operators": "UTC, UPSRTC Volvo and ordinary mountain buses"
    },
    "road": {
      "highway": "NH-109 (Kathgodam-Nainital Highway)",
      "condition": "Paved mountain highway ascending past Jeolikote with scenic viewpoints"
    },
    "localTransport": "Naini Lake traditional wooden rowboats, lakeside cycle rickshaws on Mall Road, local taxis"
  },
  "mussoorie": {
    "airport": {
      "name": "Jolly Grant Airport, Dehradun",
      "code": "DED",
      "distance": "58 km",
      "time": "1h 45m",
      "type": "Domestic Airport",
      "directFlights": "Direct flights to Dehradun from Delhi, Mumbai, Bengaluru"
    },
    "railway": {
      "name": "Dehradun Railway Station",
      "code": "DDN",
      "distance": "35 km",
      "time": "1h 15m",
      "type": "Northern Railhead",
      "connectivity": "Dehradun Vande Bharat, Shatabdi & Nanda Devi Express"
    },
    "busStand": {
      "name": "Library Bus Stand & Picture Palace Stand",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "Twin Hill Stands",
      "operators": "UTC direct mountain buses from Dehradun Railway Station every 20 mins"
    },
    "road": {
      "highway": "Mussoorie-Dehradun Highway via Kolhukhet",
      "condition": "Scenic mountain road climbing from 2,200 ft to 6,800 ft elevation"
    },
    "localTransport": "Hand-pulled & cycle rickshaws on Upper Mall, Gun Hill ropeway, local tourist taxis"
  },
  "kedarnath": {
    "airport": {
      "name": "Jolly Grant Airport, Dehradun",
      "code": "DED",
      "distance": "238 km to Gaurikund + 16 km trek",
      "time": "7h drive + trek",
      "type": "Heli-services from Guptkashi/Phata/Sirsi",
      "directFlights": "Helicopter shuttle flights to Kedarnath Helipad (8 mins)"
    },
    "railway": {
      "name": "Rishikesh (YNRK) / Haridwar (HW)",
      "code": "YNRK",
      "distance": "215 km to Gaurikund",
      "time": "6h 30m drive",
      "type": "Railhead for Chardham",
      "connectivity": "Upcoming Rishikesh-Karnaprayag mountain railway corridor"
    },
    "busStand": {
      "name": "Gaurikund / Sonprayag Bus Stand",
      "distance": "16 km trek / mule track",
      "time": "Base for trek",
      "type": "High-Altitude Yatra Terminal",
      "operators": "GMVN & UTC Chardham yatra special buses"
    },
    "road": {
      "highway": "NH-107 (Rudraprayag-Guptkashi-Gaurikund Highway)",
      "condition": "All-weather Chardham Mahamarg along Mandakini River"
    },
    "localTransport": "Ponies/mules, palanquins (doli), pitthu basket carriers, and government heli-taxis"
  },
  "badrinath": {
    "airport": {
      "name": "Jolly Grant Airport, Dehradun",
      "code": "DED",
      "distance": "310 km",
      "time": "9h drive",
      "type": "Heli-charters from Dehradun/Govindghat",
      "directFlights": "Helicopter shuttles to Badrinath helipad"
    },
    "railway": {
      "name": "Rishikesh (YNRK) / Haridwar (HW)",
      "code": "YNRK",
      "distance": "295 km",
      "time": "8h 30m drive",
      "type": "Broad Gauge Railhead",
      "connectivity": "Chardham mountain road transit"
    },
    "busStand": {
      "name": "Badrinath Main Bus Stand (Near Temple)",
      "distance": "0.4 km",
      "time": "2 mins",
      "type": "Himalayan Bus Stand",
      "operators": "UTC, GMVN & private Chardham pilgrimage coaches"
    },
    "road": {
      "highway": "NH-7 (National Highway 7 to Mana Village, India 1st Village)",
      "condition": "Scenic mountain highway through Joshimath and Vishnuprayag"
    },
    "localTransport": "Electric carts for senior pilgrims, local walking paths"
  },
  "darjeeling": {
    "airport": {
      "name": "Bagdogra International Airport",
      "code": "IXB",
      "distance": "68 km",
      "time": "2h 45m",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Kolkata, Bengaluru, Guwahati, Paro"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP) / Darjeeling Station",
      "code": "NJP",
      "distance": "72 km (NJP) / 0.5 km (Toy Train)",
      "time": "3h (NJP)",
      "type": "UNESCO Heritage DHR Railway",
      "connectivity": "NJP connected to entire India; UNESCO Darjeeling Himalayan Railway Toy Train"
    },
    "busStand": {
      "name": "Darjeeling Siliguri Bus Stand (Chowk Bazaar)",
      "distance": "0.8 km",
      "time": "4 mins",
      "type": "Hill Cart Terminus",
      "operators": "NBSTC, North Bengal State buses, and shared Tata Sumos"
    },
    "road": {
      "highway": "NH-110 (Old Hill Cart Road) & Rohini Road",
      "condition": "Scenic tea garden mountain highway ascending into misty hills"
    },
    "localTransport": "Shared Bolero/Sumo cabs, local taxis, walking along Mall Road (pedestrian zone)"
  },
  "kolkata": {
    "airport": {
      "name": "Netaji Subhash Chandra Bose Intl Airport",
      "code": "CCU",
      "distance": "15 km",
      "time": "35 mins",
      "type": "Major International Airport",
      "directFlights": "All major Indian metro hubs & international flights"
    },
    "railway": {
      "name": "Howrah Junction (HWH) & Sealdah (SDAH)",
      "code": "HWH",
      "distance": "4 km",
      "time": "15 mins",
      "type": "Heritage Railway Mega Terminus",
      "connectivity": "Eastern & South Eastern Railway headquarters; 23 platforms, Vande Bharat lines"
    },
    "busStand": {
      "name": "Esplanade Central Bus Terminus (Babughat)",
      "distance": "1 km",
      "time": "4 mins",
      "type": "Central Intercity Hub",
      "operators": "SBSTC, NBSTC, CSTC, Greenline & Royal Cruiser Volvo luxury buses"
    },
    "road": {
      "highway": "NH-16, NH-19 (GT Road) & Kona Expressway",
      "condition": "Vidyasagar Setu & Howrah Bridge arterial gateways"
    },
    "localTransport": "Kolkata Metro (Underwater East-West Green Line & Blue Line), iconic yellow taxis, river ferries, historic trams"
  },
  "digha": {
    "airport": {
      "name": "Kolkata Netaji Subhash Airport",
      "code": "CCU",
      "distance": "188 km",
      "time": "4h 15m",
      "type": "International Gateway",
      "directFlights": "Connecting via Kolkata NSCBI Airport"
    },
    "railway": {
      "name": "Digha Flag Station",
      "code": "DGHA",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Coastal Terminus",
      "connectivity": "Direct Tamralipta Express, Kandari Express & AC Superfast from Howrah"
    },
    "busStand": {
      "name": "Digha SBSTC Central Bus Depot",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "State RTC Bus Stand",
      "operators": "SBSTC, NBSTC, CSTC AC Volvo & rocket buses round-the-clock from Kolkata"
    },
    "road": {
      "highway": "NH-116B (Kolkata-Kolaghat-Digha 4-Lane)",
      "condition": "Direct coastal tourist expressway via Nandakumar"
    },
    "localTransport": "Eco-friendly Toto electric rickshaws, motorized rickshaws, seaside rental bicycles"
  },
  "sundarbans": {
    "airport": {
      "name": "Kolkata Airport",
      "code": "CCU",
      "distance": "108 km",
      "time": "3h to Godkhali Ferry Jetty",
      "type": "International Gateway",
      "directFlights": "Via Kolkata NSCBI Airport"
    },
    "railway": {
      "name": "Canning Railway Station",
      "code": "CG",
      "distance": "29 km to Godkhali",
      "time": "50 mins",
      "type": "Suburban Railway Terminal",
      "connectivity": "Local suburban EMU trains from Sealdah every 30 mins"
    },
    "busStand": {
      "name": "Godkhali Ferry Ghat Bus Stand",
      "distance": "0.2 km",
      "time": "2 mins",
      "type": "River Delta Port Stand",
      "operators": "Direct CSTC & private coaches from Esplanade and Baruipur"
    },
    "road": {
      "highway": "Basanti Highway & SH-3",
      "condition": "Scenic delta corridor reaching the gateway jetty of Godkhali"
    },
    "localTransport": "Forest-approved motorized safari boats (Bhutanis), cycle vans, electric totos"
  },
  "kalimpong": {
    "airport": {
      "name": "Bagdogra Airport",
      "code": "IXB",
      "distance": "76 km",
      "time": "2h 45m",
      "type": "International Airport",
      "directFlights": "Direct flights via Bagdogra"
    },
    "railway": {
      "name": "New Jalpaiguri Junction (NJP)",
      "code": "NJP",
      "distance": "71 km",
      "time": "2h 30m",
      "type": "Junction Railway",
      "connectivity": "Major junction with express train access to all corners of India"
    },
    "busStand": {
      "name": "Kalimpong Motor Stand (D.B.C. Road)",
      "distance": "0.6 km",
      "time": "3 mins",
      "type": "Hill Bus & Taxi Stand",
      "operators": "NBSTC and shared Sikkim/Bengal mountain jeeps"
    },
    "road": {
      "highway": "NH-10 along Teesta River valley",
      "condition": "Scenic river gorge highway connecting Siliguri to Sikkim and Kalimpong"
    },
    "localTransport": "Shared sumos, local tourist marutis, walking through heritage bazaar"
  },
  "dooars": {
    "airport": {
      "name": "Bagdogra Airport (IXB)",
      "code": "IXB",
      "distance": "82 km",
      "time": "2h 15m",
      "type": "International Airport",
      "directFlights": "Domestic & international links via Bagdogra"
    },
    "railway": {
      "name": "New Mal Junction (NMZ) / Alipurduar (APDJ)",
      "code": "NMZ",
      "distance": "5 km",
      "time": "12 mins",
      "type": "Forest Junction",
      "connectivity": "Scenic Dooars Forest Railway with Vistadome coach through tea gardens"
    },
    "busStand": {
      "name": "Malbazar / Madarihat Bus Stand",
      "distance": "2 km",
      "time": "5 mins",
      "type": "Sub-divisional Bus Stand",
      "operators": "NBSTC green forest line buses"
    },
    "road": {
      "highway": "NH-17 (Old NH-31C) Forest Highway",
      "condition": "Lush green highway through dense Sal forests and sprawling tea estates"
    },
    "localTransport": "Safari Gypsies for Gorumara & Jaldapara National Parks, auto-rickshaws"
  },
  "port-blair": {
    "airport": {
      "name": "Veer Savarkar International Airport, Port Blair (IXZ)",
      "code": "IXZ",
      "distance": "5 to 25 km",
      "time": "15 to 45 mins",
      "type": "Island International Gateway",
      "directFlights": "Direct flights from Kolkata, Chennai, Bengaluru, Delhi"
    },
    "railway": {
      "name": "Not Applicable (Island Territory)",
      "code": "N/A",
      "distance": "N/A",
      "time": "N/A",
      "type": "Island Ferry Network",
      "connectivity": "High-speed luxury catamarans (Makruzz, Nautika, Green Ocean)"
    },
    "busStand": {
      "name": "Port Blair Central Bus Terminus / Jetty Stand",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Island Road Transport Stand",
      "operators": "STS Government island buses and private tourist shuttles"
    },
    "road": {
      "highway": "Andaman Trunk Road (NH-4)",
      "condition": "Island highway passing through lush tropical rainforests"
    },
    "localTransport": "Speedboats, inter-island ferries, rental two-wheelers, auto-rickshaws"
  },
  "havelock-swaraj-dweep": {
    "airport": {
      "name": "Veer Savarkar International Airport, Port Blair (IXZ)",
      "code": "IXZ",
      "distance": "5 to 25 km",
      "time": "15 to 45 mins",
      "type": "Island International Gateway",
      "directFlights": "Direct flights from Kolkata, Chennai, Bengaluru, Delhi"
    },
    "railway": {
      "name": "Not Applicable (Island Territory)",
      "code": "N/A",
      "distance": "N/A",
      "time": "N/A",
      "type": "Island Ferry Network",
      "connectivity": "High-speed luxury catamarans (Makruzz, Nautika, Green Ocean)"
    },
    "busStand": {
      "name": "Port Blair Central Bus Terminus / Jetty Stand",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Island Road Transport Stand",
      "operators": "STS Government island buses and private tourist shuttles"
    },
    "road": {
      "highway": "Andaman Trunk Road (NH-4)",
      "condition": "Island highway passing through lush tropical rainforests"
    },
    "localTransport": "Speedboats, inter-island ferries, rental two-wheelers, auto-rickshaws"
  },
  "neil-shaheed-dweep": {
    "airport": {
      "name": "Veer Savarkar International Airport, Port Blair (IXZ)",
      "code": "IXZ",
      "distance": "5 to 25 km",
      "time": "15 to 45 mins",
      "type": "Island International Gateway",
      "directFlights": "Direct flights from Kolkata, Chennai, Bengaluru, Delhi"
    },
    "railway": {
      "name": "Not Applicable (Island Territory)",
      "code": "N/A",
      "distance": "N/A",
      "time": "N/A",
      "type": "Island Ferry Network",
      "connectivity": "High-speed luxury catamarans (Makruzz, Nautika, Green Ocean)"
    },
    "busStand": {
      "name": "Port Blair Central Bus Terminus / Jetty Stand",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Island Road Transport Stand",
      "operators": "STS Government island buses and private tourist shuttles"
    },
    "road": {
      "highway": "Andaman Trunk Road (NH-4)",
      "condition": "Island highway passing through lush tropical rainforests"
    },
    "localTransport": "Speedboats, inter-island ferries, rental two-wheelers, auto-rickshaws"
  },
  "cellular-jail": {
    "airport": {
      "name": "Veer Savarkar International Airport, Port Blair (IXZ)",
      "code": "IXZ",
      "distance": "5 to 25 km",
      "time": "15 to 45 mins",
      "type": "Island International Gateway",
      "directFlights": "Direct flights from Kolkata, Chennai, Bengaluru, Delhi"
    },
    "railway": {
      "name": "Not Applicable (Island Territory)",
      "code": "N/A",
      "distance": "N/A",
      "time": "N/A",
      "type": "Island Ferry Network",
      "connectivity": "High-speed luxury catamarans (Makruzz, Nautika, Green Ocean)"
    },
    "busStand": {
      "name": "Port Blair Central Bus Terminus / Jetty Stand",
      "distance": "1 km",
      "time": "3 mins",
      "type": "Island Road Transport Stand",
      "operators": "STS Government island buses and private tourist shuttles"
    },
    "road": {
      "highway": "Andaman Trunk Road (NH-4)",
      "condition": "Island highway passing through lush tropical rainforests"
    },
    "localTransport": "Speedboats, inter-island ferries, rental two-wheelers, auto-rickshaws"
  },
  "rock-garden": {
    "airport": {
      "name": "Chandigarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Rock Garden Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Rock Garden Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chandigarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Rock Garden",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "sukhna-lake": {
    "airport": {
      "name": "Chandigarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sukhna Lake Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sukhna Lake Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chandigarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sukhna Lake",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "capitol-complex": {
    "airport": {
      "name": "Chandigarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Capitol Complex Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Capitol Complex Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chandigarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Capitol Complex",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "rose-garden": {
    "airport": {
      "name": "Chandigarh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Rose Garden Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Rose Garden Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Chandigarh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Rose Garden",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "daman": {
    "airport": {
      "name": "Dadra & Nagar Haveli and Daman & Diu Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Daman Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Daman Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Dadra & Nagar Haveli and Daman & Diu State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Daman",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "diu": {
    "airport": {
      "name": "Dadra & Nagar Haveli and Daman & Diu Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Diu Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Diu Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Dadra & Nagar Haveli and Daman & Diu State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Diu",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "silvassa": {
    "airport": {
      "name": "Dadra & Nagar Haveli and Daman & Diu Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Silvassa Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Silvassa Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Dadra & Nagar Haveli and Daman & Diu State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Silvassa",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "naida-caves": {
    "airport": {
      "name": "Dadra & Nagar Haveli and Daman & Diu Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Naida Caves Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Naida Caves Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Dadra & Nagar Haveli and Daman & Diu State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Naida Caves",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "devka-beach": {
    "airport": {
      "name": "Dadra & Nagar Haveli and Daman & Diu Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Devka Beach Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Devka Beach Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Dadra & Nagar Haveli and Daman & Diu State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Devka Beach",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "india-gate": {
    "airport": {
      "name": "Indira Gandhi International Airport (Terminal 1, 2 & 3)",
      "code": "DEL",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Major Global Mega-Hub",
      "directFlights": "Direct flights to every major city across India and 140+ countries globally"
    },
    "railway": {
      "name": "New Delhi Railway Station (NDLS) & Hazrat Nizamuddin (NZM)",
      "code": "NDLS",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Premier Rail Terminus",
      "connectivity": "Origin of all premier Rajdhani, Shatabdi & Vande Bharat express fleets"
    },
    "busStand": {
      "name": "ISBT Kashmere Gate & Sarai Kale Khan",
      "distance": "8 km",
      "time": "20 mins",
      "type": "Northern India Largest Bus Terminal",
      "operators": "DTC, HRTC, PRTC, UPSRTC, RSRTC air-conditioned intercity buses"
    },
    "road": {
      "highway": "Ring Road, Central Vista & Delhi-Meerut Expressway",
      "condition": "Wide tree-lined ceremonial boulevards and multi-lane elevated corridors"
    },
    "localTransport": "Delhi Metro (Central Secretariat Station on Yellow/Violet Lines), DTC electric AC city buses, Uber/Ola cabs"
  },
  "red-fort": {
    "airport": {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "distance": "18 km",
      "time": "40 mins",
      "type": "International Airport",
      "directFlights": "Direct via Airport Express Metro (20 mins to New Delhi)"
    },
    "railway": {
      "name": "Old Delhi Railway Station (DLI) & New Delhi (NDLS)",
      "code": "DLI",
      "distance": "1.2 km",
      "time": "5 mins",
      "type": "Historic Heritage Station",
      "connectivity": "Direct rail connectivity to Rajasthan, Punjab, UP and East India"
    },
    "busStand": {
      "name": "ISBT Kashmere Gate",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Interstate Bus Terminal",
      "operators": "All North Indian state RTC buses"
    },
    "road": {
      "highway": "Ring Road & Grand Trunk Road",
      "condition": "Historic arterial highway along Yamuna river bank"
    },
    "localTransport": "Delhi Metro (Lal Quila Station on Violet Line, Chandni Chowk on Yellow Line), cycle rickshaws in Old Delhi bazaars, e-rickshaws"
  },
  "qutub-minar": {
    "airport": {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Major International Hub",
      "directFlights": "All major cities"
    },
    "railway": {
      "name": "New Delhi Railway Station (NDLS)",
      "code": "NDLS",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Premier Rail Terminal",
      "connectivity": "Vande Bharat, Rajdhani & Shatabdi"
    },
    "busStand": {
      "name": "ISBT Kashmere Gate",
      "distance": "6 km",
      "time": "15 mins",
      "type": "Interstate Terminal",
      "operators": "DTC, Haryana Roadways, HRTC, UPSRTC"
    },
    "road": {
      "highway": "Ring Road & Outer Ring Road",
      "condition": "Modern elevated arterial corridors"
    },
    "localTransport": "Delhi Metro network, DTC AC electric city buses, app cabs (Uber/Ola)"
  },
  "humayuns-tomb": {
    "airport": {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Major International Hub",
      "directFlights": "All major cities"
    },
    "railway": {
      "name": "New Delhi Railway Station (NDLS)",
      "code": "NDLS",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Premier Rail Terminal",
      "connectivity": "Vande Bharat, Rajdhani & Shatabdi"
    },
    "busStand": {
      "name": "ISBT Kashmere Gate",
      "distance": "6 km",
      "time": "15 mins",
      "type": "Interstate Terminal",
      "operators": "DTC, Haryana Roadways, HRTC, UPSRTC"
    },
    "road": {
      "highway": "Ring Road & Outer Ring Road",
      "condition": "Modern elevated arterial corridors"
    },
    "localTransport": "Delhi Metro network, DTC AC electric city buses, app cabs (Uber/Ola)"
  },
  "lotus-temple": {
    "airport": {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "distance": "14 km",
      "time": "25 mins",
      "type": "Major International Hub",
      "directFlights": "All major cities"
    },
    "railway": {
      "name": "New Delhi Railway Station (NDLS)",
      "code": "NDLS",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Premier Rail Terminal",
      "connectivity": "Vande Bharat, Rajdhani & Shatabdi"
    },
    "busStand": {
      "name": "ISBT Kashmere Gate",
      "distance": "6 km",
      "time": "15 mins",
      "type": "Interstate Terminal",
      "operators": "DTC, Haryana Roadways, HRTC, UPSRTC"
    },
    "road": {
      "highway": "Ring Road & Outer Ring Road",
      "condition": "Modern elevated arterial corridors"
    },
    "localTransport": "Delhi Metro network, DTC AC electric city buses, app cabs (Uber/Ola)"
  },
  "srinagar": {
    "airport": {
      "name": "Sheikh ul-Alam International Airport",
      "code": "SXR",
      "distance": "12 km",
      "time": "25 mins",
      "type": "International Airport",
      "directFlights": "Delhi, Mumbai, Bengaluru, Kolkata, Chandigarh, Dubai"
    },
    "railway": {
      "name": "Nowgam Srinagar Railway Station / Udhampur (UHP)",
      "code": "SINA",
      "distance": "9 km / 230 km",
      "time": "20 mins / 5h",
      "type": "USBRL Himalayan Rail Link",
      "connectivity": "Valley train connecting Baramulla to Banihal"
    },
    "busStand": {
      "name": "Tourist Reception Centre (TRC) Bus Stand",
      "distance": "2 km",
      "time": "6 mins",
      "type": "Central Tourist Hub",
      "operators": "JKSRTC electric buses, private tourist deluxe coaches"
    },
    "road": {
      "highway": "NH-44 (Jammu-Srinagar All-Weather Corridor)",
      "condition": "Navayuga & Banihal Qazigund twin-tube express tunnels"
    },
    "localTransport": "Handcrafted Shikara boats on Dal & Nigeen Lakes, tourist union taxis, electric smart city buses"
  },
  "gulmarg": {
    "airport": {
      "name": "Srinagar Airport",
      "code": "SXR",
      "distance": "56 km",
      "time": "1h 45m",
      "type": "International Airport",
      "directFlights": "Direct via Srinagar Airport"
    },
    "railway": {
      "name": "Srinagar Railway Station (SINA)",
      "code": "SINA",
      "distance": "52 km",
      "time": "1h 35m",
      "type": "Valley Train",
      "connectivity": "Via Srinagar"
    },
    "busStand": {
      "name": "Tangmarg & Gulmarg Bus Stand",
      "distance": "1 km",
      "time": "4 mins",
      "type": "Winter Ski Hub",
      "operators": "JKSRTC mountain buses & 4x4 snow chain sumos from Tangmarg"
    },
    "road": {
      "highway": "Srinagar-Tangmarg-Gulmarg Road",
      "condition": "Scenic pine-lined hill road (snow chains required in winter past Tangmarg)"
    },
    "localTransport": "Gulmarg Gondola (World 2nd highest cable car up to 13,780 ft), ATVs, snowmobiles, sledges"
  },
  "pahalgam": {
    "airport": {
      "name": "Srinagar Airport",
      "code": "SXR",
      "distance": "90 km",
      "time": "2h 15m",
      "type": "International Airport",
      "directFlights": "Via Srinagar"
    },
    "railway": {
      "name": "Anantnag Railway Station (ANT)",
      "code": "ANT",
      "distance": "42 km",
      "time": "1h",
      "type": "Valley Railhead",
      "connectivity": "Valley train passing through saffron fields"
    },
    "busStand": {
      "name": "Pahalgam Bus Stand & Taxi Stand",
      "distance": "0.5 km",
      "time": "2 mins",
      "type": "Tourist River Stand",
      "operators": "JKSRTC deluxe coaches and shared sumos from Srinagar"
    },
    "road": {
      "highway": "KP Road via Anantnag & Apple Valley Corridor",
      "condition": "Picturesque pine valley road along the Lidder River"
    },
    "localTransport": "Ponies/horses to Baisaran (Mini Switzerland), registered local 4x4 tourist union cabs"
  },
  "sonamarg": {
    "airport": {
      "name": "Jammu & Kashmir Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Sonamarg Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Sonamarg Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jammu & Kashmir State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Sonamarg",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "dal-lake": {
    "airport": {
      "name": "Jammu & Kashmir Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Dal Lake Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Dal Lake Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Jammu & Kashmir State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Dal Lake",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "leh": {
    "airport": {
      "name": "Kushok Bakula Rimpochee Airport",
      "code": "IXL",
      "distance": "4 km",
      "time": "10 mins",
      "type": "High-Altitude Airport (10,682 ft)",
      "directFlights": "Delhi, Mumbai, Chandigarh, Jammu, Srinagar"
    },
    "railway": {
      "name": "Jammu Tawi (JAT) / Kalka (KLK)",
      "code": "JAT",
      "distance": "690 km",
      "time": "2-Day road trip",
      "type": "Broad Gauge Railhead",
      "connectivity": "Long-distance overland transit from Jammu/Chandigarh"
    },
    "busStand": {
      "name": "Leh New Bus Stand (Near Polo Ground)",
      "distance": "1.5 km",
      "time": "5 mins",
      "type": "Trans-Himalayan Bus Stand",
      "operators": "Ladakh State Transport, HRTC seasonal Manali-Leh Volvo"
    },
    "road": {
      "highway": "Srinagar-Leh Highway (NH-1) & Manali-Leh Highway (NH-3)",
      "condition": "Legendary high-altitude mountain passes (Zoji La, Khardung La, Chang La)"
    },
    "localTransport": "All Ladakh Taxi Operators Union 4x4 Boleros/Innovas, rented Royal Enfield Himalayan bikes"
  },
  "pangong-lake": {
    "airport": {
      "name": "Leh Airport (IXL)",
      "code": "IXL",
      "distance": "160 km",
      "time": "5h drive",
      "type": "High-Altitude Airport",
      "directFlights": "Via Leh Airport"
    },
    "railway": {
      "name": "Jammu Tawi (JAT)",
      "code": "JAT",
      "distance": "850 km",
      "time": "Overland",
      "type": "Railhead",
      "connectivity": "Overland via Leh"
    },
    "busStand": {
      "name": "Lukung & Spangmik Village Bus Stop",
      "distance": "0.2 km",
      "time": "2 mins",
      "type": "High-Altitude Lake Stop",
      "operators": "Ladakh Transport weekly buses and shared tourist cabs from Leh"
    },
    "road": {
      "highway": "Leh-Pangong Road via Chang La Pass (17,590 ft)",
      "condition": "Rugged high-altitude military road with stunning panoramic landscapes"
    },
    "localTransport": "4x4 tourist cabs, rented Himalayan adventure motorbikes"
  },
  "nubra-valley": {
    "airport": {
      "name": "Ladakh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Nubra Valley Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Nubra Valley Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Ladakh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Nubra Valley",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "tso-moriri": {
    "airport": {
      "name": "Ladakh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Tso Moriri Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Tso Moriri Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Ladakh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Tso Moriri",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "khardung-la": {
    "airport": {
      "name": "Ladakh Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Khardung La Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Khardung La Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Ladakh State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Khardung La",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kavaratti": {
    "airport": {
      "name": "Lakshadweep Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kavaratti Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kavaratti Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Lakshadweep State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kavaratti",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "agatti": {
    "airport": {
      "name": "Lakshadweep Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Agatti Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Agatti Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Lakshadweep State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Agatti",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "bangaram": {
    "airport": {
      "name": "Lakshadweep Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Bangaram Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Bangaram Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Lakshadweep State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Bangaram",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kadmat": {
    "airport": {
      "name": "Lakshadweep Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kadmat Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kadmat Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Lakshadweep State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kadmat",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "kalpeni": {
    "airport": {
      "name": "Lakshadweep Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Kalpeni Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Kalpeni Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Lakshadweep State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Kalpeni",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "promenade-beach": {
    "airport": {
      "name": "Puducherry Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Promenade Beach Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Promenade Beach Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Puducherry State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Promenade Beach",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "auroville": {
    "airport": {
      "name": "Puducherry Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Auroville Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Auroville Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Puducherry State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Auroville",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "french-quarter": {
    "airport": {
      "name": "Puducherry Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "French Quarter Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "French Quarter Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Puducherry State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting French Quarter",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  },
  "paradise-beach": {
    "airport": {
      "name": "Puducherry Regional Airport",
      "code": "DOM",
      "distance": "35 km",
      "time": "45 mins",
      "type": "Domestic Airport",
      "directFlights": "Major city connections"
    },
    "railway": {
      "name": "Paradise Beach Railway Station",
      "code": "RLY",
      "distance": "4 km",
      "time": "12 mins",
      "type": "Junction Station",
      "connectivity": "Superfast & Express passenger trains"
    },
    "busStand": {
      "name": "Paradise Beach Central Bus Stand (ISBT)",
      "distance": "2 km",
      "time": "7 mins",
      "type": "Intercity Bus Terminal",
      "operators": "Puducherry State Road Transport & private Volvo coaches"
    },
    "road": {
      "highway": "NH Highway connecting Paradise Beach",
      "condition": "Well-maintained multi-lane highway"
    },
    "localTransport": "Auto-rickshaws, prepaid cabs, and local transit"
  }
};

export const getDestinationTransit = (destination) => {
  if (!destination) return null;
  if (destination.id && DESTINATION_TRANSIT[destination.id]) {
    return DESTINATION_TRANSIT[destination.id];
  }

  return {
    airport: {
      name: destination.howToReach?.airport || `${destination.name} Domestic Airport`,
      code: "DEL",
      distance: "25 km",
      time: "40 mins",
      type: "Regional Domestic",
      directFlights: "Connecting flights via nearest state metro hub"
    },
    railway: {
      name: destination.howToReach?.railway || `${destination.name} Railway Station`,
      code: "NDLS",
      distance: "4 km",
      time: "12 mins",
      type: "Major Junction",
      connectivity: "Superfast and Express passenger trains"
    },
    busStand: {
      name: destination.howToReach?.busStand || `${destination.name} Central Bus Stand (ISBT)`,
      distance: "2 km",
      time: "6 mins",
      type: "Interstate Bus Terminal",
      operators: "State Road Transport Corporation (SRTC) and private Volvo coaches"
    },
    road: {
      highway: destination.howToReach?.road || "National Highway & State Corridor",
      condition: "Paved motorable highway"
    },
    localTransport: destination.howToReach?.localTransport || "Auto-rickshaws, prepaid cabs, and local transit"
  };
};
