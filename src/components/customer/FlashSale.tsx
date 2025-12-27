"use client";

import React, { useState, useEffect } from "react";
import { Zap, Timer, ChevronRight, Flame, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const flashProducts = [
  { id: 1, name: "M10 TWS Wireless Earbuds Bluetooth 5.3", price: 450, oldPrice: 1200, sold: 85, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", hot: true },
  { id: 2, name: "Premium GaN 65W Fast Charger Adapter", price: 1850, oldPrice: 2500, sold: 40, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400", hot: false },
  { id: 3, name: "Smart Air Fryer - 5.5L Digital Control", price: 6500, oldPrice: 9500, sold: 12, image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400", hot: false },
  { id: 4, name: "Mechanical Keyboard RGB Backlit Blue Switch", price: 3200, oldPrice: 4800, sold: 65, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400", hot: true },
  { id: 5, name: "Portable Magnetic Power Bank 10000mAh", price: 1200, oldPrice: 2200, sold: 92, image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400", hot: true },
  { id: 6, name: "Ultra-Thin Smart Watch Series 9 Clone", price: 2100, oldPrice: 4500, sold: 55, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400", hot: false },
];

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        hours: 23 - now.getHours(),
        mins: 59 - now.getMinutes(),
        secs: 59 - now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* HEADER AREA */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#ff6000]">
              <Zap size={24} fill="#ff6000" className="animate-pulse" />
              <h2 className="text-2xl font-black italic tracking-tighter">FLASH SALE</h2>
            </div>
            
            <div className="hidden sm:flex items-center gap-3 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ends In</span>
              <div className="flex gap-1.5 items-center">
                <TimeUnit value={timeLeft.hours} />
                <span className="text-[#ff6000] font-bold">:</span>
                <TimeUnit value={timeLeft.mins} />
                <span className="text-[#ff6000] font-bold">:</span>
                <TimeUnit value={timeLeft.secs} />
              </div>
            </div>
          </div>

          <button className="group flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-[#ff6000] transition-colors">
            View more <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* HIGH DENSITY GRID (Up to 6 in a row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
          {flashProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#ff6000]/20 transition-all duration-300"
            >
              {/* Image & Discount Badge */}
              <div className="relative aspect-square bg-[#f8f8f8] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Discount Tag */}
                <div className="absolute top-0 left-0 bg-[#ff6000] text-white text-[11px] font-black px-2 py-1 rounded-br-lg shadow-sm">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>

                {/* Hot Label */}
                {product.hot && (
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                    <Flame size={14} className="text-orange-600" fill="currentColor" />
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-3">
                <h3 className="text-[13px] font-medium text-gray-700 line-clamp-2 leading-snug min-h-[36px] mb-2 group-hover:text-[#ff6000] transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex flex-col mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-black text-[#ff6000]">৳{product.price}</span>
                  </div>
                  <span className="text-[11px] text-gray-400 line-through">৳{product.oldPrice}</span>
                </div>

                {/* Progress Bar (Stock) */}
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${product.sold}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#ff6000] to-[#ff9000] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-tighter">
                    <span className={product.sold > 80 ? "text-red-500" : "text-gray-400"}>
                      {product.sold}% Sold
                    </span>
                    {product.sold > 80 && <span className="text-red-600 animate-pulse">Almost Gone!</span>}
                  </div>
                </div>

                {/* Quick Add (Visible on Hover in desktop) */}
                <button className="w-full mt-3 bg-black text-white py-2 rounded-lg text-[11px] font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 active:bg-gray-800">
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value }: { value: number }) {
  return (
    <div className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-md text-xs font-black shadow-lg">
      {value.toString().padStart(2, '0')}
    </div>
  );
}