import React, { useState } from 'react';
import { OrderItem } from '../types';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, MessageCircle, Send, Coffee } from 'lucide-react';
import { playNeonClick, playKettleWhistle } from '../utils/audio';

interface OrderTrayModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderTray: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearTray: () => void;
}

export const OrderTrayModal: React.FC<OrderTrayModalProps> = ({
  isOpen,
  onClose,
  orderTray,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'drive-thru' | 'takeaway'>('dine-in');
  const [tableNo, setTableNo] = useState('Table 04');
  const [instructions, setInstructions] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const totalAmount = orderTray.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    playKettleWhistle();

    // Construct WhatsApp order message text
    let message = `*BILLA'S CHAI BUNK CAFE ORDER*\n`;
    message += `Order Type: ${orderType.toUpperCase()} (${tableNo})\n`;
    message += `------------------------\n`;
    orderTray.forEach((item) => {
      message += `• ${item.menuItem.name} x${item.quantity} = ₹${item.menuItem.price * item.quantity}\n`;
    });
    message += `------------------------\n`;
    message += `*Total Amount: ₹${totalAmount}*\n`;
    if (instructions) {
      message += `Instructions: ${instructions}\n`;
    }
    message += `\nThank you! Please prepare my order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');

    setIsOrdered(true);
    setTimeout(() => {
      onClearTray();
      setIsOrdered(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-end animate-fadeIn">
      
      {/* Modal Slide Container */}
      <div className="w-full max-w-lg bg-[#161616] border-l-2 border-[#D97706] h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        
        {/* Modal Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#222222] text-[#FACC15] border border-[#3A3A3A]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bebas text-3xl text-white tracking-wider leading-none">
                  YOUR BUNK ORDER TRAY
                </h3>
                <span className="font-manrope text-xs text-gray-400">
                  {orderTray.length} Item{orderTray.length === 1 ? '' : 's'} Selected
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                playNeonClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#222222] text-gray-400 hover:text-white border border-[#3A3A3A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isOrdered ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h4 className="font-bebas text-3xl text-white">ORDER SENT TO BUNK DESK!</h4>
              <p className="font-manrope text-sm text-gray-300 mt-2">
                Your WhatsApp message has been generated. The tea kettle is boiling your chai right now!
              </p>
            </div>
          ) : orderTray.length === 0 ? (
            <div className="py-20 text-center">
              <Coffee className="w-16 h-16 text-gray-600 mx-auto mb-4 opacity-50" />
              <h4 className="font-bebas text-2xl text-gray-400">YOUR TRAY IS EMPTY</h4>
              <p className="font-manrope text-xs text-gray-500 mt-1">
                Explore our floating food boards and add special masala chai, cheese Maggi, or burgers!
              </p>
            </div>
          ) : (
            <>
              {/* Order Items List */}
              <div className="space-y-4 mb-6 max-h-[320px] overflow-y-auto pr-1">
                {orderTray.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="p-4 rounded-2xl bg-[#1D1D1D] border border-[#2E2E2E] flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover border border-[#3A3A3A] shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bebas text-xl text-white tracking-wide truncate">
                        {item.menuItem.name}
                      </h4>
                      <span className="font-manrope text-xs font-bold text-[#FACC15]">
                        ₹{item.menuItem.price} x {item.quantity} = ₹{item.menuItem.price * item.quantity}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#111111] rounded-xl border border-[#333333]">
                        <button
                          onClick={() => {
                            playNeonClick();
                            onUpdateQuantity(item.menuItem.id, -1);
                          }}
                          className="p-1.5 text-gray-300 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-manrope text-xs font-bold px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => {
                            playNeonClick();
                            onUpdateQuantity(item.menuItem.id, 1);
                          }}
                          className="p-1.5 text-gray-300 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          playNeonClick();
                          onRemoveItem(item.menuItem.id);
                        }}
                        className="p-1.5 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="p-4 rounded-2xl bg-[#1D1D1D] border border-[#2E2E2E] space-y-3 mb-6">
                <div>
                  <label className="block font-manrope text-xs font-bold text-gray-300 uppercase mb-1">
                    Order Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 rounded-xl text-xs font-bold font-manrope transition-all cursor-pointer ${
                        orderType === 'dine-in'
                          ? 'bg-[#D97706] text-white'
                          : 'bg-[#111111] text-gray-400 border border-[#333333]'
                      }`}
                    >
                      🪑 Dine In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('drive-thru')}
                      className={`py-2 rounded-xl text-xs font-bold font-manrope transition-all cursor-pointer ${
                        orderType === 'drive-thru'
                          ? 'bg-[#D97706] text-white'
                          : 'bg-[#111111] text-gray-400 border border-[#333333]'
                      }`}
                    >
                      🚗 Drive Through
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 rounded-xl text-xs font-bold font-manrope transition-all cursor-pointer ${
                        orderType === 'takeaway'
                          ? 'bg-[#D97706] text-white'
                          : 'bg-[#111111] text-gray-400 border border-[#333333]'
                      }`}
                    >
                      📦 Takeaway
                    </button>
                  </div>
                </div>

                {orderType === 'dine-in' && (
                  <div>
                    <label className="block font-manrope text-xs font-bold text-gray-300 uppercase mb-1">
                      Table / Bench Number
                    </label>
                    <input
                      type="text"
                      value={tableNo}
                      onChange={(e) => setTableNo(e.target.value)}
                      placeholder="e.g. Table 04 / Container Bench 02"
                      className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-xl text-xs text-white focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-manrope text-xs font-bold text-gray-300 uppercase mb-1">
                    Special Instructions
                  </label>
                  <input
                    type="text"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="e.g. Extra Kadak Elaichi! Spicy Maggi!"
                    className="w-full px-3 py-2 bg-[#111111] border border-[#333333] rounded-xl text-xs text-white focus:outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Bottom Checkout Bar */}
        {orderTray.length > 0 && !isOrdered && (
          <div className="pt-4 border-t border-[#2A2A2A]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-sm font-bold text-gray-300">Total Payable Amount:</span>
              <span className="font-bebas text-3xl text-[#FACC15] tracking-wider">₹{totalAmount}</span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-manrope font-extrabold text-base transition-all cursor-pointer flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Order to Bunk Desk via WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
