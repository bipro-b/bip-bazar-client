"use client";

import React, { useState } from "react";
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart,
  Share2
} from "lucide-react";
import { motion } from "framer-motion";
import ProductReviews from "@/components/customer/ProductReview";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock Data
  const product = {
    name: "Premium GaN 65W Fast Charger - Ultra Compact",
    price: 1850,
    oldPrice: 2500,
    rating: 4.8,
    reviews: 124,
    brand: "Baseus",
    stock: 15,
    description: "Experience lightning-fast charging with our 65W GaN technology. Perfect for laptops, smartphones, and tablets. Includes multi-layer protection for your devices.",
    images: [
       "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400",
       "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400", 
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* MAIN PRODUCT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Image Gallery (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-gray-50"
            >
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all ${selectedImage === i ? 'border-emerald-500' : 'border-transparent'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
          </div>
         
          {/* CENTER: Product Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                {product.brand} Official Store
              </span>
              <h1 className="text-3xl font-black text-gray-900 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviews} Customer Reviews)</span>
              </div>
            </div>

            <div className="py-6 border-y border-gray-100">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-emerald-600">৳{product.price}</span>
                <span className="text-lg text-gray-400 line-through font-medium">৳{product.oldPrice}</span>
                <span className="ml-auto bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">
                  SAVE 26%
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-700">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  ><Minus size={16} /></button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  ><Plus size={16} /></button>
                </div>
                <span className="text-xs text-gray-400">Only {product.stock} items left!</span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-xl shadow-emerald-200">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-all">
                  <Heart size={24} />
                </button>
              </div>
            </div>
          </div>
          
          {/* RIGHT: Delivery & Trust (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="rounded-3xl border border-gray-100 p-6 space-y-6 bg-gray-50/50">
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-xl border border-gray-100"><Truck className="text-emerald-600" /></div>
                <div>
                  <h4 className="text-sm font-bold">Standard Delivery</h4>
                  <p className="text-xs text-gray-500">2 - 4 days (Inside Dhaka)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-xl border border-gray-100"><RotateCcw className="text-emerald-600" /></div>
                <div>
                  <h4 className="text-sm font-bold">7 Days Return</h4>
                  <p className="text-xs text-gray-500">Change of mind is applicable</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-xl border border-gray-100"><ShieldCheck className="text-emerald-600" /></div>
                <div>
                  <h4 className="text-sm font-bold">Warranty</h4>
                  <p className="text-xs text-gray-500">6 Months Seller Warranty</p>
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-3xl text-sm font-bold text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all">
               <Share2 size={18} />
               Share with Friends
            </button>
          </div>
        </div>

        {/* --- REVIEWS SECTION: PLACED CORRECTLY HERE --- */}
        <div className="mt-16 pt-16 border-t border-gray-100">
          <ProductReviews />
        </div>
        {/* ----------------------------------------------- */}

      </div>
    </div>
  );
}