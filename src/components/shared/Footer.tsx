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
  Phone,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- TOP SECTION: MINIMALIST TRUST BADGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-zinc-900 mb-16">
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-500 border border-zinc-800">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">Elite Delivery</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Express nationwide shipping across all 64 districts in Bangladesh.</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-blue-500 border border-zinc-800">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">Secure Vault</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Military-grade SSL encryption for all your premium transactions.</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-purple-500 border border-zinc-800">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-1">Concierge 24/7</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Dedicated support line for our community, anytime, anywhere.</p>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-emerald-500 rotate-45" />
              <span className="text-2xl font-black italic tracking-tighter uppercase text-white">
                BIP<span className="text-emerald-500">BAZAR</span>
              </span>
            </div>
            <p className="text-sm leading-7 text-zinc-500">
              The definitive destination for premium tech. We curate only the finest GaN chargers, 
              smart devices, and accessories for the modern enthusiast.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-200 mb-8">Collections</h4>
            <ul className="space-y-5">
              <FooterLink href="/products?cat=chargers">GaN Technology</FooterLink>
              <FooterLink href="/products?cat=audio">Audiophile Series</FooterLink>
              <FooterLink href="/products?cat=smart-home">Living Ecosystem</FooterLink>
              <FooterLink href="/products?cat=accessories">Essential Gear</FooterLink>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:pl-10">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-200 mb-8">Experience</h4>
            <ul className="space-y-5">
              <FooterLink href="/track-order">Order Concierge</FooterLink>
              <FooterLink href="/return-policy">Return Policy</FooterLink>
              <FooterLink href="/terms">Privacy & Terms</FooterLink>
              <FooterLink href="/contact">Get in Touch</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-8">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-200 mb-2">Join the Club</h4>
            <p className="text-xs text-zinc-500 leading-relaxed italic">Subscribe to receive exclusive early access to new drops.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-0 py-4 border-b-emerald-500/50 text-sm outline-none focus:border-b-emerald-500 transition-all placeholder:text-zinc-700 text-white"
              />
              <button className="absolute right-0 top-4 text-emerald-500 hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
            © 2025 <span className="text-zinc-400">BIP BAZAR LTD</span>. Crafted for Excellence.
          </div>
          
          <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="h-5 flex items-center grayscale invert px-2">
               <span className="text-[10px] font-black tracking-tighter">BKASH</span>
            </div>
            <div className="h-5 flex items-center grayscale invert px-2">
               <span className="text-[10px] font-black tracking-tighter">NAGAD</span>
            </div>
            <div className="h-5 flex items-center grayscale invert px-2">
               <span className="text-[10px] font-black tracking-tighter">VISA</span>
            </div>
            <div className="h-5 flex items-center grayscale invert px-2">
               <span className="text-[10px] font-black tracking-tighter">MASTERCARD</span>
            </div>
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
      <Link href={href} className="text-[13px] font-medium text-zinc-500 hover:text-emerald-500 hover:translate-x-1 transition-all inline-block">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300">
      {icon}
    </button>
  );
}