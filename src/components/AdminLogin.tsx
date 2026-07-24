import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Eye, EyeOff, X, Gem } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose, onLoginSuccess }) => {
  const { login } = useAuth();
  const [view, setView] = useState<'login' | 'forgot' | 'sent'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetLoading, setResetLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        onLoginSuccess();
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setLoading(false);
    }, 800);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');

    if (!/^\S+@\S+\.\S+$/.test(resetEmail)) {
      setResetError('Please enter a valid email address.');
      return;
    }

    setResetLoading(true);
    // TODO: replace with a real password-reset request once a backend
    // endpoint exists (e.g. await fetch('/api/admin/forgot-password', ...))
    setTimeout(() => {
      setResetLoading(false);
      setView('sent');
    }, 800);
  };

  const backToLogin = () => {
    setView('login');
    setResetEmail('');
    setResetError('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-md rounded-lg border border-[#c9a84c]/40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0a00 0%, #1a1200 50%, #0f0a00 100%)',
        }}
      >
        {/* Top gold line */}
        <div className="h-1 bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c]" />

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#888] hover:text-[#c9a84c] transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/40 flex items-center justify-center mx-auto mb-4">
              <Lock size={26} className="text-[#c9a84c]" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gem size={14} className="text-[#c9a84c]" />
              <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-widest uppercase">
                Admin Portal
              </span>
              <Gem size={14} className="text-[#c9a84c]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl text-[#e8d5a0] font-bold">
              {view === 'login' && 'Secure Login'}
              {view === 'forgot' && 'Reset Password'}
              {view === 'sent' && 'Check Your Email'}
            </h2>
            <p className="font-['Lato'] text-[#666] text-sm mt-1">
              {view === 'login' && 'Saleem Nadeem Jewellers — Admin Access'}
              {view === 'forgot' && 'Enter your admin email to receive a reset link'}
              {view === 'sent' && `We've sent a reset link to ${resetEmail}`}
            </p>
          </div>

          {/* Login Form */}
          {view === 'login' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-['Lato'] text-[#888] text-xs tracking-widest uppercase block mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-[#0a0700] border border-[#c9a84c]/30 rounded-sm px-4 py-3 text-[#e8d5a0] font-['Lato'] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
                required
              />
            </div>

            <div>
              <label className="font-['Lato'] text-[#888] text-xs tracking-widest uppercase block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-[#0a0700] border border-[#c9a84c]/30 rounded-sm px-4 py-3 pr-12 text-[#e8d5a0] font-['Lato'] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#c9a84c] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-sm px-4 py-3">
                <p className="font-['Lato'] text-red-400 text-xs">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Login'
              )}
            </button>

            <button
              type="button"
              onClick={() => setView('forgot')}
              className="w-full text-center font-['Lato'] text-[#888] text-xs hover:text-[#c9a84c] transition-colors"
            >
              Forgot password?
            </button>
          </form>
          )}

          {/* Forgot Password Form */}
          {view === 'forgot' && (
            <form onSubmit={handleForgotSubmit} className="space-y-5">
              <div>
                <label className="font-['Lato'] text-[#888] text-xs tracking-widest uppercase block mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Enter your admin email"
                  className="w-full bg-[#0a0700] border border-[#c9a84c]/30 rounded-sm px-4 py-3 text-[#e8d5a0] font-['Lato'] text-sm placeholder:text-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
                  required
                />
              </div>

              {resetError && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-sm px-4 py-3">
                  <p className="font-['Lato'] text-red-400 text-xs">{resetError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={resetLoading}
                className="w-full py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {resetLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Reset Link'
                )}
              </button>

              <button
                type="button"
                onClick={backToLogin}
                className="w-full text-center font-['Lato'] text-[#888] text-xs hover:text-[#c9a84c] transition-colors"
              >
                Back to login
              </button>
            </form>
          )}

          {/* Reset Link Sent Confirmation */}
          {view === 'sent' && (
            <div className="space-y-6">
              <div className="bg-[#c9a84c]/5 border border-[#c9a84c]/20 rounded-sm px-4 py-4">
                <p className="font-['Lato'] text-[#e8d5a0] text-xs leading-relaxed">
                  If an account exists for that email, a password reset link has been sent.
                  It may take a few minutes to arrive — please check your spam folder too.
                </p>
              </div>
              <button
                type="button"
                onClick={backToLogin}
                className="w-full py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300"
              >
                Back to Login
              </button>
            </div>
          )}

          <p className="font-['Lato'] text-[#444] text-xs text-center mt-6">
            Protected access — Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
