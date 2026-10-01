import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Loader2, KeyRound } from 'lucide-react';

export function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [devResetToken, setDevResetToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await forgotPassword(email.trim());
      setSubmitted(true);
      if (res && res.resetToken) {
        setDevResetToken(res.resetToken);
      }
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred while requesting password reset.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

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
            Reset Your Password
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-light">
            Enter your registered email and we'll send you instructions to create a new password.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {submitted ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-white">Instructions Sent</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              If an account with <strong className="text-white">{email}</strong> exists in our database, you will receive a password reset link shortly.
            </p>

            {devResetToken && (
              <div className="p-3 bg-navy-950/80 border border-saffron-500/30 rounded-xl text-left text-xs space-y-2">
                <span className="text-[10px] uppercase font-bold text-saffron-400 block tracking-wider">
                  Development Mode Convenience:
                </span>
                <p className="text-slate-300 text-[11px]">
                  SMTP is in local dev mode. You can proceed directly to reset password:
                </p>
                <Link
                  to={`/reset-password?token=${devResetToken}`}
                  className="block text-center py-2 px-3 rounded-lg bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-glow-saffron transition-colors"
                >
                  Continue to Set New Password →
                </Link>
              </div>
            )}

            <div className="pt-4">
              <Link
                to="/login"
                className="inline-block text-xs font-semibold text-saffron-400 hover:text-saffron-300 transition-colors"
              >
                Return to Login
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Registered Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="traveler@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 hover:brightness-110 shadow-glow-saffron transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending request...</span>
                </>
              ) : (
                <span>Send Reset Link</span>
              )}
            </button>

            <div className="text-center pt-2">
              <Link to="/login" className="text-xs text-slate-400 hover:text-white transition-colors">
                Remember your password? <span className="text-saffron-400 font-bold">Sign In</span>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
