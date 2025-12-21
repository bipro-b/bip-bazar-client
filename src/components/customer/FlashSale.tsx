"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Zap, Timer, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for products
const flashProducts = [
  { id: 1, name: "M10 TWS Wireless Earbuds", price: 450, oldPrice: 1200, sold: 85, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: 2, name: "Premium GaN 65W Charger", price: 1850, oldPrice: 2500, sold: 40, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400" },
  { id: 3, name: "Smart Air Fryer - 5.5L", price: 6500, oldPrice: 9500, sold: 12, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: 4, name: "Mechanical Keyboard RGB", price: 3200, oldPrice: 4800, sold: 65, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400" },
];

export default function FlashSale() {
  // Simple Countdown Logic
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
    <section className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl italic font-black text-sm">
            <Zap size={18} fill="white" />
            FLASH SALE
          </div>
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <Timer size={20} className="text-emerald-600" />
            <span className="text-xs uppercase tracking-widest text-gray-400">Ends In:</span>
            <div className="flex gap-1 items-center">
              <TimeUnit value={timeLeft.hours} label="h" />
              <span className="text-emerald-600">:</span>
              <TimeUnit value={timeLeft.mins} label="m" />
              <span className="text-emerald-600">:</span>
              <TimeUnit value={timeLeft.secs} label="s" />
            </div>
          </div>
        </div>
        <button className="flex items-center text-emerald-600 font-bold text-sm hover:underline">
          View All Deals <ChevronRight size={18} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {flashProducts.map((product) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={product.id} 
            className="group bg-white border border-gray-100 rounded-3xl p-3 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
               <img 
                src={product.image} 
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight h-10">
                {product.name}
              </h3>
              
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-emerald-600">৳{product.price}</span>
                <span className="text-xs text-gray-400 line-through font-medium">৳{product.oldPrice}</span>
              </div>

              {/* Progress Bar (Stock) */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                  <span className="text-gray-400 italic">Sold: {product.sold}%</span>
                  <span className="text-orange-500">Only 5 left!</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${product.sold}%` }}
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  />
                </div>
              </div>

              <button className="w-full mt-4 bg-emerald-50 text-emerald-700 py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-emerald-600 hover:text-white">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white w-10 h-8 rounded-lg text-sm font-bold shadow-inner">
      {value.toString().padStart(2, '0')}
    </div>
  );
}