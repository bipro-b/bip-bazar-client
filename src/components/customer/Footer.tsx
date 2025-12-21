"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Send,
  ShieldCheck,
  Truck,
  Phone
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- TOP SECTION: TRUST BADGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-50 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Fast Delivery</h4>
              <p className="text-xs text-gray-500">Across all 64 districts in BD</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Secure Payment</h4>
              <p className="text-xs text-gray-500">100% SSL encrypted checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">24/7 Support</h4>
              <p className="text-xs text-gray-500">Call us anytime for assistance</p>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT: 4 COLUMNS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-600" />
              <span className="text-2xl font-black italic tracking-tighter uppercase">
                BIP<span className="text-emerald-500">BAZAR</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bangladesh's premium tech destination. Providing the latest gadgets, 
              GaN chargers, and accessories with official warranty and fast shipping.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 text-gray-900">Shop Categories</h4>
            <ul className="space-y-4">
              <FooterLink href="/products?cat=chargers">Fast Chargers</FooterLink>
              <FooterLink href="/products?cat=audio">Audio & Headphones</FooterLink>
              <FooterLink href="/products?cat=smart-home">Smart Home</FooterLink>
              <FooterLink href="/products?cat=accessories">Mobile Accessories</FooterLink>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 text-gray-900">Customer Care</h4>
            <ul className="space-y-4">
              <FooterLink href="/track-order">Track My Order</FooterLink>
              <FooterLink href="/return-policy">Return Policy</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/contact">Contact Support</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-gray-900">Newsletter</h4>
            <p className="text-xs text-gray-500 font-medium italic">Get ৳200 discount on your first order!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-50 border border-transparent rounded-2xl px-4 py-3 text-sm outline-none focus:bg-white focus:border-emerald-500 transition-all"
              />
              <button className="absolute right-1.5 top-1.5 h-8 w-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT & PAYMENTS --- */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2025 BIP BAZAR LTD. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-black text-gray-300 mr-2 uppercase">Secure Payments via</span>
            <div className="h-6 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">bKash</div>
            <div className="h-6 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">Nagad</div>
            <div className="h-6 w-12 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- HELPER COMPONENTS ---

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="h-10 w-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
      {icon}
    </button>
  );
}