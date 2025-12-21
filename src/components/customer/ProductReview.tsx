"use client";

import React from "react";
import { Star, CheckCircle2, ThumbsUp, MessageSquare, Camera } from "lucide-react";
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
    images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400"]
  },
  {
    id: 2,
    user: "Nusrat Jahan",
    rating: 4,
    date: "1 week ago",
    comment: "Very compact and doesn't get too hot. Only downside is the box was slightly crushed during delivery, but the product is fine.",
    verified: true,
    likes: 4,
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400"]
  }
];

export default function ProductReviews() {
  return (
    <section className="py-12 border-t border-gray-100 mt-12">
      <h2 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase mb-8">
        Customer <span className="text-emerald-500">Reviews</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 1. Rating Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-emerald-50 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-black text-emerald-950 italic">4.8</h3>
            <div className="flex justify-center gap-1 my-3 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Based on 124 Reviews</p>
          </div>

          <div className="space-y-3">
            <RatingBar label="5 Star" percent={85} />
            <RatingBar label="4 Star" percent={10} />
            <RatingBar label="3 Star" percent={3} />
            <RatingBar label="2 Star" percent={1} />
            <RatingBar label="1 Star" percent={1} />
          </div>
        </div>

        {/* 2. Reviews List */}
        <div className="lg:col-span-8 space-y-8">
          {/* Filter Bar */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
            <button className="text-sm font-bold text-emerald-600 border-b-2 border-emerald-600 pb-4">Relevant</button>
            <button className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors pb-4">Most Recent</button>
            <button className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors pb-4">With Photos</button>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-10">
            {reviews.map((review) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={review.id} 
                className="space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 uppercase text-xs">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-gray-900">{review.user}</span>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={10} /> Verified Purchase
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-200"} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.comment}
                </p>

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="flex gap-2">
                    {review.images.map((img, i) => (
                      <div key={i} className="h-20 w-20 rounded-xl overflow-hidden border border-gray-100">
                        <img src={img} alt="user upload" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-6 pt-2">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors">
                    <ThumbsUp size={14} /> Helpful ({review.likes})
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors">
                    <MessageSquare size={14} /> Reply
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-100 text-sm font-bold text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all uppercase tracking-widest">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

function RatingBar({ label, percent }: { label: string, percent: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-bold text-gray-500 w-12">{label}</span>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          className="h-full bg-yellow-400" 
        />
      </div>
      <span className="text-xs font-bold text-gray-400 w-8">{percent}%</span>
    </div>
  );
}