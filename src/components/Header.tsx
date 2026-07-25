import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Phone, ShoppingBag, Volume2, VolumeX, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { OrderItem } from '../types';
import { playNeonClick } from '../utils/audio';

interface HeaderProps {
  orderTray: OrderItem[];
  onOpenTray: () => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  orderTray,
  onOpenTray,
  audioEnabled,
  onToggleAudio
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItemCount = orderTray.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Hangout Zone', href: '#hangout' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pour Chai', href: '#pour-chai' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    playNeonClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Neon Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#D97706]/60 flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.4)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition-all">
              <Coffee className="w-6 h-6 text-[#FACC15] group-hover:rotate-12 transition-transform duration-300" />
              {/* Subtle steam dots */}
              <span className="absolute -top-1 left-3 w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping opacity-75" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-[#FFF7ED] group-hover:text-[#FACC15] transition-colors leading-none">
                  BILLA'S CHAI BUNK
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" title="Bunk is Open Now" />
              </div>
              <span className="font-manrope text-[10px] uppercase tracking-widest text-[#D97706] font-bold">
                Street Chai & Late Night Hangout
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-manrope text-sm font-semibold text-gray-300 hover:text-[#FACC15] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D97706] hover:after:w-full after:transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Live Open Status Indicator (Hidden on small mobile) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D1D1D] border border-[#333333] text-xs font-manrope">
              <Flame className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
              <span className="text-gray-300 font-medium">Open 5 AM – 2 AM</span>
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={() => {
                playNeonClick();
                onToggleAudio();
              }}
              title={audioEnabled ? "Mute Bunk Street Sounds" : "Enable Bunk Sound Effects"}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                audioEnabled
                  ? 'bg-[#D97706]/20 border-[#D97706] text-[#FACC15] shadow-[0_0_10px_rgba(217,119,6,0.5)]'
                  : 'bg-[#1D1D1D] border-[#333333] text-gray-400 hover:text-white'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Order Tray Trigger Button */}
            <button
              onClick={() => {
                playNeonClick();
                onOpenTray();
              }}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#F59E0B] hover:to-[#D97706] text-white font-manrope text-sm font-bold shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] transition-all cursor-pointer transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Tray</span>
              {totalItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#111111] text-[#FACC15] font-bold text-xs flex items-center justify-center border border-[#FACC15]">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => {
                playNeonClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2.5 rounded-xl bg-[#1D1D1D] border border-[#333333] text-gray-200 hover:text-[#FACC15] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616]/98 border-b border-[#2A2A2A] px-4 py-6 shadow-2xl mt-2 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
              <span className="text-xs font-manrope uppercase text-gray-400 tracking-wider">
                Bunk Navigation
              </span>
              <span className="text-xs text-[#FACC15] font-bold">● Secunderabad</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-bebas text-2xl tracking-wider text-gray-200 hover:text-[#FACC15] transition-colors py-1 flex items-center justify-between border-b border-[#222222]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D97706] font-manrope">→</span>
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Presidency+Colony+Pedda+Bashirabad+Bolarum+Secunderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#222222] border border-[#333333] text-gray-200 font-manrope text-sm font-semibold"
              >
                <MapPin className="w-4 h-4 text-[#FACC15]" />
                📍 Navigate to Cafe
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1D1D1D] border border-[#D97706]/40 text-[#FACC15] font-manrope text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                📞 Call Bunk Desk: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
