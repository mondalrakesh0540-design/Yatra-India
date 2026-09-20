import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sparkles, Calendar, MapPin, Users, IndianRupee, Clock, Utensils, 
  Download, Printer, Bookmark, Check, Compass, ArrowRight, Share2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSaved } from '../context/SavedContext';
import { STATES } from '../data/states';
import { DESTINATIONS } from '../data/destinations';

export const PlanTrip = () => {
  const [searchParams] = useSearchParams();
  const { saveTrip } = useSaved();

  // Inputs
  const [destination, setDestination] = useState(searchParams.get('dest') || 'kerala');
  const [days, setDays] = useState(Number(searchParams.get('days')) || 5);
  const [travelers, setTravelers] = useState(Number(searchParams.get('travelers')) || 2);
  const [budget, setBudget] = useState(25000);
  const [style, setStyle] = useState(searchParams.get('style') || 'nature');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSavedTrip, setIsSavedTrip] = useState(false);

  // Find active state object
  const activeStateObj = STATES.find((s) => s.id === destination) || STATES[0];

  // Dynamic itinerary generator database covering all Indian regions
  const generateSmartItinerary = () => {
    const itinerary = [];
    const stateDests = DESTINATIONS.filter((d) => d.stateId === destination);

    const planDatabase = {
      kerala: [
        {
          day: 1,
          title: 'Arrival in Fort Kochi & Colonial Heritage Walk',
          places: ['Fort Kochi Heritage Quarter', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Jew Town'],
          travelTime: '1 hr from Cochin International Airport',
          activities: [
            'Watch sunset at the iconic Chinese fishing nets',
            'Explore 16th-century Paradesi Jewish Synagogue and spice markets',
            'Attend an evening classical Kathakali dance and Kalaripayattu performance'
          ],
          food: 'Kerala Meen Moliee (fish stew in coconut milk) and Appam at Fort Kochi cafes',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Ascending into the Misty Clouds of Munnar',
          places: ['Cheeyappara & Valara Waterfalls', 'Munnar Tea Gardens', 'Tata Tea Museum'],
          travelTime: '3.5 hrs scenic ghat drive from Kochi to Munnar (130 km)',
          activities: [
            'Stop at roaring roadside waterfalls along the mountain highway',
            'Tour organic tea processing factory and witness live tea tasting',
            'Evening stroll through fragrant eucalyptus and cardamom plantations'
          ],
          food: 'Hot Kerala Parotta with spicy mushroom/beef roast and fresh cardamom tea',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Himalayan Flora & Nilgiri Vistas at Eravikulam',
          places: ['Eravikulam National Park (Rajamalai)', 'Mattupetty Dam', 'Echo Point'],
          travelTime: 'Local transit 45 mins between sights',
          activities: [
            'Spot the endangered Nilgiri Tahr mountain goats on grassy slopes',
            'Speedboat ride on the emerald waters of Mattupetty Dam',
            'Trek through conifer groves to Top Station for panoramic valley views'
          ],
          food: 'Puttu with spicy Kadala (black chickpea) curry and crispy banana chips',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'Houseboat Cruise in the Emerald Backwaters of Alleppey',
          places: ['Vembanad Lake', 'Punnamada Lagoon', 'Kuttanad Below-Sea-Level Paddy Fields'],
          travelTime: '4 hrs drive from Munnar to Alleppey jetty (160 km)',
          activities: [
            'Check in to a private traditional thatched wooden Kettuvallam houseboat',
            'Cruise along palm-fringed canals watching rural duck farming and coir making',
            'Sunset canoe ride through narrow village waterways'
          ],
          food: 'Freshly caught Karimeen Pollichathu (Pearl spot fish in banana leaf) cooked on board',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Red Cliffs of Varkala & Sunset Departure',
          places: ['Varkala North Cliff', 'Papanasam Holy Beach', 'Janardhana Swamy Temple'],
          travelTime: '2.5 hrs drive from Alleppey to Varkala (115 km)',
          activities: [
            'Relax at seaside cafes perched atop dramatic red laterite cliffs',
            'Oceanfront yoga and surf session at Black Beach',
            'Rejuvenating Ayurvedic herbal massage before heading to Trivandrum Airport'
          ],
          food: 'Grilled ocean red snapper and tender coconut smoothie bowl',
          cost: Math.round(budget / days)
        }
      ],
      rajasthan: [
        {
          day: 1,
          title: 'Welcome to the Pink City: Amber Fort & Hawa Mahal',
          places: ['Amber Fort & Sheesh Mahal', 'Hawa Mahal', 'City Palace Jaipur'],
          travelTime: 'Local city transit approx 1.5 hrs',
          activities: [
            'Ascend to Amber Fort and marvel at the thousand mirrors in Sheesh Mahal',
            'Photograph the 953 honeycomb windows of Hawa Mahal at golden hour',
            'Sunset view of the Pink City from Nahargarh Fort ramparts'
          ],
          food: 'Authentic Dal Baati Churma with desert garlic chutney and Pyaaz Kachori',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Astronomy & Regal Bazaars of Jaipur',
          places: ['Jantar Mantar UNESCO', 'Albert Hall Museum', 'Johari Bazaar'],
          travelTime: 'Walking in old walled city',
          activities: [
            'Explore the world’s largest stone sundial at Jantar Mantar',
            'Shop for silver jewelry, block-printed quilts, and blue pottery',
            'Dine like royalty at a heritage haveli courtyard'
          ],
          food: 'Laal Maas (fiery mutton curry) and warm sweet Ghevar with rabdi',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Journey to the Blue City & Colossal Mehrangarh',
          places: ['Mehrangarh Fort', 'Jaswant Thada Cenotaphs', 'Navchokiya Blue Alleys'],
          travelTime: '4.5 hrs express train or road from Jaipur to Jodhpur (330 km)',
          activities: [
            'Tour the invincible ramparts and royal palanquins inside Mehrangarh',
            'Zipline between fort battlements with Flying Fox Jodhpur',
            'Heritage walking tour photographing the indigo houses of Navchokiya'
          ],
          food: 'Famous Makhaniya Lassi at Clock Tower and hot Mirchi Vada',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'Thar Desert Dunes of Jaisalmer',
          places: ['Sam Sand Dunes', 'Kuldhara Ghost Village', 'Desert National Park'],
          travelTime: '4.5 hrs drive from Jodhpur to Jaisalmer (280 km)',
          activities: [
            'Explore the abandoned 13th-century haunted village of Kuldhara',
            'Sunset camel safari across the golden ripples of Sam Sand Dunes',
            'Overnight desert glamping under millions of stars with Kalbeliya folk dancers'
          ],
          food: 'Ker Sangri Ro Saag with Bajra no Rotlo and fresh white butter',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Living Golden Sandstone Fort & Palaces',
          places: ['Jaisalmer Fort (Sonar Qila)', 'Patwon ki Haveli', 'Gadisar Lake'],
          travelTime: 'Local walking inside fort',
          activities: [
            'Wander the medieval living fort where locals still reside inside walls',
            'Marvel at the lace-like stone jali work of Patwon ki Haveli',
            'Peaceful morning rowboat cruise on Gadisar Lake before departure'
          ],
          food: 'Ghotua Laddoo and fragrant Saffron Masala Chai',
          cost: Math.round(budget / days)
        }
      ],
      goa: [
        {
          day: 1,
          title: 'North Goa Sunshine & Historic Fort Aguada',
          places: ['Fort Aguada & Lighthouse', 'Sinquerim Beach', 'Candolim'],
          travelTime: '1 hr from Dabolim or Mopa Airport',
          activities: ['Walk along 17th-century Portuguese fortress ramparts', 'Sunset dip in the Arabian Sea', 'Beach shack dining under fairy lights'],
          food: 'Goan Prawn Curry with Poi bread and fresh Kingfish fry',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Old Goa UNESCO Churches & Latin Quarter Heritage Walk',
          places: ['Basilica of Bom Jesus', 'Se Cathedral', 'Fontainhas (Panaji)'],
          travelTime: '45 mins transit',
          activities: ['Marvel at Baroque architecture and sacred relics of St. Francis Xavier', 'Photograph pastel Portuguese villas in Fontainhas', 'Mandovi river sunset cruise'],
          food: 'Pork Vindaloo, Bebinca layered coconut dessert, and Feni cocktail',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Dudhsagar Waterfalls & Spice Plantation Journey',
          places: ['Dudhsagar Falls', 'Sahakari Spice Farm', 'Mollem National Park'],
          travelTime: '1.5 hrs jeep safari',
          activities: ['Jeep safari through Bhagwan Mahavir Wildlife Sanctuary', 'Swim in the natural plunge pool beneath the 4-tiered waterfall', 'Guided spice tour with authentic traditional lunch'],
          food: 'Traditional Goan Hindu Saraswat buffet on banana leaf',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'Serene South Goa: Palolem & Cabo de Rama',
          places: ['Palolem Crescent Beach', 'Cabo de Rama Fort', 'Butterfly Beach'],
          travelTime: '1.5 hrs scenic drive',
          activities: ['Kayak through tranquil turquoise waters of Palolem', 'Dolphin watching boat ride to secluded Butterfly Beach', 'Cliffside sunset at Cabo de Rama'],
          food: 'Crab Xacuti with steamed rice and tender coconut water',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Anjuna Flea Market & Seaside Farewell',
          places: ['Anjuna Beach', 'Chapora Fort (Dil Chahta Hai point)', 'Vagator'],
          travelTime: 'Local transit 30 mins',
          activities: ['Panoramic view of Vagator coastline from Chapora Fort', 'Browse bohemian handicrafts and jewelry at flea market', 'Sundowner at iconic cliffside cafes'],
          food: 'Wood-fired sourdough pizza and refreshing kokum cooler',
          cost: Math.round(budget / days)
        }
      ],
      'himachal-pradesh': [
        {
          day: 1,
          title: 'Queen of Hills: Shimla Heritage & Mall Road Walk',
          places: ['The Ridge', 'Christ Church', 'Mall Road', 'Jakhoo Hill'],
          travelTime: '3.5 hrs drive from Chandigarh / Kalka Toy Train',
          activities: ['Stroll down pedestrian Mall Road and The Ridge', 'Visit neo-Gothic Christ Church', 'Take the ropeway to Jakhoo Temple for monkey encounters and peak views'],
          food: 'Hot Himachali Siddu with ghee and dal, and piping hot Momos',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Colonial Splendor & Pine Forests of Kufri',
          places: ['Viceregal Lodge', 'Kufri Snow Point', 'Himalayan Nature Park'],
          travelTime: '45 mins mountain drive',
          activities: ['Tour the Scottish baronial Viceregal Lodge where historic accords were signed', 'Horse ride through dense cedar groves in Kufri', 'Spot snow leopards and monal pheasants'],
          food: 'Himachali Madra (chickpea yogurt curry) with steamed rice',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Ascending into the Beas Valley to Manali',
          places: ['Pandoh Dam', 'Kullu Valley Shawl Weaving', 'Manali Town'],
          travelTime: '6.5 hrs scenic drive along Beas River (240 km)',
          activities: ['Stop at colorful Kullu handloom weaving centers', 'Visit ancient cedar-shaded Hadimba Devi Temple', 'Evening walk through bohemian Old Manali cafes'],
          food: 'Trout fish grilled with lemon butter and spicy Thukpa',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'High Altitude Thrills: Atal Tunnel & Solang Valley',
          places: ['Atal Tunnel (9.02 km)', 'Solang Valley', 'Sissu Waterfall (Lahaul)'],
          travelTime: '1 hr drive through the mountain tunnel',
          activities: ['Drive through the world’s longest highway tunnel above 10,000 feet into Lahaul Valley', 'Paragliding and zorbing in Solang Valley', 'Photograph freezing mountain streams at Sissu'],
          food: 'Hot Maggi, Masala Omelette, and ginger-lemon honey tea by the river',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Hot Springs of Vashisht & Riverside Departure',
          places: ['Vashisht Sulphur Springs', 'Jogini Waterfalls', 'Beas Riverfront'],
          travelTime: 'Local walking & transit',
          activities: ['Bathe in natural therapeutic hot sulphur springs', 'Trek to the spray of Jogini Waterfalls through apple orchards', 'Riverfront meditation before departing for Chandigarh/Delhi'],
          food: 'Wood-fired pizza at Dylan’s Toasted and Roasted cafe',
          cost: Math.round(budget / days)
        }
      ],
      'jammu-and-kashmir': [
        {
          day: 1,
          title: 'Arrival in Paradise: Dal Lake & Mughal Terraces',
          places: ['Dal Lake Shikara', 'Nishat Bagh', 'Shalimar Bagh'],
          travelTime: '45 mins from Srinagar Airport',
          activities: ['Check in to a carved walnut houseboat on Dal Lake', 'Sunset Shikara ride through floating lotus gardens and water bazaars', 'Walk through Emperor Jahangir’s terraced Mughal gardens'],
          food: 'Kashmiri Wazwan with Rogan Josh, Gushtaba, and saffron Kahwa tea',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Floating Dawn Markets & Old Srinagar Heritage',
          places: ['Floating Vegetable Market', 'Jamia Masjid', 'Pari Mahal'],
          travelTime: 'Early morning canoe ride + city transit',
          activities: ['Dawn canoe ride to witness the 200-year-old floating vegetable market', 'Explore cedarwood pagoda architecture of Jamia Masjid', 'Sunset views of Dal Lake from the ruins of Pari Mahal'],
          food: 'Warm Kashmiri Sheermal bread with salty Pink Nun Chai',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Meadow of Flowers & Gulmarg Gondola Ride',
          places: ['Gulmarg Gondola', 'Apharwat Peak (13,780 ft)', 'Kongdoori Valley'],
          travelTime: '1.5 hrs mountain drive (50 km)',
          activities: ['Ride the world’s second highest cable car to Apharwat Peak', 'Snowball fights or skiing on pristine Himalayan powder', 'Walk through pine-scented alpine meadows'],
          food: 'Hot Nadru Yakhni (lotus stem in yogurt) and steamed Kashmiri rice',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'Valley of Shepherds: Pahalgam & Betaab Valley',
          places: ['Betaab Valley', 'Aru Valley', 'Lidder River'],
          travelTime: '2.5 hrs drive from Gulmarg/Srinagar (90 km)',
          activities: ['Pony ride through conifer forests to Baisaran ("Mini Switzerland")', 'Stroll along the roaring turquoise Lidder river', 'Photograph snow-capped peaks in Betaab Valley'],
          food: 'Kashmiri Dum Aloo with crisp walnut chutney and Bakarkhani',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Pashmina Craftsmanship & Farewell Departure',
          places: ['Saffron fields of Pampore', 'Old Wooden Bridges', 'Srinagar Crafts Centre'],
          travelTime: 'Transit to Srinagar Airport',
          activities: ['Stop at Pampore to purchase authentic GI-tagged Kashmiri saffron and dry fruits', 'Watch master Pashmina weavers spin delicate cashmere shawls', 'Departure with unforgettable memories'],
          food: 'Modur Pulao (sweet saffron rice with dry fruits)',
          cost: Math.round(budget / days)
        }
      ],
      ladakh: [
        {
          day: 1,
          title: 'Acclimatization & Leh Ancient Royal Palace',
          places: ['Leh Palace', 'Shanti Stupa', 'Leh Main Bazaar'],
          travelTime: '15 mins from Kushok Bakula Rimpochee Airport',
          activities: ['Mandatory rest and hydration for altitude acclimatization (11,500 ft)', 'Sunset panoramic view of Leh valley from Shanti Stupa', 'Stroll through colorful Leh market with prayer flags flutter'],
          food: 'Steamed Tibetan Tingmo bread with spicy vegetable curry and butter tea',
          cost: Math.round(budget / days)
        },
        {
          day: 2,
          title: 'Monasteries of the Indus Valley & Magnetic Hill',
          places: ['Thiksey Monastery', 'Hemis Monastery', 'Magnetic Hill', 'Sangam (Indus-Zanskar confluence)'],
          travelTime: '2 hrs drive along Indus River',
          activities: ['Attend early morning monk chanting ceremony at Thiksey (mini Potala Palace)', 'Witness the optical illusion of Magnetic Hill defying gravity', 'View the dramatic two-tone confluence of Indus and Zanskar rivers'],
          food: 'Hot Thukpa noodle soup and freshly steamed vegetable momos',
          cost: Math.round(budget / days)
        },
        {
          day: 3,
          title: 'Crossing the World’s Highest Passes to Nubra Valley',
          places: ['Khardung La Pass (17,982 ft)', 'Diskit Monastery & Giant Buddha', 'Hunder Sand Dunes'],
          travelTime: '5 hrs rugged mountain pass drive (125 km)',
          activities: ['Pose for photos at the famous summit board of Khardung La Pass', 'Marvel at the 106-foot golden Maitreya Buddha statue overlooking Nubra Valley', 'Ride two-humped Bactrian camels across white cold desert dunes in Hunder'],
          food: 'Ladakhi Skyu (hand-rolled pasta stew with root vegetables)',
          cost: Math.round(budget / days)
        },
        {
          day: 4,
          title: 'Turquoise Magic of Pangong Tso Lake',
          places: ['Shyok River Road', 'Pangong Tso Lake (14,270 ft)', 'Spangmik'],
          travelTime: '5.5 hrs scenic drive via Shyok Valley',
          activities: ['Arrive at the 134-km long saline Pangong Lake which changes colors from blue to turquoise to emerald', 'Sunset photography along the shore where 3 Idiots was filmed', 'Stargazing under crystal-clear high altitude skies with Milky Way views'],
          food: 'Warm dal bati or Tibetan noodle soup served in lakeside dome camp',
          cost: Math.round(budget / days)
        },
        {
          day: 5,
          title: 'Chang La Pass & Farewell Departure',
          places: ['Chang La Pass (17,590 ft)', 'Shey Palace', 'Leh Airport Departure'],
          travelTime: '5 hrs drive back to Leh (140 km)',
          activities: ['Cross scenic Chang La pass with stops for snow photos and tea', 'Visit ancient ruins of Shey Palace and its giant copper-gilt Buddha', 'Departure with the spirit of the Himalayas in your soul'],
          food: 'Apricot jam with freshly baked Ladakhi bread and herbal tea',
          cost: Math.round(budget / days)
        }
      ]
    };

    // Check if custom plan exists, else dynamically construct from state data
    const template = planDatabase[destination];

    if (template) {
      for (let i = 0; i < days; i++) {
        if (template[i]) {
          itinerary.push(template[i]);
        } else {
          itinerary.push({
            day: i + 1,
            title: `Day ${i + 1}: Immersive Hidden Gems & Artisan Trails in ${activeStateObj.name}`,
            places: [`${activeStateObj.topDestinations[i % activeStateObj.topDestinations.length]} Excursion`, 'Local Viewpoint', 'Traditional Village'],
            travelTime: 'Approx 1.5 - 2 hours local transit',
            activities: [
              `Explore serene hidden trails and viewpoint panoramas in ${activeStateObj.name}`,
              `Engage with local master craftspeople specializing in ${activeStateObj.famousFor.slice(0, 2).join(' & ')}`,
              'Relaxed golden hour photography and authentic regional dining'
            ],
            food: `${stateDests[0]?.foodToTry?.[i % (stateDests[0]?.foodToTry?.length || 1)] || 'Traditional regional thali'} with fresh local ingredients`,
            cost: Math.round(budget / days)
          });
        }
      }
    } else {
      // Dynamic generator for all other states using real data
      const destNames = activeStateObj.topDestinations;
      const primaryDest = stateDests[0];
      const secondaryDest = stateDests[1] || stateDests[0];

      itinerary.push({
        day: 1,
        title: `Arrival in ${activeStateObj.capital} & Iconic ${activeStateObj.iconicLandmark}`,
        places: [activeStateObj.capital, activeStateObj.iconicLandmark, 'Heritage Walled Quarter'],
        travelTime: `Convenient local transfer from ${activeStateObj.capital} airport / railway station`,
        activities: [
          `Visit the world-renowned landmark: ${activeStateObj.iconicLandmark}`,
          `Explore the historic avenues and vibrant cultural hubs of ${activeStateObj.capital}`,
          `Evening sunset view and orientation walk through local bazaars`
        ],
        food: `Authentic regional feast featuring ${primaryDest?.foodToTry?.[0] || activeStateObj.famousFor[0]}`,
        cost: Math.round(budget / days)
      });

      itinerary.push({
        day: 2,
        title: `Signature Discovery of ${primaryDest?.name || destNames[0]}`,
        places: primaryDest ? primaryDest.topAttractions.slice(0, 3) : [destNames[0], 'Cultural Center', 'Scenic Valley'],
        travelTime: 'Approx 1.5 - 2.5 hours scenic transfer',
        activities: primaryDest ? primaryDest.thingsToDo.slice(0, 3) : [
          `Guided discovery tour of signature sights in ${destNames[0]}`,
          `Photograph architectural marvels and natural landscapes`,
          `Interact with local artisans and sample authentic delicacies`
        ],
        food: `${primaryDest?.foodToTry?.[1] || 'Freshly prepared regional delicacies with seasonal produce'}`,
        cost: Math.round(budget / days)
      });

      itinerary.push({
        day: 3,
        title: `Natural Wonders & Scenic Horizons in ${destNames[1] || destNames[0]}`,
        places: secondaryDest ? secondaryDest.topAttractions.slice(0, 3) : [destNames[1] || destNames[0], 'Nature Trail', 'Panoramic Ridge'],
        travelTime: 'Approx 1 - 2 hours transit through scenic corridors',
        activities: secondaryDest ? secondaryDest.thingsToDo.slice(0, 3) : [
          `Morning nature trail and birdwatching in pristine surroundings`,
          `Explore ancient heritage shrines and historic fortifications`,
          `Evening cultural folk performance and music`
        ],
        food: `${secondaryDest?.foodToTry?.[0] || 'Traditional slow-cooked tribal/regional specialties'}`,
        cost: Math.round(budget / days)
      });

      for (let i = 3; i < days; i++) {
        itinerary.push({
          day: i + 1,
          title: `Day ${i + 1}: ${activeStateObj.highlights[(i - 3) % activeStateObj.highlights.length]} & Cultural Trail`,
          places: [destNames[(i - 1) % destNames.length] || activeStateObj.capital, 'Artisan Workshop', 'Scenic Sunset Point'],
          travelTime: 'Approx 1 - 2 hours regional transit',
          activities: [
            `Discover offbeat trails and scenic viewpoints across ${activeStateObj.name}`,
            `Shop for authentic handicrafts and souvenirs famous for: ${activeStateObj.famousFor.join(', ')}`,
            'Panoramic golden hour farewell stroll and dinner under the stars'
          ],
          food: `${primaryDest?.foodToTry?.[(i) % (primaryDest?.foodToTry?.length || 1)] || 'Chef special regional dessert and thali'}`,
          cost: Math.round(budget / days)
        });
      }
    }

    return itinerary;
  };

  const itinerary = generateSmartItinerary();

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerated(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSaveItinerary = () => {
    saveTrip({
      destination: activeStateObj.name,
      destinationId: destination,
      days,
      budget,
      travelers,
      style,
      itinerary
    });
    setIsSavedTrip(true);
    setTimeout(() => setIsSavedTrip(false), 3000);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Itinerary Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-3">
          Plan Your Customized Indian Trip
        </h1>
        <p className="text-slate-300 text-sm sm:text-base font-light">
          Configure your destination, duration, budget, and travel companions to generate an actionable day-by-day plan with travel times and authentic culinary recommendations.
        </p>
      </div>

      {/* Input Form Card */}
      <div className="bg-navy-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-glass mb-14">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Destination Selector Covering All 36 States & UTs */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Destination / State ({STATES.length} States & UTs)
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
              >
                {STATES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} {s.isUT ? '(UT)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Number of Days ({days} Days)
              </label>
              <input
                type="range"
                min="3"
                max="10"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-saffron-500 h-2 bg-navy-950 rounded-lg cursor-pointer mt-3"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>3 Days</span>
                <span>5 Days</span>
                <span>7 Days</span>
                <span>10 Days</span>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Estimated Budget: ₹{budget.toLocaleString()}
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
              >
                <option value="10000">₹10,000 (Backpacker / Budget)</option>
                <option value="25000">₹25,000 (Comfortable)</option>
                <option value="45000">₹45,000 (Premium)</option>
                <option value="75000">₹75,000 (Luxury Royal)</option>
              </select>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/15 text-sm text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
              >
                <option value="1">Solo (1 Traveler)</option>
                <option value="2">Couple (2 Travelers)</option>
                <option value="4">Family / Friends (4 Travelers)</option>
                <option value="6">Group (6+ Travelers)</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Compass className="w-4 h-4 text-saffron-400" />
              <span>Smart AI itinerary based on real transit routes, hotel clusters, and opening hours</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-white font-bold text-sm shadow-glow-saffron transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Itinerary</span>
            </button>
          </div>
        </form>
      </div>

      {/* Generated Itinerary Display */}
      <div className="space-y-8">
        {/* Header Actions for Itinerary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-bold text-saffron-400 uppercase tracking-wider block">
              Curated Journey Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {days}-Day {activeStateObj.name} Exploration Itinerary
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Designed for {travelers} traveler(s) • Total Budget approx ₹{budget.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveItinerary}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                isSavedTrip
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-navy-900 border-white/15 text-white hover:bg-white/10'
              }`}
            >
              {isSavedTrip ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSavedTrip ? 'Saved to Trips' : 'Save Itinerary'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl bg-navy-900 border border-white/15 text-white hover:bg-white/10 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export</span>
            </button>
          </div>
        </div>

        {/* Day by Day Cards */}
        <div className="space-y-6">
          {itinerary.map((dayItem) => (
            <div
              key={dayItem.day}
              className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass transition-all hover:border-saffron-500/40 space-y-5"
            >
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-saffron-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                    Day {dayItem.day}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {dayItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-saffron-400" />
                    <span>{dayItem.travelTime}</span>
                  </span>
                  <span className="font-semibold text-white">
                    Est. Day Cost: ₹{dayItem.cost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Places to Visit */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Places to Visit
                </span>
                <div className="flex flex-wrap gap-2">
                  {dayItem.places.map((place, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                    >
                      📍 {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggested Activities */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Suggested Activities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {dayItem.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Food Suggestions */}
              <div className="p-4 rounded-xl bg-saffron-500/10 border border-saffron-500/20 flex items-start gap-3 text-xs sm:text-sm text-saffron-200">
                <Utensils className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold mr-1">Food Recommendation:</strong>
                  <span>{dayItem.food}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
