import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #080500 50%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#e8d5a0] font-bold mb-4">
            Contact Us
          </h2>
          <p className="font-['Cormorant_Garamond'] text-[#9a8a6a] text-xl italic">
            Visit us at Sarafa Market or reach out directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="flex gap-5 p-6 rounded-lg border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a1200]/40 to-transparent hover:border-[#c9a84c]/40 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
                <MapPin size={20} className="text-[#c9a84c]" />
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] text-[#d4b866] font-semibold text-lg mb-2">
                  Our Location
                </h4>
                <p className="font-['Lato'] text-[#aaa] text-sm leading-relaxed">
                  Sarafa Market, Main Bazaar<br />
                  Daska, District Sialkot<br />
                  Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* Saleem Bhatti */}
<div className="flex gap-5 p-6 rounded-lg border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a1200]/40 to-transparent hover:border-[#c9a84c]/40 transition-all duration-300">
  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
    <Phone size={20} className="text-[#c9a84c]" />
  </div>
  <div>
    <h4 className="font-['Playfair_Display'] text-[#d4b866] font-semibold text-lg mb-2">
      Saleem Bhatti
    </h4>
    <a
      href="tel:03226100700"
      className="font-['Lato'] text-[#aaa] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2"
    >
      <span>0322-6100700</span>
    </a>
    <a
      href="https://wa.me/923226100700"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 mt-2 font-['Lato'] text-[#25D366] text-xs hover:text-[#1da851] transition-colors"
    >
      <MessageCircle size={13} />
      WhatsApp
    </a>
  </div>
</div>

{/* Nadeem Bhatti */}
<div className="flex gap-5 p-6 rounded-lg border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a1200]/40 to-transparent hover:border-[#c9a84c]/40 transition-all duration-300">
  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
    <Phone size={20} className="text-[#c9a84c]" />
  </div>
  <div>
    <h4 className="font-['Playfair_Display'] text-[#d4b866] font-semibold text-lg mb-2">
      Nadeem Bhatti
    </h4>
    <a
      href="tel:03226100800"
      /* FIXED: Added 'flex items-center gap-2' to push WhatsApp onto its own row */
      className="font-['Lato'] text-[#aaa] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2"
    >
      <span>0322-6100800</span>
    </a>
    <a
      href="https://wa.me/923226100800"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 mt-2 font-['Lato'] text-[#25D366] text-xs hover:text-[#1da851] transition-colors"
    >
      <MessageCircle size={13} />
      WhatsApp
    </a>
  </div>
</div>
            {/* Hours */}
            <div className="flex gap-5 p-6 rounded-lg border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a1200]/40 to-transparent hover:border-[#c9a84c]/40 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
                <Clock size={20} className="text-[#c9a84c]" />
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] text-[#d4b866] font-semibold text-lg mb-2">
                  Business Hours
                </h4>
                <div className="font-['Lato'] text-[#aaa] text-sm space-y-1">
                  <p>Monday – Saturday: <span className="text-[#c9a84c]">9:00 AM – 9:00 PM</span></p>
                  <p>Sunday: <span className="text-[#c9a84c]">10:00 AM – 6:00 PM</span></p>
                  <p className="text-[#666] text-xs mt-2">* Timings may vary on public holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="flex flex-col gap-6">
            {/* Decorative Map Placeholder with Location */}
            <div className="relative rounded-lg overflow-hidden border border-[#c9a84c]/30 bg-[#0f0900] flex-1 min-h-[300px] flex flex-col items-center justify-center p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, #1a1200 0%, #0f0900 100%)',
              }}
            >
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 rounded-full border border-[#c9a84c]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-48 h-48 rounded-full border border-[#c9a84c]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-32 h-32 rounded-full border border-[#c9a84c]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border-2 border-[#c9a84c] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[#c9a84c] text-2xl font-bold mb-2">
                  Saleem Nadeem Jewellers
                </h3>
                <p className="font-['Lato'] text-[#aaa] text-sm mb-1">Sarafa Market, Main Bazaar</p>
                <p className="font-['Lato'] text-[#aaa] text-sm mb-6">Daska, Sialkot, Punjab</p>
                <a
                  href="https://maps.google.com/?q=Sarafa+Market+Main+Bazaar+Daska+Sialkot+Punjab+Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-3 bg-[#c9a84c] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[#f0d080] transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="rounded-lg border border-[#c9a84c]/20 p-7 text-center"
              style={{
                background: 'linear-gradient(135deg, #1a1200 0%, #0f0900 100%)',
              }}
            >
              <h4 className="font-['Playfair_Display'] text-[#c9a84c] text-xl font-bold mb-3">
                Ready to Visit?
              </h4>
              <p className="font-['Lato'] text-[#888] text-sm mb-5 leading-relaxed">
                Experience the finest gold and silver at Sarafa Market. Our experts are ready to assist you with all your jewellery needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:03226100700"
                  className="px-6 py-3 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#0a0a0a] font-['Lato'] text-sm font-bold tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-[#c9a84c]/30 transition-all"
                >
                  Call Saleem
                </a>
                <a
                  href="tel:03226100800"
                  className="px-6 py-3 border border-[#c9a84c]/50 text-[#c9a84c] font-['Lato'] text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[#c9a84c]/10 transition-all"
                >
                  Call Nadeem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
