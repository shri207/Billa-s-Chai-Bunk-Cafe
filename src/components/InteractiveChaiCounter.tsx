import React, { useState } from 'react';
import { Coffee, Flame, RefreshCw, Volume2, Sparkles, Award } from 'lucide-react';
import { playChaiPourSound, playNeonClick } from '../utils/audio';

export const InteractiveChaiCounter: React.FC = () => {
  const [fillPercent, setFillPercent] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const [totalPouredCount, setTotalPouredCount] = useState(128450);
  const [filledGlassesCount, setFilledGlassesCount] = useState(0);

  const handlePourChai = () => {
    if (isPouring) return;

    setIsPouring(true);
    playChaiPourSound(2200);

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setIsPouring(false);
        setTotalPouredCount((prev) => prev + 1);
        setFilledGlassesCount((prev) => prev + 1);
      }
      setFillPercent(current);
    }, 100);
  };

  const handleReset = () => {
    playNeonClick();
    setFillPercent(0);
  };

  return (
    <section id="pour-chai" className="py-24 bg-[#161616] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#1D1D1D] border-2 border-[#D97706]/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#FACC15] text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
                <Coffee className="w-3.5 h-3.5" />
                <span>INTERACTIVE BUNK SIMULATOR</span>
              </div>

              <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
                POUR YOUR VIRTUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">CUTTING CHAI</span>
              </h2>

              <p className="font-manrope text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                Click the button below to stream hot masala chai into the cutting tea glass! Watch the glass fill up, hear the kettle pour audio, and see the steam rise.
              </p>

              {/* Total Poured Badge */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#333333] mb-8 flex items-center justify-between">
                <div>
                  <span className="font-manrope text-xs font-bold text-gray-400 uppercase tracking-widest block">
                    Global Visitor Chai Counter
                  </span>
                  <div className="font-bebas text-4xl text-[#FACC15] tracking-wider mt-1">
                    {totalPouredCount.toLocaleString()} <span className="text-sm font-manrope text-gray-400">CUPS POURED</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-manrope text-xs text-gray-400 font-bold block">Your Session:</span>
                  <span className="font-bebas text-2xl text-emerald-400">{filledGlassesCount} Glass{filledGlassesCount === 1 ? '' : 'es'}</span>
                </div>
              </div>

              {/* Interactive Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handlePourChai}
                  disabled={isPouring || fillPercent === 100}
                  className={`px-8 py-4 rounded-2xl font-manrope font-extrabold text-base sm:text-lg transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-xl ${
                    fillPercent === 100
                      ? 'bg-emerald-600 text-white cursor-not-allowed border border-emerald-400'
                      : isPouring
                      ? 'bg-[#D97706] text-white animate-pulse'
                      : 'bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-black hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.6)]'
                  }`}
                >
                  <Coffee className="w-6 h-6" />
                  <span>
                    {fillPercent === 100
                      ? '☕ Chai Glass Full! Enjoy!'
                      : isPouring
                      ? 'Pouring Hot Chai...'
                      : 'POUR FRESH CHAI ☕'}
                  </span>
                </button>

                {fillPercent > 0 && (
                  <button
                    onClick={handleReset}
                    disabled={isPouring}
                    className="p-4 rounded-2xl bg-[#2A2A2A] border border-[#3A3A3A] text-gray-300 hover:text-white transition-colors cursor-pointer"
                    title="Empty Glass for Another Cup"
                  >
                    <RefreshCw className={`w-5 h-5 ${isPouring ? 'animate-spin' : ''}`} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Interactive Visual Glass Canvas */}
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#111111] border border-[#333333] relative">
              
              {/* Audio sound effect indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-amber-400 font-manrope font-semibold bg-[#1D1D1D] px-3 py-1 rounded-full border border-amber-500/30">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Web Audio Pouring SFX</span>
              </div>

              {/* Steam Particle Layer (Rises when fillPercent > 30) */}
              <div className="relative w-48 h-64 flex flex-col items-center justify-end">
                
                {fillPercent > 30 && (
                  <div className="absolute top-0 flex gap-2 justify-center w-full pointer-events-none">
                    <div className="w-2.5 h-12 rounded-full bg-amber-100/60 blur-xs animate-steam-1" />
                    <div className="w-3 h-16 rounded-full bg-orange-200/80 blur-xs animate-steam-2" />
                    <div className="w-2.5 h-10 rounded-full bg-amber-200/60 blur-xs animate-steam-3" />
                  </div>
                )}

                {/* Cutting Tea Glass Graphics */}
                <div className="relative w-36 h-48 rounded-b-3xl border-4 border-amber-500/70 bg-gradient-to-b from-amber-950/20 to-black overflow-hidden shadow-[0_0_35px_rgba(217,119,6,0.5)] flex items-end justify-center">
                  
                  {/* Liquid Fill Element */}
                  <div
                    className="w-full bg-gradient-to-t from-[#B45309] via-[#D97706] to-[#F59E0B] rounded-b-2xl transition-all duration-100 relative"
                    style={{ height: `${fillPercent}%` }}
                  >
                    {/* Liquid Top Foam Wave */}
                    {fillPercent > 0 && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-amber-200/60 blur-[1px] animate-pulse" />
                    )}
                  </div>

                  {/* Glass Texture Ridge Lines */}
                  <div className="absolute inset-y-0 left-4 w-1 bg-white/20" />
                  <div className="absolute inset-y-0 right-4 w-1 bg-white/20" />
                  <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
                  <div className="absolute top-20 left-0 right-0 h-0.5 bg-white/10" />
                </div>

                {/* Glass Percentage Label */}
                <div className="mt-4 font-bebas text-3xl text-[#FACC15] tracking-wider">
                  {fillPercent}% FILLED
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
