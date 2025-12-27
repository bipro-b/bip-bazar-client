"use client";

import React from "react";
import { ShoppingCart, Flame, Zap, Star, ShieldCheck } from "lucide-react";

const relatedItems = [
  {
    id: 101,
    name: "Baseus 65W GaN Fast Charger - 3 Port Compact Wall Plug",
    price: 2450,
    oldPrice: 3200,
    sold: "1.2K+ sold",
    tag: "Lightning Deal",
    badge: "Free shipping",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400"
  },
  {
    id: 102,
    name: "Premium Wireless Mechanical Keyboard - RGB Backlit",
    price: 4200,
    oldPrice: 5500,
    sold: "800+ sold",
    tag: "Best Seller",
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400"
  },
  {
    id: 103,
    name: "Ultra-Clear 4K Portable Gaming Monitor 15.6 Inch",
    price: 15800,
    oldPrice: 18500,
    sold: "450+ sold",
    tag: "Hot Sale",
    badge: "Official Store",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400"
  },
  {
    id: 104,
    name: "Noise Cancelling Bluetooth Headphones - Midnight Black",
    price: 3100,
    oldPrice: 4800,
    sold: "2.1K+ sold",
    tag: "90% OFF",
    badge: "Fast Delivery",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400"
  },
  {
    id: 105,
    name: "Magnetic 15W Magsafe Power Bank 10000mAh",
    price: 1950,
    oldPrice: 2800,
    sold: "1.5K+ sold",
    tag: "Local Stock",
    badge: "Price Match",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400"
  },
  {
    id: 106,
    name: "Smart Watch Series 9 - Waterproof Fitness Tracker",
    price: 2900,
    oldPrice: 3500,
    sold: "3.2K+ sold",
    tag: "Trending",
    badge: "Verified",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400"
  }
];

export default function RelatedProducts() {
  return (
    // Changed bg to #f4f4f4 to match your all-products page
    <section className="mt-16 border-t border-gray-100 bg-[#f4f4f4] py-8 md:py-12">
      {/* 1. Removed large px-4 on mobile (now px-1) to bring items closer to edges 
          2. Kept max-w for desktop consistency
      */}
      <div className="max-w-[1600px] mx-auto px-1 md:px-4">
        
        {/* Header Section - Adjusted padding-left for mobile alignment */}
        <div className="mb-6 flex items-end justify-between px-2 md:px-0">
          <div className="space-y-1">
            <h2 className="text-xl md:text-3xl font-[1000] italic tracking-tighter uppercase text-gray-900 flex items-center gap-2">
              You May <span className="text-[#ff6000]">Also Like</span>
              <Flame size={24} className="text-[#ff6000] fill-[#ff6000] animate-pulse" />
            </h2>
            <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest">
                <span className="flex items-center gap-1"><Zap size={10} className="text-yellow-500 fill-yellow-500"/> Flash Deals</span>
                <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-500"/> Secure checkout</span>
            </div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-gray-500 hover:text-[#ff6000] transition-colors">
            See All Items <ShoppingCart size={16} />
          </button>
        </div>

        {/* Dense Grid Layout:
            - gap-2 on mobile for high density
            - grid-cols-2 as base for mobile
        */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {relatedItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl md:rounded-3xl overflow-hidden border border-transparent hover:border-orange-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dynamic Tag Overlay */}
                <div className="absolute top-0 left-0 flex flex-col gap-1 p-1 md:p-2">
                    <span className="bg-[#ff6000] text-white text-[8px] md:text-[9px] font-[1000] uppercase italic px-1.5 py-0.5 rounded-br-lg shadow-lg">
                      {item.tag}
                    </span>
                </div>

                {/* Quick Action Overlay (Desktop Only) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-900 p-3 rounded-full shadow-2xl hover:bg-[#ff6000] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                        <ShoppingCart size={20} />
                    </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-2 md:p-4 flex flex-col flex-1">
                <h3 className="line-clamp-2 text-[11px] md:text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#ff6000] transition-colors min-h-[28px] md:min-h-[32px]">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="mt-1 flex items-center gap-0.5">
                    <Star size={8} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-[9px] md:text-[10px] text-gray-400 font-bold">4.9</span>
                    <span className="hidden md:inline text-[10px] text-gray-300 ml-1">|</span>
                    <span className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 ml-1 italic truncate">
                      {item.sold}
                    </span>
                </div>

                {/* Pricing Block */}
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-base md:text-xl font-[1000] text-[#ff6000] italic tracking-tighter">
                    ৳{item.price}
                  </span>
                  <span className="text-[9px] md:text-xs text-gray-400 line-through font-bold">
                    ৳{item.oldPrice}
                  </span>
                </div>

                {/* Badges and Mobile Quick Add */}
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-[8px] md:text-[10px] font-black text-emerald-600 border border-emerald-100 px-1 rounded bg-emerald-50 italic">
                        {item.badge}
                    </span>
                    {/* Compact Add Button for Mobile */}
                    <button className="md:hidden bg-gray-100 text-gray-900 p-1.5 rounded-lg active:bg-[#ff6000] active:text-white transition-colors">
                      <ShoppingCart size={14} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}