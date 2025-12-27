"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Grid2X2,
  List,
  Star,
  SlidersHorizontal,
  Zap,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/customer/ProductCard";
const products = [
  {
    id: "1",
    name: "Baseus 65W GaN Fast Charger - 3 Port",
    price: 2450,
    oldPrice: 3200,
    badge: "-30%",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
    isFlashSale: true,
  },
  {
    id: "2",
    name: "Premium Wireless Mechanical Keyboard RGB",
    price: 4200,
    oldPrice: 5500,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
  },
  {
    id: "3",
    name: "Ultra-Clear 4K Portable Gaming Monitor",
    price: 15800,
    oldPrice: 18500,
    badge: "-15%",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    isFlashSale: true,
  },
  {
    id: "4",
    name: "Noise Cancelling Bluetooth Headphones Pro",
    price: 3100,
    oldPrice: 4800,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: "5",
    name: "Smart Watch Series 8 - Midnight Edition",
    price: 2900,
    oldPrice: 3500,
    badge: "90% OFF",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    isFlashSale: true,
  },
  {
    id: "6",
    name: "Magnetic 15W Magsafe Power Bank 10000mAh",
    price: 1950,
    oldPrice: 2800,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
  },
  {
    id: "7",
    name: "Ergonomic Vertical Wireless Gaming Mouse",
    price: 1250,
    oldPrice: 1900,
    badge: "-35%",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
  },
  {
    id: "8",
    name: "USB-C Hub 11-in-1 Dual Display Adapter",
    price: 3400,
    oldPrice: 4200,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1544650039-22886fbb4323?w=400",
    isFlashSale: true,
  },
  {
    id: "9",
    name: "Studio Quality Condenser Mic with Arm",
    price: 5600,
    oldPrice: 7500,
    badge: "-25%",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
  },
  {
    id: "10",
    name: "Smart Home RGB LED Strip 10 Meters",
    price: 850,
    oldPrice: 1400,
    badge: "Cheap",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    isFlashSale: true,
  },
  {
    id: "11",
    name: "Desktop Vacuum Cleaner Mini Portable",
    price: 450,
    oldPrice: 900,
    badge: "Cute",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
  },
  {
    id: "12",
    name: "High Speed HDMI 2.1 Cable 8K Support",
    price: 650,
    oldPrice: 1200,
    badge: "Must Buy",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
  },
  {
    id: "13",
    name: "Phone Tripod with Bluetooth Remote",
    price: 950,
    oldPrice: 1500,
    badge: "Creator",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
    isFlashSale: true,
  },
  {
    id: "14",
    name: "Laptop Cooling Pad with 6 Silent Fans",
    price: 1400,
    oldPrice: 2200,
    badge: "Cooling",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
  },
  {
    id: "15",
    name: "Universal Travel Adapter - Global Use",
    price: 1100,
    oldPrice: 1800,
    badge: "Travel",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
  },
  {
    id: "16",
    name: "Screen Cleaning Kit for Gadgets",
    price: 250,
    oldPrice: 500,
    badge: "Clean",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400",
    isFlashSale: true,
  },
  {
    id: "17",
    name: "Anti-Blue Light Computer Glasses",
    price: 550,
    oldPrice: 1200,
    badge: "Health",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400",
  },
  {
    id: "18",
    name: "Portable Handheld Gaming Console Retro",
    price: 2800,
    oldPrice: 4500,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    isFlashSale: true,
  },
  {
    id: "19",
    name: "Cable Management Box - Large White",
    price: 750,
    oldPrice: 1200,
    badge: "Org",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
  },
  {
    id: "20",
    name: "Bluetooth Selfie Stick with Light",
    price: 1200,
    oldPrice: 2100,
    badge: "-40%",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
  },
];

// export default function ProductShowcase() {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4 px-4 py-10 max-w-7xl mx-auto">
//       {products.map((p) => (
//         <ProductCard key={p.id} {...p} />
//       ))}
//     </div>
//   );
// }

const categories = [
  "All Electronics",
  "Gadgets",
  "Smart Home",
  "Accessories",
  "Audio",
  "Wearables",
];
const brands = ["Baseus", "Anker", "Samsung", "Xiaomi", "Apple", "Ugreen"];

export default function AllProductsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState(5000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="bg-[#f4f4f4] min-h-screen pb-20">
      {/* 1. ULTRA-THIN TRUST BAR */}
      <div className="bg-white border-b border-gray-100 py-2">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-tight">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-emerald-600"><Zap size={12} fill="currentColor" /> Price Match</div>
            <div className="flex items-center gap-1"><RotateCcw size={12} /> 90-Day Returns</div>
            <div className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</div>
          </div>
          <div className="hidden md:block text-[#ff6000]">Free Shipping on all orders</div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT CONTAINER - Widened to 1600px to reduce side gaps */}
      <div className="max-w-[1600px] mx-auto px-4 mt-4">
        
        <div className="flex flex-col lg:flex-row gap-5">
          
        {/* 3. SLIM SIDEBAR - Enhanced for Sticky + Internal Scroll */}
<aside className="hidden lg:block w-64 shrink-0">
  <div 
    className={cn(
      "bg-white rounded-2xl border border-gray-200 p-5",
      "sticky top-4", // Sticks to the top
      "max-h-[calc(100vh-32px)] overflow-y-auto", // Enables internal scroll
      "scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent" // Clean aesthetics
    )}
  >
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xs font-[1000] uppercase tracking-widest text-gray-400">
        Refine By
      </h2>
      <button className="text-[10px] font-bold text-[#ff6000] hover:underline">
        Reset All
      </button>
    </div>

    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-black text-gray-900 mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2.5 group cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-[#ff6000] focus:ring-0 cursor-pointer" 
              />
              <span className="text-[13px] font-medium text-gray-600 group-hover:text-black transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-black text-gray-900 mb-4">Price (৳)</h3>
        <input
          type="range" 
          min="0" 
          max="10000" 
          step="100" 
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff6000]"
        />
        <div className="flex justify-between mt-3 font-black text-[#ff6000] text-xs uppercase italic">
          <span className="text-gray-400 opacity-50">৳0</span>
          <span className="bg-orange-50 px-2 py-0.5 rounded shadow-sm border border-orange-100">
            Under ৳{priceRange}
          </span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-black text-gray-900 mb-4">Customer Rating</h3>
        <div className="space-y-1">
          {[5, 4, 3].map((star) => (
            <button
              key={star}
              className="flex items-center gap-2 w-full py-2 px-2 hover:bg-gray-50 rounded-xl transition-all group text-left"
            >
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < star ? "currentColor" : "none"}
                    className={i < star ? "" : "text-gray-200"}
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-500 group-hover:text-black">
                {star}.0 & Up
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands (Extra filter to test the scrollability) */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-black text-gray-900 mb-4">Popular Brands</h3>
        <div className="grid grid-cols-2 gap-2">
          {["Baseus", "Anker", "Ugreen", "Samsung", "Apple", "Xiaomi"].map((brand) => (
            <button key={brand} className="text-[11px] font-bold py-2 border border-gray-100 rounded-lg hover:border-[#ff6000] hover:text-[#ff6000] transition-all">
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Sticky Footer inside Sidebar */}
    <div className="pt-8 mt-4 border-t border-gray-50">
      <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#ff6000] transition-all shadow-xl shadow-black/5 active:scale-95">
        Apply Filters
      </button>
    </div>
  </div>
</aside>

          {/* 4. CONTENT AREA - Flex-1 makes this take all remaining space */}
          <div className="flex-1 min-w-0">
            
            {/* COMPACT TOOLBAR */}
            <div className="bg-white rounded-2xl border border-gray-200 mb-4 px-4 py-3 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-[1000] text-gray-900 uppercase italic leading-none">
                  All <span className="text-[#ff6000]">Gadgets</span>
                </h1>
                <span className="text-[11px] font-bold text-gray-400">2,410 ITEMS</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                  <button onClick={() => setViewMode("grid")} className={cn("p-1.5 rounded-md", viewMode === "grid" ? "bg-white shadow-sm text-[#ff6000]" : "text-gray-400")}>
                    <Grid2X2 size={16} />
                  </button>
                  <button onClick={() => setViewMode("list")} className={cn("p-1.5 rounded-md", viewMode === "list" ? "bg-white shadow-sm text-[#ff6000]" : "text-gray-400")}>
                    <List size={16} />
                  </button>
                </div>
                <select className="bg-transparent text-[12px] font-black uppercase tracking-tight text-gray-700 outline-none cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Top Rated</option>
                </select>
              </div>
            </div>

            {/* 5. DENSE PRODUCT GRID */}
            {/* Removed the 'max-w-7xl mx-auto' from here and added gap-2 to mimic Temu's high density */}
            <div className={cn(
              "grid gap-2 sm:gap-3",
              viewMode === "grid" 
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" 
                : "grid-cols-1"
            )}>
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
              {/* Duplicate to show density if needed */}
              {products.map((p) => (
                <ProductCard key={`dup-${p.id}`} {...p} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col items-center gap-4 py-16">
              <div className="flex gap-1">
                {[1, 2, 3, "...", 12].map((page, i) => (
                  <button key={i} className={cn(
                    "h-9 w-9 rounded-lg flex items-center justify-center font-black text-xs border transition-all",
                    page === 1 ? "bg-[#ff6000] border-[#ff6000] text-white" : "bg-white border-gray-200 text-gray-500 hover:border-[#ff6000]"
                  )}>
                    {page}
                  </button>
                ))}
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">End of results</p>
            </div>
          </div>
          </div>
        </div>
    

      {/* 7. MOBILE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[40px] max-h-[90vh] overflow-y-auto p-8 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-[1000] italic uppercase tracking-tighter">
                Filter <span className="text-[#ff6000]">Results</span>
              </h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Reuse Sidebar Content Logic Here for Mobile */}
            <div className="space-y-8 pb-20">
              {/* ... Filter content ... */}
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-[#ff6000] text-white py-4 rounded-2xl font-[1000] text-lg shadow-xl shadow-orange-200"
              >
                Show 2,410 Items
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
