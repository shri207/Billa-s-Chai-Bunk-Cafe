import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/cafeData';
import { Clock, Coffee, Utensils, Sparkles, ChevronRight } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

export const ChaiTimeline: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('evening');

  const activeStep = TIMELINE_STEPS.find((s) => s.id === activeStepId) || TIMELINE_STEPS[2];

  return (
    <section id="experience" className="py-24 bg-[#111111] relative overflow-hidden">
      
      {/* Dynamic Background Glow Based on Active Time Period */}
      <div
        className="absolute inset-0 transition-colors duration-1000 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeStep.accentGlow} 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>24-HOUR BUNK VIBES</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            CHAI EXPERIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">TIMELINE</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            From 5 AM morning joggers to 2 AM late-night storytellers, experience how the energy shifts throughout the day at Billa's Chai Bunk.
          </p>
        </div>

        {/* Horizontal Interactive Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {TIMELINE_STEPS.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => {
                  playNeonClick();
                  setActiveStepId(step.id);
                }}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col text-left relative overflow-hidden ${
                  isActive
                    ? 'bg-[#1F1F1F] border-[#FACC15] shadow-[0_0_25px_rgba(250,204,21,0.35)] -translate-y-1'
                    : 'bg-[#181818] border-[#2E2E2E] hover:border-[#D97706] hover:bg-[#1C1C1C]'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: step.accentGlow }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-manrope text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-[#111111] text-[#FACC15] border-[#FACC15]'
                        : 'bg-[#222222] text-gray-400 border-transparent'
                    }`}
                  >
                    {step.timeRange}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#FACC15] translate-x-1' : 'text-gray-600'
                    }`}
                  />
                </div>

                <div className="font-bebas text-2xl sm:text-3xl text-white tracking-wider">
                  {step.timeLabel}
                </div>

                <div className="font-manrope text-xs text-gray-400 line-clamp-1 mt-1">
                  {step.teaPairing.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Timeline Feature Showcase Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A1A1A] border-2 border-[#333333] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Info Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252525] border border-[#3A3A3A] text-gray-300 font-manrope text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>{activeStep.timeRange} Peak Atmosphere</span>
              </div>

              <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide uppercase leading-tight mb-4">
                {activeStep.title}
              </h3>

              <p className="font-manrope text-base sm:text-lg text-[#FACC15] font-semibold mb-4">
                "{activeStep.subtitle}"
              </p>

              <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                {activeStep.description}
              </p>

              {/* Recommended Pairings Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-[#222222] border border-[#333333]">
                  <div className="flex items-center gap-2 text-[#FACC15] font-manrope text-xs font-bold uppercase tracking-wider mb-1">
                    <Coffee className="w-4 h-4" />
                    <span>Recommended Tea</span>
                  </div>
                  <div className="font-manrope text-sm font-bold text-white">
                    {activeStep.teaPairing}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#222222] border border-[#333333]">
                  <div className="flex items-center gap-2 text-[#D97706] font-manrope text-xs font-bold uppercase tracking-wider mb-1">
                    <Utensils className="w-4 h-4" />
                    <span>Recommended Bite</span>
                  </div>
                  <div className="font-manrope text-sm font-bold text-white">
                    {activeStep.snackPairing}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className="relative rounded-2xl overflow-hidden border border-[#333333] shadow-2xl h-80 sm:h-96 group">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white font-manrope text-xs">
                <span className="font-bold text-[#FACC15] uppercase tracking-wider">Atmosphere Tip: </span>
                Visit during {activeStep.timeRange} for the authentic {activeStep.timeLabel} experience!
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
