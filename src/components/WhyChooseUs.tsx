import React from 'react';
import { WHY_US_FEATURES } from '../data/cafeData';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#161616] relative overflow-hidden">
      
      {/* Background Neon Grid Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOWING SIGNBOARDS</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">BILLA'S CHAI BUNK</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            Designed like authentic glowing industrial street signboards. Everything you need for an unforgettable tea hangout.
          </p>
        </div>

        {/* Industrial Glowing Signboards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative p-8 rounded-3xl bg-[#1A1A1A] border-2 border-[#333333] hover:border-[#FACC15] transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] group flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Metal Rivets */}
              <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-gray-600 border border-black shadow-inner" />
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gray-600 border border-black shadow-inner" />
              <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-gray-600 border border-black shadow-inner" />
              <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-gray-600 border border-black shadow-inner" />

              <div>
                {/* Glowing Icon Header */}
                <div
                  className="w-16 h-16 rounded-2xl bg-[#242424] border border-[#3A3A3A] flex items-center justify-center text-3xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: `0 0 20px ${feature.neonColor}30`
                  }}
                >
                  <span>{feature.icon}</span>
                </div>

                <h3
                  className="font-bebas text-3xl text-white tracking-wide uppercase mb-3 transition-colors"
                  style={{
                    textShadow: `0 0 10px ${feature.neonColor}40`
                  }}
                >
                  {feature.title}
                </h3>

                <p className="font-manrope text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Neon Accent Line */}
              <div
                className="w-full h-1 rounded-full mt-6 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${feature.neonColor} 0%, transparent 100%)`
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
