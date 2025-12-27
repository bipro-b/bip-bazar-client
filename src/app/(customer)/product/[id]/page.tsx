"use client";

import React, { useState, useMemo } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Zap,
  CheckCircle2,
  ChevronRight,
  Store,
  Clock,
  Share2,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductReviews from "@/components/customer/ProductReview";
import RelatedProdcts from "@/components/customer/RelatedProducts";

const PRODUCT_DATA = [
  {
    id: "1",
    name: "Premium GaN 65W Fast Charger - Ultra Compact Pro",
    price: 1850,
    oldPrice: 2500,
    rating: 4.8,
    reviews: 124,
    soldCount: "1.2k+",
    brand: "MOMENT PAINTING ART",
    followers: "42k",
    totalSold: "27k+",
    stock: 5,
    description:
      "Experience lightning-fast charging with our 65W GaN technology. Perfect for laptops, smartphones, and tablets. Features multi-layer heat protection.",
    features: [
      "Gallium Nitride (GaN) Technology",
      "65W High-Power Output",
      "Triple Port Charging (2x USB-C, 1x USB-A)",
      "Over-temperature & Short-circuit Protection",
      "Foldable Plug Design for Travel",
    ],
    specifications: {
      Input: "AC 100V-240V, 50/60Hz",
      Weight: "120g",
      Dimensions: "75 x 36 x 32 mm",
      Compatibility: "PD 3.0, QC 4.0, AFC",
    },
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800",
    ],
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = useMemo(() => {
    return PRODUCT_DATA.find((p) => p.id === params.id) || PRODUCT_DATA[0];
  }, [params.id]);

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* Top Marketing Banner (Temu Style) */}
      <div className="bg-[#000] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="flex justify-center gap-6 sm:gap-12 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider animate-pulse px-4">
          <span className="flex items-center gap-2">
            <Truck size={14} className="text-[#ff6000]" /> Free Shipping Special
            For You
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#ff6000]" /> Price Match
            Guarantee
          </span>
        </div>
      </div>

      {/* ✅ Mobile bottom dock takes space so content doesn’t hide behind it */}
      <div className="max-w-[1440px] mx-auto px-4 py-6 pb-24 md:pb-6">
        {/* Breadcrumbs */}
        <nav className="text-[12px] text-gray-500 mb-4 sm:mb-6 flex items-center gap-2 font-medium">
          <span className="hover:text-black cursor-pointer">Home</span>{" "}
          <ChevronRight size={10} />
          <span className="hover:text-black cursor-pointer">Gadgets</span>{" "}
          <ChevronRight size={10} />
          <span className="text-black font-bold truncate max-w-[220px] sm:max-w-[300px]">
            {product.name}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* LEFT: MAIN VISUAL & VISUAL DETAILS */}
          <div className="flex-1 w-full space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* ✅ Thumbnails: horizontal scroll on mobile, vertical on md+ */}
              <div className="order-2 md:order-1">
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 snap-x snap-mandatory">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setSelectedImage(i)}
                      onClick={() => setSelectedImage(i)}
                      className={`shrink-0 snap-start w-14 h-[72px] rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                        selectedImage === i
                          ? "border-[#ff6000] shadow-md scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Select image ${i + 1}`}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt="thumb"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ Primary Image: stable aspect on mobile to avoid huge gaps */}
              <div className="flex-1 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 order-1 md:order-2">
                <div className="relative w-full aspect-[4/5] sm:aspect-[16/12] md:aspect-auto md:min-h-[500px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={product.images[selectedImage]}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={product.name}
                    />
                  </AnimatePresence>

                  <button
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition"
                    aria-label="Share product"
                  >
                    <Share2 size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* ✅ STORE PROFILE BLOCK: better stacking + spacing on mobile */}
            <div className="bg-white p-5 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-full flex items-center justify-center text-white ring-4 ring-gray-50 overflow-hidden shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/shapes/svg?seed=Moment"
                    className="w-full h-full object-cover"
                    alt="store avatar"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-black text-lg sm:text-2xl tracking-tight text-gray-900 uppercase italic truncate">
                    {product.brand}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] sm:text-sm text-gray-500 font-bold">
                    <span>{product.followers} Followers</span>
                    <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{product.totalSold} Sold</span>
                    <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-1 text-black font-black">
                      4.8 <Star size={14} fill="black" />
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-2">
                    <CheckCircle2 size={14} /> Started selling 1 year ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 sm:px-8 py-3 bg-black text-white rounded-full font-black text-xs sm:text-sm uppercase hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                  <Plus size={16} /> Follow
                </button>
                <button className="flex-1 md:flex-none px-6 sm:px-8 py-3 border-2 border-gray-100 rounded-full font-black text-xs sm:text-sm uppercase hover:bg-gray-50 transition-all">
                  Shop All Items
                </button>
              </div>
            </div>

            {/* ✅ FULL WIDTH VISUALIZATION GALLERY */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="flex items-center justify-between px-1 sm:px-2">
                <h2 className="text-lg sm:text-xl font-black uppercase italic tracking-tighter">
                  Product Visualization
                </h2>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400">
                  SCROLL TO EXPLORE
                </span>
              </div>
              {product.images.slice(4).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-[26px] sm:rounded-[40px] border border-gray-100 shadow-sm"
                >
                  <img
                    src={img}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="detail view"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: STICKY DENSE BUYING SECTION */}
          <div className="lg:w-[480px] w-full">
            {/* ✅ Sticky only on lg+ (mobile should scroll normally) */}
            <div className="lg:sticky lg:top-6 space-y-6">
              <div className="bg-white p-5 sm:p-8 rounded-[28px] sm:rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/40 space-y-6 sm:space-y-8">
                {/* Header Urgency */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="bg-red-600 text-white px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase italic tracking-widest flex items-center gap-2">
                      <Zap size={14} fill="white" /> Boxing Day Sale
                    </div>
                    <div className="flex items-center gap-2 text-red-600 font-black text-xs sm:text-sm">
                      <Clock size={16} />{" "}
                      <span className="tabular-nums">00:42:15</span>
                    </div>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight uppercase tracking-tighter italic">
                    {product.name}
                  </h1>
                </div>

                {/* Price Area */}
                <div className="bg-red-50/30 p-4 sm:p-6 rounded-3xl border border-red-50">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-4xl sm:text-5xl font-black text-red-600 tracking-tighter">
                      ৳{product.price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg text-gray-400 line-through font-bold">
                        ৳{product.oldPrice}
                      </span>
                      <span className="text-[10px] sm:text-xs font-black text-red-600 uppercase italic">
                        Save ৳{product.oldPrice - product.price} today
                      </span>
                    </div>
                    <div className="ml-auto bg-red-600 text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-black">
                      -{discount}%
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center gap-4 py-1">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-red-600 rounded-full" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-red-600 uppercase italic animate-pulse whitespace-nowrap">
                    Almost Sold Out!
                  </span>
                </div>

                {/* Quantity & Buy */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1 sm:px-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase text-gray-400 tracking-widest">
                      Select Quantity
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-500">
                      {product.stock} items left
                    </span>
                  </div>

                  {/* ✅ Mobile: stack buttons for stronger tap targets */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-1 border border-gray-100">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center hover:text-red-600 active:scale-95 transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-12 text-center font-black text-lg">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center hover:text-red-600 active:scale-95 transition"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <button className="w-full sm:flex-1 bg-[#ff6000] text-white h-12 sm:h-auto rounded-2xl font-black text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-orange-200 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-3">
                      <ShoppingCart size={20} /> Add to Cart
                    </button>
                  </div>

                  <button className="w-full py-4 sm:py-5 bg-black text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-gray-800 active:scale-[0.99] transition-all">
                    Direct Buy Now
                  </button>
                </div>

                {/* Trust Section */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                    <div className="flex items-center gap-2 text-emerald-700 font-black text-[10px] uppercase">
                      <Truck size={14} /> Fast Delivery
                    </div>
                    <p className="text-[9px] font-bold text-gray-500">
                      2-3 Business Days
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                    <div className="flex items-center gap-2 text-blue-700 font-black text-[10px] uppercase">
                      <ShieldCheck size={14} /> Protection
                    </div>
                    <p className="text-[9px] font-bold text-gray-500">
                      90-Day Easy Return
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Specifications Card */}
              <div className="bg-white p-5 sm:p-8 rounded-[28px] sm:rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest italic">
                    Specifications
                  </h3>
                  <Info size={16} className="text-gray-300" />
                </div>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center text-xs border-b border-gray-50 pb-3 gap-4"
                    >
                      <span className="text-gray-400 font-bold uppercase tracking-tighter">
                        {key}
                      </span>
                      <span className="font-black text-gray-800 italic text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-16 sm:mt-24">
          <ProductReviews />
        </div>
        <div className="mt-16 sm:mt-24">
          <RelatedProdcts />
        </div>

        {/* ✅ FIXED MOBILE BOTTOM DOCK (Temu Style) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-100 p-3 z-[100] flex items-center gap-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <button
            className="flex flex-col items-center px-2 text-gray-500 active:scale-95 transition"
            aria-label="Store"
          >
            <Store size={20} />
            <span className="text-[8px] font-bold">Store</span>
          </button>

          <button
            className="flex flex-col items-center px-2 text-gray-500 active:scale-95 transition"
            aria-label="Wishlist"
          >
            <Heart size={20} />
            <span className="text-[8px] font-bold">Wish</span>
          </button>

          <button className="flex-1 bg-black text-white h-12 rounded-xl font-black text-[10px] uppercase tracking-tighter active:scale-[0.99] transition">
            Direct Buy
          </button>

          <button className="flex-1 bg-[#ff6000] text-white h-12 rounded-xl font-black text-[10px] uppercase tracking-tighter flex items-center justify-center gap-2 active:scale-[0.99] transition">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
