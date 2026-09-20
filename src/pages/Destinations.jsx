import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, MapPin, Sparkles, X, ChevronDown } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { STATES } from '../data/states';
import { CATEGORIES } from '../data/categories';
import { DestinationCard } from '../components/DestinationCard';

export const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query params
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = searchParams.get('filter') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBudget, setSelectedBudget] = useState('all'); // all, under10k, 10k-20k, above20k
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [sortBy, setSortBy] = useState(initialFilter === 'hidden-gems' ? 'hidden-gems' : 'popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & Sort computation
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = d.name.toLowerCase().includes(q);
        const matchState = d.state.toLowerCase().includes(q);
        const matchCategory = d.category.toLowerCase().includes(q);
        const matchTags = d.tags.some((t) => t.toLowerCase().includes(q));
        const matchAttractions = d.topAttractions.some((a) => a.toLowerCase().includes(q));
        if (!matchName && !matchState && !matchCategory && !matchTags && !matchAttractions) {
          return false;
        }
      }

      // State filter
      if (selectedState !== 'all' && d.stateId !== selectedState) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && d.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        // Also check if tags include this category
        const tagMatch = d.tags.some(t => t.toLowerCase() === selectedCategory.toLowerCase());
        if (!tagMatch) return false;
      }

      // Budget filter
      if (selectedBudget === 'under10k' && d.startingBudget > 10000) return false;
      if (selectedBudget === '10k-20k' && (d.startingBudget <= 10000 || d.startingBudget > 20000)) return false;
      if (selectedBudget === 'above20k' && d.startingBudget <= 20000) return false;

      // Season filter
      if (selectedSeason !== 'all') {
        const matchSeason = d.idealMonths.some(m => m.toLowerCase() === selectedSeason.toLowerCase());
        if (!matchSeason) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      if (sortBy === 'highest-rated') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'budget-low') return a.startingBudget - b.startingBudget;
      if (sortBy === 'budget-high') return b.startingBudget - a.startingBudget;
      if (sortBy === 'trending') return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
      if (sortBy === 'hidden-gems') return (b.isHiddenGem ? 1 : 0) - (a.isHiddenGem ? 1 : 0);
      return 0;
    });
  }, [searchQuery, selectedState, selectedCategory, selectedBudget, selectedSeason, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('all');
    setSelectedCategory('all');
    setSelectedBudget('all');
    setSelectedSeason('all');
    setSortBy('popular');
  };

  const hasActiveFilters = searchQuery || selectedState !== 'all' || selectedCategory !== 'all' || selectedBudget !== 'all' || selectedSeason !== 'all' || sortBy !== 'popular';

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-3">
          Discover All Indian Destinations
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
          Filter through 100+ iconic hill stations, golden sand dunes, hidden Himalayan valleys, sacred rivers, and tropical coasts across India.
        </p>
      </div>

      {/* Main Search & Sorting Top Bar */}
      <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-glass mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-saffron-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by destination name, state, or attraction..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-saffron-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown & Mobile Filter Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="trending">Trending Now</option>
              <option value="highest-rated">Highest Rated (★ 5.0)</option>
              <option value="hidden-gems">Hidden Gems</option>
              <option value="budget-low">Budget: Low to High</option>
              <option value="budget-high">Budget: High to Low</option>
            </select>
          </div>

          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden px-4 py-2.5 rounded-xl bg-saffron-500 text-white text-xs font-semibold flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar Filters + Results */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-3 bg-navy-900/70 border border-white/10 rounded-2xl p-5 shadow-glass space-y-6 sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-bold text-sm text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-saffron-500" />
              <span>Smart Filters</span>
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[11px] text-saffron-400 hover:underline"
              >
                Reset all
              </button>
            )}
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              State / Union Territory
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-xs text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              <option value="all">All States & UTs (36)</option>
              {STATES.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name} {st.isUT ? '(UT)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Style / Category Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Travel Style
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-xs text-white focus:outline-none focus:border-saffron-500 cursor-pointer capitalize"
            >
              <option value="all">All Styles</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Budget Per Person
            </label>
            <div className="space-y-1.5">
              {[
                { id: 'all', label: 'All Budgets' },
                { id: 'under10k', label: 'Under ₹10,000 (Budget)' },
                { id: '10k-20k', label: '₹10,000 – ₹20,000 (Comfort)' },
                { id: 'above20k', label: '₹20,000+ (Premium/Luxury)' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBudget(b.id)}
                  className={`w-full px-3 py-2 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
                    selectedBudget === b.id
                      ? 'bg-saffron-500/20 text-saffron-300 font-semibold border border-saffron-500/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{b.label}</span>
                  {selectedBudget === b.id && <span className="w-1.5 h-1.5 rounded-full bg-saffron-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Season Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Ideal Month
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-xs text-white focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              <option value="all">Any Month</option>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Results Container */}
        <main className="md:col-span-8 lg:col-span-9">
          {/* Active Results Count & Chips */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-slate-300">
              Showing <strong className="text-white">{filteredDestinations.length}</strong> destinations
            </span>
            {hasActiveFilters && (
              <span className="text-xs text-saffron-400">Filters applied</span>
            )}
          </div>

          {/* Destinations Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="bg-navy-900/40 border border-white/10 rounded-2xl p-12 text-center">
              <Sparkles className="w-10 h-10 text-slate-500 mx-auto mb-3 opacity-40" />
              <h3 className="text-xl font-bold font-serif text-white mb-2">No Destinations Found</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                We couldn’t find any destinations matching your current combination of filters. Try broadening your criteria.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-saffron-500 text-white font-semibold text-xs shadow-glow-saffron"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
