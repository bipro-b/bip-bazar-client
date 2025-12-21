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
  Heart, 
  MapPin, 
  ChevronDown,
  LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";
import CartDrawer from "@/components/customer/CartDrawer";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Hook to get the current category from URL (?category=...)
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  // Helper to check if a link is active
  const isActive = (slug: string) => currentCategory === slug;

  const navLinks = [
    { label: "New Arrivals", slug: "new-arrivals" },
    { label: "Flash Sales", slug: "flash-sale", isFlash: true },
    { label: "Electronics", slug: "electronics" },
    { label: "Home & Decor", slug: "home-decor" },
    { label: "Gadgets", slug: "gadgets" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden border-b border-gray-50 bg-gray-50/50 py-1.5 lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition-colors">
              <MapPin size={14} />
              <span>Deliver to: Dhaka, BD</span>
            </div>
          </div>
          <div className="flex gap-6">
            <Link href="/help" className="hover:text-emerald-600 transition-colors">Help Center</Link>
            <Link href="/vendor/register" className="text-emerald-600 font-bold hover:underline">Sell on BIP BAZAR</Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="container mx-auto px-4 py-3 lg:py-5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 shadow-lg shadow-emerald-100">
              <ShoppingCart className="text-white" size={20} />
            </div>
            <span className="text-xl font-black italic tracking-tighter text-emerald-950 lg:text-2xl uppercase">
              BIP<span className="text-emerald-500">BAZAR</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-2xl lg:block">
            <div className="group relative flex items-center">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-2.5 pl-12 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
              <Search className="absolute left-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <button className="absolute right-2 rounded-lg bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white transition-all hover:bg-emerald-600 active:scale-95">
                Search
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 lg:gap-5">
            <Link href="/login" className="hidden items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 lg:flex transition-colors">
              <div className="rounded-full bg-gray-100 p-2 group-hover:bg-emerald-50">
                <User size={20} />
              </div>
              <span>Login</span>
            </Link>

            <Link 
  href="/favourites" 
  className="relative rounded-full p-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
>
  <Heart size={24} />
  <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white italic ring-2 ring-white">
    {/* {items.length} */}2
  </span>
</Link>


            

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full p-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
            >
              <ShoppingCart size={24} />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white italic ring-2 ring-white">1</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY BAR (MARKING ACTIVE TABS) */}
      <div className="hidden border-t border-gray-100 lg:block bg-white">
        <div className="container mx-auto flex items-center gap-8 px-4">
          <Link 
            href="/products" 
            className="flex items-center gap-2 bg-emerald-950 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900 transition-colors rounded-t-none"
          >
            <LayoutGrid size={18} />
            All Categories
            <ChevronDown size={14} />
          </Link>
          
          <div className="flex items-center gap-8 text-sm font-bold">
            {navLinks.map((tab) => (
              <Link 
                key={tab.slug}
                href={`/products?category=${tab.slug}`} 
                className={cn(
                  "relative py-4 transition-all duration-300",
                  tab.isFlash ? "text-red-500 animate-pulse" : "text-gray-500 hover:text-emerald-600",
                  // THIS MARKS THE SELECTED TAB
                  isActive(tab.slug) && "text-emerald-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-emerald-600 after:rounded-full"
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-gray-100 bg-white p-6 shadow-2xl lg:hidden animate-in slide-in-from-top duration-300">
          <div className="mb-6">
             <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              />
          </div>
          <div className="space-y-4 font-bold text-gray-700">
            {navLinks.map((tab) => (
              <Link 
                key={tab.slug}
                href={`/products?category=${tab.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-3 border-b border-gray-50 transition-colors",
                  isActive(tab.slug) ? "text-emerald-600" : "text-gray-700"
                )}
              >
                {tab.label}
              </Link>
            ))}
            <Link href="/login" className="block py-3 text-emerald-600 font-black">Login / Sign Up</Link>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}