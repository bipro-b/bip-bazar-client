"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ChevronRight, 
  Smartphone, 
  Watch, 
  Home, 
  Zap, 
  Gift, 
  ShoppingBag,
  Sparkles,
  Flame
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: <Smartphone size={18} /> },
  { name: "Fashion", icon: <ShoppingBag size={18} /> },
  { name: "Home & Decor", icon: <Home size={18} /> },
  { name: "Smart Watches", icon: <Watch size={18} /> },
  { name: "Flash Sales", icon: <Zap size={18} className="text-orange-500" /> },
  { name: "Gifts & Toys", icon: <Gift size={18} /> },
];

export default function Hero() {
  return (
    <section className="bg-[#f4f4f4] py-4 lg:py-6 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* 1. POSH CATEGORY SIDEBAR */}
          <aside className="hidden lg:block w-64 shrink-0 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="h-4 w-1 bg-[#ff6000] rounded-full" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-800">
                Categories
              </h3>
            </div>
            <ul className="space-y-0.5">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#ff6000] rounded-xl transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 group-hover:text-[#ff6000] transition-colors">
                        {cat.icon}
                      </span>
                      <span className="text-sm font-semibold">{cat.name}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* 2. MAIN TEMU-INSPIRED BANNER */}
          <div className="flex-1 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#ba0001] via-[#e61e1f] to-[#ff4d4d] shadow-2xl min-h-[420px]">
            
            {/* Background Texture/Accents */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-12 py-10 gap-8">
              
              {/* Left Content: The "Urgency" Side */}
              <motion.div 
                className="flex-1 text-center lg:text-left z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <span className="bg-yellow-400 text-red-700 text-[10px] font-black uppercase px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <Sparkles size={12} /> Boxing Day Sale
                  </span>
                  <span className="text-white/80 text-xs font-medium tracking-tight">Ends in 12:45:01</span>
                </div>

                <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-4 drop-shadow-md">
                   <span className="text-3xl lg:text-4xl block mb-2 font-bold italic opacity-90">UP TO</span>
                   90% <span className="text-4xl lg:text-5xl">OFF</span>
                </h2>

                <p className="text-white/90 text-sm lg:text-lg mb-8 font-medium max-w-sm mx-auto lg:mx-0">
                  Shop over 100,000+ items at factory-direct prices.
                </p>
                
                <button className="bg-white text-red-600 px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 hover:text-red-700 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:scale-95 flex items-center gap-2 mx-auto lg:mx-0 group">
                  SHOP NOW 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Right Content: The "Product" Side (Temu's secret sauce) */}
              <motion.div 
                className="flex-1 w-full lg:w-auto grid grid-cols-2 gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[
                  { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300", price: "7.04" },
                  { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", price: "13.77" },
                ].map((item, i) => (
                  <div key={i} className="relative bg-white rounded-2xl p-1.5 shadow-xl group cursor-pointer overflow-hidden">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                      <img src={item.img} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="mt-2 text-center pb-1">
                      <p className="text-[10px] text-gray-400 font-bold line-through uppercase tracking-tighter">CA$54.99</p>
                      <p className="text-sm lg:text-base font-black text-black">CA${item.price}</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#ff6000] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      -{Math.floor(Math.random() * 20 + 70)}%
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0">
               <div className="bg-black/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white">
                 <Flame size={16} className="text-orange-400 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-wider">1.2k Sold in last 24h</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}