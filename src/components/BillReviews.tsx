import React, { useState } from 'react';
import { BILL_REVIEWS } from '../data/cafeData';
import { BillReview } from '../types';
import { Star, Heart, Receipt, Plus, Check, MessageSquare } from 'lucide-react';
import { playNeonClick } from '../utils/audio';

export const BillReviews: React.FC = () => {
  const [reviews, setReviews] = useState<BillReview[]>(BILL_REVIEWS);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [showAddReview, setShowAddReview] = useState(false);

  // New review form state
  const [formName, setFormName] = useState('');
  const [formTable, setFormTable] = useState('TABLE-01');
  const [formReview, setFormReview] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleLike = (id: string) => {
    playNeonClick();
    setLikedMap((prev) => {
      const currentlyLiked = prev[id];
      const newMap = { ...prev, [id]: !currentlyLiked };
      setReviews((rList) =>
        rList.map((r) =>
          r.id === id ? { ...r, likesCount: r.likesCount + (currentlyLiked ? -1 : 1) } : r
        )
      );
      return newMap;
    });
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formReview) return;

    playNeonClick();
    const newBill: BillReview = {
      id: `rev-${Date.now()}`,
      customerName: formName,
      tableNo: formTable,
      date: 'TODAY',
      time: 'JUST NOW',
      items: [
        { name: 'Special Masala Chai', qty: 2, price: 50 },
        { name: 'Cheese Butter Maggi', qty: 1, price: 85 }
      ],
      rating: formRating,
      reviewText: formReview,
      totalPaid: 135,
      likesCount: 1,
      verifiedCustomer: true
    };

    setReviews([newBill, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddReview(false);
      setFormName('');
      setFormReview('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-24 bg-[#111111] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D] border border-[#D97706]/50 text-[#FACC15] font-manrope text-xs font-bold tracking-widest uppercase mb-4">
              <Receipt className="w-3.5 h-3.5" />
              <span>CAFÉ BILL RECEIPTS</span>
            </div>

            <h2 className="heading-xl font-anton text-5xl sm:text-7xl text-white tracking-wide uppercase leading-none">
              CUSTOMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#D97706]">BILL REVIEWS</span>
            </h2>
            <p className="font-manrope text-gray-300 text-sm sm:text-base mt-2">
              Every review at Billa's Chai Bunk is printed on a real café receipt format with order logs!
            </p>
          </div>

          <button
            onClick={() => {
              playNeonClick();
              setShowAddReview(true);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#F59E0B] hover:to-[#D97706] text-white font-manrope text-sm font-bold shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all cursor-pointer flex items-center gap-2 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Leave a Bill Review</span>
          </button>
        </div>

        {/* Cafe Bill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="receipt-paper rounded-2xl p-6 shadow-2xl border-t-8 border-[#D97706] relative font-mono flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Receipt Top Header */}
              <div>
                <div className="text-center border-b border-dashed border-gray-400 pb-3 mb-3">
                  <div className="font-bebas text-2xl text-[#111111] tracking-wider uppercase">
                    BILLA'S CHAI BUNK
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest font-sans font-semibold">
                    PEDDA BASHIRABAD • SECUNDERABAD
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono mt-1">
                    DATE: {rev.date} | TIME: {rev.time}
                  </div>
                  <div className="text-xs font-bold text-[#D97706] mt-1">
                    TABLE: {rev.tableNo}
                  </div>
                </div>

                {/* Star Rating Stamp */}
                <div className="flex items-center justify-between mb-3 bg-[#F3ECE1] p-2 rounded">
                  <span className="text-xs font-bold text-gray-800 font-sans">RATING:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'text-[#D97706] fill-[#D97706]'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Customer Quote Box */}
                <div className="my-3 p-3 bg-white border border-gray-300 rounded text-xs font-sans italic text-gray-900 leading-relaxed shadow-inner">
                  "{rev.reviewText}"
                </div>

                {/* Itemized Bill Log */}
                <div className="text-[11px] text-gray-700 border-t border-b border-dashed border-gray-400 py-2 my-3 font-mono space-y-1">
                  <div className="text-[10px] font-bold uppercase text-gray-500 mb-1">Items Consumed:</div>
                  {rev.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Total Paid Row */}
                <div className="flex justify-between items-center text-sm font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
                  <span>TOTAL PAID:</span>
                  <span className="text-[#B45309]">₹{rev.totalPaid}</span>
                </div>
              </div>

              {/* Receipt Footer Stamp & Likes */}
              <div className="pt-2 flex items-center justify-between border-t border-dashed border-gray-300 font-sans">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  ✔ PAID WITH LOVE
                </span>

                <button
                  onClick={() => handleLike(rev.id)}
                  className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                    likedMap[rev.id]
                      ? 'bg-red-100 text-red-600 border border-red-300'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${likedMap[rev.id] ? 'fill-red-600' : ''}`} />
                  <span>{rev.likesCount}</span>
                </button>
              </div>

              {/* Customer Name Tag */}
              <div className="text-right text-[11px] font-bold text-gray-800 mt-2 font-sans">
                — {rev.customerName}
              </div>

            </div>
          ))}
        </div>

        {/* Modal for adding review */}
        {showAddReview && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-md w-full receipt-paper rounded-3xl p-6 sm:p-8 shadow-2xl border-t-8 border-[#D97706] animate-fadeIn text-gray-900">
              
              <div className="text-center mb-6">
                <Receipt className="w-10 h-10 text-[#D97706] mx-auto mb-2" />
                <h3 className="font-bebas text-3xl text-gray-900 tracking-wide">
                  LEAVE A CAFÉ BILL REVIEW
                </h3>
                <p className="font-sans text-xs text-gray-600">
                  Share your chai & hangout experience at Billa's Chai Bunk Cafe!
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <Check className="w-16 h-16 text-emerald-600 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-bebas text-2xl text-emerald-800">REVIEW PRINTED ON BILL!</h4>
                  <p className="font-sans text-xs text-gray-600">Thank you for sharing your love with Billa's Chai Bunk!</p>
                </div>
              ) : (
                <form onSubmit={handleAddReviewSubmit} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Your Name / Group Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul & Bikers Gang"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D97706] text-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Table or Order Type</label>
                    <select
                      value={formTable}
                      onChange={(e) => setFormTable(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D97706] text-sm text-gray-900"
                    >
                      <option value="TABLE-01">Table 01 - Outdoor Lounge</option>
                      <option value="TABLE-04">Table 04 - Container Bench</option>
                      <option value="DRIVE-THRU">Drive Through / Bike Stop</option>
                      <option value="PARCEL">Takeaway Box</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Star Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className={`p-2 rounded-lg border text-sm font-bold cursor-pointer ${
                            formRating >= star
                              ? 'bg-[#D97706] text-white border-[#B45309]'
                              : 'bg-gray-100 text-gray-400 border-gray-300'
                          }`}
                        >
                          {star} ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Review Experience</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about the chai, snacks, and street vibe..."
                      value={formReview}
                      onChange={(e) => setFormReview(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#D97706] text-sm text-gray-900"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddReview(false)}
                      className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-[#D97706] text-white font-bold cursor-pointer hover:bg-[#B45309]"
                    >
                      Print Review
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
