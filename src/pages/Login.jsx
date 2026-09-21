import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthSectionTwo from '@/components/ui/auth-section-2';
import { ArrowLeft } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100">
      {/* Top Floating Back Link */}
      <div className="absolute top-5 left-5 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-saffron-400 text-xs font-semibold backdrop-blur-md transition-all border border-white/10 hover:border-saffron-500/40 shadow-glass"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-saffron-400" />
          <span>Back to Yatra India</span>
        </Link>
      </div>

      {/* Main Auth Section Component */}
      <AuthSectionTwo
        defaultMode="login"
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default Login;
