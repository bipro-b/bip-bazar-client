"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chrome, ArrowRight, Zap, KeyRound, ShieldCheck, ShoppingBag } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans selection:bg-[#ff6000] selection:text-white">
      {/* LEFT SIDE: Branding - Swapped to High-Contrast Black/Orange */}
      <div className="hidden w-1/2 flex-col justify-between bg-black p-12 lg:flex relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#ff6000] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-[#ff6000] rounded-full blur-[150px] opacity-10" />

        <div className="relative z-10 flex items-center gap-2 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6000] shadow-lg shadow-[#ff6000]/40">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-[1000] tracking-tighter uppercase italic">
            BIP <span className="text-[#ff6000]">BAZAR</span>
          </span>
        </div>

        <div className="relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-[1000] leading-[0.9] text-white uppercase italic tracking-tighter"
          >
            GEAR <br /> 
            <span className="text-[#ff6000]">UP.</span>
          </motion.h1>
          
          <div className="space-y-4 pt-4">
             <div className="flex items-center gap-3 text-gray-400">
                <ShieldCheck size={20} className="text-[#ff6000]" />
                <p className="text-sm font-bold uppercase tracking-widest">100% Secure Auth System</p>
             </div>
             <div className="flex items-center gap-3 text-gray-400">
                <ShoppingBag size={20} className="text-[#ff6000]" />
                <p className="text-sm font-bold uppercase tracking-widest">Direct access to 2.4k+ Gadgets</p>
             </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-8">
            <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.3em]">
              Authorized Access Only
            </p>
            <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-[#ff6000]/30 rounded-full" />
                ))}
            </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-24 bg-[#fcfcfc]">
        <div className="mx-auto w-full max-w-md space-y-10">
          
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-[1000] tracking-tighter text-gray-900 uppercase italic">
                Login <span className="text-[#ff6000]">Account</span>
            </h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Unlock your personal tech sanctuary.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Social Login */}
            <button className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 bg-white px-4 py-4 text-sm font-black uppercase tracking-tighter text-gray-700 transition-all hover:border-[#ff6000] hover:bg-orange-50 active:scale-[0.98]">
              <Chrome size={20} className="text-red-500 group-hover:rotate-12 transition-transform" />
              Sign in with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="bg-[#fcfcfc] px-4 text-gray-400">OR VIA EMAIL</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[11px] font-[1000] uppercase tracking-widest text-gray-500 ml-1">
                    Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="name@gadgetmail.com"
                  className="w-full rounded-2xl border-2 border-gray-100 bg-white px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#ff6000] focus:ring-4 focus:ring-orange-500/5 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                    <label className="text-[11px] font-[1000] uppercase tracking-widest text-gray-500">Password</label>
                    <Link href="#" className="text-[11px] font-black text-[#ff6000] uppercase hover:underline">Lost Gear?</Link>
                </div>
                <div className="relative">
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full rounded-2xl border-2 border-gray-100 bg-white px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#ff6000] focus:ring-4 focus:ring-orange-500/5 placeholder:text-gray-300"
                    />
                    <KeyRound className="absolute right-5 top-4 text-gray-300" size={18} />
                </div>
              </div>

              <button className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-4 py-5 text-xs font-[1000] uppercase tracking-[0.2em] text-white transition-all hover:bg-[#ff6000] hover:shadow-2xl hover:shadow-orange-500/40 active:scale-[0.98]">
                Authorize Access
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-center text-[11px] font-black uppercase tracking-widest text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#ff6000] hover:underline underline-offset-4">
                Join the squad
                </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}