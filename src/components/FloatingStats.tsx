import React from 'react';
import { Star, Heart, Coffee, Moon } from 'lucide-react';

export const FloatingStats: React.FC = () => {
  const stats = [
    {
      icon: Star,
      iconColor: 'text-[#FACC15]',
      glowColor: 'shadow-[0_0_20px_rgba(250,204,21,0.35)]',
      value: '4.7 ★',
      label: 'Rating on Google',
      subtext: '1,200+ Verified Customer Reviews'
    },
    {
      icon: Heart,
      iconColor: 'text-[#EF4444]',
      glowColor: 'shadow-[0_0_20px_rgba(239,68,68,0.35)]',
      value: '33K+',
      label: 'Happy Reviews & Regulars',
      subtext: 'Loved by Students, Bikers & Families'
    },
    {
      icon: Coffee,
      iconColor: 'text-[#F59E0B]',
      glowColor: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
      value: '250,000+',
      label: 'Cups of Hot Chai Served',
      subtext: 'Brewed fresh with whole spices'
    },
    {
      icon: Moon,
      iconColor: 'text-[#3B82F6]',
      glowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.35)]',
      value: '5 AM – 2 AM',
      label: 'Open Early Till Late Midnight',
      subtext: 'Late Night Hangout Destination'
    }
  ];

  return (
    <section className="relative z-30 -mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-[#1A1A1A]/95 border border-[#333333] industrial-edge hover:border-[#D97706] transition-all duration-300 ${stat.glowColor} hover:-translate-y-1 group relative overflow-hidden backdrop-blur-md`}
            >
              {/* Subtle top metallic accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D97706] via-[#FACC15] to-[#B45309]" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-[#252525] border border-[#3A3A3A] group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className="text-[10px] uppercase font-manrope font-bold text-gray-400 tracking-widest px-2 py-1 rounded bg-[#111111] border border-[#2A2A2A]">
                  Bunk Stat
                </span>
              </div>

              <div className="font-anton text-4xl sm:text-5xl text-[#FACC15] tracking-wider transition-colors mb-1">
                {stat.value}
              </div>

              <div className="font-manrope text-sm font-bold text-gray-200 mb-1">
                {stat.label}
              </div>

              <p className="font-manrope text-xs text-gray-400">
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
