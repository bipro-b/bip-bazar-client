"use client";

import React, { useState } from "react";
import { 
  Filter, 
  ChevronDown, 
  Grid2X2, 
  List, 
  Star, 
  Search,
  SlidersHorizontal
} from "lucide-react";
import ProductCard from "@/components/customer/ProductCard"; // Using your existing card component

const categories = ["All Electronics", "Gadgets", "Smart Home", "Accessories", "Audio"];
const brands = ["Baseus", "Anker", "Samsung", "Xiaomi", "Apple"];

export default function AllProductsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState(5000);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Mobile Filter Trigger */}
        <button className="lg:hidden w-full mb-4 flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-2xl font-bold text-sm">
          <SlidersHorizontal size={18} /> Filters & Sorting
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR: Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-600 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Price Range</h3>
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600" 
              />
              <div className="flex justify-between mt-2 text-xs font-bold text-gray-400">
                <span>৳0</span>
                <span className="text-emerald-600 font-black italic">Max: ৳{priceRange}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Rating</h3>
              {[5, 4, 3].map((star) => (
                <button key={star} className="flex items-center gap-2 w-full py-1 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex text-yellow-400">
                    {[...Array(star)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600">& Up</span>
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT: Products */}
          <div className="flex-1 space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50 p-4 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-500">Showing <span className="text-gray-900">24</span> Products</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex bg-white rounded-xl p-1 border border-gray-200">
                  <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-emerald-50 text-emerald-600' : 'text-gray-400'}`}><Grid2X2 size={18} /></button>
                  <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-emerald-50 text-emerald-600' : 'text-gray-400'}`}><List size={18} /></button>
                </div>
                
                <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-600 outline-none focus:border-emerald-500">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {[...Array(9)].map((_, i) => (
                <ProductCard key={i} /> 
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center pt-12">
              <div className="flex gap-2">
                {[1, 2, 3, '...', 10].map((page, i) => (
                  <button key={i} className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${page === 1 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-white border border-gray-100 text-gray-400 hover:border-emerald-500 hover:text-emerald-600'}`}>
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}