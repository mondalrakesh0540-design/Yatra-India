import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  Loader2, 
  Compass,
  CheckCircle2
} from 'lucide-react';

export function Login({ defaultIsAdmin = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, adminLogin, isAuthenticated, isAdmin, user } = useAuth();

  const [isAdminMode, setIsAdminMode] = useState(defaultIsAdmin || location.pathname.includes('/admin'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync state if route changes between /login and /admin/login
  useEffect(() => {
    if (location.pathname.includes('/admin')) {
      setIsAdminMode(true);
    }
  }, [location.pathname]);

  // If already authenticated, redirect
  useEffect(() => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigate('/admin', { replace: true });
      } else {
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }
    }
  }, [isAuthenticated, isAdmin, navigate, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    setLoading(true);

    try {
      if (isAdminMode) {
        await adminLogin(email.trim(), password, rememberMe);
        navigate('/admin', { replace: true });
      } else {
        const loggedUser = await login(email.trim(), password, rememberMe);
        if (loggedUser.role === 'admin' || loggedUser.role === 'superadmin') {
          navigate('/admin', { replace: true });
        } else {
          const from = location.state?.from?.pathname || '/';
          navigate(from, { replace: true });
        }
      }
    } catch (err) {
      setErrorMessage(err.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Top Navigation Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-saffron-400 text-xs font-semibold backdrop-blur-md transition-all border border-white/10 hover:border-saffron-500/40 shadow-glass"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-saffron-400" />
          <span>Back to Yatra India</span>
        </Link>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-500 text-white shadow-glow-saffron mb-3">
            {isAdminMode ? <ShieldCheck className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
            {isAdminMode ? 'Admin Portal' : 'Welcome Back'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
            {isAdminMode 
              ? 'Authorized administrator authentication only'
              : 'Sign in to access your itinerary, tickets, and wishlist'}
          </p>
        </div>

        {/* Portal Switcher Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-navy-950/80 border border-white/10 rounded-2xl mb-6 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setIsAdminMode(false);
              setErrorMessage('');
            }}
            className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              !isAdminMode
                ? 'bg-saffron-500 text-white shadow-glow-saffron'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Traveler</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsAdminMode(true);
              setErrorMessage('');
            }}
            className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              isAdminMode
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Login as Admin</span>
          </button>
        </div>

        {/* Error Banner */}
        {errorMessage && (
          <div className="mb-5 flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="leading-relaxed">{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isAdminMode ? "admin@yatraindia.com" : "traveler@example.com"}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Password
              </label>
              {!isAdminMode && (
                <Link
                  to="/forgot-password"
                  className="text-xs text-saffron-400 hover:text-saffron-300 transition-colors font-medium"
                >
                  Forgot Password?
                </Link>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-navy-950 text-saffron-500 focus:ring-saffron-500/20"
              />
              <span className="text-xs text-slate-300">Remember this device</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl text-sm font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              isAdminMode
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 shadow-emerald-900/30'
                : 'bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 hover:brightness-110 shadow-glow-saffron'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : (
              <span>{isAdminMode ? 'Access Admin Console' : 'Sign In'}</span>
            )}
          </button>
        </form>

        {/* Footer Link to Register */}
        <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-slate-400">
          {!isAdminMode ? (
            <p>
              New to Yatra India?{' '}
              <Link to="/register" className="text-saffron-400 hover:text-saffron-300 font-bold transition-colors">
                Create Free Account
              </Link>
            </p>
          ) : (
            <p className="text-[11px] text-slate-500">
              Admin privileges are assigned directly via MongoDB security credentials.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
