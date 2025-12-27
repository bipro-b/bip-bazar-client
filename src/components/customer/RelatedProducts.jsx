"use client";

import React from "react";
import { ShoppingCart, Flame, Zap, Star, ShieldCheck } from "lucide-react";

// --- STEP 1: Expanded Mock Data ---
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
  },
  {
    id: 107,
    name: "USB-C Hub 7-in-1 Aluminum Docking Station",
    price: 1450,
    oldPrice: 2200,
    sold: "900+ sold",
    tag: "Bundle Deal",
    badge: "Free Returns",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400"
  },
  {
    id: 108,
    name: "Pro Gaming Mouse - 16000 DPI Optical Sensor",
    price: 2100,
    oldPrice: 3000,
    sold: "1.1K+ sold",
    tag: "New Arrival",
    badge: "High Quality",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400"
  }
];

export default function RelatedProducts() {
  return (
    <section className="mt-16 border-t border-gray-100 bg-[#f7f8fa] py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* --- Header Section --- */}
        <div className="mb-8 flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-[1000] italic tracking-tighter uppercase text-gray-900 flex items-center gap-2">
              You May <span className="text-[#ff6000]">Also Like</span>
              <Flame size={28} className="text-[#ff6000] fill-[#ff6000] animate-pulse" />
            </h2>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                <span className="flex items-center gap-1"><Zap size={12} className="text-yellow-500 fill-yellow-500"/> Flash Deals</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-emerald-500"/> Secure checkout</span>
            </div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-gray-500 hover:text-[#ff6000] transition-colors">
            See All Items <ShoppingCart size={16} />
          </button>
        </div>

        {/* --- Responsive Grid --- */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {relatedItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-transparent hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dynamic Tag Overlay */}
                <div className="absolute top-0 left-0 flex flex-col gap-1 p-2">
                    <span className="bg-[#ff6000] text-white text-[9px] font-[1000] uppercase italic px-2 py-0.5 rounded-br-lg rounded-tl-sm shadow-lg">
                      {item.tag}
                    </span>
                </div>

                {/* Quick Action Overlay (Desktop Only) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-900 p-3 rounded-full shadow-2xl hover:bg-[#ff6000] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                        <ShoppingCart size={20} />
                    </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <h3 className="line-clamp-2 text-xs md:text-[13px] font-bold text-gray-800 leading-tight group-hover:text-[#ff6000] transition-colors min-h-[32px]">
                  {item.name}
                </h3>

                {/* Rating (Static Mock) */}
                <div className="mt-2 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-[10px] text-gray-400 font-bold ml-1">4.9</span>
                </div>

                {/* Pricing Block */}
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg md:text-xl font-[1000] text-[#ff6000] italic tracking-tighter">
                    ৳{item.price}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-400 line-through font-bold">
                    ৳{item.oldPrice}
                  </span>
                </div>

                {/* Social Proof */}
                <div className="mt-1 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-tighter italic">
                        {item.sold}
                    </span>
                    <span className="text-[10px] font-black text-emerald-600 italic">
                        {item.badge}
                    </span>
                </div>

                {/* Mobile Cart Button */}
                <button className="mt-4 w-full md:hidden bg-gray-900 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShoppingCart size={12} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}