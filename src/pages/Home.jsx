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
import { ScrollReveal } from '../components/ScrollReveal';

export const Home = ({ onOpenSearch }) => {
  return (
    <div className="space-y-6 overflow-hidden">
      {/* 2. Cinematic Hero with 3. Search */}
      <Hero onOpenSearch={onOpenSearch} />

      {/* 4. Trending Destinations Carousel */}
      <ScrollReveal direction="up" distance={40}>
        <TrendingDestinations />
      </ScrollReveal>

      {/* 5. Explore India Map (28 States & 8 UTs) */}
      <ScrollReveal direction="up" distance={45}>
        <IndiaMap />
      </ScrollReveal>

      {/* 6. Explore by Travel Style */}
      <ScrollReveal direction="up" distance={35}>
        <CategoryGrid />
      </ScrollReveal>

      {/* 7. Hidden Gems */}
      <ScrollReveal direction="up" distance={40}>
        <HiddenGems />
      </ScrollReveal>

      {/* 8. State Explorer (State by State) */}
      <ScrollReveal direction="up" distance={40}>
        <StateExplorer />
      </ScrollReveal>

      {/* 9. Seasonal Destinations (Monthly Explorer) */}
      <ScrollReveal direction="up" distance={35}>
        <SeasonalDestinations />
      </ScrollReveal>

      {/* 10. Travel Budget Explorer */}
      <ScrollReveal direction="up" distance={40}>
        <BudgetExplorer />
      </ScrollReveal>

      {/* 11. Festivals */}
      <ScrollReveal direction="up" distance={35}>
        <FestivalSection />
      </ScrollReveal>

      {/* 12. Food Explorer */}
      <ScrollReveal direction="up" distance={35}>
        <FoodSection />
      </ScrollReveal>

      {/* 13. Travel Stories */}
      <ScrollReveal direction="up" distance={40}>
        <StoriesSection />
      </ScrollReveal>

      {/* 14. Photo Gallery */}
      <ScrollReveal direction="up" distance={40}>
        <GallerySection />
      </ScrollReveal>

      {/* 15. Trip Planner CTA */}
      <ScrollReveal direction="zoom" scale={0.96} distance={20}>
        <TripPlannerCTA />
      </ScrollReveal>
    </div>
  );
};
