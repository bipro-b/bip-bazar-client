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
  Headset,
  Truck,
  RotateCcw,
  Smartphone,
  Heart,
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
    // ✅ overflow-x-hidden prevents horizontal overflow that causes black/right-side space on mobile
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans overflow-x-hidden">
      {/* 1. TEMU-STYLE TOP BLACK PROMO BAR */}
      <div className="hidden bg-black py-2 lg:block">
        <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between px-4 text-[13px] text-white">
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
            <div className="bg-[#ff6000] text-white px-2 py-0.5 rounded text-[10px] uppercase">
              Join Now
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (TEMU ORANGE THEME) */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-3">
        {/* ✅ min-w-0 prevents flex children from forcing overflow */}
        <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-3 lg:gap-10">
          {/* Logo */}
          {/* ✅ min-w-0 + truncate keeps logo from overflowing on narrow screens */}
          <Link href="/" className="flex min-w-0 items-center gap-1 shrink-0">
            <div className="bg-[#ff6000] p-1.5 rounded-md shadow-sm">
              {/* Custom Temu-style icon blocks */}
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            <span className="min-w-0 truncate text-lg sm:text-2xl font-black tracking-tighter text-black uppercase ml-1">
              BIP<span className="text-[#ff6000]">BAZAR</span>
            </span>
          </Link>

          {/* Search Bar - Centralized and Prominent (Desktop only) */}
          <div className="hidden flex-1 max-w-3xl lg:block min-w-0">
            <div className="relative flex items-center min-w-0">
              <input
                type="text"
                placeholder="womens dresses"
                className="w-full rounded-full border-2 border-black bg-white px-6 py-2.5 text-sm outline-none transition-all"
              />
              <button
                className="absolute right-1 top-1 bottom-1 aspect-square flex items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* User Actions */}
          {/* ✅ shrink-0 so icons don’t compress weirdly; min-w-0 avoids pushing width */}
          <div className="flex shrink-0 min-w-0 items-center gap-1.5 lg:gap-6 text-sm font-bold">
            {/* Desktop Account */}
            <Link
              href="/account/orders"
              className="hidden lg:flex items-center gap-2 hover:text-[#ff6000]"
              aria-label="Orders & Account"
            >
              <User size={24} strokeWidth={1.5} />
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-normal text-gray-500">
                  Orders &
                </span>
                <span>Account</span>
              </div>
            </Link>
           

            {/* Desktop Support */}
            <Link
              href="/help"
              className="hidden lg:flex items-center gap-2 hover:text-[#ff6000]"
              aria-label="Support"
            >
              <Headset size={24} strokeWidth={1.5} />
              <span>Support</span>
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-black hover:text-[#ff6000] transition-all"
              aria-label="Cart"
              type="button"
            >
              <ShoppingCart size={26} strokeWidth={1.5} />
              <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff6000] text-[10px] font-bold text-white ring-2 ring-white">
                1
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            {/* ✅ removed -mr-2 (negative margin can cause horizontal overflow) */}
            <button
              className="lg:hidden text-black p-2"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ✅ Optional: Mobile search (helps layout match screenshot + avoids missing search on mobile) */}
        <div className="mt-3 lg:hidden">
          <div className="relative flex items-center min-w-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border-2 border-black bg-white px-4 py-2.5 text-sm outline-none"
            />
            <button
              className="absolute right-1 top-1 bottom-1 aspect-square flex items-center justify-center rounded-full bg-black text-white transition-all hover:bg-gray-800"
              aria-label="Search"
              type="button"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY BAR (Desktop) */}
      <div className="hidden border-b border-gray-100 lg:block bg-white">
        <div className="mx-auto w-full max-w-screen-xl flex items-center gap-6 px-4">
          <div className="flex items-center gap-6 text-[14px] font-bold">
            {navLinks.map((tab) => (
              <Link
                key={tab.slug}
                href={`/products?category=${tab.slug}`}
                className={cn(
                  "flex items-center gap-1.5 py-3 transition-colors",
                  isActive(tab.slug)
                    ? "text-[#ff6000]"
                    : "text-black hover:text-[#ff6000]"
                )}
              >
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        // ✅ fixed + inset-0 prevents width calc issues and overflow; also avoids “right black space”
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            type="button"
          />
          {/* Panel */}
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl border-r overflow-y-auto">
            {/* Mobile quick actions (Account + Support) */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link
                href="/account/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-100 bg-gray-50 font-black text-xs uppercase tracking-tight hover:bg-white"
              >
                <User size={16} />
                Orders & Account
              </Link>
              <Link
                href="/help"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-100 bg-gray-50 font-black text-xs uppercase tracking-tight hover:bg-white"
              >
                <Headset size={16} />
                Support
              </Link>
            </div>

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
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
