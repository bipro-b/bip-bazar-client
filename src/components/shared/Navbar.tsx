"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronDown,
  Headset,
  Truck,
  RotateCcw,
  Smartphone,
  Heart,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CartDrawer from "@/components/customer/CartDrawer";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const isActive = (slug: string) => currentCategory === slug;



   const navLinks = [
      { label: "All categories", slug: "all", icon: "" },
    { label: "Best-Selling Items", slug: "best-selling", icon: "👍" },
    { label: "5-Star Rated", slug: "top-rated", icon: "⭐" },
    { label: "Flash Sales", slug: "flash-sale", isFlash: true },
    { label: "Electronics", slug: "electronics" },
    { label: "Home & Decor", slug: "home-decor" },
    { label: "Gadgets", slug: "gadgets" },
     { label: "New Arrivals", slug: "new-arrivals" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      {/* 1. TEMU-STYLE TOP BLACK PROMO BAR */}
      <div className="hidden bg-black py-2 lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-[13px] text-white">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-bold">
              <Truck size={16} className="text-green-400" />
              <span>Free shipping on all orders</span>
            </div>
            <div className="flex items-center gap-2 font-bold border-l border-gray-700 pl-8">
              <RotateCcw size={16} />
              <span>Free returns within 90 days</span>
            </div>
            <div className="flex items-center gap-2 font-bold border-l border-gray-700 pl-8">
              <Smartphone size={16} />
              <span>Get the BIP BAZAR App</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer transition-all">
            <span className="font-bold">Sell on BIP BAZAR</span>
            <div className="bg-[#ff6000] text-white px-2 py-0.5 rounded text-[10px] uppercase">Join Now</div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (TEMU ORANGE THEME) */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <div className="bg-[#ff6000] p-1.5 rounded-md shadow-sm">
                {/* Custom Temu-style icon blocks */}
                <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-black uppercase ml-1">
              BIP<span className="text-[#ff6000]">BAZAR</span>
            </span>
          </Link>

          {/* Search Bar - Centralized and Prominent */}
          <div className="hidden flex-1 max-w-3xl lg:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="womens dresses"
                className="w-full rounded-full border-2 border-black bg-white px-6 py-2.5 text-sm outline-none transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 aspect-square flex items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* User Actions */}
        {/* User Actions */}
<div className="flex items-center gap-1 lg:gap-6 text-sm font-bold">
  <Link
    href="/login"
    className="hidden items-center gap-2 hover:text-[#ff6000] lg:flex"
  >
    <User size={24} strokeWidth={1.5} />
    <div className="flex flex-col leading-tight">
      <span className="text-[11px] font-normal text-gray-500">Orders &</span>
      <span>Account</span>
    </div>
  </Link>

  {/* WISHLIST ADDED BACK HERE */}
  <Link
    href="/favourites"
    className="relative p-2 text-black hover:text-[#ff6000] transition-all hidden sm:block"
  >
    <Heart size={26} strokeWidth={1.5} />
    <span className="absolute right-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6000] text-[10px] font-bold text-white ring-2 ring-white">
      2
    </span>
  </Link>

  <Link
    href="/help"
    className="hidden items-center gap-2 hover:text-[#ff6000] lg:flex"
  >
    <Headset size={24} strokeWidth={1.5} />
    <span>Support</span>
  </Link>

  <button
    onClick={() => setIsCartOpen(true)}
    className="relative p-2 text-black hover:text-[#ff6000] transition-all"
  >
    <ShoppingCart size={28} strokeWidth={1.5} />
    <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff6000] text-[10px] font-bold text-white ring-2 ring-white">
      1
    </span>
  </button>

  {/* Mobile Menu Toggle */}
  <button
    className="lg:hidden text-black"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>
        </div>
      </div>

      {/* 3. CATEGORY BAR */}
      <div className="hidden border-b border-gray-100 lg:block bg-white">
        <div className="container mx-auto flex items-center gap-6 px-4">
           {/* <Link
            href="/products"
            className="flex items-center gap-2 bg-emerald-950 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900 transition-colors rounded-t-none"
          >
            <LayoutGrid size={18} />
            All Categories
            <ChevronDown size={14} />
          </Link> */}

          <div className="flex items-center gap-6 text-[14px] font-bold">
            {navLinks.map((tab) => (
              <Link
                key={tab.slug}
                href={`/products?category=${tab.slug}`}
                className={cn(
                  "flex items-center gap-1.5 py-3 transition-colors",
                  isActive(tab.slug) ? "text-[#ff6000]" : "text-black hover:text-[#ff6000]"
                )}
              >
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PRICE MATCH / SECURITY REMINDER (TEMU FEATURE) */}
      {/* <div className="bg-[#f6f6f6] border-b border-gray-200 py-2">
         <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 text-[12px] text-gray-600">
            <div className="flex items-center gap-1 text-green-700 font-bold">
                <span className="bg-green-700 text-white rounded-full p-0.5">✔</span>
                Never overpay with our Price Match Guarantee
            </div>
            <div className="flex items-center gap-1">
                <span className="text-yellow-600">🔔</span>
                Security reminder: Please be wary of scam messages and links.
            </div>
         </div>
      </div> */}

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-white p-6 shadow-2xl lg:hidden border-t">
          <div className="space-y-4 font-bold">
            {navLinks.map((tab) => (
              <Link
                key={tab.slug}
                href={`/products?category=${tab.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 border-b border-gray-50"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}