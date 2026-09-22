import React from 'react';
import { Hero } from '../components/Hero';
import { BookingSection } from '../components/BookingSection';
import { TrendingDestinations } from '../components/TrendingDestinations';
import { IndiaMap } from '../components/IndiaMap';
import { CategoryGrid } from '../components/CategoryGrid';
import { HiddenGems } from '../components/HiddenGems';
import { StateExplorer } from '../components/StateExplorer';
import { SeasonalDestinations } from '../components/SeasonalDestinations';
import { FestivalSection } from '../components/FestivalSection';
import { FoodSection } from '../components/FoodSection';
import { StoriesSection } from '../components/StoriesSection';
import { GallerySection } from '../components/GallerySection';

export const Home = ({ onOpenSearch }) => {
  return (
    <div className="space-y-4">
      {/* 2. Cinematic Hero with 3. Search */}
      <Hero onOpenSearch={onOpenSearch} />

      {/* Flight, Train & Bus Booking Engine */}
      <BookingSection />

      {/* 4. Trending Destinations Carousel */}
      <TrendingDestinations />

      {/* 5. Explore India Map (28 States & 8 UTs) */}
      <IndiaMap />

      {/* 6. Explore by Travel Style */}
      <CategoryGrid />

      {/* 7. Hidden Gems */}
      <HiddenGems />

      {/* 8. State Explorer (State by State) */}
      <StateExplorer />

      {/* 9. Seasonal Destinations (Monthly Explorer) */}
      <SeasonalDestinations />

      {/* 10. Festivals */}
      <FestivalSection />

      {/* 11. Food Explorer */}
      <FoodSection />

      {/* 12. Travel Stories */}
      <StoriesSection />

      {/* 13. Photo Gallery */}
      <GallerySection />
    </div>
  );
};
