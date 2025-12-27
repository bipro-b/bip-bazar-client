"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ShoppingBag, Trash2, ArrowRight, Minus, Plus, 
  ShieldCheck, Truck, RotateCcw, Zap, Lock 
} from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock Data
  const cartItems = [
    { id: 1, name: "M10 TWS Earbuds", price: 450, qty: 1, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const freeShippingThreshold = 2000;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with stronger blur for focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-[#F8F9FA] shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* --- HEADER --- */}
              <div className="bg-white px-6 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-100 p-2 rounded-xl">
                      <ShoppingBag className="text-[#ff6000]" size={20} />
                    </div>
                    <h2 className="text-xl font-[1000] italic tracking-tighter uppercase text-gray-900">
                      Your <span className="text-[#ff6000]">Haul</span>
                    </h2>
                    <span className="ml-2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {cartItems.length}
                    </span>
                  </div>
                  <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-all">
                    <X size={22} className="text-gray-400" />
                  </button>
                </div>

                {/* --- TRUST FEATURE: Free Shipping Progress --- */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-tighter">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <Truck size={14} /> You've unlocked FREE SHIPPING!
                      </span>
                    ) : (
                      <span className="text-gray-500">
                        Add <span className="text-[#ff6000]">৳{freeShippingThreshold - subtotal}</span> for Free Shipping
                      </span>
                    )}
                    <span className="text-gray-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className={`h-full ${subtotal >= freeShippingThreshold ? 'bg-emerald-500' : 'bg-[#ff6000]'}`}
                    />
                  </div>
                </div>
              </div>

              {/* --- ITEMS LIST --- */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <motion.div 
                      layout
                      key={item.id} 
                      className="group bg-white p-4 rounded-3xl border border-gray-100 hover:border-orange-200 transition-all flex gap-4 shadow-sm hover:shadow-md"
                    >
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-50">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-black uppercase italic tracking-tighter text-gray-900 line-clamp-1 italic">
                              {item.name}
                            </h3>
                            <button className="text-gray-300 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-lg font-[1000] text-[#ff6000] italic">৳{item.price}</span>
                            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">In Stock</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                            <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-500"><Minus size={14} /></button>
                            <span className="w-10 text-center text-sm font-black text-gray-900">{item.qty}</span>
                            <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#ff6000]"><Plus size={14} /></button>
                          </div>
                          <p className="text-xs font-bold text-gray-400">Total: ৳{item.price * item.qty}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag size={32} className="text-gray-200" />
                    </div>
                    <p className="font-black uppercase tracking-widest text-gray-300">Your bag is empty</p>
                    <button onClick={onClose} className="mt-4 text-[#ff6000] font-black uppercase text-xs tracking-tighter border-b-2 border-[#ff6000]">Start Browsing</button>
                  </div>
                )}
              </div>

              {/* --- FOOTER & TRUST BADGES --- */}
              <div className="bg-white border-t border-gray-100 p-6 space-y-6">
                
                {/* Trust Signals Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center gap-1">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="text-[8px] font-black uppercase text-gray-400">Secure</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1 border-x border-gray-100">
                    <RotateCcw size={16} className="text-blue-500" />
                    <span className="text-[8px] font-black uppercase text-gray-400">7 Days Return</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <Zap size={16} className="text-orange-500" />
                    <span className="text-[8px] font-black uppercase text-gray-400">Fast Delivery</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Amount</span>
                      <span className="text-[10px] text-emerald-600 font-bold tracking-tight italic">Taxes & Shipping Calculated next</span>
                    </div>
                    <span className="text-4xl font-[1000] italic text-gray-900 tracking-tighter">৳{subtotal}</span>
                  </div>
                  
                  <Link 
                    href="/checkout"
                    className="group relative flex w-full items-center justify-center gap-3 rounded-[20px] bg-[#ff6000] py-5 font-black uppercase tracking-[0.1em] text-white transition-all hover:bg-black active:scale-[0.98] shadow-xl shadow-orange-100"
                  >
                    Proceed to Checkout
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    <Lock size={14} className="absolute left-6 opacity-30" />
                  </Link>

                  <div className="flex items-center justify-center gap-2 py-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                    {/* Add small payment icons here (Visa, Bkash, etc) */}
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1">
                       <ShieldCheck size={10} /> 100% Encrypted Checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}