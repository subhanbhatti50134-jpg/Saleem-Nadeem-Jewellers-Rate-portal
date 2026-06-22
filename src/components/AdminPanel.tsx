import React, { useState } from 'react';
import { useRates, Rates } from '../context/RatesContext';
import { useAuth } from '../context/AuthContext';
import { X, Save, LogOut, TrendingUp, Gem, RefreshCw, CheckCircle } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const { rates, updateRates } = useRates();
  const { logout } = useAuth();

  const [formData, setFormData] = useState<Omit<Rates, 'lastUpdated'>>({
    gold24k: rates.gold24k,
    labRate: rates.labRate,
    silver: rates.silver,
    gold22k: rates.gold22k,
  });

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof Omit<Rates, 'lastUpdated'>, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num > 0) {
      setFormData((prev) => ({ ...prev, [field]: num }));
      setError('');
    } else if (value === '') {
      setFormData((prev) => ({ ...prev, [field]: 0 }));
    }
  };

  const handleSave = () => {
    if (Object.values(formData).some((v) => v <= 0)) {
      setError('All rates must be greater than 0.');
      return;
    }
    updateRates({ ...formData, lastUpdated: '' });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  const rateFields = [
    {
      key: 'gold24k' as const,
      label: '24K Gold Rate',
      sublabel: 'Pure Gold — Per Tola',
      color: '#f0d080',
      placeholder: 'e.g. 275000',
    },
    {
      key: 'labRate' as const,
      label: 'Laboratory Rate',
      sublabel: 'Certified Lab Rate — Per Tola',
      color: '#c9a84c',
      placeholder: 'e.g. 271000',
    },
    {
      key: 'silver' as const,
      label: 'Silver Rate',
      sublabel: 'Pure Silver — Per Tola',
      color: '#d0d0d0',
      placeholder: 'e.g. 3200',
    },
    {
      key: 'gold22k' as const,
      label: '22K Gold Rate',
      sublabel: 'Jewellery Gold — Per Tola',
      color: '#e8c55a',
      placeholder: 'e.g. 252000',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-lg border border-[#c9a84c]/40 overflow-hidden my-8"
        style={{
          background: 'linear-gradient(135deg, #0f0a00 0%, #1a1200 50%, #0f0a00 100%)',
        }}
      >
        {/* Top gold line */}
        <div className="h-1 bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c]" />

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#c9a84c]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
              <TrendingUp size={18} className="text-[#c9a84c]" />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] text-[#e8d5a0] text-xl font-bold">
                Admin Panel
              </h2>
              <p className="font-['Lato'] text-[#666] text-xs tracking-wide">
                Saleem Nadeem Jewellers — Rate Management
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 font-['Lato'] text-xs text-[#888] hover:text-red-400 transition-colors px-3 py-2 border border-[#333] hover:border-red-500/30 rounded-sm"
            >
              <LogOut size={14} />
              Logout
            </button>
            <button
              onClick={onClose}
              className="text-[#888] hover:text-[#c9a84c] transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* Current Rates Info */}
          <div className="mb-8 p-4 rounded-sm bg-[#ffffff05] border border-[#c9a84c]/10">
            <div className="flex items-center gap-2 mb-2">
              <Gem size={14} className="text-[#c9a84c]" />
              <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-widest uppercase">
                Last Updated
              </span>
            </div>
            <p className="font-['Lato'] text-[#666] text-sm">{rates.lastUpdated}</p>
          </div>

          {/* Rate Fields */}
          <div className="space-y-5 mb-6">
            {rateFields.map((field) => (
              <div key={field.key} className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:w-1/2">
                  <h4
                    className="font-['Playfair_Display'] text-base font-semibold"
                    style={{ color: field.color }}
                  >
                    {field.label}
                  </h4>
                  <p className="font-['Lato'] text-[#666] text-xs mt-0.5">{field.sublabel}</p>
                </div>
                <div className="sm:w-1/2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-['Lato'] text-[#888] text-sm">
                      ₨
                    </span>
                    <input
                      type="number"
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      min="1"
                      className="w-full bg-[#0a0700] border border-[#c9a84c]/30 rounded-sm pl-8 pr-4 py-3 text-[#e8d5a0] font-['Lato'] text-sm placeholder:text-[#333] focus:outline-none focus:border-[#c9a84c] transition-colors"
                      style={{ borderColor: `${field.color}30` }}
                      onFocus={(e) => (e.target.style.borderColor = field.color)}
                      onBlur={(e) => (e.target.style.borderColor = `${field.color}30`)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#c9a84c]/10 mb-6" />

          {/* Error */}
          {error && (
            <div className="mb-4 bg-red-900/20 border border-red-500/30 rounded-sm px-4 py-3">
              <p className="font-['Lato'] text-red-400 text-xs">{error}</p>
            </div>
          )}

          {/* Success */}
          {saved && (
            <div className="mb-4 bg-green-900/20 border border-green-500/30 rounded-sm px-4 py-3 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <p className="font-['Lato'] text-green-400 text-xs">
                Rates updated successfully! Changes are now live on the website.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300"
            >
              <Save size={16} />
              Save Rates
            </button>
            <button
              onClick={() => {
                setFormData({
                  gold24k: rates.gold24k,
                  labRate: rates.labRate,
                  silver: rates.silver,
                  gold22k: rates.gold22k,
                });
                setError('');
              }}
              className="flex items-center justify-center gap-2 px-5 py-3.5 border border-[#c9a84c]/40 text-[#c9a84c] font-['Lato'] text-sm tracking-widest uppercase rounded-sm hover:bg-[#c9a84c]/10 transition-all"
            >
              <RefreshCw size={14} />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
