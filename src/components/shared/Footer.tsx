"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ShieldCheck,
  Truck,
  Headset,
  CreditCard,
  Mail,
  ArrowUpRight,
  MapPin,
  Phone,
  LucideIcon // Added for better typing
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1111] text-zinc-300 pt-20 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        
        {/* --- 1. PREMIUM TRUST GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-zinc-800/50">
          <TrustBadge 
            Icon={Truck} 
            title="Express Delivery" 
            desc="Fast shipping to all 64 districts" 
            iconColor="text-[#ff6000]"
          />
          <TrustBadge 
            Icon={ShieldCheck} 
            title="Buyer Protection" 
            desc="Secure payments & guaranteed returns" 
            iconColor="text-blue-500"
          />
          <TrustBadge 
            Icon={Headset} 
            title="24/7 Support" 
            desc="Real humans, ready to help anytime" 
            iconColor="text-green-500"
          />
          <TrustBadge 
            Icon={CreditCard} 
            title="Flexible Payment" 
            desc="Bkash, Nagad, & Credit Cards" 
            iconColor="text-purple-500"
          />
        </div>

        {/* --- 2. MAIN NAVIGATION LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16">
          <div className="col-span-2 lg:col-span-2 pr-0 lg:pr-20">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-[#ff6000] p-1.5 rounded-lg">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-sm opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-black italic tracking-tighter uppercase text-white">
                BIP<span className="text-[#ff6000]">BAZAR</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 mb-8 max-w-sm">
              Your curated destination for high-performance gadgets. 
              We bridge the gap between global technology and the Bangladeshi enthusiast.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4">
              <FooterLink href="/new-arrivals">New Arrivals</FooterLink>
              <FooterLink href="/best-sellers">Best Sellers</FooterLink>
              <FooterLink href="/flash-sale">Flash Deals</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Support</h4>
            <ul className="space-y-4">
              <FooterLink href="/track">Track Order</FooterLink>
              <FooterLink href="/returns">Returns & Refunds</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#ff6000]" /> Dhaka, BD</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#ff6000]" /> +880 1XXX-XXXXXX</li>
            </ul>
          </div>
        </div>

        {/* --- 3. NEWSLETTER --- */}
        <div className="bg-zinc-900/50 rounded-3xl p-8 lg:p-12 mb-16 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to the VIP list</h3>
            <p className="text-zinc-500 text-sm">Get early access to drops and secret coupons.</p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md relative group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#0a0a0a] border border-zinc-700 rounded-full py-4 pl-6 pr-32 text-sm text-white focus:border-[#ff6000] outline-none transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#ff6000] text-white px-6 rounded-full font-bold hover:bg-[#e65600] transition-colors flex items-center gap-2">
              Join <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* --- 4. BOTTOM BAR --- */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest">
            © 2025 <span className="text-white">BIP BAZAR LIMITED</span>. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4 grayscale opacity-60">
            <PaymentBadge label="bKash" />
            <PaymentBadge label="Nagad" />
            <PaymentBadge label="VISA" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- FIXED TYPE-SAFE COMPONENTS ---

interface TrustBadgeProps {
  Icon: LucideIcon;
  title: string;
  desc: string;
  iconColor: string;
}

function TrustBadge({ Icon, title, desc, iconColor }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition-colors">
      <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
        <Icon size={24} className={iconColor} />
      </div>
      <div>
        <h4 className="font-bold text-white text-sm tracking-tight">{title}</h4>
        <p className="text-[12px] text-zinc-500 leading-tight">{desc}</p>
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm font-medium text-zinc-500 hover:text-[#ff6000] hover:translate-x-1 transition-all inline-block">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff6000] hover:text-white transition-all shadow-lg">
      {icon}
    </button>
  );
}

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-black text-white px-3 py-1 bg-zinc-800 rounded-md border border-zinc-700">
      {label}
    </span>
  );
}