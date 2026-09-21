const BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/";
const cleanBase = BASE.endsWith("/") ? BASE : `${BASE}/`;
const fixUrl = (u) => (typeof u === "string" && u.startsWith("/") && !u.startsWith("//") ? `${cleanBase}${u.slice(1)}` : u);

const RAW_STATES = [
  {
    "id": "andhra-pradesh",
    "name": "Andhra Pradesh",
    "isUT": false,
    "capital": "Amaravati",
    "iconicLandmark": "Tirupati Balaji Temple & Gandikota Canyon",
    "heroImage": "/images/ap-tirupati.jpg",
    "description": "The land of the Tirupati Temple, fragrant spice markets, pristine Coromandel beaches, and Buddhist heritage sites.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Tirupati",
      "Visakhapatnam",
      "Araku Valley",
      "Vijayawada"
    ],
    "highlights": [
      "Gandikota Grand Canyon",
      "Tirumala Venkateswara",
      "Borra Caves",
      "Rishikonda Beach"
    ],
    "climate": "Tropical with warm coastal breezes",
    "famousFor": [
      "Tirupati Laddu",
      "Kalamkari Art",
      "Kuchipudi Dance",
      "Coromandel Coast"
    ]
  },
  {
    "id": "arunachal-pradesh",
    "name": "Arunachal Pradesh",
    "isUT": false,
    "capital": "Itanagar",
    "iconicLandmark": "Tawang Monastery & Sela Pass",
    "heroImage": "/images/arunachal-tawang.jpg",
    "description": "The \"Land of Dawn-lit Mountains\" features dramatic Himalayan peaks, untouched pine forests, and ancient Buddhist monasteries.",
    "bestSeason": "October to April",
    "topDestinations": [
      "Tawang",
      "Ziro Valley",
      "Dirang",
      "Bomdila",
      "Mechuka"
    ],
    "highlights": [
      "Tawang Monastery",
      "Sela Pass",
      "Ziro Music Valley",
      "Sangti Valley"
    ],
    "climate": "Alpine in the north, sub-tropical in the south",
    "famousFor": [
      "Tibetan Monasteries",
      "Apatani Tribal Culture",
      "Orchids",
      "Snow Peaks"
    ]
  },
  {
    "id": "assam",
    "name": "Assam",
    "isUT": false,
    "capital": "Dispur (Guwahati)",
    "iconicLandmark": "Kaziranga (One-Horned Rhinos) & Kamakhya Temple",
    "heroImage": "/images/assam-kamakhya.jpg",
    "description": "Gateway to the Northeast, renowned for rolling tea gardens, the mighty Brahmaputra river, and the rare one-horned rhinoceros.",
    "bestSeason": "November to April",
    "topDestinations": [
      "Kaziranga",
      "Guwahati",
      "Majuli",
      "Sivasagar",
      "Manas"
    ],
    "highlights": [
      "One-Horned Rhinos",
      "Kamakhya Temple",
      "World’s Largest River Island",
      "Tea Estates"
    ],
    "climate": "Sub-tropical with heavy monsoons",
    "famousFor": [
      "Assam Black Tea",
      "Muga Golden Silk",
      "Bihu Festival",
      "River Cruises"
    ]
  },
  {
    "id": "bihar",
    "name": "Bihar",
    "isUT": false,
    "capital": "Patna",
    "iconicLandmark": "Mahabodhi Temple (Bodh Gaya) & Nalanda Ruins",
    "heroImage": "/images/bihar-mahabodhi.jpg",
    "description": "Cradle of ancient empires, Buddhism and Jainism, home to the sacred Bodhi Tree and the historic ruins of Nalanda University.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Bodh Gaya",
      "Nalanda",
      "Rajgir",
      "Patna",
      "Vaishali"
    ],
    "highlights": [
      "Mahabodhi Temple",
      "Ancient Nalanda University",
      "Vishwa Shanti Stupa",
      "Tomb of Sher Shah Suri"
    ],
    "climate": "Continental with hot summers and mild winters",
    "famousFor": [
      "Buddhism Pilgrimage",
      "Madhubani Paintings",
      "Litti Chokha",
      "Chhath Puja"
    ]
  },
  {
    "id": "chhattisgarh",
    "name": "Chhattisgarh",
    "isUT": false,
    "capital": "Raipur",
    "iconicLandmark": "Chitrakote Falls (\"Niagara of India\")",
    "heroImage": "/images/chhattisgarh-chitrakote.jpg",
    "description": "India’s green heartland boasting the roaring Chitrakote Falls (\"Niagara of India\"), dense sal forests, and ancient tribal traditions.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Chitrakote Falls",
      "Jagdalpur",
      "Bastar",
      "Sirpur",
      "Kanger Valley"
    ],
    "highlights": [
      "Chitrakote Horseshoe Falls",
      "Tirathgarh Falls",
      "Bastar Dussehra",
      "Mainpat Tibetan Settlement"
    ],
    "climate": "Tropical with pleasant winters",
    "famousFor": [
      "Dhokra Bell Metal Craft",
      "Tribal Art",
      "Waterfalls",
      "Ancient Temples"
    ]
  },
  {
    "id": "goa",
    "name": "Goa",
    "isUT": false,
    "capital": "Panaji",
    "iconicLandmark": "Basilica of Bom Jesus & Calangute Beach",
    "heroImage": "/yatra/state/goa/album/images (1).jpg",
    "description": "Sun-drenched golden beaches, Portuguese heritage villas, vibrant beach shacks, spice plantations, and pulsating nightlife.",
    "bestSeason": "November to February",
    "topDestinations": [
      "Baga Beach",
      "Calangute",
      "Panjim",
      "Old Goa",
      "Dudhsagar Falls"
    ],
    "highlights": [
      "Basilica of Bom Jesus",
      "Dudhsagar Waterfalls",
      "Anjuna Flea Market",
      "Cabo de Rama Fort"
    ],
    "climate": "Tropical maritime",
    "famousFor": [
      "Goan Fish Curry",
      "Feni",
      "Portuguese Architecture",
      "Sunset Cruises"
    ]
  },
  {
    "id": "gujarat",
    "name": "Gujarat",
    "isUT": false,
    "capital": "Gandhinagar",
    "iconicLandmark": "Statue of Unity & White Rann of Kutch",
    "heroImage": "/yatra/state/Gujarat/album/images (1).jpg",
    "description": "Land of legends, the endless white salt desert of Rann of Kutch, Asiatic Lions in Gir, and world-class stepwells.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Statue of Unity",
      "Ahmedabad",
      "Rann of Kutch",
      "Dwarka",
      "Somnath"
    ],
    "highlights": [
      "Rann Utsav White Desert",
      "Asiatic Lion Safari",
      "Rani ki Vav Stepwell",
      "Statue of Unity"
    ],
    "climate": "Dry and sunny with cool winter breezes",
    "famousFor": [
      "Garba Dance",
      "Dhokla & Gujarati Thali",
      "Bandhani Textiles",
      "Temple Architecture"
    ]
  },
  {
    "id": "haryana",
    "name": "Haryana",
    "isUT": false,
    "capital": "Chandigarh",
    "iconicLandmark": "Brahma Sarovar (Kurukshetra) & Pinjore Gardens",
    "heroImage": "/images/haryana-brahma-sarovar.jpg",
    "description": "The cradle of Vedic civilization, home to the battleground of Kurukshetra, heritage Havelis, and lush agricultural plains.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Kurukshetra",
      "Sultanpur National Park",
      "Pinjore Gardens",
      "Morni Hills"
    ],
    "highlights": [
      "Brahma Sarovar",
      "Pinjore Mughal Gardens",
      "Sultanpur Bird Watching",
      "Tikkar Taal Lake"
    ],
    "climate": "Semi-arid to sub-tropical",
    "famousFor": [
      "Surajkund Crafts Mela",
      "Vedic Lore",
      "Rich Dairy Cuisine",
      "Heritage Farms"
    ]
  },
  {
    "id": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "isUT": false,
    "capital": "Shimla (Dharamshala in winter)",
    "iconicLandmark": "Rohtang Pass, Atal Tunnel & Key Gompa (Spiti)",
    "heroImage": "/yatra/state/Himachal Pradesh/album/images (1).jpg",
    "description": "The \"Abode of Snow\", renowned for majestic alpine landscapes, apple orchards, Tibetan spirituality, and adrenaline-pumping treks.",
    "bestSeason": "March to June & September to February",
    "topDestinations": [
      "Shimla",
      "Manali",
      "Dharamshala",
      "Spiti Valley",
      "Dalhousie"
    ],
    "highlights": [
      "Rohtang & Atal Tunnel",
      "Spiti High-Altitude Monasteries",
      "Parvati Valley",
      "Toy Train ride"
    ],
    "climate": "Alpine mountain climate with snowy winters",
    "famousFor": [
      "Himachali Apples",
      "Trekking & Skiing",
      "Himachali Dham",
      "Tibetan Culture"
    ]
  },
  {
    "id": "jharkhand",
    "name": "Jharkhand",
    "isUT": false,
    "capital": "Ranchi",
    "iconicLandmark": "Baidyanath Dham (Deoghar) & Hundru Falls",
    "heroImage": "/images/jharkhand-baidyanath.jpg",
    "description": "The \"Land of Forests\" filled with scenic waterfalls, sacred pilgrimage hills of Parasnath, and pristine national parks.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Deoghar",
      "Netarhat",
      "Hundru Falls",
      "Betla National Park",
      "Dassam Falls"
    ],
    "highlights": [
      "Hundru & Jonha Falls",
      "Netarhat Sunset Point",
      "Baidyanath Dham Jyotirlinga",
      "Betla Elephant Safaris"
    ],
    "climate": "Humid sub-tropical",
    "famousFor": [
      "Waterfalls",
      "Tribal Handlooms",
      "Sohrai Art",
      "Deoghar Temple"
    ]
  },
  {
    "id": "karnataka",
    "name": "Karnataka",
    "isUT": false,
    "capital": "Bengaluru",
    "iconicLandmark": "Hampi UNESCO Ruins & Mysore Palace",
    "heroImage": "/images/karnataka-hampi.jpg",
    "description": "A captivating tapestry of UNESCO ruins at Hampi, fragrant coffee hills of Coorg, royal Mysore palaces, and secluded Gokarna beaches.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Hampi",
      "Coorg",
      "Mysore",
      "Gokarna",
      "Bengaluru"
    ],
    "highlights": [
      "Vijayanagara Empire Ruins",
      "Mysore Palace Illumination",
      "Om Beach & Kudle",
      "Coffee Estate Stays"
    ],
    "climate": "Varied: Tropical coastal, pleasant interior plateau",
    "famousFor": [
      "Filter Coffee",
      "Mysore Silk",
      "Mysore Pak",
      "Carnatic Music"
    ]
  },
  {
    "id": "kerala",
    "name": "Kerala",
    "isUT": false,
    "capital": "Thiruvananthapuram",
    "iconicLandmark": "Alleppey Backwaters & Munnar Tea Valleys",
    "heroImage": "/yatra/state/kerala/album/images (1).jpg",
    "description": "“God’s Own Country” — tranquil emerald backwaters, rolling tea carpets of Munnar, Ayurvedic healing, and coconut-fringed coasts.",
    "bestSeason": "September to March",
    "topDestinations": [
      "Munnar",
      "Alleppey",
      "Wayanad",
      "Kochi",
      "Varkala"
    ],
    "highlights": [
      "Houseboat Backwater Cruises",
      "Munnar Tea Plantations",
      "Varkala Cliff Beach",
      "Kathakali Dance & Kalaripayattu"
    ],
    "climate": "Tropical maritime with lush monsoons",
    "famousFor": [
      "Ayurvedic Spas",
      "Kerala Sadya Feast",
      "Houseboats",
      "Spices"
    ]
  },
  {
    "id": "madhya-pradesh",
    "name": "Madhya Pradesh",
    "isUT": false,
    "capital": "Bhopal",
    "iconicLandmark": "Khajuraho UNESCO Temples & Bandhavgarh Tigers",
    "heroImage": "/images/mp-khajuraho.jpg",
    "description": "The \"Heart of Incredible India\" — home to the Khajuraho temples, ancient stupas of Sanchi, and the highest concentration of wild tigers.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Khajuraho",
      "Ujjain",
      "Pachmarhi",
      "Sanchi",
      "Kanha",
      "Bandhavgarh"
    ],
    "highlights": [
      "UNESCO Khajuraho Sculptures",
      "Royal Tiger Safaris",
      "Orchha Riverfront Cenotaphs",
      "Gwalior Fortress"
    ],
    "climate": "Sub-tropical with warm sunny winters",
    "famousFor": [
      "Bengal Tigers",
      "Temple Architecture",
      "Chanderi Sarees",
      "Bhimbetka Caves"
    ]
  },
  {
    "id": "maharashtra",
    "name": "Maharashtra",
    "isUT": false,
    "capital": "Mumbai",
    "iconicLandmark": "Gateway of India & Ajanta-Ellora Caves",
    "heroImage": "/images/maharashtra-gateway.jpg",
    "description": "Dynamic metropolis of Mumbai, ancient rock-cut caves of Ajanta & Ellora, misty Western Ghats hill stations, and coastal Konkan forts.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Mumbai",
      "Lonavala",
      "Mahabaleshwar",
      "Ajanta",
      "Ellora",
      "Shirdi"
    ],
    "highlights": [
      "Marine Drive & Gateway of India",
      "Kailash Temple (Ellora)",
      "Konkan Coastal Forts",
      "Strawberry Valleys"
    ],
    "climate": "Tropical coastal and plateau climate",
    "famousFor": [
      "Bollywood",
      "Vada Pav & Misal Pav",
      "Ganesh Utsav",
      "Warli Painting"
    ]
  },
  {
    "id": "manipur",
    "name": "Manipur",
    "isUT": false,
    "capital": "Imphal",
    "iconicLandmark": "Loktak Floating Lake (Keibul Lamjao)",
    "heroImage": "/images/manipur-loktak.jpg",
    "description": "The \"Jewel of India\" — floating islands (phumdis) of Loktak Lake, Keibul Lamjao national park, and classical Manipuri dance.",
    "bestSeason": "October to April",
    "topDestinations": [
      "Loktak Lake",
      "Imphal",
      "Keibul Lamjao",
      "Ukhrul"
    ],
    "highlights": [
      "World’s only floating National Park",
      "Keibul Lamjao Sangai Deer",
      "Kangla Fort",
      "Shirui Lily Festival"
    ],
    "climate": "Pleasant sub-tropical",
    "famousFor": [
      "Manipuri Classical Dance",
      "Polo Origin",
      "Loktak Lake",
      "Black Rice (Chak-hao)"
    ]
  },
  {
    "id": "meghalaya",
    "name": "Meghalaya",
    "isUT": false,
    "capital": "Shillong",
    "iconicLandmark": "Double Decker Living Root Bridge & Nohkalikai Falls",
    "heroImage": "/yatra/state/Meghalaya/album/images (1).jpg",
    "description": "The \"Abode of the Clouds\" — bio-engineered Living Root Bridges, crystal-clear Dawki River, and the wettest places on earth.",
    "bestSeason": "September to May",
    "topDestinations": [
      "Shillong",
      "Cherrapunji",
      "Dawki",
      "Mawlynnong",
      "Nongriat"
    ],
    "highlights": [
      "Double Decker Living Root Bridge",
      "Umngot Glass-like River",
      "Asia’s Cleanest Village Mawlynnong",
      "Nohkalikai Falls"
    ],
    "climate": "Cool, highland subtropical with heavy monsoon",
    "famousFor": [
      "Living Root Bridges",
      "Indie Rock Culture",
      "Caves Exploration",
      "Orange Honey"
    ]
  },
  {
    "id": "mizoram",
    "name": "Mizoram",
    "isUT": false,
    "capital": "Aizawl",
    "iconicLandmark": "Vantawng Falls & Reiek Mountain Peak",
    "heroImage": "/yatra/state/Mizoram/album/images (1).jpg",
    "description": "Serene ridges, rolling emerald bamboo hills, vibrant Mizo community life, and spectacular high viewpoints overlooking misty valleys.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Aizawl",
      "Reiek",
      "Vantawng Falls",
      "Champhai"
    ],
    "highlights": [
      "Reiek Peak Panorama",
      "Vantawng 750ft Falls",
      "Mizo Cultural Villages",
      "Blue Mountain (Phawngpui)"
    ],
    "climate": "Pleasant and mild year-round",
    "famousFor": [
      "Cheraw Bamboo Dance",
      "Handloom Puan",
      "Untouched Hills",
      "Warm Hospitality"
    ]
  },
  {
    "id": "nagaland",
    "name": "Nagaland",
    "isUT": false,
    "capital": "Kohima",
    "iconicLandmark": "Hornbill Festival (Kisama) & Dzukou Valley",
    "heroImage": "/images/nagaland-dzukou.jpg",
    "description": "Land of brave warrior heritage, vibrant Hornbill Festival, scenic Dzukou Valley, and mist-shrouded green Naga hills.",
    "bestSeason": "October to May (December for Hornbill)",
    "topDestinations": [
      "Kohima",
      "Dzükou Valley",
      "Mokokchung",
      "Mon",
      "Khonoma"
    ],
    "highlights": [
      "Hornbill Festival Celebrations",
      "Dzukou Valley Trek",
      "Green Village Khonoma",
      "Konyak Headhunter Villages in Mon"
    ],
    "climate": "Sub-tropical with cool winters",
    "famousFor": [
      "Hornbill Festival",
      "Naga Shawls",
      "Bhut Jolokia Chili",
      "Indigenous Woodcarving"
    ]
  },
  {
    "id": "odisha",
    "name": "Odisha",
    "isUT": false,
    "capital": "Bhubaneswar",
    "iconicLandmark": "Konark Sun Temple & Jagannath Puri",
    "heroImage": "/images/puri-jagannath.jpg",
    "description": "Land of the Sun Temple at Konark, sacred Jagannath Puri Rath Yatra, Chilika Lake dolphin sanctuary, and timeless classical Odissi arts.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Puri",
      "Konark",
      "Bhubaneswar",
      "Chilika Lake",
      "Simlipal"
    ],
    "highlights": [
      "Konark Sun Temple UNESCO",
      "Puri Jagannath Rath Yatra",
      "Chilika Irrawaddy Dolphins",
      "Udayagiri & Khandagiri Caves"
    ],
    "climate": "Tropical with cool winters",
    "famousFor": [
      "Pattachitra Paintings",
      "Odissi Classical Dance",
      "Chhena Poda Dessert",
      "Silver Filigree"
    ]
  },
  {
    "id": "punjab",
    "name": "Punjab",
    "isUT": false,
    "capital": "Chandigarh",
    "iconicLandmark": "Golden Temple (Harmandir Sahib, Amritsar)",
    "heroImage": "/images/punjab-golden-temple.jpg",
    "description": "The \"Land of Five Rivers\" — shimmering Golden Temple of Amritsar, passionate hospitality, patriotic Wagah Border ceremony, and rich buttery cuisine.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Golden Temple",
      "Amritsar",
      "Wagah Border",
      "Patiala",
      "Anandpur Sahib"
    ],
    "highlights": [
      "Harmandir Sahib (Golden Temple)",
      "Wagah Border Beating Retreat",
      "Jallianwala Bagh",
      "Qila Mubarak"
    ],
    "climate": "Continental with crisp chilly winters",
    "famousFor": [
      "Amritsari Kulcha",
      "Bhangra & Giddha Dance",
      "Phulkari Embroidery",
      "Sikh Heritage"
    ]
  },
  {
    "id": "rajasthan",
    "name": "Rajasthan",
    "isUT": false,
    "capital": "Jaipur",
    "iconicLandmark": "Hawa Mahal, Amber Fort & Lake Pichola",
    "heroImage": "/yatra/state/Rajeshthan/album/images (1).jpg",
    "description": "The \"Land of Kings\" — golden Thar desert dunes, grand palaces, formidable hill forts, colorful turbans, and vibrant camel fairs.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Jaipur",
      "Udaipur",
      "Jaisalmer",
      "Jodhpur",
      "Mount Abu",
      "Pushkar"
    ],
    "highlights": [
      "Amber Fort & Hawa Mahal",
      "Lake Pichola Palace Cruises",
      "Jaisalmer Desert Dunes & Fort",
      "Mehrangarh Fort"
    ],
    "climate": "Arid to semi-arid with pleasant sunny winters",
    "famousFor": [
      "Dal Baati Churma",
      "Puppet Shows & Ghoomar",
      "Royal Heritage Hotels",
      "Block Print Fabrics"
    ]
  },
  {
    "id": "sikkim",
    "name": "Sikkim",
    "isUT": false,
    "capital": "Gangtok",
    "iconicLandmark": "Mount Kangchenjunga & Gurudongmar Lake",
    "heroImage": "/yatra/state/sikkim/album/images (1).jpg",
    "description": "Nestled in the shadow of Mount Kangchenjunga — India’s first 100% organic state featuring glacial lakes, rhododendron valleys, and Buddhist monasteries.",
    "bestSeason": "March to May & October to December",
    "topDestinations": [
      "Gangtok",
      "Nathula Pass",
      "Pelling",
      "Lachung",
      "Yumthang Valley"
    ],
    "highlights": [
      "Gurudongmar Glacial Lake",
      "Yumthang Valley of Flowers",
      "Rumtek Monastery",
      "Buddha Park Ravangla"
    ],
    "climate": "Alpine temperate with cool summers and snow in winter",
    "famousFor": [
      "Kangchenjunga Views",
      "Organic Agriculture",
      "Momos & Thukpa",
      "Prayer Flags"
    ]
  },
  {
    "id": "tamil-nadu",
    "name": "Tamil Nadu",
    "isUT": false,
    "capital": "Chennai",
    "iconicLandmark": "Meenakshi Amman Temple & Mahabalipuram Shore Temple",
    "heroImage": "/images/tn-meenakshi.jpg",
    "description": "Cradle of Dravidian culture — towering temple gopurams of Madurai, UNESCO Shore Temples of Mahabalipuram, Nilgiri toy train, and French flair of Pondicherry nearby.",
    "bestSeason": "November to March",
    "topDestinations": [
      "Ooty",
      "Chennai",
      "Kodaikanal",
      "Madurai",
      "Rameswaram",
      "Thanjavur"
    ],
    "highlights": [
      "Meenakshi Amman Temple",
      "Mahabalipuram Rock Reliefs",
      "Brihadisvara Big Temple",
      "Pamban Sea Bridge"
    ],
    "climate": "Tropical with warm pleasant winters",
    "famousFor": [
      "Kanchipuram Silk Sarees",
      "Filter Coffee & Crispy Dosa",
      "Bharatanatyam Dance",
      "Chola Bronzes"
    ]
  },
  {
    "id": "telangana",
    "name": "Telangana",
    "isUT": false,
    "capital": "Hyderabad",
    "iconicLandmark": "Charminar & Golconda Fort (Hyderabad)",
    "heroImage": "/images/telangana-charminar.jpg",
    "description": "A harmonious blend of Nizami grandeur and modern high-tech innovation, legendary Hyderabadi Biryani, and historic Golconda Fort.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Hyderabad",
      "Golconda Fort",
      "Charminar",
      "Warangal",
      "Nagarjuna Sagar"
    ],
    "highlights": [
      "Charminar & Laad Bazaar",
      "Golconda Fort Sound & Light",
      "Ramappa UNESCO Temple",
      "Ramoji Film City"
    ],
    "climate": "Semi-arid with warm days and cool evenings",
    "famousFor": [
      "Hyderabadi Dum Biryani",
      "Pearl Jewellery",
      "Bidri Crafts",
      "Irani Chai & Osmania Biscuits"
    ]
  },
  {
    "id": "tripura",
    "name": "Tripura",
    "isUT": false,
    "capital": "Agartala",
    "iconicLandmark": "Neermahal Water Palace & Unakoti Rock Carvings",
    "heroImage": "/images/tripura-unakoti.jpg",
    "description": "Royal water palaces, rock-cut bas-relief carvings of Unakoti, bamboo forests, and ancient tribal heritage.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Agartala",
      "Ujjayanta Palace",
      "Neermahal",
      "Unakoti"
    ],
    "highlights": [
      "Neermahal Lake Palace",
      "Unakoti Rock-Cut Shiva Faces",
      "Tripura Sundari Temple",
      "Jampui Orange Hills"
    ],
    "climate": "Warm and humid tropical",
    "famousFor": [
      "Bamboo and Cane Handicrafts",
      "Royal Palaces",
      "Orange Festival",
      "Rich Tribal Weaves"
    ]
  },
  {
    "id": "uttar-pradesh",
    "name": "Uttar Pradesh",
    "isUT": false,
    "capital": "Lucknow",
    "iconicLandmark": "Taj Mahal (Agra) & Kashi Vishwanath (Varanasi)",
    "heroImage": "/yatra/state/Uttar Pradesh/album/images (1).jpg",
    "description": "Home of the timeless Taj Mahal, the eternal sacred ghats of Varanasi, Mughal palaces of Agra, and Awadhi culinary elegance of Lucknow.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Agra",
      "Varanasi",
      "Ayodhya",
      "Mathura-Vrindavan",
      "Lucknow",
      "Prayagraj"
    ],
    "highlights": [
      "Taj Mahal Wonder of the World",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Bada Imambara Lucknow",
      "Fatehpur Sikri"
    ],
    "climate": "Sub-tropical with cool winters",
    "famousFor": [
      "Awadhi Kebabs & Biryani",
      "Chikan Embroidery",
      "Banarasi Silk Sarees",
      "Spiritual Pilgrimage"
    ]
  },
  {
    "id": "uttarakhand",
    "name": "Uttarakhand",
    "isUT": false,
    "capital": "Dehradun (Bhararisain in summer)",
    "iconicLandmark": "Kedarnath Temple & Rishikesh Ganga Ghats",
    "heroImage": "/yatra/state/Uttarakhand/album/images (1).jpg",
    "description": "“Devbhoomi” (Land of the Gods) — yoga capital of Rishikesh, snow-crested Char Dham shrines, emerald lakes of Nainital, and Jim Corbett tiger reserve.",
    "bestSeason": "March to June & September to November",
    "topDestinations": [
      "Rishikesh",
      "Haridwar",
      "Nainital",
      "Mussoorie",
      "Kedarnath",
      "Badrinath"
    ],
    "highlights": [
      "Ganga River Rafting in Rishikesh",
      "Auli Ski Slopes & Ropeway",
      "Kedarnath Himalayan Temple",
      "Naini Lake Boating"
    ],
    "climate": "Temperate to alpine mountain climate",
    "famousFor": [
      "Yoga & Meditation",
      "Himalayan Treks",
      "River Rafting",
      "Garhwali Cuisine"
    ]
  },
  {
    "id": "west-bengal",
    "name": "West Bengal",
    "isUT": false,
    "capital": "Kolkata",
    "iconicLandmark": "Victoria Memorial, Howrah Bridge & Darjeeling Toy Train",
    "heroImage": "/images/wb-victoria-memorial.jpg",
    "description": "From the snow-crowned tea slopes of Darjeeling to the colonial grand architecture of Kolkata and the mangrove tiger realm of the Sundarbans.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Darjeeling",
      "Kolkata",
      "Digha",
      "Sundarbans",
      "Kalimpong",
      "Dooars"
    ],
    "highlights": [
      "Darjeeling Himalayan Railway (Toy Train)",
      "Victoria Memorial Kolkata",
      "Royal Bengal Tiger Sundarbans",
      "Sandakphu Trek"
    ],
    "climate": "Sub-tropical to alpine in the northern hills",
    "famousFor": [
      "Durga Puja Festival",
      "Rosogolla & Sandesh",
      "Macher Jhol",
      "Rabindra Sangeet & Literature"
    ]
  },
  {
    "id": "andaman-and-nicobar",
    "name": "Andaman & Nicobar Islands",
    "isUT": true,
    "capital": "Port Blair",
    "iconicLandmark": "Radhanagar Beach & Historic Cellular Jail",
    "heroImage": "/images/andaman-cellular-jail.jpg",
    "description": "Tropical archipelago paradise with turquoise lagoons, white coral beaches, bioluminescent waters, and world-class scuba diving.",
    "bestSeason": "November to May",
    "topDestinations": [
      "Port Blair",
      "Havelock/Swaraj Dweep",
      "Neil/Shaheed Dweep",
      "Cellular Jail"
    ],
    "highlights": [
      "Radhanagar Beach Sunset",
      "Scuba Diving at Elephant Beach",
      "Historic Cellular Jail",
      "Bioluminescence Kayaking"
    ],
    "climate": "Tropical maritime with cooling sea breezes",
    "famousFor": [
      "Scuba Diving & Snorkeling",
      "Pristine Coral Reefs",
      "Seafood",
      "Colonial History"
    ]
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh",
    "isUT": true,
    "capital": "Chandigarh",
    "iconicLandmark": "Rock Garden (Nek Chand) & Sukhna Lake",
    "heroImage": "/images/chandigarh-rock-garden.jpg",
    "description": "India’s premier planned \"City Beautiful\", designed by Le Corbusier, featuring the iconic Rock Garden and tranquil Sukhna Lake.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Rock Garden",
      "Sukhna Lake",
      "Capitol Complex",
      "Rose Garden"
    ],
    "highlights": [
      "Nek Chand’s Recycled Rock Garden",
      "Sukhna Lake Sunset Boating",
      "Asia’s Largest Rose Garden",
      "Le Corbusier Capitol Complex"
    ],
    "climate": "Humid subtropical with crisp winters",
    "famousFor": [
      "Modernist Architecture",
      "Urban Greenery",
      "High Living Standard",
      "Gedi Route"
    ]
  },
  {
    "id": "dadra-nagar-haveli-daman-diu",
    "name": "Dadra & Nagar Haveli and Daman & Diu",
    "isUT": true,
    "capital": "Daman",
    "iconicLandmark": "Diu Portuguese Fort & Nagoa Beach",
    "heroImage": "/yatra/Union Territories/Dadra & Nagar Haveli and Daman & Diu/album/images (1).jpg",
    "description": "Coastal Portuguese fort towns with tranquil palm-fringed beaches, tranquil estuaries, and centuries-old Catholic churches.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Daman",
      "Diu",
      "Silvassa",
      "Naida Caves",
      "Devka Beach"
    ],
    "highlights": [
      "Historic Diu Fort & Lighthouse",
      "Nagoa Hoka Tree Beach",
      "St. Jerome Fort",
      "Lion Safari Silvassa"
    ],
    "climate": "Pleasant coastal maritime",
    "famousFor": [
      "Portuguese Forts",
      "Hoka Palm Trees",
      "Beach Promenades",
      "Tax-free Coastal Retreats"
    ]
  },
  {
    "id": "delhi",
    "name": "Delhi (NCT)",
    "isUT": true,
    "capital": "New Delhi",
    "iconicLandmark": "India Gate, Red Fort & Qutub Minar",
    "heroImage": "/yatra/Union Territories/Delhi/album/images (1).jpg",
    "description": "The historic and dynamic capital city of India, where Mughal monuments, colonial boulevards, and bustling street markets coexist.",
    "bestSeason": "October to March",
    "topDestinations": [
      "India Gate",
      "Red Fort",
      "Qutub Minar",
      "Humayun's Tomb",
      "Lotus Temple"
    ],
    "highlights": [
      "UNESCO World Heritage Trio",
      "Old Delhi Street Food Trail",
      "Rajpath & Rashtrapati Bhavan",
      "Akshardham Water Show"
    ],
    "climate": "Extreme continental with hot summers and chilly foggy winters",
    "famousFor": [
      "Street Food (Chaat & Chole Bhature)",
      "Mughal Architecture",
      "Shopping Bazaars",
      "Power & Politics"
    ]
  },
  {
    "id": "jammu-and-kashmir",
    "name": "Jammu & Kashmir",
    "isUT": true,
    "capital": "Srinagar (Summer), Jammu (Winter)",
    "iconicLandmark": "Dal Lake Shikaras & Gulmarg Gondola Cable Car",
    "heroImage": "/yatra/Union Territories/Jammu & Kashmir/album/images (1).jpg",
    "description": "“Paradise on Earth” — floating wooden shikaras on Dal Lake, snow-capped alpine meadows of Gulmarg, and saffron fields of Pampore.",
    "bestSeason": "April to October (Spring/Autumn) & December to February (Snow)",
    "topDestinations": [
      "Srinagar",
      "Gulmarg",
      "Pahalgam",
      "Sonamarg",
      "Dal Lake"
    ],
    "highlights": [
      "Dal Lake Shikara & Houseboats",
      "Gulmarg Gondola World’s Highest",
      "Betaab Valley in Pahalgam",
      "Kashmir Great Lakes Trek"
    ],
    "climate": "Alpine mountain climate with cold snowy winters",
    "famousFor": [
      "Pashmina Shawls",
      "Kahwa Tea",
      "Kashmiri Wazwan",
      "Walnuts & Saffron"
    ]
  },
  {
    "id": "ladakh",
    "name": "Ladakh",
    "isUT": true,
    "capital": "Leh",
    "iconicLandmark": "Pangong Tso Lake & Khardung La Pass (17,982 ft)",
    "heroImage": "/yatra/Union Territories/Ladakh/album/images (1).jpg",
    "description": "The \"Land of High Mountain Passes\" — surreal indigo Pangong Lake, sand dunes of Nubra Valley with double-humped camels, and ancient cliffside gompas.",
    "bestSeason": "May to September",
    "topDestinations": [
      "Leh",
      "Pangong Lake",
      "Nubra Valley",
      "Tso Moriri",
      "Khardung La"
    ],
    "highlights": [
      "Pangong Tso Color-Changing Lake",
      "Khardung La Pass (17,982 ft)",
      "Nubra Valley Sand Dunes",
      "Magnetic Hill & Thiksey Gompa"
    ],
    "climate": "Cold desert alpine with intense sunlight and dry air",
    "famousFor": [
      "High Altitude Passes",
      "Tibetan Buddhism",
      "Bactrian Camels",
      "Chadar Frozen River Trek"
    ]
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep",
    "isUT": true,
    "capital": "Kavaratti",
    "iconicLandmark": "Bangaram Coral Atoll & Agatti Turquoise Lagoon",
    "heroImage": "/yatra/Union Territories/Lakshadweep/album/images (1).jpg",
    "description": "An exotic emerald string of coral atolls in the Arabian Sea with crystal lagoons, pristine white beaches, and vibrant sea turtles.",
    "bestSeason": "October to May",
    "topDestinations": [
      "Kavaratti",
      "Agatti",
      "Bangaram",
      "Kadmat",
      "Kalpeni"
    ],
    "highlights": [
      "Bangaram Atoll Lagoon",
      "Scuba Diving with Sea Turtles",
      "Kavaratti Marine Aquarium",
      "Glass-bottom Boat Rides"
    ],
    "climate": "Tropical warm oceanic",
    "famousFor": [
      "Untouched Coral Reefs",
      "Water Sports",
      "Tuna Fishing",
      "Coconut Island Culture"
    ]
  },
  {
    "id": "puducherry",
    "name": "Puducherry (Pondicherry)",
    "isUT": true,
    "capital": "Puducherry",
    "iconicLandmark": "Auroville Golden Matrimandir & White Town French Quarter",
    "heroImage": "/images/puducherry-matrimandir.jpg",
    "description": "The French Riviera of the East — pastel French Quarter villas, bohemian seaside cafes, spiritual sanctuary of Auroville, and tranquil beaches.",
    "bestSeason": "October to March",
    "topDestinations": [
      "Promenade Beach",
      "Auroville",
      "French Quarter",
      "Paradise Beach"
    ],
    "highlights": [
      "Auroville Matrimandir",
      "French Quarter Heritage Walk",
      "Promenade Seaside Promenade",
      "Paradise Beach Ferry"
    ],
    "climate": "Warm tropical maritime",
    "famousFor": [
      "French Bakeries & Croissants",
      "Auroville Community",
      "Bicycle Tours",
      "Seaside Cafes"
    ]
  }
];

export const STATES = RAW_STATES.map((s) => ({
  ...s,
  heroImage: fixUrl(s.heroImage),
}));
