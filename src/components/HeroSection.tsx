import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToRates = () => {
    document.getElementById('rates')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1100 40%, #0d0900 70%, #0a0a0a 100%)',
      }}
    >
      {/* Decorative gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#c9a84c]/30" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-[#c9a84c]/30" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-[#c9a84c]/30" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-[#c9a84c]/30" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Est. badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#c9a84c]" />
          <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            Est. Sarafa Market, Daska
          </span>
          <div className="h-px w-12 bg-[#c9a84c]" />
        </div>

        {/* Main Title */}
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          <span className="text-[#c9a84c]">SALEEM</span>
          <br />
          <span className="text-[#e8d5a0] italic font-normal text-4xl sm:text-5xl lg:text-6xl">
            Nadeem
          </span>
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)',
            }}
          >
            JEWELLERS
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a84c]" />
          <div className="w-2 h-2 bg-[#c9a84c] rotate-45" />
          <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
          <div className="w-2 h-2 bg-[#c9a84c] rotate-45" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </div>

        {/* Tagline */}
        <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#d4c5a0] italic font-light mb-3">
          Where Elegance Meets Tradition
        </p>
        <p className="font-['Lato'] text-[#9a8a6a] text-sm sm:text-base tracking-widest uppercase mb-12">
          Pure Gold · Fine Silver · Exquisite Jewellery
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToCollection}
            className="group relative px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all duration-300 hover:scale-105"
          >
            View Collection
          </button>
          <button
            onClick={scrollToRates}
            className="px-10 py-4 border border-[#c9a84c]/60 text-[#c9a84c] font-['Lato'] text-sm font-bold tracking-[0.3em] uppercase rounded-sm hover:bg-[#c9a84c]/10 transition-all duration-300"
          >
            Today's Rates
          </button>
        </div>

        {/* Contact strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:03226100700"
            className="flex items-center gap-2 text-[#c9a84c] hover:text-[#f0d080] transition-colors font-['Lato'] text-sm tracking-wide"
          >
            <Phone size={14} />
            <span>0322-6100700 (Saleem)</span>
          </a>
          <span className="hidden sm:block text-[#c9a84c]/30">|</span>
          <a
            href="tel:03226100800"
            className="flex items-center gap-2 text-[#c9a84c] hover:text-[#f0d080] transition-colors font-['Lato'] text-sm tracking-wide"
          >
            <Phone size={14} />
            <span>0322-6100800 (Nadeem)</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToRates}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
