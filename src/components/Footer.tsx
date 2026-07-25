import React from 'react';
import { Coffee, MapPin, Phone, Clock, Instagram, MessageCircle, Star, ArrowUp } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playNeonClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 font-manrope border-t-2 border-[#2A2A2A] relative overflow-hidden pt-16 pb-12">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-[#D97706]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222222]">
          
          {/* Col 1: Brand & Neon Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#D97706] flex items-center justify-center text-[#FACC15] shadow-[0_0_15px_rgba(217,119,6,0.4)]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-bebas text-3xl text-white tracking-wider animate-neon">
                BILLA'S CHAI BUNK
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Hyderabad's ultimate street chai destination. Where raw container street aesthetic meets warm Edison lights, fresh cutting tea, and late-night laughter.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#333333] text-gray-300 hover:text-[#FACC15] hover:border-[#FACC15] transition-colors cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#333333] text-gray-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors cursor-pointer"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#333333] text-gray-300 hover:text-[#FACC15] hover:border-[#FACC15] transition-colors cursor-pointer"
                title="Google Business Review"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-4">
              QUICK BUNK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#menu" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">☕ Signature Menu</a>
              </li>
              <li>
                <a href="#about" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">🔥 Our Chai Story</a>
              </li>
              <li>
                <a href="#experience" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">🕒 24-Hour Experience</a>
              </li>
              <li>
                <a href="#hangout" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">📸 Hangout Zone Gallery</a>
              </li>
              <li>
                <a href="#reviews" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">🧾 Customer Bill Receipts</a>
              </li>
              <li>
                <a href="#pour-chai" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">🫖 Interactive Chai Counter</a>
              </li>
              <li>
                <a href="#location" onClick={() => playNeonClick()} className="hover:text-[#FACC15] transition-colors">📍 Visit Cafe & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bunk Hours */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-4">
              OPENING HOURS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>5:00 AM – 2:00 AM (7 Days a Week)</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Early Morning Sunrise Batch: <span className="text-white font-semibold">5:00 AM – 10:00 AM</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                Late Night Bunk Session: <span className="text-white font-semibold">9:00 PM – 2:00 AM</span>
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 text-[10px] font-bold uppercase mt-2">
                ● Bike & Car Drive-Through Open
              </span>
            </div>
          </div>

          {/* Col 4: Address & Contact */}
          <div>
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-4">
              BUNK DESK CONTACT
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Presidency Colony, Pedda Bashirabad, Caton Residential Township, Bolarum, Secunderabad, Telangana 500010</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FACC15] shrink-0" />
                <a href="tel:+919876543210" className="text-white font-bold hover:underline">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} <strong>Billa's Chai Bunk Cafe</strong>. All rights reserved. Handcrafted with passion & spiced chai.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-[#1A1A1A] border border-[#333333] hover:border-[#D97706] text-gray-300 hover:text-[#FACC15] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
