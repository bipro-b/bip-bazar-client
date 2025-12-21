"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  ChevronLeft,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="bg-zinc-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 hover:bg-white rounded-full transition-colors text-gray-500">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-3xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Secure <span className="text-emerald-500">Checkout</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Shipping & Payment (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Shipping Information */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                  <MapPin size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Full Name" placeholder="e.g. Arif Rahman" />
                <InputField label="Phone Number" placeholder="017XXXXXXXX" />
                <div className="md:col-span-2">
                  <InputField label="Street Address" placeholder="House no, Flat no, Road name" />
                </div>
                <select className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-emerald-500 transition-all text-sm">
                  <option>Select District</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                </select>
                <InputField label="Area/Post Code" placeholder="e.g. 1212" />
              </div>
            </section>

            {/* 2. Payment Method */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PaymentOption 
                  id="cod"
                  active={paymentMethod === "cod"}
                  onClick={() => setPaymentMethod("cod")}
                  icon={<Truck size={24} />}
                  title="Cash on Delivery"
                  desc="Pay when you receive the product"
                />
                <PaymentOption 
                  id="bkash"
                  active={paymentMethod === "bkash"}
                  onClick={() => setPaymentMethod("bkash")}
                  icon={<Smartphone size={24} />}
                  title="bKash / Nagad"
                  desc="Fast & secure mobile payment"
                />
              </div>
            </section>
          </div>

          {/* RIGHT: Order Summary (4 Columns) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-emerald-950 rounded-3xl p-8 text-white shadow-xl shadow-emerald-900/20">
              <h3 className="text-xl font-bold mb-6 italic tracking-tight uppercase">Order Summary</h3>
              
              <div className="space-y-4 border-b border-emerald-900 pb-6 mb-6">
                <div className="flex justify-between text-emerald-200/70 text-sm">
                  <span>Subtotal (1 item)</span>
                  <span>৳1,850</span>
                </div>
                <div className="flex justify-between text-emerald-200/70 text-sm">
                  <span>Shipping Fee</span>
                  <span>৳60</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-medium">Total Amount</span>
                <span className="text-3xl font-black text-emerald-400">৳1,910</span>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-tighter transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2">
                Confirm Order
                <CheckCircle2 size={20} />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-emerald-200/50 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} />
                Secure Encrypted Transaction
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm"
      />
    </div>
  );
}

function PaymentOption({ id, active, onClick, icon, title, desc }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-start p-6 rounded-2xl border-2 transition-all text-left",
        active ? "border-emerald-500 bg-emerald-50/50" : "border-gray-100 hover:border-gray-200 bg-white"
      )}
    >
      <div className={cn("mb-4 p-2 rounded-xl", active ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-400")}>
        {icon}
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </button>
  );
}