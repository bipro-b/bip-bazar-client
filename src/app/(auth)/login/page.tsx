"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chrome, ArrowRight, ShoppingBag, KeyRound, UserCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT SIDE: Branding - Reusing the aesthetic for BIP BAZAR */}
      <div className="hidden w-1/2 flex-col justify-between bg-emerald-950 p-12 lg:flex">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
            <ShoppingBag className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">BIP BAZAR</span>
        </div>

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-extrabold leading-tight text-white"
          >
            Welcome Back <br /> 
            <span className="text-emerald-400 text-4xl font-medium">to your favorite market.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 gap-6 pt-8">
             <div className="flex items-center gap-4 text-emerald-100/80">
                <UserCheck size={20} className="text-emerald-400" />
                <p className="text-sm italic">"The fastest growing community in Bangladesh"</p>
             </div>
          </div>
        </div>

        <p className="text-xs text-emerald-200/40 uppercase tracking-widest">
          Secured by BIP BAZAR Auth System v1.0
        </p>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Login</h2>
            <p className="text-gray-500">Welcome back to <span className="font-semibold text-emerald-600">BIP BAZAR</span></p>
          </div>

          <div className="grid gap-6">
            {/* Social Login */}
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]">
              <Chrome size={20} className="text-red-500" />
              Sign in with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400">or use email</span></div>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
                    <Link href="#" className="text-xs font-medium text-emerald-600 hover:text-emerald-700">Forgot Password?</Link>
                </div>
                <div className="relative">
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5"
                    />
                    <KeyRound className="absolute right-4 top-3.5 text-gray-300" size={18} />
                </div>
              </div>

              <button className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600 active:scale-[0.98] shadow-xl shadow-gray-200 hover:shadow-emerald-200">
                Sign In
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-500">
            New to BIP BAZAR?{" "}
            <Link href="/register" className="font-bold text-emerald-600 hover:underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}