import React from 'react';
import { Coffee, MapPin, Sparkles, Flame, Clock, Navigation } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

interface HeroProps {
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111111]">
      
      {/* Background Image Container with Multi-layer Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Billa's Chai Bunk Cafe Street Night"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-60 contrast-125"
        />
        
        {/* Dark Charcoal & Orange Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.25)_0%,transparent_70%)]" />

        {/* Rain Wet Asphalt & Neon Glow Simulation Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent pointer-events-none" />
      </div>

      {/* Hanging Edison Bulbs Swing Visual */}
      <div className="absolute top-0 left-12 md:left-28 z-10 pointer-events-none hidden sm:block animate-swing">
        <div className="w-0.5 h-36 md:h-48 bg-gradient-to-b from-gray-700 via-amber-900 to-[#F59E0B]" />
        <div className="w-8 h-8 -ml-3.5 rounded-full bg-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,1)] border border-[#FFF7ED]" />
      </div>

      <div className="absolute top-0 right-16 md:right-36 z-10 pointer-events-none hidden md:block animate-swing" style={{ animationDelay: '1.5s' }}>
        <div className="w-0.5 h-28 md:h-40 bg-gradient-to-b from-gray-700 via-amber-900 to-[#FACC15]" />
        <div className="w-6 h-6 -ml-2.5 rounded-full bg-[#FACC15] shadow-[0_0_25px_rgba(250,204,21,1)] border border-[#FFF7ED]" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Top Neon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/90 border border-[#D97706]/60 text-[#FACC15] font-manrope text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(217,119,6,0.35)] backdrop-blur-md animate-float">
          <Sparkles className="w-4 h-4 text-[#FACC15] animate-spin" style={{ animationDuration: '6s' }} />
          <span>HYDERABAD'S MOST TRENDY LATE NIGHT CHAI BUNK</span>
          <Flame className="w-4 h-4 text-[#D97706]" />
        </div>

        {/* Main Flickering Neon Title */}
        <h1 className="heading-xl font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-none mb-6 text-shadow neon-glow">
          BREWING CONVERSATIONS{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] animate-neon text-glow-amber">
            SINCE SUNRISE
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-manrope text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed mb-10 text-shadow">
          Every cup tells a story. Great chai, delicious snacks, and unforgettable evenings with friends under warm lights.
        </p>

        {/* Visual Tea Glass with Realistic Steam Animation */}
        <div className="relative w-32 h-36 mx-auto mb-10 flex flex-col items-center justify-end">
          
          {/* Steam Particles Rising */}
          <div className="absolute top-0 flex gap-2 justify-center w-full pointer-events-none">
            <div className="w-2 h-8 rounded-full bg-gradient-to-t from-amber-200/60 to-transparent blur-xs animate-steam-1" />
            <div className="w-2.5 h-10 rounded-full bg-gradient-to-t from-orange-200/80 to-transparent blur-xs animate-steam-2" />
            <div className="w-2 h-7 rounded-full bg-gradient-to-t from-amber-100/60 to-transparent blur-xs animate-steam-3" />
          </div>

          {/* Cutting Tea Glass Graphics */}
          <div className="relative w-24 h-28 rounded-b-2xl border-2 border-amber-500/80 bg-gradient-to-b from-amber-950/40 via-amber-900/90 to-[#B45309] overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.6)] flex items-end justify-center">
            {/* Liquid Level */}
            <div className="w-full h-[75%] bg-gradient-to-t from-[#B45309] via-[#D97706] to-[#F59E0B] rounded-b-xl relative">
              {/* Surface Foam Bubble */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-200/40 blur-[1px]" />
            </div>
            {/* Glass Ridge lines */}
            <div className="absolute inset-y-0 left-3 w-0.5 bg-white/20" />
            <div className="absolute inset-y-0 right-3 w-0.5 bg-white/20" />
          </div>
          <span className="font-manrope text-[11px] font-bold text-[#FACC15] uppercase tracking-wider mt-2">
            Cutting Chai • Hot & Fresh
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => {
              playNeonClick();
              onOrderNow();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-black font-manrope font-extrabold text-lg shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:shadow-[0_0_45px_rgba(250,204,21,0.9)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            <Coffee className="w-6 h-6 fill-black" />
            <span>☕ ORDER CHAI & SNACKS NOW</span>
          </button>

          <a
            href="#location"
            onClick={() => playNeonClick()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1D1D1D]/90 border-2 border-[#D97706] hover:bg-[#D97706]/20 text-[#FFF7ED] hover:text-[#FACC15] font-manrope font-bold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(217,119,6,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <MapPin className="w-6 h-6 text-[#FACC15]" />
            <span>📍 VISIT BUNK CAFE</span>
          </a>
        </div>

        {/* Quick Info Ticker Bar */}
        <div className="mt-14 pt-6 border-t border-[#2A2A2A] flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-gray-300 font-manrope">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FACC15]" />
            <span><strong>Timing:</strong> 5:00 AM – 2:00 AM (7 Days)</span>
          </div>
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-[#FACC15]" />
            <span><strong>Location:</strong> Pedda Bashirabad, Secunderabad</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#D97706]" />
            <span><strong>Drive-Through:</strong> Bike & Car Service</span>
          </div>
        </div>

      </div>
    </section>
  );
};
