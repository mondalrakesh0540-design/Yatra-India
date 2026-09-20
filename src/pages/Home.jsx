import React from 'react';
import { Hero } from '../components/Hero';
import { TrendingDestinations } from '../components/TrendingDestinations';
import { IndiaMap } from '../components/IndiaMap';
import { CategoryGrid } from '../components/CategoryGrid';
import { HiddenGems } from '../components/HiddenGems';
import { StateExplorer } from '../components/StateExplorer';
import { SeasonalDestinations } from '../components/SeasonalDestinations';
import { BudgetExplorer } from '../components/BudgetExplorer';
import { FestivalSection } from '../components/FestivalSection';
import { FoodSection } from '../components/FoodSection';
import { StoriesSection } from '../components/StoriesSection';
import { GallerySection } from '../components/GallerySection';
import { TripPlannerCTA } from '../components/TripPlannerCTA';

export const Home = ({ onOpenSearch }) => {
  return (
    <div className="space-y-4">
      {/* 2. Cinematic Hero with 3. Search */}
      <Hero onOpenSearch={onOpenSearch} />

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

      {/* 10. Travel Budget Explorer */}
      <BudgetExplorer />

      {/* 11. Festivals */}
      <FestivalSection />

      {/* 12. Food Explorer */}
      <FoodSection />

      {/* 13. Travel Stories */}
      <StoriesSection />

      {/* 14. Photo Gallery */}
      <GallerySection />

      {/* 15. Trip Planner CTA */}
      <TripPlannerCTA />
    </div>
  );
};
