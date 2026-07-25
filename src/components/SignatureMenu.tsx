import React, { useState } from 'react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Coffee, Flame, Plus, Check, Star, Sparkles } from 'lucide-react';
import { playNeonClick, playKettleWhistle } from '../utils/audio';

interface SignatureMenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories: { key: Category; label: string; icon: string }[] = [
    { key: 'all', label: 'All Bunk Favorites', icon: '🔥' },
    { key: 'chai', label: 'Hot Chai & Tea', icon: '☕' },
    { key: 'coffee', label: 'Bunk Coffee', icon: '🥤' },
    { key: 'maggi', label: 'Street Maggi', icon: '🍜' },
    { key: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
    { key: 'burgers', label: 'Bunk Burgers', icon: '🍔' },
    { key: 'fries', label: 'Loaded Fries', icon: '🍟' },
    { key: 'milkshakes', label: 'Thickshakes', icon: '🧋' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    playKettleWhistle();
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-24 bg-[#161616] relative overflow-hidden">
      
      {/* Background Rusted Texture Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HANDCRAFTED STREET MENU</span>
          </div>

          <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
            SIGNATURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706]">BUNK MENU</span>
          </h2>

          <p className="font-manrope text-gray-300 text-base sm:text-lg">
            Served fresh in floating wooden boards with industrial steel accents. Tap any item to add to your order tray!
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-6 scrollbar-none mb-12 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                playNeonClick();
                setSelectedCategory(cat.key);
              }}
              className={`px-5 py-3 rounded-2xl font-manrope text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white border-[#FACC15] shadow-[0_0_20px_rgba(217,119,6,0.6)] scale-105'
                  : 'bg-[#1D1D1D] text-gray-300 border-[#333333] hover:border-[#D97706] hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Floating Food Boards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item) => {
            const isJustAdded = addedIds[item.id];

            return (
              <div
                key={item.id}
                style={{ transform: `rotate(${item.tiltDeg}deg)` }}
                className="relative bg-[#1E1E1E] border-2 border-[#333333] hover:border-[#FACC15] rounded-3xl p-5 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] transition-all duration-500 hover:rotate-0 hover:-translate-y-2 group flex flex-col justify-between"
              >
                {/* Board Bolt Head Detail */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-gray-600 border border-black shadow-inner" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gray-600 border border-black shadow-inner" />

                <div>
                  {/* Item Image with Steam Animation on Hover */}
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-5 bg-[#111111]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-80" />

                    {/* Steam overlay on hover for hot items */}
                    {(item.category === 'chai' || item.category === 'maggi' || item.category === 'coffee') && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-2 h-12 bg-white/40 blur-xs rounded-full animate-steam-1" />
                        <div className="w-2.5 h-16 bg-white/50 blur-xs rounded-full animate-steam-2 mx-1" />
                        <div className="w-2 h-10 bg-white/40 blur-xs rounded-full animate-steam-3" />
                      </div>
                    )}

                    {/* Tag Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.bestseller && (
                        <span className="px-2.5 py-1 rounded-lg bg-[#D97706] text-black font-manrope text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                          🔥 Bestseller
                        </span>
                      )}
                      {item.lateNightFav && (
                        <span className="px-2.5 py-1 rounded-lg bg-[#1D1D1D]/90 border border-[#FACC15] text-[#FACC15] font-manrope text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                          🌙 Late Night Fav
                        </span>
                      )}
                    </div>

                    {/* Price Tag Badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#111111]/95 border border-[#FACC15] text-[#FACC15] font-bebas text-2xl tracking-wider shadow-lg backdrop-blur-md">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Header & Title */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bebas text-3xl text-white tracking-wide leading-tight group-hover:text-[#FACC15] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 px-2 py-0.5 rounded-md bg-[#282828] text-xs font-bold text-[#FACC15]">
                      <Star className="w-3.5 h-3.5 fill-[#FACC15]" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-manrope text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-[#2A2A2A] text-gray-300 font-manrope text-[11px] font-medium border border-[#3A3A3A]"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-red-950/80 border border-red-700 text-red-400 font-manrope text-[11px] font-bold flex items-center gap-1">
                        <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>{'🌶️'.repeat(item.spicyLevel)}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Add Button */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`w-full py-3 rounded-2xl font-manrope text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border ${
                    isJustAdded
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]'
                      : 'bg-[#2A2A2A] hover:bg-[#D97706] text-white border-[#3A3A3A] hover:border-[#FACC15] shadow-md hover:shadow-[0_0_20px_rgba(217,119,6,0.5)]'
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Added to Tray!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#FACC15] group-hover:text-white" />
                      <span>Add to Order Tray • ₹{item.price}</span>
                    </>
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
