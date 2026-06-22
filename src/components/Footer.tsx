import React from 'react';
import { Gem, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050300] border-t border-[#c9a84c]/20 pt-16 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#f0d080] flex items-center justify-center">
                <Gem size={18} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="font-['Playfair_Display'] text-[#c9a84c] font-bold text-base leading-tight tracking-wider">
                  SALEEM NADEEM
                </p>
                <p className="font-['Lato'] text-[#d4b866] text-xs tracking-[0.3em] uppercase">
                  Jewellers
                </p>
              </div>
            </div>
            <p className="font-['Cormorant_Garamond'] text-[#888] text-base italic leading-relaxed mb-4">
              "Where Elegance Meets Tradition"
            </p>
            <p className="font-['Lato'] text-[#666] text-xs leading-relaxed">
              Trusted jewellers in Sarafa Market, Daska. Specializing in pure gold, silver, investment biscuits, and custom jewellery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#c9a84c] text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Gold & Silver Rates', id: 'rates' },
                { label: 'Our Collection', id: 'collection' },
                { label: 'Our Services', id: 'services' },
                { label: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-['Lato'] text-[#777] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#c9a84c] text-lg font-semibold mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="font-['Lato'] text-[#777] text-sm leading-relaxed">
                  Sarafa Market, Main Bazaar,<br />Daska, Sialkot, Punjab
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03226100700" className="font-['Lato'] text-[#777] text-sm hover:text-[#c9a84c] transition-colors block">
                    0322-6100700 (Saleem Bhatti)
                  </a>
                  <a href="tel:03226100800" className="font-['Lato'] text-[#777] text-sm hover:text-[#c9a84c] transition-colors block">
                    0322-6100800 (Nadeem Bhatti)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Lato'] text-[#555] text-xs">
            © {new Date().getFullYear()} Saleem Nadeem Jewellers. All Rights Reserved.
          </p>
          <p className="font-['Lato'] text-[#555] text-xs flex items-center gap-1">
            Sarafa Market, Daska — Premium Jewellers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
