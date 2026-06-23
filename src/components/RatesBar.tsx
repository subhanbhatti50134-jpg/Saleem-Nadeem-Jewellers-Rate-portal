import React from 'react';
import { useRates } from '../context/RatesContext';
import { TrendingUp, Clock } from 'lucide-react';

const RatesBar: React.FC = () => {
  const { rates } = useRates();

  const formatPrice = (price: number) =>
    price.toLocaleString('en-PK');

  const rateItems = [
    { label: '24K Gold', value: rates.gold24k, unit: 'per tola', color: '#f0d080' },
    { label: 'Laboratory Rate', value: rates.labRate, unit: 'per tola', color: '#c9a84c' },
    { label: 'Silver Rate', value: rates.silver, unit: 'per tola', color: '#d0d0d0' },
    { label: '22K Gold', value: rates.gold22k, unit: 'per tola', color: '#e8c55a' },
  ];

  return (
    /* 
      CHANGED: Added 'hidden lg:block' to hide the entire component on mobile 
      and only show it on laptop/desktop layouts.
    */
    <div className="hidden lg:block lg:fixed lg:top-[74px] left-0 w-full z-40 bg-gradient-to-r from-[#0a0a0a] via-[#1a1200] to-[#0a0a0a] border-t border-b border-[#c9a84c]/30">
      {/* Ticker top line */}
      <div className="bg-[#c9a84c] py-1 px-4 flex items-center gap-2">
        <TrendingUp size={12} className="text-[#0a0a0a]" />
        <span className="font-['Lato'] text-[#0a0a0a] text-xs font-bold tracking-widest uppercase">
          Live Market Rates — Sarafa Market, Daska
        </span>
        <span className="ml-auto flex items-center gap-1 font-['Lato'] text-[#0a0a0a] text-xs">
          <Clock size={11} />
          Updated: {rates.lastUpdated}
        </span>
      </div>

      {/* Rates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rateItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center py-3 px-4 rounded border border-[#c9a84c]/20 bg-[#ffffff08] hover:bg-[#c9a84c]/10 transition-all duration-300 group"
            >
              <span
                className="font-['Lato'] text-xs tracking-widest uppercase mb-1"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
              <span
                className="font-['Playfair_Display'] text-xl font-bold"
                style={{ color: item.color }}
              >
                ₨ {formatPrice(item.value)}
              </span>
              <span className="font-['Lato'] text-[#888] text-xs mt-1">{item.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatesBar;