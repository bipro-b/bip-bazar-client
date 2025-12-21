"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chrome, ArrowRight, ShoppingBag, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT SIDE: Branding & Trust (Hidden on Mobile) */}
      <div className="hidden w-1/2 flex-col justify-between bg-emerald-950 p-12 lg:flex">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
            <ShoppingBag className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">BIP BAZAR</span>
        </div>

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-tight text-white"
          >
            Start your premium <br /> 
            <span className="text-emerald-400">shopping journey</span> in Bangladesh.
          </motion.h1>
          
          <div className="space-y-4">
            <FeatureItem icon={<ShieldCheck className="text-emerald-400" />} title="Verified Wholesalers" desc="Only authentic products from trusted sources." />
            <FeatureItem icon={<Zap className="text-emerald-400" />} title="Fastest Delivery" desc="Quick logistics across all 64 districts." />
          </div>
        </div>

        <p className="text-sm text-emerald-200/60">
          © 2025 DeshiMart Ltd. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE: Register Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
            <p className="text-gray-500">Enter your details to join the marketplace</p>
          </div>

          <div className="grid gap-6">
            {/* Social Sign Up */}
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 active:scale-[0.98]">
              <Chrome size={20} />
              Sign up with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or continue with email</span></div>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Arif Rahman"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <button className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 text-sm font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98]">
                Create Account
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-emerald-600 hover:underline underline-offset-4">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Sub-component for features
function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-emerald-200/70">{desc}</p>
      </div>
    </div>
  );
}