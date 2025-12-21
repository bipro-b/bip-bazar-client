"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for favorites
const INITIAL_FAVORITES = [
  { id: "1", name: "Premium GaN 65W Fast Charger", price: 1850, stock: "In Stock", image: "https://images.unsplash.com/photo-1614633833026-002064294406?q=80&w=400" },
  { id: "2", name: "Noise Cancelling Headphones", price: 4500, stock: "In Stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
  { id: "4", name: "Anker USB-C to Lightning Cable", price: 1200, stock: "Out of Stock", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400" },
];

export default function FavoritesPage() {
  const [items, setItems] = useState(INITIAL_FAVORITES);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase text-gray-900">
              My <span className="text-emerald-500">Favorites</span>
            </h1>
            <p className="text-gray-500 font-medium mt-2">
              You have {items.length} items saved in your wishlist
            </p>
          </div>
          <Link 
            href="/products" 
            className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:gap-3 transition-all"
          >
            Continue Shopping <ArrowRight size={18} />
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List Section */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="group relative flex flex-col sm:flex-row items-center gap-6 p-4 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50/50 transition-all bg-white"
                  >
                    {/* Product Image */}
                    <div className="h-32 w-32 shrink-0 rounded-2xl overflow-hidden bg-gray-50">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-3 mt-1">
                        <span className="text-xl font-black text-emerald-700 italic">৳{item.price}</span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          item.stock === 'In Stock' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                        }`}>
                          {item.stock}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                      <button 
                        disabled={item.stock !== 'In Stock'}
                        className="flex-1 sm:w-40 bg-gray-900 text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 disabled:bg-gray-200 disabled:cursor-not-allowed transition-all"
                      >
                        <ShoppingCart size={16} /> Add to Cart
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Quick Summary / Action Box */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
                <h2 className="text-lg font-black uppercase tracking-tight">Wishlist Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium text-gray-500">
                    <span>Subtotal ({items.length} items)</span>
                    <span className="text-gray-900 font-bold">৳7,550</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500">
                    <span>Shipping</span>
                    <span className="text-emerald-600 font-bold italic">Calculated at Checkout</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between">
                    <span className="font-bold">Total Est.</span>
                    <span className="text-2xl font-black italic text-emerald-700">৳7,550</span>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
                  Add All Available to Cart <ShoppingBag size={20} />
                </button>
              </div>
            </aside>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-24 space-y-6 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-100">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-gray-200 shadow-sm">
                <Heart size={48} />
              </div>
            </div>
            <div className="max-w-xs mx-auto space-y-2">
              <h2 className="text-2xl font-black italic">Your wishlist is empty</h2>
              <p className="text-gray-400 text-sm font-medium">Save your favorite tech items here to keep track of them!</p>
            </div>
            <Link 
              href="/products" 
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all"
            >
              Start Exploring
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}