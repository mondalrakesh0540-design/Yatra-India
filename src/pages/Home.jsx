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
      <ScrollReveal direction="up">
        <TrendingDestinations />
      </ScrollReveal>

      {/* 5. Explore India Map (28 States & 8 UTs) */}
      <ScrollReveal direction="up">
        <IndiaMap />
      </ScrollReveal>

      {/* 6. Explore by Travel Style */}
      <ScrollReveal direction="up">
        <CategoryGrid />
      </ScrollReveal>

      {/* 7. Hidden Gems */}
      <ScrollReveal direction="up">
        <HiddenGems />
      </ScrollReveal>

      {/* 8. State Explorer (State by State) */}
      <ScrollReveal direction="up">
        <StateExplorer />
      </ScrollReveal>

      {/* 9. Seasonal Destinations (Monthly Explorer) */}
      <ScrollReveal direction="up">
        <SeasonalDestinations />
      </ScrollReveal>

      {/* 10. Travel Budget Explorer */}
      <ScrollReveal direction="up">
        <BudgetExplorer />
      </ScrollReveal>

      {/* 11. Festivals */}
      <ScrollReveal direction="up">
        <FestivalSection />
      </ScrollReveal>

      {/* 12. Food Explorer */}
      <ScrollReveal direction="up">
        <FoodSection />
      </ScrollReveal>

      {/* 13. Travel Stories */}
      <ScrollReveal direction="up">
        <StoriesSection />
      </ScrollReveal>

      {/* 14. Photo Gallery */}
      <ScrollReveal direction="up">
        <GallerySection />
      </ScrollReveal>

      {/* 15. Trip Planner CTA */}
      <ScrollReveal direction="up">
        <TripPlannerCTA />
      </ScrollReveal>
    </div>
  );
};
