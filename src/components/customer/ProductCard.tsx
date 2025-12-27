"use client";

import React from "react";
import { Star, ShoppingCart, Heart, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  oldPrice?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  soldCount?: string;
  isFlashSale?: boolean;
}

export default function ProductCard({
  id = "1",
  name,
  price,
  oldPrice,
  image,
  rating = 4.8,
  reviews = 124,
  badge,
  soldCount = "1.2k+ sold",
  isFlashSale = false,
}: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#ff6000]/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative aspect-[1/1] overflow-hidden bg-[#f7f7f7]">
        <Link href={`/product/${id}`} className="block h-full w-full">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-0 left-0 flex flex-col gap-1">
          {badge && (
            <div className="bg-[#ff6000] text-white text-[10px] font-black px-2 py-1 rounded-br-lg shadow-sm">
              {badge}
            </div>
          )}
          {isFlashSale && (
            <div className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-br-md flex items-center gap-1 w-fit">
              <Zap size={10} fill="#ff6000" className="text-[#ff6000]" /> FLASH
            </div>
          )}
        </div>

        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
          <Heart size={16} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title */}
        <Link href={`/product/${id}`} className="block mb-1.5">
          <h3 className="text-[13px] font-medium text-gray-700 line-clamp-2 leading-snug group-hover:text-[#ff6000] transition-colors h-9">
            {name}
          </h3>
        </Link>

        {/* Rating & Sold Info */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-gray-200"} />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-400">{soldCount}</span>
        </div>

        {/* Price Section */}
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-[1000] text-[#ff6000] tracking-tighter">৳{price}</span>
              {oldPrice && (
                <span className="text-[11px] text-gray-400 line-through font-bold">৳{oldPrice}</span>
              )}
            </div>
            {isFlashSale && (
                <div className="w-full h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div className="w-[70%] h-full bg-[#ff6000]" />
                </div>
            )}
          </div>
          
          <button className="h-9 w-9 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ff6000] active:scale-90 transition-all shadow-md">
            <ShoppingCart size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}