import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, MapPin } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

export const HangoutZone: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="hangout" className="py-24 bg-[#161616] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STREET GALLERY & VIBES</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            THE HANGOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">ZONE</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            Immerse yourself in the street cafe energy. Edison bulb canopy, container walls, cutting tea glasses, and happy faces.
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                playNeonClick();
                setSelectedImage(item);
              }}
              className="group relative rounded-3xl overflow-hidden bg-[#1D1D1D] border border-[#333333] hover:border-[#FACC15] shadow-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] transition-all duration-500 cursor-pointer overflow-hidden h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#111111]/80 border border-[#D97706]/60 text-[#FACC15] font-manrope text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#111111]/90 border border-[#2E2E2E] backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#FACC15] transition-colors leading-none mb-1">
                  {item.title}
                </h3>
                <p className="font-manrope text-xs text-gray-300">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-[#1A1A1A] border-2 border-[#D97706] rounded-3xl overflow-hidden shadow-2xl">
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-white hover:text-[#FACC15] border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[60vh] sm:h-[70vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#161616] flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs font-bold text-[#FACC15] uppercase tracking-widest block mb-1">
                    {selectedImage.tag} • Billa's Chai Bunk
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    {selectedImage.title}
                  </h3>
                  <p className="font-manrope text-sm text-gray-300">
                    {selectedImage.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-manrope text-gray-400 bg-[#222222] px-4 py-2 rounded-xl border border-[#333333]">
                  <MapPin className="w-4 h-4 text-[#D97706]" />
                  <span>Secunderabad, Telangana</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
