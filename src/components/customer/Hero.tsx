"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Smartphone, 
  Watch, 
  Home, 
  Zap, 
  Gift, 
  ShoppingBag 
} from "lucide-react";

const categories = [
  { name: "Electronics & Gadgets", icon: <Smartphone size={18} /> },
  { name: "Fashion & Apparel", icon: <ShoppingBag size={18} /> },
  { name: "Home & Lifestyle", icon: <Home size={18} /> },
  { name: "Smart Watches", icon: <Watch size={18} /> },
  { name: "Flash Sales", icon: <Zap size={18} className="text-orange-500" /> },
  { name: "Gifts & Toys", icon: <Gift size={18} /> },
];

export default function Hero() {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* 1. Category Sidebar (Hidden on Mobile) */}
          <aside className="hidden lg:block w-72 shrink-0 border border-gray-100 rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">
              Top Categories
            </h3>
            <ul className="space-y-1">
              {categories.map((cat, index) => (
                <li key={index}>
                  <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 group-hover:text-emerald-600 transition-colors">
                        {cat.icon}
                      </span>
                      <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-emerald-400" />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* 2. Main Banner Slider Area */}
          <div className="flex-1 relative overflow-hidden rounded-3xl bg-emerald-950 min-h-[400px] lg:min-h-[450px]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/20 to-transparent" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative h-full flex flex-col justify-center px-8 lg:px-16 py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                  New Year Collection 2025
                </span>
                <h2 className="text-4xl lg:text-6xl font-black text-white italic leading-tight tracking-tighter mb-6">
                  UPGRADE YOUR <br />
                  <span className="text-emerald-400 uppercase">LIFESTYLE.</span>
                </h2>
                <p className="text-emerald-100/70 text-lg max-w-md mb-8 leading-relaxed">
                  Discover premium gadgets and daily essentials at wholesaler prices, delivered right to your door in Bangladesh.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-emerald-950 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 hover:text-white transition-all shadow-xl active:scale-95">
                    Shop Now
                  </button>
                  <button className="border-2 border-emerald-400/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400/10 transition-all">
                    View Offers
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge (Trust Signal) */}
            <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl">
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-emerald-200">Delivery in</p>
                <p className="text-sm font-bold text-white uppercase italic">24 Hours</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}