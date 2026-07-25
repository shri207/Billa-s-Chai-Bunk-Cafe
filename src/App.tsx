import React, { useState } from 'react';
import { MenuItem, OrderItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingStats } from './components/FloatingStats';
import { AboutSection } from './components/AboutSection';
import { SignatureMenu } from './components/SignatureMenu';
import { ChaiTimeline } from './components/ChaiTimeline';
import { HangoutZone } from './components/HangoutZone';
import { BillReviews } from './components/BillReviews';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AmbienceSection } from './components/AmbienceSection';
import { InteractiveChaiCounter } from './components/InteractiveChaiCounter';
import { LocationSection } from './components/LocationSection';
import { OrderTrayModal } from './components/OrderTrayModal';
import { Footer } from './components/Footer';

export default function App() {
  const [orderTray, setOrderTray] = useState<OrderItem[]>([]);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Add item to order tray
  const handleAddToCart = (item: MenuItem) => {
    setOrderTray((prev) => {
      const existing = prev.find((i) => i.menuItem.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  // Update item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderTray((prev) =>
      prev
        .map((i) => {
          if (i.menuItem.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is OrderItem => i !== null)
    );
  };

  // Remove item from tray
  const handleRemoveItem = (id: string) => {
    setOrderTray((prev) => prev.filter((i) => i.menuItem.id !== id));
  };

  // Clear tray
  const handleClearTray = () => {
    setOrderTray([]);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#FFF7ED] font-manrope selection:bg-[#D97706] selection:text-white relative">
      {/* Background Industrial Grid Lines */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      
      {/* Header Bar */}
      <Header
        orderTray={orderTray}
        onOpenTray={() => setIsTrayOpen(true)}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled(!audioEnabled)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Immersive Hero */}
        <Hero onOrderNow={() => setIsTrayOpen(true)} />

        {/* Floating Animated Stats */}
        <FloatingStats />

        {/* About Section */}
        <AboutSection />

        {/* Signature Floating Food Boards Menu */}
        <SignatureMenu onAddToCart={handleAddToCart} />

        {/* Chai Experience Timeline */}
        <ChaiTimeline />

        {/* Hangout Zone Masonry Gallery */}
        <HangoutZone />

        {/* Customer Reviews as Café Bills */}
        <BillReviews />

        {/* Why Choose Us Glowing Signboards */}
        <WhyChooseUs />

        {/* Café Ambience Scene Explorer */}
        <AmbienceSection />

        {/* Interactive Chai Counter */}
        <InteractiveChaiCounter />

        {/* Location & Map Section */}
        <LocationSection onOrderOnline={() => setIsTrayOpen(true)} />
      </main>

      {/* Industrial Footer */}
      <Footer />

      {/* Slide-over Order Tray Modal */}
      <OrderTrayModal
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        orderTray={orderTray}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearTray={handleClearTray}
      />

    </div>
  );
}
