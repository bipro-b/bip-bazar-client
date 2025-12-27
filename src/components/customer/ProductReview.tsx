"use client";

import React from "react";
import { 
  Star, CheckCircle2, ThumbsUp, MessageSquare, 
  Camera, ChevronRight, Filter, PlayCircle,
  Image as ImageIcon
} from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    user: "Tanvir Ahmed",
    rating: 5,
    date: "2 days ago",
    comment: "The 65W charging is legit! My laptop charges fully in about an hour. Built quality is heavy and feels premium. Highly recommended for the price.",
    verified: true,
    likes: 12,
    images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400"],
    tags: ["Fast Charging", "High Quality"]
  },
  {
    id: 2,
    user: "Nusrat Jahan",
    rating: 4,
    date: "1 week ago",
    comment: "Very compact and doesn't get too hot. Only downside is the box was slightly crushed during delivery, but the product is fine.",
    verified: true,
    likes: 4,
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400"],
    tags: ["Compact"]
  }
];

export default function ProductReviews() {
  return (
    <section className="py-16 bg-white rounded-[40px] shadow-sm border border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-[1000] text-gray-900 italic tracking-tighter uppercase leading-none">
              Real <span className="text-[#ff6000]">Feedback</span>
            </h2>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Verified Buyer Experience</p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-3 bg-gray-50 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center gap-2">
              <Filter size={14} /> Filter
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center gap-2">
              Write a Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 1. ADVANCED RATING SUMMARY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#fcfcfc] rounded-[32px] p-8 border border-gray-50 shadow-inner">
              <div className="text-center space-y-2">
                <div className="text-7xl font-[1000] text-gray-900 tracking-tighter italic">4.8</div>
                <div className="flex justify-center gap-1 text-[#ffb800]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <p className="text-[11px] font-black text-emerald-600 bg-emerald-50 inline-block px-4 py-1 rounded-full uppercase tracking-tighter">
                  98% of buyers recommend this
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <RatingBar label="5" percent={85} />
                <RatingBar label="4" percent={10} />
                <RatingBar label="3" percent={3} />
                <RatingBar label="2" percent={1} />
                <RatingBar label="1" percent={1} />
              </div>
            </div>

            {/* Photo Highlights Gallery Preview */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 px-2">Review Gallery (42)</h4>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gray-100 overflow-hidden relative group cursor-pointer">
                    <img src={reviews[i % 2].images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="gallery" />
                    {i === 3 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-bold">
                        +38
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. DYNAMIC REVIEWS FEED */}
          <div className="lg:col-span-8">
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", "With Photos (42)", "Critical (2)", "High Quality", "Fast Shipping"].map((f, i) => (
                <button key={i} className={`px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-tighter transition-all border ${
                  i === 0 ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                }`}>
                  {f}
                </button>
              ))}
            </div>

            <div className="space-y-12">
              {reviews.map((review) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={review.id} 
                  className="group relative pb-12 border-b border-gray-50 last:border-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center font-black text-gray-600 shadow-sm">
                        {review.user.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-gray-900 uppercase italic tracking-tighter">{review.user}</span>
                          <CheckCircle2 size={14} className="text-emerald-500" />
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-[#ffb800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-100"} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 ml-0 md:ml-16">
                    {/* Tags */}
                    <div className="flex gap-2">
                      {review.tags?.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-tighter bg-gray-50 text-gray-500 px-3 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed font-medium">
                      "{review.comment}"
                    </p>

                    {/* Review Media */}
                    <div className="flex flex-wrap gap-3">
                      {review.images.map((img, i) => (
                        <div key={i} className="h-32 w-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg shadow-gray-200/50 group-hover:rotate-2 transition-transform">
                          <img src={img} alt="review" className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Interaction Bar */}
                    <div className="flex items-center gap-8 pt-4">
                      <button className="flex items-center gap-2 text-[11px] font-black text-gray-400 hover:text-[#ff6000] transition-colors uppercase tracking-widest">
                        <ThumbsUp size={16} /> Helpful ({review.likes})
                      </button>
                      <button className="flex items-center gap-2 text-[11px] font-black text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
                        <MessageSquare size={16} /> Comment
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="group w-full mt-12 py-6 rounded-[24px] bg-gray-50 border-2 border-transparent hover:border-black hover:bg-white transition-all flex items-center justify-center gap-3">
              <span className="text-sm font-[1000] uppercase tracking-[0.2em] text-gray-400 group-hover:text-black">Show All 124 Reviews</span>
              <ChevronRight size={20} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RatingBar({ label, percent }: { label: string, percent: number }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className="flex items-center gap-1 w-8">
        <span className="text-xs font-black text-gray-900 italic">{label}</span>
        <Star size={10} fill="currentColor" className="text-gray-300 group-hover:text-[#ffb800]" />
      </div>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#ffb800] to-[#ff6000]" 
        />
      </div>
      <span className="text-[10px] font-black text-gray-400 w-10 text-right">{percent}%</span>
    </div>
  );
}