"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight, Star } from "lucide-react";

const brands = [
  { id: 1, name: "Baseus BD", products: "1.2k+ Products", rating: 4.9, logo: "BS", color: "bg-orange-100 text-orange-600" },
  { id: 2, name: "Xiaomi Global", products: "800+ Products", rating: 4.8, logo: "MI", color: "bg-blue-100 text-blue-600" },
  { id: 3, name: "Apex Footwear", products: "500+ Products", rating: 4.7, logo: "AP", color: "bg-emerald-100 text-emerald-600" },
  { id: 4, name: "Samsung Official", products: "2k+ Products", rating: 5.0, logo: "SM", color: "bg-indigo-100 text-indigo-600" },
];

export default function FeaturedBrands() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Official <span className="text-emerald-500">Wholesalers</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Get authentic products directly from verified sellers.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors">
          View All Partners <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-black ${brand.color}`}>
                {brand.logo}
              </div>
              <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                <BadgeCheck size={14} className="text-emerald-600" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Verified</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {brand.name}
              </h3>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-gray-400 font-medium">{brand.products}</span>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-gray-700">{brand.rating}</span>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl border border-gray-100 py-3 text-xs font-bold text-gray-600 transition-all group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600">
              Visit Store
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}