"use client";

import React, { useState } from "react";
import { ShoppingCart, Star, ChevronRight, Zap, TrendingUp, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  "Recommended", "Women's Clothing", "Electronics", 
  "Home & Kitchen", "Sports & Outdoors", "Beauty & Health",
  "Toys & Games", "Automotive", "Pet Supplies"
];

const mockProducts = [
  {
    id: 1,
    name: "Elegant Ladies' Jacquard Fabric Summer Dress - Slim Fit",
    price: 1850,
    oldPrice: 3200,
    sold: "1.2k+ sold",
    rating: 4.8,
    reviews: 856,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    isFlash: true
  },
  {
    id: 2,
    name: "Wireless Noise Cancelling Earbuds Pro with GaN Tech",
    price: 2450,
    oldPrice: 5500,
    sold: "5k+ sold",
    rating: 4.9,
    reviews: 1240,
    tag: "90% OFF",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    isFlash: true
  },
  {
    id: 3,
    name: "Smart RGB Mechanical Keyboard - Hot Swappable",
    price: 4200,
    oldPrice: 6800,
    sold: "450 sold",
    rating: 4.7,
    reviews: 120,
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    isFlash: false
  },
  {
    id: 4,
    name: "Ultra-Thin 4K Portable Monitor for Gaming & Work",
    price: 12500,
    oldPrice: 18000,
    sold: "89 sold",
    rating: 5.0,
    reviews: 45,
    tag: "High Quality",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    isFlash: false
  },
  {
    id: 5,
    name: "Premium GaN 100W Fast Charger - 4 Port Desktop",
    price: 3800,
    oldPrice: 4500,
    sold: "2k+ sold",
    rating: 4.9,
    reviews: 310,
    tag: "Top Rated",
    image: "https://images.unsplash.com/photo-1610944230744-295871753421?w=400",
    isFlash: true
  },
  {
    id: 6,
    name: "Minimalist Leather Backpack for 16-inch Laptops",
    price: 5500,
    oldPrice: 8900,
    sold: "312 sold",
    rating: 4.6,
    reviews: 98,
    tag: "Limited Stock",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    isFlash: false
  }
];

export default function ExploreInterests() {
  const [activeTab, setActiveTab] = useState("Recommended");

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#ff6000] font-black text-sm uppercase tracking-widest">
              <TrendingUp size={18} />
              Just For You
            </div>
            <h2 className="text-3xl font-[1000] tracking-tighter text-black uppercase italic">
              Explore <span className="text-[#ff6000]">Interests</span>
            </h2>
          </div>
          
          <Link href="/all-products" className="text-sm font-bold text-gray-400 hover:text-black flex items-center gap-1 transition-colors">
            View personalized recommendations <ChevronRight size={16} />
          </Link>
        </div>

        {/* --- STICKY CATEGORY NAV --- */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "relative whitespace-nowrap px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300",
                activeTab === cat 
                  ? "bg-black text-white shadow-lg shadow-black/20" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- HIGH DENSITY PRODUCT GRID --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
          <AnimatePresence mode="popLayout">
            {mockProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={product.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-[#ff6000]/20 transition-all duration-300"
              >
                {/* Media Area */}
                <div className="relative aspect-[4/5] bg-[#f8f8f8] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Dynamic Badges */}
                  <div className="absolute top-0 left-0 flex flex-col gap-1">
                    <div className="bg-[#ff6000] text-white text-[10px] font-black px-2 py-1 rounded-br-lg shadow-sm">
                      {product.tag}
                    </div>
                    {product.isFlash && (
                      <div className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-br-md flex items-center gap-1 w-fit">
                        <Zap size={10} fill="yellow" className="text-yellow-400" /> FLASH
                      </div>
                    )}
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-md text-black py-2 rounded-xl text-[11px] font-bold shadow-xl border border-gray-200 hover:bg-[#ff6000] hover:text-white hover:border-[#ff6000] transition-all">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-3 space-y-2">
                  <h3 className="line-clamp-2 text-[13px] font-medium text-gray-700 leading-snug h-9 group-hover:text-[#ff6000] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg font-black text-[#ff6000]">৳{product.price}</span>
                      <span className="text-[11px] text-gray-400 line-through">৳{product.oldPrice}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                       <div className="flex">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} size={10} className={cn("fill-current", i < 4 ? "text-orange-400" : "text-gray-200")} />
                         ))}
                       </div>
                       <span className="text-[10px] font-bold text-gray-400">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                      <Trophy size={12} />
                      {product.sold}
                    </div>
                    <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-[#ff6000] transition-all transform active:scale-95 shadow-lg shadow-black/5">
                      <ShoppingCart size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-xl">
                Load More Recommendations
            </button>
        </div>
      </div>
    </section>
  );
}

// Utility for linking (internal or external)
function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    return <a href={href} className={className}>{children}</a>;
}