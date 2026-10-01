import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Compass,
  Check
} from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Password rules validation
  const hasMinLength = password.length >= 6;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!hasMinLength) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify.');
      return;
    }

    if (!termsAccepted) {
      setErrorMessage('Please accept the Terms & Conditions and Privacy Policy.');
      return;
    }

    setLoading(true);

    try {
      await register(name.trim(), email.trim(), password, confirmPassword);
      navigate('/', { replace: true });
    } catch (err) {
      setErrorMessage(err.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Top Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-saffron-400 text-xs font-semibold backdrop-blur-md transition-all border border-white/10 hover:border-saffron-500/40 shadow-glass"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-saffron-400" />
          <span>Back to Yatra India</span>
        </Link>
      </div>

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-lg bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 my-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-500 text-white shadow-glow-saffron mb-3">
            <Compass className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
            Create Your Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
            Join thousands of travelers exploring Incredible India with verified itineraries
          </p>
        </div>

        {/* Error Alert Banner */}
        {errorMessage && (
          <div className="mb-5 flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="leading-relaxed">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aarav Sharma"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
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
                placeholder="traveler@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
              />
            </div>
          </div>

          {/* Password & Confirm Password in 2 Columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Password
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

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-navy-950/80 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                >
                  {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Password Strength Criteria */}
          {password && (
            <div className="p-3 rounded-xl bg-navy-950/60 border border-white/5 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${hasMinLength ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                  {hasMinLength ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : '•'}
                </div>
                <span className={hasMinLength ? 'text-emerald-300' : 'text-slate-400'}>
                  At least 6 characters
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${hasNumber && hasLetter ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                  {hasNumber && hasLetter ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : '•'}
                </div>
                <span className={hasNumber && hasLetter ? 'text-emerald-300' : 'text-slate-400'}>
                  Contains letters and numbers
                </span>
              </div>
              {confirmPassword && (
                <div className="flex items-center gap-2">
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${passwordsMatch ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                    {passwordsMatch ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : '×'}
                  </div>
                  <span className={passwordsMatch ? 'text-emerald-300' : 'text-rose-400'}>
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Terms & Conditions Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-white/20 bg-navy-950 text-saffron-500 focus:ring-saffron-500/20"
              />
              <span className="text-xs text-slate-300 leading-normal">
                I agree to the{' '}
                <span className="text-saffron-400 font-semibold underline underline-offset-2">
                  Terms & Conditions
                </span>{' '}
                and understand that normal accounts are registered with user privileges.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 hover:brightness-110 shadow-glow-saffron transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating account...</span>
              </>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-saffron-400 hover:text-saffron-300 font-bold transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
