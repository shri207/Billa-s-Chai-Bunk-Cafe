import React from 'react';
import { Flame, CheckCircle2, Clock, Users, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    "Hand-pounded whole spices brewed fresh every 15 minutes",
    "Choice of traditional clay Kulhad or classic cutting tea glasses",
    "Cozy open-air container seating with ambient Edison lighting",
    "Late night food menu with spicy Maggi, burgers & thickshakes",
    "Welcoming space for students, families, bikers & night owls"
  ];

  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Lifestyle Image Frame with Rusted Metal Accents */}
          <div className="relative">
            
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#333333] shadow-[0_0_40px_rgba(217,119,6,0.25)] group">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Friends laughing at Billa's Chai Bunk Cafe"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

              {/* Bottom Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#1A1A1A]/90 border border-[#D97706]/60 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-5 h-5 text-[#F59E0B] animate-pulse" />
                  <span className="font-bebas text-2xl text-white tracking-wider">
                    THE BUNK STREET CAFE CULTURE
                  </span>
                </div>
                <p className="font-manrope text-xs text-gray-300">
                  Located in Pedda Bashirabad, Secunderabad — serving authentic cutting chai and street delicacies every day.
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 p-4 rounded-2xl bg-[#1D1D1D] border-2 border-[#FACC15] shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#2A2A2A] text-[#FACC15]">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="font-bebas text-2xl text-white leading-none">5 AM - 2 AM</div>
                <div className="font-manrope text-xs text-gray-400 font-medium">Non-stop Energy</div>
              </div>
            </div>

          </div>

          {/* Right Column: Story & Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/40 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>ABOUT OUR CHAI BUNK</span>
            </div>

            <h2 className="heading-xl font-anton text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-none mb-6">
              MORE THAN JUST{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">
                CHAI
              </span>
            </h2>

            <p className="font-manrope text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-medium">
              Billa's Chai Bunk Cafe is where every tea break becomes a memory. From early morning chai lovers to late-night food explorers, our café brings together delicious snacks, handcrafted tea, and a welcoming atmosphere for everyone.
            </p>

            <p className="font-manrope text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
              Inspired by the bustling tea stalls of Hyderabad, we created a street cafe space where raw industrial container design meets warm, cozy Edison lights. Whether you are catching up over a quick cutting glass or ordering late-night Cheese Maggi with your best friends, Billa's Chai Bunk is your second home.
            </p>

            {/* Checklist items */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                  <span className="font-manrope text-sm text-gray-200 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#222222] text-[#FACC15]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-manrope text-sm font-bold text-white">Hygiene & Freshness First</h4>
                <p className="font-manrope text-xs text-gray-400">100% pure whole milk, hand-cleaned spices, and fresh ingredients cooked to order.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
