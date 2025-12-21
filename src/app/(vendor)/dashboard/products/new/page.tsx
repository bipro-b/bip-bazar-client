"use client";

import React, { useState } from "react";
import { 
  Upload, 
  Plus, 
  Trash2, 
  ChevronLeft, 
  CheckCircle2,
  Info
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AddProductPage() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/products" className="p-2 hover:bg-white rounded-xl transition-all text-gray-400">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Add New <span className="text-emerald-500">Product</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 hover:bg-white transition-all">
            Save Draft
          </button>
          <button className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
            Publish Product <CheckCircle2 size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: Main Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. Basic Information */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4">General Information</h3>
            <div className="space-y-4">
              <InputField label="Product Name" placeholder="e.g. M10 TWS Wireless Earbuds" />
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Description</label>
                <textarea 
                  rows={5}
                  placeholder="Tell your customers about this product..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* 2. Media Upload */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Product Images</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 cursor-pointer transition-all bg-gray-50/50">
                <Upload size={24} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Main Image</span>
              </div>
              {[1, 2].map((i) => (
                <div key={i} className="aspect-square border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center text-gray-300 hover:border-gray-200 cursor-pointer transition-all">
                  <Plus size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Pricing & Inventory (1 Col) */}
        <div className="space-y-6">
          
          {/* Pricing */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Pricing</h3>
            <div className="space-y-4">
              <InputField label="Base Price (৳)" placeholder="0.00" />
              <InputField label="Discount Price (৳)" placeholder="0.00" />
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="flex justify-between items-center text-emerald-700">
                  <span className="text-xs font-bold uppercase tracking-wider">Estimated Profit</span>
                  <span className="font-black italic tracking-tighter text-lg">৳ 350</span>
                </div>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Inventory</h3>
            <div className="space-y-4">
               <InputField label="Stock Quantity" placeholder="e.g. 50" />
               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                <select className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-emerald-500 transition-all text-sm font-medium">
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Gadgets</option>
                  <option>Accessories</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700">
            <Info size={20} className="shrink-0" />
            <p className="text-[10px] font-medium leading-relaxed">
              Visibility: This product will be visible to all customers on the BIP BAZAR homepage once published.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm font-medium"
      />
    </div>
  );
}