import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Eye, EyeOff, CheckCircle2, AlertCircle, Loader2, ArrowLeft, KeyRound } from 'lucide-react';

export function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  // Extract token from query params ?token=...
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!token) {
      setErrorMessage('Password reset token is missing from the URL.');
      return;
    }

    if (!password || !confirmPassword) {
      setErrorMessage('Please fill in both password fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      await resetPassword(token, password, confirmPassword);
      setSuccess(true);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2500);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to reset password. The link may have expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Top Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-saffron-400 text-xs font-semibold backdrop-blur-md transition-all border border-white/10 hover:border-saffron-500/40 shadow-glass"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-saffron-400" />
          <span>Back to Login</span>
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-500 text-white shadow-glow-saffron mb-3">
            <KeyRound className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-white tracking-tight">
            Create New Password
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-light">
            Enter a strong new password for your Yatra India account.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Password Reset Successful!</h3>
            <p className="text-xs text-slate-300">
              You are now authenticated. Redirecting you to Yatra India...
            </p>
          </div>
        ) : !token ? (
          <div className="text-center py-6 space-y-4">
            <p className="text-xs text-rose-300">
              Invalid or missing reset token. Please request a new password reset link.
            </p>
            <Link
              to="/forgot-password"
              className="inline-block py-2.5 px-4 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs transition-colors"
            >
              Request New Link
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                New Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 hover:brightness-110 shadow-glow-saffron transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Updating password...</span>
                </>
              ) : (
                <span>Save New Password & Sign In</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
