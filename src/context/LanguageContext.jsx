import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    navDestinations: 'Destinations',
    navBookings: 'Bookings',
    navStates: 'States & UTs',
    navAlbums: 'Visual Albums',
    navStories: 'Stories',
    navAbout: 'About',
    navContact: 'Contact',
    navSearch: 'Search destinations...',
    navSignIn: 'Sign In',
    navSignUp: 'Sign Up',
    navProfile: 'My Profile',
    navAdmin: 'Admin Dashboard',
    navLogout: 'Sign Out',
    navWishlist: 'Saved Places',
    
    // Hero & Taglines
    heroTag: 'EXPERIENCE EXTRAORDINARY INDIA',
    heroTitle: 'Discover the Soul of Incredible India',
    heroSubtitle: 'Curated journeys across 28 states and 8 union territories. From Himalayan heights to tropical coastlines.',
    searchPlaceholder: 'Search destinations, states, hills, beaches...',
    exploreBtn: 'Explore Destinations',
    planTripBtn: 'Book Transit Tickets',
    
    // Highlights
    statDestinations: '180+ Destinations',
    statStates: '36 States & UTs',
    statHeritage: 'Verified Heritage',
    statTravelers: '50K+ Travelers',

    // Booking Tab
    flights: 'Flights',
    trains: 'Trains',
    buses: 'Buses',
    hotels: 'Hotels & Stays',

    // AI Recommender
    aiTitle: 'AI Smart Travel Matcher',
    aiSubtitle: 'Get personalized destination recommendations powered by intelligent travel matching',

    // Common
    viewDetails: 'View Details',
    rating: 'Rating',
    bestSeason: 'Best Season',
    backToHome: 'Back to Yatra India'
  },
  hi: {
    // Navigation
    navDestinations: 'पर्यटन स्थल',
    navBookings: 'बुकिंग',
    navStates: 'राज्य और केंद्र शासित प्रदेश',
    navAlbums: 'फोटो एल्बम',
    navStories: 'यात्रा कहानियाँ',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क करें',
    navSearch: 'स्थान खोजें...',
    navSignIn: 'लॉग इन',
    navSignUp: 'साइन अप',
    navProfile: 'मेरी प्रोफ़ाइल',
    navAdmin: 'एडमिन डैशबोर्ड',
    navLogout: 'लॉग आउट',
    navWishlist: 'पसंदीदा स्थल',

    // Hero & Taglines
    heroTag: 'अतुल्य भारत का असाधारण अनुभव',
    heroTitle: 'खोजें अतुल्य भारत की भव्यता और संस्कृति',
    heroSubtitle: '28 राज्यों और 8 केंद्र शासित प्रदेशों में प्रामाणिक यात्रा। हिमालय की चोटियों से लेकर सुनहरे समुद्र तटों तक।',
    searchPlaceholder: 'स्थल, राज्य, पहाड़, समुद्र तट खोजें...',
    exploreBtn: 'पर्यटन स्थल देखें',
    planTripBtn: 'टिकट बुक करें',

    // Highlights
    statDestinations: '180+ पर्यटन स्थल',
    statStates: '36 राज्य और UTs',
    statHeritage: 'प्रमाणित धरोहर',
    statTravelers: '50 हज़ार+ यात्री',

    // Booking Tab
    flights: 'उड़ानें',
    trains: 'ट्रेनें',
    buses: 'बसें',
    hotels: 'होटल और रिज़ॉर्ट',

    // AI Recommender
    aiTitle: 'AI स्मार्ट यात्रा सलाहकार',
    aiSubtitle: 'अपनी पसंद और बजट के अनुसार सबसे बेहतरीन पर्यटन स्थलों का सुझाव पाएं',

    // Common
    viewDetails: 'विवरण देखें',
    rating: 'रेटिंग',
    bestSeason: 'सर्वोत्तम समय',
    backToHome: 'यात्रा इंडिया होम'
  },
  bn: {
    // Navigation
    navDestinations: 'দর্শনীয় স্থান',
    navBookings: 'বুকিং',
    navStates: 'রাজ্য ও কেন্দ্রশাসিত অঞ্চল',
    navAlbums: 'ফটো অ্যালবাম',
    navStories: 'ভ্রমণ কাহিনী',
    navAbout: 'আমাদের সম্পর্কে',
    navContact: 'যোগাযোগ',
    navSearch: 'স্থান সন্ধান করুন...',
    navSignIn: 'লগ ইন',
    navSignUp: 'সাইন আপ',
    navProfile: 'আমার প্রোফাইল',
    navAdmin: 'অ্যাডমিন ড্যাশবোর্ড',
    navLogout: 'লগ আউট',
    navWishlist: 'পছন্দের তালিকা',

    // Hero & Taglines
    heroTag: 'অতুলনীয় ভারতের অসাধারণ অভিজ্ঞতা',
    heroTitle: 'আবিষ্কার করুন অপূর্ব ভারতের রূপ ও ঐতিহ্য',
    heroSubtitle: '২৮টি রাজ্য ও ৮টি কেন্দ্রশাসিত অঞ্চলের নির্ভরযোগ্য ভ্রমণ নির্দেশিকা। হিমালয়ের চূড়া থেকে শান্ত সমুদ্র সৈকত।',
    searchPlaceholder: 'স্থান, রাজ্য, পাহাড় বা সমুদ্র খুঁজুন...',
    exploreBtn: 'স্থানগুলি দেখুন',
    planTripBtn: 'টিকিট বুক করুন',

    // Highlights
    statDestinations: '১৮০+ পর্যটন স্থান',
    statStates: '৩৬টি রাজ্য ও UT',
    statHeritage: 'ঐতিহাসিক নিদর্শন',
    statTravelers: '৫০ হাজার+ ভ্রমণার্থী',

    // Booking Tab
    flights: 'ফ্লাইট',
    trains: 'ট্রেন',
    buses: 'বাস',
    hotels: 'হোটেল ও রিসোর্ট',

    // AI Recommender
    aiTitle: 'AI স্মার্ট ট্রাভেল ম্যাচিং',
    aiSubtitle: 'আপনার পছন্দ ও বাজেট অনুযায়ী সেরা ভ্রমণ স্থানের পরামর্শ পান',

    // Common
    viewDetails: 'বিস্তারিত দেখুন',
    rating: 'রেটিং',
    bestSeason: 'সেরা সময়',
    backToHome: 'হোম পেজে ফিরুন'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('yatra_language') || 'en';
    } catch {
      return 'en';
    }
  });

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      try {
        localStorage.setItem('yatra_language', lang);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;
