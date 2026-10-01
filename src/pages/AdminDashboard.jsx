import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  MapPin, 
  Compass, 
  Plus, 
  Trash2, 
  Edit, 
  Search, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Utensils, 
  BookOpen, 
  Calendar,
  Users,
  MessageSquare,
  Hotel,
  LogOut,
  AlertTriangle,
  RefreshCw,
  Loader2,
  X,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  statsApi, 
  destinationsApi, 
  statesApi, 
  hotelsApi, 
  reviewsApi, 
  usersApi 
} from '../services/api';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, isSuperAdmin, logout } = useAuth();

  const [activeTab, setActiveTab] = useState('overview'); 
  // 'overview', 'destinations', 'states', 'hotels', 'reviews', 'users'

  // Loading states
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Real MongoDB data states
  const [statsData, setStatsData] = useState({
    stats: {
      totalDestinations: 0,
      totalStates: 36,
      totalHotels: 0,
      totalUsers: 0,
      totalReviews: 0,
      totalBookings: 0
    },
    recent: { users: [], reviews: [], bookings: [] }
  });

  const [destinationsList, setDestinationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const [hotelsList, setHotelsList] = useState([]);
  const [reviewsList, setReviewsList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');

  // Destination Modals (Add / Edit)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingDest, setEditingDest] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const [destForm, setDestForm] = useState({
    name: '',
    state: 'West Bengal',
    category: 'mountains',
    bestTimeToVisit: 'October to March',
    shortDescription: '',
    price: 2500,
    rating: 4.8,
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
  });

  // Load all initial data from MongoDB APIs
  const fetchDashboardData = async () => {
    try {
      setRefreshing(true);
      const [statsRes, destsRes, statesRes, hotelsRes, reviewsRes, usersRes] = await Promise.all([
        statsApi.getOverviewStats().catch(() => null),
        destinationsApi.getDestinations().catch(() => []),
        statesApi.getStates().catch(() => []),
        hotelsApi.getHotels().catch(() => []),
        reviewsApi.getReviews().catch(() => []),
        usersApi.getAllUsers().catch(() => [])
      ]);

      if (statsRes && statsRes.stats) setStatsData(statsRes);
      if (destsRes) setDestinationsList(destsRes);
      if (statesRes) setStatesList(statesRes);
      if (hotelsRes) setHotelsList(hotelsRes);
      if (reviewsRes) setReviewsList(reviewsRes);
      if (usersRes) setUsersList(usersRes);
    } catch (err) {
      console.warn('Dashboard data fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchDashboardData();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, isAdmin]);

  // Handle Unauthenticated or Unauthorized users
  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 mx-auto flex items-center justify-center mb-4 shadow-glow-saffron">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-serif text-white mb-2">Authentication Required</h2>
        <p className="text-xs text-slate-400 mb-6">
          You must be logged in as an authorized administrator to access the Yatra India CMS.
        </p>
        <Link
          to="/admin/login"
          className="inline-block py-2.5 px-6 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-glow-saffron transition-all"
        >
          Go to Admin Login
        </Link>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="pt-32 pb-24 max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mx-auto flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-serif text-white mb-2">Access Denied (403)</h2>
        <p className="text-xs text-slate-400 mb-4">
          Your account (<strong className="text-white">{user?.email}</strong>) has the standard role{' '}
          <span className="px-2 py-0.5 rounded bg-saffron-500/20 text-saffron-400 uppercase text-[10px] font-bold">
            {user?.role}
          </span>
          . Administrator privileges are required to view this area.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="py-2.5 px-5 rounded-xl bg-navy-900 border border-white/10 hover:bg-navy-800 text-white text-xs font-semibold"
          >
            Return to Home
          </Link>
          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="py-2.5 px-5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold"
          >
            Switch Account
          </button>
        </div>
      </div>
    );
  }

  // --- DESTINATION CRUD ---
  const handleSaveDestination = async (e) => {
    e.preventDefault();
    setModalLoading(true);

    try {
      if (editingDest) {
        // Edit existing
        const updated = await destinationsApi.updateDestination(editingDest.id || editingDest._id, destForm);
        setDestinationsList(prev => prev.map(d => (d.id === updated.id ? updated : d)));
        setEditingDest(null);
      } else {
        // Create new
        const created = await destinationsApi.createDestination(destForm);
        setDestinationsList(prev => [created, ...prev]);
        setIsAddModalOpen(false);
      }
      // Refresh stats
      fetchDashboardData();
    } catch (err) {
      alert(`Error saving destination: ${err.message}`);
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteDestination = async (destId) => {
    if (!window.confirm(`Are you sure you want to permanently delete this destination?`)) return;

    try {
      await destinationsApi.deleteDestination(destId);
      setDestinationsList(prev => prev.filter(d => d.id !== destId && d._id !== destId));
      fetchDashboardData();
    } catch (err) {
      alert(`Failed to delete destination: ${err.message}`);
    }
  };

  const openEditModal = (dest) => {
    setEditingDest(dest);
    setDestForm({
      name: dest.name || '',
      state: dest.state || 'West Bengal',
      category: dest.category || 'mountains',
      bestTimeToVisit: dest.bestTimeToVisit || 'October to March',
      shortDescription: dest.shortDescription || '',
      price: dest.price || 2500,
      rating: dest.rating || 4.8,
      heroImage: dest.heroImage || ''
    });
  };

  // --- REVIEW DELETION ---
  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Delete this review?')) return;
    try {
      await reviewsApi.deleteReview(reviewId);
      setReviewsList(prev => prev.filter(r => r._id !== reviewId));
      fetchDashboardData();
    } catch (err) {
      alert(`Failed to delete review: ${err.message}`);
    }
  };

  // --- USER ROLE MANAGEMENT (Superadmin) ---
  const handleToggleUserRole = async (userId, currentRole) => {
    const nextRole = currentRole === 'admin' ? 'user' : 'admin';
    if (!window.confirm(`Change this user's role to '${nextRole}'?`)) return;

    try {
      const updated = await usersApi.updateUserRole(userId, nextRole);
      setUsersList(prev => prev.map(u => (u._id === userId ? { ...u, role: updated.role } : u)));
    } catch (err) {
      alert(`Failed to update role: ${err.message}`);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to permanently delete this user account?')) return;
    try {
      await usersApi.deleteUser(userId);
      setUsersList(prev => prev.filter(u => u._id !== userId));
      fetchDashboardData();
    } catch (err) {
      alert(`Failed to delete user: ${err.message}`);
    }
  };

  const filteredDestinations = destinationsList.filter(d =>
    d.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.state?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Control Center — {user?.role.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            YATRA INDIA CMS & Database
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Live MongoDB database synchronization across destinations, states, hotels, reviews, and users.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchDashboardData}
            disabled={refreshing}
            className="px-3.5 py-2 rounded-xl bg-navy-900 border border-white/10 hover:bg-navy-800 text-slate-300 text-xs font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Sync MongoDB</span>
          </button>

          <button
            onClick={async () => {
              await logout();
              navigate('/login');
            }}
            className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'destinations', label: `Destinations (${destinationsList.length})`, icon: MapPin },
          { id: 'states', label: `States & UTs (${statesList.length || 36})`, icon: Layers },
          { id: 'hotels', label: `Hotels (${hotelsList.length})`, icon: Hotel },
          { id: 'reviews', label: `Reviews (${reviewsList.length})`, icon: MessageSquare },
          { id: 'users', label: `Users (${usersList.length})`, icon: Users },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-saffron-500 text-white shadow-glow-saffron font-bold'
                  : 'bg-navy-900/80 hover:bg-navy-800 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* --- TAB 1: OVERVIEW STATS --- */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Total Destinations
              </span>
              <span className="text-3xl font-bold font-serif text-white">
                {statsData.stats.totalDestinations || destinationsList.length}
              </span>
              <span className="text-[11px] text-emerald-400 block mt-1">Live in MongoDB</span>
            </div>

            <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                States & UTs
              </span>
              <span className="text-3xl font-bold font-serif text-white">
                {statsData.stats.totalStates || 36}
              </span>
              <span className="text-[11px] text-saffron-400 block mt-1">28 States + 8 UTs</span>
            </div>

            <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Registered Users
              </span>
              <span className="text-3xl font-bold font-serif text-white">
                {statsData.stats.totalUsers || usersList.length}
              </span>
              <span className="text-[11px] text-purple-400 block mt-1">Authenticated Profiles</span>
            </div>

            <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-5 shadow-glass">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Community Reviews
              </span>
              <span className="text-3xl font-bold font-serif text-white">
                {statsData.stats.totalReviews || reviewsList.length}
              </span>
              <span className="text-[11px] text-amber-400 block mt-1">Across Tourist Spots</span>
            </div>
          </div>

          {/* Recent Users and Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Registered Users */}
            <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 shadow-glass">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Recent Registered Users</span>
                </h3>
                <button
                  onClick={() => setActiveTab('users')}
                  className="text-xs text-saffron-400 hover:underline"
                >
                  View All →
                </button>
              </div>

              {usersList.slice(0, 5).length === 0 ? (
                <p className="text-xs text-slate-500 py-6 text-center">No users registered yet.</p>
              ) : (
                <div className="divide-y divide-white/5">
                  {usersList.slice(0, 5).map((u) => (
                    <div key={u._id} className="py-3 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-white block">{u.name}</span>
                        <span className="text-slate-400 text-[11px]">{u.email}</span>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          u.role === 'superadmin' ? 'bg-purple-500/20 text-purple-300' :
                          u.role === 'admin' ? 'bg-emerald-500/20 text-emerald-300' :
                          'bg-saffron-500/20 text-saffron-300'
                        }`}>
                          {u.role}
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">
                          {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'Recent'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Reviews */}
            <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 shadow-glass">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Recent Traveler Reviews</span>
                </h3>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="text-xs text-saffron-400 hover:underline"
                >
                  View All →
                </button>
              </div>

              {reviewsList.slice(0, 5).length === 0 ? (
                <p className="text-xs text-slate-500 py-6 text-center">No community reviews yet.</p>
              ) : (
                <div className="divide-y divide-white/5">
                  {reviewsList.slice(0, 5).map((r) => (
                    <div key={r._id} className="py-3 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">
                          {r.userName} on <span className="text-saffron-400 capitalize">{r.destinationId}</span>
                        </span>
                        <span className="text-amber-400 font-bold">★ {r.rating}/5</span>
                      </div>
                      <p className="text-slate-300 text-[11px] line-clamp-2 italic">
                        "{r.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: MANAGE DESTINATIONS --- */}
      {activeTab === 'destinations' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
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
              onClick={() => {
                setEditingDest(null);
                setDestForm({
                  name: '',
                  state: 'West Bengal',
                  category: 'mountains',
                  bestTimeToVisit: 'October to March',
                  shortDescription: '',
                  price: 2500,
                  rating: 4.8,
                  heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
                });
                setIsAddModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron flex items-center gap-2 self-start sm:self-auto transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Destination</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-navy-950/60 text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Destination</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Best Season</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredDestinations.slice(0, 50).map((dest) => (
                  <tr key={dest._id || dest.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white flex items-center gap-3">
                      <img
                        src={dest.heroImage}
                        alt={dest.name}
                        className="w-8 h-8 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=100&q=80';
                        }}
                      />
                      <span>{dest.name}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{dest.state}</td>
                    <td className="py-3 px-4 capitalize">
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px]">
                        {dest.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{dest.bestTimeToVisit}</td>
                    <td className="py-3 px-4 font-bold text-amber-400">★ {dest.rating || 4.8}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          to={`/destination/${dest.id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-navy-950 hover:bg-navy-800 text-slate-400 hover:text-white"
                          title="View live page"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => openEditModal(dest)}
                          className="p-1.5 rounded-lg bg-navy-950 hover:bg-navy-800 text-slate-400 hover:text-saffron-400"
                          title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteDestination(dest.id || dest._id)}
                          className="p-1.5 rounded-lg bg-navy-950 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- TAB 3: MANAGE STATES --- */}
      {activeTab === 'states' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
          <h3 className="text-lg font-bold text-white mb-2">36 Indian States & Union Territories</h3>
          <p className="text-xs text-slate-400 mb-6">
            Comprehensive catalog of Indian regional tourism entries stored in MongoDB.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statesList.map((state) => (
              <div key={state._id || state.id} className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{state.name}</h4>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Capital: {state.capital || 'N/A'} • {state.region} Region
                  </span>
                </div>
                <Link
                  to={`/state/${state.id}`}
                  target="_blank"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-saffron-400"
                  title="View State Guide"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 4: MANAGE HOTELS --- */}
      {activeTab === 'hotels' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Hotel Listings</h3>
              <p className="text-xs text-slate-400">Accommodations and boutique heritage stays</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hotelsList.map((hotel) => (
              <div key={hotel._id} className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 flex gap-4">
                <img src={hotel.image} alt={hotel.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">{hotel.name}</h4>
                  <p className="text-[11px] text-saffron-400">{hotel.destinationName}, {hotel.state}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="text-amber-400 font-bold">★ {hotel.rating}</span>
                    <span className="text-white font-semibold">₹{hotel.pricePerNight}/night</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                      {hotel.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 5: MANAGE REVIEWS --- */}
      {activeTab === 'reviews' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
          <h3 className="text-lg font-bold text-white mb-2">Community Reviews Moderation</h3>
          <p className="text-xs text-slate-400 mb-6">
            Review user ratings and remove inappropriate comments directly from MongoDB.
          </p>

          <div className="divide-y divide-white/5">
            {reviewsList.map((r) => (
              <div key={r._id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{r.userName}</span>
                    <span className="text-amber-400 text-xs font-bold">★ {r.rating}/5</span>
                    <span className="text-[11px] text-slate-400">on <strong className="text-saffron-400 capitalize">{r.destinationId}</strong></span>
                  </div>
                  <p className="text-xs text-slate-300 max-w-2xl">{r.comment}</p>
                  <span className="text-[10px] text-slate-500 block">
                    Posted: {new Date(r.createdAt || Date.now()).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => handleDeleteReview(r._id)}
                  className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 6: MANAGE USERS --- */}
      {activeTab === 'users' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">Registered Users & Role Controls</h3>
            <p className="text-xs text-slate-400">
              Only Superadministrators can elevate user permissions to administrator status.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-navy-950/60 text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Member Since</th>
                  <th className="py-3 px-4">Last Active</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {usersList.map((u) => (
                  <tr key={u._id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{u.name}</td>
                    <td className="py-3 px-4 text-slate-300">{u.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        u.role === 'superadmin' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        u.role === 'admin' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        'bg-saffron-500/20 text-saffron-300 border border-saffron-500/30'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      {isSuperAdmin && u._id !== user._id && u.role !== 'superadmin' && (
                        <button
                          onClick={() => handleToggleUserRole(u._id, u.role)}
                          className="px-2.5 py-1 rounded-lg bg-navy-950 hover:bg-navy-800 text-saffron-400 text-[11px] font-semibold border border-white/10"
                        >
                          {u.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                        </button>
                      )}
                      {u._id !== user._id && u.role !== 'superadmin' && (
                        <button
                          onClick={() => handleDeleteUser(u._id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300"
                          title="Delete Account"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- ADD / EDIT DESTINATION MODAL --- */}
      {(isAddModalOpen || editingDest) && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-navy-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black my-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <h3 className="text-xl font-bold font-serif text-white">
                {editingDest ? `Edit Destination: ${editingDest.name}` : 'Add New Destination'}
              </h3>
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setEditingDest(null);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveDestination} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Destination Name</label>
                  <input
                    type="text"
                    required
                    value={destForm.name}
                    onChange={(e) => setDestForm({ ...destForm, name: e.target.value })}
                    placeholder="e.g. Ziro Valley"
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={destForm.state}
                    onChange={(e) => setDestForm({ ...destForm, state: e.target.value })}
                    placeholder="e.g. Arunachal Pradesh"
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={destForm.category}
                    onChange={(e) => setDestForm({ ...destForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                  >
                    <option value="mountains">Mountains</option>
                    <option value="beaches">Beaches</option>
                    <option value="heritage">Heritage</option>
                    <option value="nature">Nature</option>
                    <option value="spiritual">Spiritual</option>
                    <option value="lakes">Lakes</option>
                    <option value="wildlife">Wildlife</option>
                    <option value="desert">Desert</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Best Season</label>
                  <input
                    type="text"
                    value={destForm.bestTimeToVisit}
                    onChange={(e) => setDestForm({ ...destForm, bestTimeToVisit: e.target.value })}
                    placeholder="e.g. Oct - Mar"
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Base Price (₹)</label>
                  <input
                    type="number"
                    value={destForm.price}
                    onChange={(e) => setDestForm({ ...destForm, price: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Hero Image URL</label>
                <input
                  type="url"
                  required
                  value={destForm.heroImage}
                  onChange={(e) => setDestForm({ ...destForm, heroImage: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Description</label>
                <textarea
                  rows={3}
                  required
                  value={destForm.shortDescription}
                  onChange={(e) => setDestForm({ ...destForm, shortDescription: e.target.value })}
                  placeholder="Brief highlight description..."
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditingDest(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-navy-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="px-5 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold shadow-glow-saffron flex items-center gap-2"
                >
                  {modalLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{editingDest ? 'Update in MongoDB' : 'Create Destination'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
