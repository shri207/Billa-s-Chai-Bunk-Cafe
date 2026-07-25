import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShoppingBag, ExternalLink } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

interface LocationSectionProps {
  onOrderOnline: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOrderOnline }) => {
  return (
    <section id="location" className="py-24 bg-[#111111] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND THE CHAI BUNK</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            VISIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">BILLA'S CHAI BUNK</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            Located in the heart of Pedda Bashirabad, Secunderabad. Come over for hot chai under the Edison canopy!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: Address, Hours, & Contact Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1D1D1D] border-2 border-[#333333] shadow-2xl flex flex-col justify-between">
            
            <div>
              {/* Status Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#333333] mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-manrope text-sm font-extrabold text-white uppercase tracking-wider">
                    🔴 Open Bunk • 5:00 AM – 2:00 AM
                  </span>
                </div>
                <span className="text-xs font-manrope font-bold text-[#FACC15] bg-[#111111] px-3 py-1 rounded-full border border-[#D97706]/40">
                  Secunderabad
                </span>
              </div>

              {/* Full Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#282828] text-[#FACC15] shrink-0 border border-[#3A3A3A]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-1">
                    EXACT CAFE LOCATION
                  </h3>
                  <p className="font-manrope text-sm text-gray-300 leading-relaxed font-medium">
                    Presidency Colony, Pedda Bashirabad, Caton Residential Township, Bolarum, Secunderabad, Telangana 500010
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#282828] text-[#D97706] shrink-0 border border-[#3A3A3A]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-1">
                    BUNK HOURS
                  </h3>
                  <p className="font-manrope text-sm text-gray-300 font-semibold">
                    Monday – Sunday: <span className="text-[#FACC15]">5:00 AM – 2:00 AM</span>
                  </p>
                  <p className="font-manrope text-xs text-gray-400 mt-0.5">
                    Early Morning Riders & Late Night Food Explorers Welcome!
                  </p>
                </div>
              </div>

              {/* Hotline Contact */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[#282828] text-emerald-400 shrink-0 border border-[#3A3A3A]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-1">
                    BUNK DESK HOTLINE
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="font-manrope text-sm text-[#FACC15] font-bold hover:underline"
                  >
                    +91 98765 43210 / +91 91234 56789
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#333333]">
              <a
                href="https://maps.google.com/?q=Presidency+Colony+Pedda+Bashirabad+Bolarum+Secunderabad"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playNeonClick()}
                className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#F59E0B] hover:to-[#D97706] text-white font-manrope font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="tel:+919876543210"
                onClick={() => playNeonClick()}
                className="py-3.5 px-5 rounded-2xl bg-[#2A2A2A] hover:bg-[#333333] text-white font-manrope font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-[#3A3A3A]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Desk</span>
              </a>

              <button
                onClick={() => {
                  playNeonClick();
                  onOrderOnline();
                }}
                className="py-3.5 px-5 rounded-2xl bg-[#111111] hover:bg-[#1D1D1D] text-[#FACC15] font-manrope font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-[#D97706]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Tray</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dark Mode Interactive Map View Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#333333] shadow-2xl h-96 lg:h-auto min-h-[400px]">
            <iframe
              title="Billa's Chai Bunk Cafe Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.839846387258!2d78.5028!3d17.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f37a5b3a4a7%3A0x1d3e8e2e2a2a2a2a!2sPedda%20Bashirabad%2C%20Secunderabad%2C%20Telangana%20500010!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(125%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#111111]/90 border border-[#D97706] backdrop-blur-md shadow-xl text-white font-manrope text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FACC15]" />
              <div>
                <div className="font-bold">Billa's Chai Bunk Cafe</div>
                <div className="text-[10px] text-gray-400">Presidency Colony • Secunderabad</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
