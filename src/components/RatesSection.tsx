import React from 'react';
import { useRates } from '../context/RatesContext';
import { TrendingUp, Star, Layers, Beaker } from 'lucide-react';

const RatesSection: React.FC = () => {
  const { rates } = useRates();

  const formatPrice = (price: number) => price.toLocaleString('en-PK');

  const rateCards = [
    {
      label: '24K Gold',
      sublabel: 'Pure Gold',
      value: rates.gold24k,
      icon: <Star size={28} className="text-[#f0d080]" />,
      gradient: 'from-[#3d2a00] to-[#1a1200]',
      border: 'border-[#c9a84c]/40',
      color: '#f0d080',
      description: 'Investment grade pure gold rate per tola',
    },
    {
      label: 'Laboratory Rate',
      sublabel: 'Certified Lab Rate',
      value: rates.labRate,
      icon: <Beaker size={28} className="text-[#c9a84c]" />,
      gradient: 'from-[#2a1f00] to-[#130e00]',
      border: 'border-[#c9a84c]/30',
      color: '#c9a84c',
      description: 'Official laboratory certified gold rate per tola',
    },
    {
      label: 'Silver Rate',
      sublabel: 'Pure Silver',
      value: rates.silver,
      icon: <Layers size={28} className="text-[#d0d0d0]" />,
      gradient: 'from-[#1a1a1a] to-[#0d0d0d]',
      border: 'border-[#aaa]/30',
      color: '#d0d0d0',
      description: 'Pure silver rate per tola',
    },
    {
      label: '22K Gold',
      sublabel: 'Jewellery Gold',
      value: rates.gold22k,
      icon: <TrendingUp size={28} className="text-[#e8c55a]" />,
      gradient: 'from-[#301f00] to-[#160e00]',
      border: 'border-[#e8c55a]/30',
      color: '#e8c55a',
      description: 'Standard jewellery grade gold rate per tola',
    },
  ];

  return (
    <section
      id="rates"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0900 50%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
              Daily Updated
            </span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#e8d5a0] font-bold mb-4">
            Today's Market Rates
          </h2>
          <p className="font-['Cormorant_Garamond'] text-[#9a8a6a] text-xl italic">
            Live rates updated by Sarafa Market — Daska
          </p>
          <p className="font-['Lato'] text-[#666] text-sm mt-2">
            Last Updated: {rates.lastUpdated}
          </p>
        </div>

        {/* Rate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rateCards.map((card) => (
            <div
              key={card.label}
              className={`relative rounded-lg bg-gradient-to-br ${card.gradient} border ${card.border} p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group overflow-hidden`}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${card.color}15 0%, transparent 70%)`,
                }}
              />

              <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10">
                {card.icon}
              </div>

              <span
                className="font-['Lato'] text-xs tracking-widest uppercase mb-1"
                style={{ color: card.color }}
              >
                {card.label}
              </span>
              <span className="font-['Cormorant_Garamond'] text-[#888] text-sm italic mb-3">
                {card.sublabel}
              </span>

              <div
                className="font-['Playfair_Display'] text-3xl font-bold mb-1"
                style={{ color: card.color }}
              >
                ₨ {formatPrice(card.value)}
              </div>
              <div className="font-['Lato'] text-[#666] text-xs mb-4">per tola</div>

              <div className="h-px w-full bg-white/10 mb-4" />
              <p className="font-['Lato'] text-[#777] text-xs leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="font-['Lato'] text-[#555] text-xs tracking-wide">
            * Rates are indicative and may vary. Please contact us for the latest confirmed rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
