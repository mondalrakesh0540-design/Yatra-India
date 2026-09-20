import React, { useState } from 'react';
import { 
  BarChart3, MapPin, Compass, Plus, Trash2, Edit, Search, 
  Sparkles, Layers, CheckCircle2, ShieldCheck, Eye, Utensils, BookOpen, Calendar 
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { STATES } from '../data/states';
import { FESTIVALS } from '../data/festivals';
import { STORIES } from '../data/stories';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('destinations'); // 'overview', 'destinations', 'festivals', 'stories'
  const [destinationsList, setDestinationsList] = useState(DESTINATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Destination Form state
  const [newDest, setNewDest] = useState({
    name: '',
    state: 'West Bengal',
    category: 'mountains',
    startingBudget: 12000,
    bestTimeToVisit: 'October to March',
    shortDescription: ''
  });

  const handleAddDestination = (e) => {
    e.preventDefault();
    if (!newDest.name) return;

    const created = {
      id: newDest.name.toLowerCase().replace(/\s+/g, '-'),
      name: newDest.name,
      state: newDest.state,
      stateId: newDest.state.toLowerCase().replace(/\s+/g, '-'),
      category: newDest.category,
      startingBudget: Number(newDest.startingBudget),
      formattedBudget: `₹${Number(newDest.startingBudget).toLocaleString()} / person`,
      bestTimeToVisit: newDest.bestTimeToVisit,
      idealMonths: ['October', 'November', 'December'],
      rating: 4.8,
      reviewsCount: 120,
      isPopular: true,
      isTrending: true,
      isHiddenGem: false,
      heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      shortDescription: newDest.shortDescription || 'A breathtaking destination in incredible India.',
      topAttractions: ['Signature Viewpoint', 'Local Heritage Spot', 'Artisan Bazaar'],
      thingsToDo: ['Sightseeing', 'Photography', 'Local food trail'],
      foodToTry: ['Local Delicacy', 'Masala Chai'],
      weatherInfo: { summer: '20°C to 30°C', winter: '10°C to 20°C', monsoon: 'Lush green' },
      howToReach: { airport: 'Regional Airport (45 km)', railway: 'Nearest Junction (20 km)', road: 'State Highway', localTransport: 'Taxis' },
      safetyTips: ['Keep ID handy', 'Respect local customs']
    };

    setDestinationsList([created, ...destinationsList]);
    setIsAddModalOpen(false);
    setNewDest({
      name: '',
      state: 'West Bengal',
      category: 'mountains',
      startingBudget: 12000,
      bestTimeToVisit: 'October to March',
      shortDescription: ''
    });
    alert(`Destination "${created.name}" added successfully to Yatra India!`);
  };

  const handleDeleteDestination = (id) => {
    if (window.confirm('Are you sure you want to delete this destination?')) {
      setDestinationsList(destinationsList.filter(d => d.id !== id));
    }
  };

  const filtered = destinationsList.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Control Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            YATRA INDIA CMS & Analytics
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Manage tourism records across all 28 states, 8 union territories, festivals, and articles.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1 bg-navy-900 border border-white/10 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'destinations' ? 'bg-saffron-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Destinations ({destinationsList.length})
          </button>
          <button
            onClick={() => setActiveTab('festivals')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'festivals' ? 'bg-saffron-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Festivals ({FESTIVALS.length})
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'stories' ? 'bg-saffron-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Articles ({STORIES.length})
          </button>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Total Destinations
          </span>
          <span className="text-3xl font-bold font-serif text-white">{destinationsList.length}</span>
          <span className="text-[11px] text-emerald-400 block mt-1">Across 36 States & UTs</span>
        </div>

        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            States & UTs Covered
          </span>
          <span className="text-3xl font-bold font-serif text-white">{STATES.length}</span>
          <span className="text-[11px] text-saffron-400 block mt-1">28 States + 8 UTs</span>
        </div>

        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Cultural Festivals
          </span>
          <span className="text-3xl font-bold font-serif text-white">{FESTIVALS.length}</span>
          <span className="text-[11px] text-amber-400 block mt-1">Pan-India Coverage</span>
        </div>

        <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Magazine Stories
          </span>
          <span className="text-3xl font-bold font-serif text-white">{STORIES.length}</span>
          <span className="text-[11px] text-purple-400 block mt-1">Editorial Guides</span>
        </div>
      </div>

      {/* Destinations Management Tab */}
      {activeTab === 'destinations' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination or state..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-navy-950 border border-white/10 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-saffron-500"
              />
            </div>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron flex items-center gap-2 self-start sm:self-auto transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Destination</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-navy-950/60 text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Destination</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Budget</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((dest) => (
                  <tr key={dest.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white flex items-center gap-3">
                      <img
                        src={dest.heroImage}
                        alt={dest.name}
                        className="w-9 h-9 rounded-lg object-cover"
                      />
                      <span>{dest.name}</span>
                    </td>
                    <td className="py-3 px-4">{dest.state}</td>
                    <td className="py-3 px-4 capitalize">
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px]">
                        {dest.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium text-white">{dest.formattedBudget}</td>
                    <td className="py-3 px-4 font-bold text-amber-400">★ {dest.rating}</td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => handleDeleteDestination(dest.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Festivals Tab */}
      {activeTab === 'festivals' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FESTIVALS.map((fest) => (
            <div
              key={fest.id}
              className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass space-y-3"
            >
              <h3 className="text-lg font-bold font-serif text-white">{fest.name}</h3>
              <p className="text-xs text-saffron-400 font-medium">{fest.month} • {fest.location}</p>
              <p className="text-xs text-slate-300 line-clamp-3">{fest.culture}</p>
            </div>
          ))}
        </div>
      )}

      {/* Stories Tab */}
      {activeTab === 'stories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass space-y-3"
            >
              <span className="text-[10px] font-bold text-saffron-400 uppercase tracking-wider">{story.category}</span>
              <h3 className="text-base font-bold font-serif text-white">{story.title}</h3>
              <p className="text-xs text-slate-400">{story.author} • {story.readTime}</p>
            </div>
          ))}
        </div>
      )}

      {/* Add Destination Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5">
            <h3 className="text-xl font-bold font-serif text-white">
              Add New Indian Destination
            </h3>

            <form onSubmit={handleAddDestination} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold uppercase mb-1">Destination Name</label>
                <input
                  type="text"
                  required
                  value={newDest.name}
                  onChange={(e) => setNewDest({ ...newDest, name: e.target.value })}
                  placeholder="e.g. Kalimpong or Varkala"
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">State</label>
                  <select
                    value={newDest.state}
                    onChange={(e) => setNewDest({ ...newDest, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                  >
                    {STATES.map((st) => (
                      <option key={st.id} value={st.name}>{st.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">Category</label>
                  <select
                    value={newDest.category}
                    onChange={(e) => setNewDest({ ...newDest, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                  >
                    <option value="mountains">Mountains</option>
                    <option value="beaches">Beaches</option>
                    <option value="heritage">Heritage</option>
                    <option value="spiritual">Spiritual</option>
                    <option value="wildlife">Wildlife</option>
                    <option value="offbeat">Offbeat</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold uppercase mb-1">Starting Budget (₹)</label>
                <input
                  type="number"
                  value={newDest.startingBudget}
                  onChange={(e) => setNewDest({ ...newDest, startingBudget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold uppercase mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={newDest.shortDescription}
                  onChange={(e) => setNewDest({ ...newDest, shortDescription: e.target.value })}
                  placeholder="Summary of this destination..."
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-saffron-500 text-white font-bold shadow-glow-saffron"
                >
                  Save Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
