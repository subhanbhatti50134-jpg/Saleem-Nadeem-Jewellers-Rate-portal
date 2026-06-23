import React, { useState, useEffect } from 'react';
import { Menu, X, Gem } from 'lucide-react';

interface NavbarProps {
  onAdminClick: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Gold Rates', id: 'rates' },
    { label: 'Collection', id: 'collection' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setCurrentPage(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      /* 
        FIXED: Changed 'bg-transparent' to a solid background structure with a responsive 
        margin-bottom (md:mb-[160px]) to naturally force your Hero section down on desktop layouts!
      */
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mb-0 md:mb-[160px] ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl border-b border-[#c9a84c]/20'
          : 'bg-[#0a0a0a] border-b border-[#c9a84c]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#f0d080] flex items-center justify-center">
              <Gem size={20} className="text-[#0a0a0a]" />
            </div>
            <div>
              <p className="font-['Playfair_Display'] text-[#c9a84c] font-bold text-sm leading-tight tracking-wider">
                SALEEM NADEEM
              </p>
              <p className="font-['Lato'] text-[#d4b866] text-xs tracking-[0.3em] uppercase">
                Jewellers
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-['Lato'] text-sm tracking-widest uppercase transition-all duration-300 hover:text-[#c9a84c] ${
                  currentPage === link.id ? 'text-[#c9a84c]' : 'text-[#d4c5a0]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onAdminClick}
              className="font-['Lato'] text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300 rounded-sm"
            >
              Admin
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-[#c9a84c]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#c9a84c]/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-['Lato'] text-sm tracking-widest uppercase text-left text-[#d4c5a0] hover:text-[#c9a84c] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onAdminClick(); setMobileOpen(false); }}
            className="font-['Lato'] text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300 rounded-sm text-left w-fit"
          >
            Admin Portal
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;