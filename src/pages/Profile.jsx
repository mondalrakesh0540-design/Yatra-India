import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSaved } from '../context/SavedContext';
import { 
  User, 
  Mail, 
  ShieldCheck, 
  Calendar, 
  Heart, 
  Ticket, 
  KeyRound, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Edit3,
  Clock,
  Compass
} from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile, changePassword, logout, isAdmin, isSuperAdmin } = useAuth();
  const { savedDestinations } = useSaved();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'security'
  
  // Profile edit state
  const [name, setName] = useState(user?.name || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '');
  const [isEditing, setIsEditing] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });

  if (!user) {
    return (
      <div className="pt-32 pb-24 text-center px-4">
        <p className="text-slate-400 mb-4">Please log in to view your profile.</p>
        <Link to="/login" className="px-5 py-2.5 rounded-xl bg-saffron-500 text-white font-bold text-xs">
          Sign In
        </Link>
      </div>
    );
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileMessage({ type: '', text: '' });
    setProfileLoading(true);

    try {
      await updateProfile({ name: name.trim(), profileImage });
      setIsEditing(false);
      setProfileMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setProfileMessage({ type: '', text: '' }), 4000);
    } catch (err) {
      setProfileMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
    } finally {
      setProfileLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordMessage({ type: '', text: '' });

    if (newPassword !== confirmNewPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    if (newPassword.length < 6) {
      setPasswordMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }

    setPasswordLoading(true);

    try {
      await changePassword(currentPassword, newPassword, confirmNewPassword);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setPasswordMessage({ type: 'success', text: 'Password changed successfully.' });
      setTimeout(() => setPasswordMessage({ type: '', text: '' }), 4000);
    } catch (err) {
      setPasswordMessage({ type: 'error', text: err.message || 'Failed to change password.' });
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const roleBadgeColor = isSuperAdmin
    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
    : isAdmin
    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    : 'bg-saffron-500/20 text-saffron-300 border-saffron-500/40';

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Profile Header */}
      <div className="bg-navy-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-500 text-white font-bold text-2xl flex items-center justify-center shadow-glow-saffron border-2 border-white/20 overflow-hidden">
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user.name ? user.name.slice(0, 2).toUpperCase() : 'YI'}</span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                  {user.name}
                </h1>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${roleBadgeColor}`}>
                  {user.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>{user.email}</span>
              </p>
              {user.lastLogin && (
                <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>Last active: {new Date(user.lastLogin).toLocaleString()}</span>
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
          <Link to="/saved" className="p-4 rounded-2xl bg-navy-950/60 border border-white/5 hover:border-white/20 transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-xl font-bold text-white block">
                {savedDestinations.length}
              </span>
              <span className="text-[11px] text-slate-400">Wishlist Places</span>
            </div>
          </Link>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/10 text-saffron-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Active'}
              </span>
              <span className="text-[11px] text-slate-400">Member Since</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950/60 border border-white/5 flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-300 block">
                MongoDB Verified
              </span>
              <span className="text-[11px] text-slate-400">Secured with JWT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'bg-saffron-500 text-white shadow-glow-saffron'
              : 'text-slate-400 hover:text-white bg-navy-900/60'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Personal Details</span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'security'
              ? 'bg-saffron-500 text-white shadow-glow-saffron'
              : 'text-slate-400 hover:text-white bg-navy-900/60'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span>Security & Password</span>
        </button>
      </div>

      {/* Personal Info Tab */}
      {activeTab === 'profile' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Profile Details</h3>
              <p className="text-xs text-slate-400">Update your account name and avatar</p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {profileMessage.text && (
            <div className={`mb-6 p-3.5 rounded-xl text-xs flex items-center gap-2 ${
              profileMessage.type === 'success' 
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}>
              {profileMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{profileMessage.text}</span>
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Profile Photo URL (Optional)
                </label>
                <input
                  type="url"
                  value={profileImage}
                  onChange={(e) => setProfileImage(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={profileLoading}
                  className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {profileLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Changes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 max-w-md text-xs">
              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5">
                <span className="text-slate-400 block mb-1">Full Name</span>
                <span className="text-white text-sm font-semibold">{user.name}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5">
                <span className="text-slate-400 block mb-1">Email Address</span>
                <span className="text-white text-sm font-semibold">{user.email}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5">
                <span className="text-slate-400 block mb-1">User Role</span>
                <span className="text-white text-sm font-semibold capitalize">{user.role}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass max-w-lg">
          <h3 className="text-lg font-bold text-white mb-1">Change Password</h3>
          <p className="text-xs text-slate-400 mb-6">
            Ensure your account is protected with a secure password.
          </p>

          {passwordMessage.text && (
            <div className={`mb-6 p-3.5 rounded-xl text-xs flex items-center gap-2 ${
              passwordMessage.type === 'success' 
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}>
              {passwordMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{passwordMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-saffron-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-saffron-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-saffron-500"
              />
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="py-3 px-6 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron transition-all flex items-center gap-2 disabled:opacity-50 mt-4"
            >
              {passwordLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              <span>Update Password</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
