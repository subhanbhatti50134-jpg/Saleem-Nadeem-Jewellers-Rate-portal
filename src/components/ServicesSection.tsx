import React from 'react';
import { Gem, Scale, Sparkles, ShieldCheck, RefreshCcw, Award } from 'lucide-react';

const services = [
  {
    icon: <Gem size={32} />,
    title: 'Gold & Silver Trading',
    description:
      'Buy and sell pure 24K and 22K gold, silver biscuits and bullion at the most competitive rates in Sarafa Market, Daska.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Custom Jewellery Design',
    description:
      'Create your dream jewellery — bridal sets, rings, bangles, earrings — crafted with precision and artistry.',
  },
  {
    icon: <Scale size={32} />,
    title: 'Accurate Gold Testing',
    description:
      'State-of-the-art gold purity testing and assaying. Know the exact quality of your gold with certified results.',
  },
  {
    icon: <RefreshCcw size={32} />,
    title: 'Old Gold Exchange',
    description:
      'Exchange your old gold and silver for new pieces or cash. Fair valuations and transparent transactions guaranteed.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Certified Hallmarking',
    description:
      'All our gold and silver products are properly hallmarked and certified for authenticity and purity.',
  },
  {
    icon: <Award size={32} />,
    title: 'Investment Biscuits',
    description:
      'ARY and premium gold biscuits available for investment. Secure your wealth with internationally recognized gold bars.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0800 50%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#e8d5a0] font-bold mb-4">
            Our Services
          </h2>
          <p className="font-['Cormorant_Garamond'] text-[#9a8a6a] text-xl italic">
            Decades of trust, expertise, and excellence in precious metals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-lg border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a1200]/50 to-[#0a0a0a] hover:border-[#c9a84c]/50 transition-all duration-400 overflow-hidden"
            >
              {/* BG glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/0 to-[#c9a84c]/0 group-hover:from-[#c9a84c]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-lg" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#c9a84c] to-transparent transition-all duration-500" />

              <div className="relative z-10">
                <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[#e8d5a0] text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="font-['Lato'] text-[#888] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Banner */}
        <div className="mt-16 relative rounded-lg overflow-hidden border border-[#c9a84c]/30 p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, #1a1200 0%, #2a1f00 50%, #1a1200 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />
          <div className="relative z-10">
            <h3 className="font-['Playfair_Display'] text-3xl text-[#c9a84c] font-bold mb-4">
              Why Choose Saleem Nadeem Jewellers?
            </h3>
            <p className="font-['Cormorant_Garamond'] text-[#d4c5a0] text-xl italic mb-8 max-w-2xl mx-auto">
              Trusted by generations of families across Daska and Sialkot district for pure gold, silver, and exceptional jewellery.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['100% Pure Gold Guaranteed', 'Best Market Rates', 'Expert Craftsmanship', 'Transparent Transactions', 'Decades of Trust'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45" />
                  <span className="font-['Lato'] text-[#d4b866] text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
