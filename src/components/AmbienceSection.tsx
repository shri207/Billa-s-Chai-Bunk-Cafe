import React, { useState } from 'react';
import { Sun, Sunset, Moon, Sparkles, Flame } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

export const AmbienceSection: React.FC = () => {
  const [vibe, setVibe] = useState<'morning' | 'evening' | 'night'>('night');

  const vibes = {
    morning: {
      label: 'Morning Dawn (5 AM - 11 AM)',
      title: 'Cool Morning Breeze & Fresh Elaichi Steam',
      subtitle: 'Soft golden dawn sunlight filtering through green container plants as the first chai batch boils.',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1600&q=80',
      bgColor: 'from-amber-900/90 via-amber-950/70 to-black',
      glow: '#F59E0B'
    },
    evening: {
      label: 'Golden Hour Evening (4 PM - 8 PM)',
      title: 'Bustling Street Crowds & Warm Golden Glow',
      subtitle: 'Friends assembling after work and college. Laughter, sizzling Maggi pans, and cutting tea glasses in hand.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80',
      bgColor: 'from-orange-950/90 via-red-950/70 to-black',
      glow: '#D97706'
    },
    night: {
      label: 'Neon Midnight Bunk (9 PM - 2 AM)',
      title: 'Flickering Neon Signs, Edison Bulbs & Deep Talks',
      subtitle: 'Rain-wet street reflections, glowing Billa\'s Chai Bunk neon signage, and late-night street food energy.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
      bgColor: 'from-slate-950/90 via-amber-950/80 to-black',
      glow: '#FACC15'
    }
  };

  const current = vibes[vibe];

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARALLAX SCENE TRANSITION</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            CAFÉ AMBIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">EXPLORER</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            Switch between time modes to feel the changing mood of Billa's Chai Bunk Cafe!
          </p>
        </div>

        {/* Time Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => {
              playNeonClick();
              setVibe('morning');
            }}
            className={`px-6 py-3 rounded-2xl font-manrope text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer border ${
              vibe === 'morning'
                ? 'bg-[#F59E0B] text-black border-[#FACC15] shadow-[0_0_25px_rgba(245,158,11,0.6)] scale-105'
                : 'bg-[#1D1D1D] text-gray-300 border-[#333333] hover:border-[#F59E0B]'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Morning Dawn</span>
          </button>

          <button
            onClick={() => {
              playNeonClick();
              setVibe('evening');
            }}
            className={`px-6 py-3 rounded-2xl font-manrope text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer border ${
              vibe === 'evening'
                ? 'bg-[#D97706] text-white border-[#FACC15] shadow-[0_0_25px_rgba(217,119,6,0.6)] scale-105'
                : 'bg-[#1D1D1D] text-gray-300 border-[#333333] hover:border-[#D97706]'
            }`}
          >
            <Sunset className="w-4 h-4" />
            <span>Golden Evening</span>
          </button>

          <button
            onClick={() => {
              playNeonClick();
              setVibe('night');
            }}
            className={`px-6 py-3 rounded-2xl font-manrope text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer border ${
              vibe === 'night'
                ? 'bg-gradient-to-r from-[#D97706] to-red-600 text-white border-[#FACC15] shadow-[0_0_25px_rgba(250,204,21,0.6)] scale-105'
                : 'bg-[#1D1D1D] text-gray-300 border-[#333333] hover:border-[#FACC15]'
            }`}
          >
            <Moon className="w-4 h-4 text-[#FACC15]" />
            <span>Neon Night Bunk</span>
          </button>
        </div>

        {/* Atmosphere Viewer Showcase Container */}
        <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border-2 border-[#333333] shadow-2xl group">
          <img
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-1000 filter brightness-90 group-hover:scale-105"
          />

          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${current.bgColor} transition-all duration-1000`} />

          {/* Steam particle overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-24 pointer-events-none">
            <div className="flex gap-4 opacity-75">
              <div className="w-4 h-32 bg-white/30 blur-md rounded-full animate-steam-1" />
              <div className="w-6 h-40 bg-white/40 blur-md rounded-full animate-steam-2" />
              <div className="w-4 h-28 bg-white/30 blur-md rounded-full animate-steam-3" />
            </div>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-8 left-8 right-8 p-8 rounded-2xl bg-[#111111]/90 border border-[#D97706]/60 backdrop-blur-md max-w-2xl">
            <div className="flex items-center gap-2 text-[#FACC15] font-manrope text-xs font-bold uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4" />
              <span>{current.label}</span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none mb-3">
              {current.title}
            </h3>

            <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed">
              {current.subtitle}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
