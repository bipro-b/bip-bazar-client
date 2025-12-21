"use client";

import React from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  oldPrice?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
}

export default function ProductCard({
  id = "1",
  name = "Premium GaN 65W Fast Charger",
  price = 1850,
  oldPrice = 2500,
  image = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400",
  rating = 4.8,
  reviews = 124,
  badge = "-26%",
}: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl border border-gray-100 p-3 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
        {/* LINK 1: The Image */}
        <Link href={`/product/${id}`} className="block w-full h-full">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </Link>
        
        {/* Floating Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none">
          {badge && (
            <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-sm uppercase tracking-tighter">
              {badge}
            </span>
          )}
        </div>

        {/* Quick Actions Overlay (Desktop) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          {/* LINK 2: Quick View using ID */}
          <Link 
            href={`/product/${id}`} 
            className="h-10 w-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <Eye size={18} />
          </Link>
          <button className="h-10 w-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 px-1 pb-2 space-y-2">
        <div className="flex items-center gap-1.5">
          <div className="flex text-yellow-400">
            <Star size={12} fill="currentColor" />
          </div>
          <span className="text-[11px] font-bold text-gray-400">{rating} ({reviews})</span>
        </div>

        {/* LINK 3: The Product Title */}
        <Link href={`/product/${id}`} className="block group/title">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover/title:text-emerald-600 transition-colors leading-tight min-h-[40px]">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex flex-col">
            <span className="text-lg font-black text-emerald-700 italic tracking-tight">৳{price}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through font-medium">৳{oldPrice}</span>
            )}
          </div>
          
          <button className="h-11 w-11 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-emerald-600 active:scale-90 transition-all shadow-md group-hover:shadow-emerald-200">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}