"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chrome, ArrowRight, ShoppingBag, ShieldCheck, Zap, UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans selection:bg-[#ff6000] selection:text-white">
      {/* LEFT SIDE: Branding & Tech Aesthetic (Hidden on Mobile) */}
      <div className="hidden w-1/2 flex-col justify-between bg-black p-12 lg:flex relative overflow-hidden">
        {/* Decorative Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#ff6000] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#ff6000] rounded-full blur-[150px] opacity-15" />

        <div className="relative z-10 flex items-center gap-2 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6000] shadow-lg shadow-[#ff6000]/40">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-[1000] tracking-tighter uppercase italic">
            BIP <span className="text-[#ff6000]">BAZAR</span>
          </span>
        </div>

        <div className="relative z-10 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-[1000] leading-[0.9] text-white uppercase italic tracking-tighter"
          >
            JOIN THE <br /> 
            <span className="text-[#ff6000]">SQUAD.</span>
          </motion.h1>
          
          <div className="space-y-6">
            <FeatureItem 
              icon={<ShieldCheck className="text-[#ff6000]" size={22} />} 
              title="ELITE PROTECTION" 
              desc="Advanced security for all your transactions." 
            />
            <FeatureItem 
              icon={<Zap className="text-[#ff6000]" size={22} />} 
              title="PRIORITY ACCESS" 
              desc="Get notified first on limited edition drops." 
            />
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.3em] mb-4">
            Official Marketplace Member System
          </p>
          <div className="flex gap-1.5">
            <div className="h-1 w-12 bg-[#ff6000] rounded-full" />
            <div className="h-1 w-4 bg-white/20 rounded-full" />
            <div className="h-1 w-4 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Register Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-24 bg-[#fcfcfc]">
        <div className="mx-auto w-full max-w-md space-y-10">
          
          <div className="space-y-3">
            <h2 className="text-4xl font-[1000] tracking-tighter text-gray-900 uppercase italic">
                Create <span className="text-[#ff6000]">Account</span>
            </h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Start your premium tech journey today.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Social Sign Up */}
            <button className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 bg-white px-4 py-4 text-sm font-black uppercase tracking-tighter text-gray-700 transition-all hover:border-[#ff6000] hover:bg-orange-50 active:scale-[0.98]">
              <Chrome size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
              Sign up with Google
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200" /></div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]"><span className="bg-[#fcfcfc] px-4 text-gray-400">OR REGISTER VIA EMAIL</span></div>
            </div>

            {/* Registration Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[11px] font-[1000] uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. ARIF RAHMAN"
                  className="w-full rounded-2xl border-2 border-gray-100 bg-white px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#ff6000] focus:ring-4 focus:ring-orange-500/5 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-[1000] uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@gadgetmail.com"
                  className="w-full rounded-2xl border-2 border-gray-100 bg-white px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#ff6000] focus:ring-4 focus:ring-orange-500/5 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-[1000] uppercase tracking-widest text-gray-500 ml-1">Secure Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full rounded-2xl border-2 border-gray-100 bg-white px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#ff6000] focus:ring-4 focus:ring-orange-500/5 placeholder:text-gray-300"
                />
              </div>

              <button className="group relative mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-4 py-5 text-xs font-[1000] uppercase tracking-[0.2em] text-white transition-all hover:bg-[#ff6000] hover:shadow-2xl hover:shadow-orange-500/40 active:scale-[0.98]">
                Deploy Account
                <UserPlus size={18} className="transition-transform group-hover:scale-110" />
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-gray-100 text-center">
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-400">
              Part of the tribe already?{" "}
              <Link href="/login" className="text-[#ff6000] hover:underline underline-offset-4">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Internal Sub-component for features
function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div className="space-y-1">
        <h4 className="text-xs font-[1000] text-white uppercase tracking-widest">{title}</h4>
        <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-tight">{desc}</p>
      </div>
    </div>
  );
}