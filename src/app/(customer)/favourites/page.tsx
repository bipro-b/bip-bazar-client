"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Heart, ShoppingCart, Trash2, ArrowRight, ShoppingBag, Zap, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function FavoritesContent() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bip-bazar-favs");
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      setItems([
        { id: "1", name: "Premium GaN 65W Fast Charger", price: 1850, oldPrice: 2500, stock: "In Stock", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400" },
        { id: "2", name: "Noise Cancelling Headphones", price: 4500, oldPrice: 5200, stock: "In Stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
        { id: "4", name: "Anker USB-C to Lightning Cable", price: 1200, oldPrice: 1500, stock: "Out of Stock", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400" },
      ]);
    }
    setIsLoaded(true);
  }, []);

  const removeItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("bip-bazar-favs", JSON.stringify(updated));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  if (!isLoaded) return null;

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-32">
      {/* Top Marketing Strip */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="flex justify-center items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2"><Zap size={12} className="text-[#ff6000] fill-[#ff6000]"/> Price Match Guaranteed</span>
          <span className="hidden md:flex items-center gap-2"><Clock size={12} className="text-[#ff6000]"/> Limited Time Offers</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-[1000] italic tracking-tighter uppercase text-gray-900 leading-none">
              My <span className="text-[#ff6000]">Favorites</span>
            </h1>
            <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest pl-1">
              {items.length} Items ready for checkout
            </p>
          </div>
          <Link 
            href="/products" 
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-tighter text-gray-900 hover:text-[#ff6000] transition-all"
          >
            Explore More <div className="bg-white p-2 rounded-full shadow-sm group-hover:translate-x-1 transition-transform"><ArrowRight size={18} /></div>
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* List Section - Improved Mobile Image Scaling */}
            <div className="lg:col-span-8 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative flex flex-row items-center gap-4 md:gap-8 p-3 md:p-6 rounded-[32px] border border-white bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
                  >
                    {/* Fixed Image Container for Mobile */}
                    <div className="h-24 w-24 md:h-40 md:w-40 shrink-0 rounded-[24px] overflow-hidden bg-gray-100 border border-gray-50 shadow-inner">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-black text-sm md:text-xl text-gray-900 uppercase italic tracking-tighter truncate pr-4">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xl md:text-3xl font-[1000] text-red-600 italic tracking-tighter">৳{item.price}</span>
                        {item.oldPrice && (
                          <span className="text-xs md:text-sm text-gray-400 line-through font-bold">৳{item.oldPrice}</span>
                        )}
                        <span className={`text-[9px] md:text-[10px] font-black uppercase px-2 py-1 rounded-md tracking-tighter ${
                          item.stock === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                        }`}>
                          {item.stock}
                        </span>
                      </div>

                      {/* Add to Cart - Large Screen */}
                      <div className="hidden md:block">
                        <button 
                          disabled={item.stock !== 'In Stock'}
                          className="px-8 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff6000] disabled:bg-gray-100 disabled:text-gray-400 transition-all flex items-center gap-2"
                        >
                          <ShoppingCart size={14} /> Add To Bag
                        </button>
                      </div>
                    </div>

                    {/* Mobile Only Cart Button */}
                    <div className="md:hidden">
                       <button className="p-3 bg-black text-white rounded-2xl shadow-lg">
                          <ShoppingCart size={20} />
                       </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Sticky Summary Card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 p-8 rounded-[40px] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 space-y-8">
                <div>
                  <h2 className="text-xl font-[1000] italic uppercase tracking-tighter text-gray-900">Order Summary</h2>
                  <div className="h-1 w-12 bg-[#ff6000] mt-2 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-black uppercase text-gray-400 tracking-widest">
                    <span>Selected Items</span>
                    <span className="text-gray-900 font-black tracking-normal italic text-sm">{items.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-black uppercase text-gray-400 tracking-widest">
                    <span>Shipping Fee</span>
                    <span className="text-emerald-500 text-[10px] bg-emerald-50 px-2 py-1 rounded-md">FREE</span>
                  </div>
                  <div className="pt-6 border-t-2 border-dashed border-gray-100 flex justify-between items-end">
                    <span className="font-black uppercase text-xs text-gray-900">Estimated Total</span>
                    <span className="text-4xl font-[1000] italic text-red-600 tracking-tighter">৳{subtotal}</span>
                  </div>
                </div>

                <button className="w-full bg-[#ff6000] text-white font-[1000] text-sm uppercase tracking-[0.2em] py-5 rounded-[24px] shadow-2xl shadow-orange-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                  Check Out All <ShoppingBag size={20} />
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <Zap size={14} className="fill-gray-400 text-gray-400" /> Fast Checkout Enabled
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="text-center py-32 space-y-8 bg-white rounded-[60px] border-2 border-dashed border-gray-200 shadow-inner">
            <div className="relative inline-block">
              <Heart size={80} className="mx-auto text-gray-100 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Heart size={40} className="text-gray-200" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter">Your Bag is Empty</h2>
              <p className="text-gray-400 font-bold max-w-[250px] mx-auto text-sm leading-relaxed">
                Add your favorite items here to keep track of them.
              </p>
            </div>
            <Link href="/products" className="inline-block bg-black text-white px-12 py-5 rounded-full font-[1000] uppercase tracking-widest text-sm hover:bg-[#ff6000] shadow-2xl transition-all">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FavoritesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f8f8]" />}>
      <FavoritesContent />
    </Suspense>
  );
}