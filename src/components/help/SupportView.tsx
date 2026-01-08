"use client";

import React from "react";
import { Search, ChevronRight, ShieldCheck, Headphones } from "lucide-react";
import Link from "next/link";

const mockOrders = [
  { id: "1", status: "Refunded", items: 4, amount: "AU$0.00", date: "Dec 26", img: "https://picsum.photos/seed/a1/100" },
  { id: "2", status: "Delivered", items: 1, amount: "AU$0.00", date: "Nov 27", img: "https://picsum.photos/seed/a2/100" },
  { id: "3", status: "Delivered", items: 1, amount: "AU$0.00", date: "Nov 21", img: "https://picsum.photos/seed/a3/100" },
];

export default function SupportView() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 1. Large Search Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Hi, how can we help you?</h1>
        <div className="relative max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="Have any questions? Ask them here!"
            className="w-full py-4 px-6 pr-16 rounded-full border-2 border-gray-200 focus:border-orange-500 outline-none shadow-sm text-lg"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-6 rounded-full hover:bg-orange-600 transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* 2. Order Guarantee Banner */}
      <div className="mb-8">
        <h2 className="text-sm font-bold mb-4">Select an order to get help with items, shipping, or refunds:</h2>
        <div className="bg-[#00A010] text-white p-3 rounded-md flex items-center justify-between group cursor-pointer">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium">
            <span className="flex items-center gap-1.5 font-bold whitespace-nowrap">
              <ShieldCheck size={18} /> Order guarantee
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <span>CA$5.00 Credit for delay</span>
            <span className="hidden md:inline opacity-40">|</span>
            <span>Return if item damaged</span>
            <span className="hidden md:inline opacity-40">|</span>
            <span>30-day no delivery refund</span>
          </div>
          <ChevronRight size={20} />
        </div>
      </div>

      {/* 3. Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockOrders.map((order) => (
          <Link key={order.id} href={`/help/order/${order.id}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-black text-gray-900 text-lg">{order.status}</p>
                  <p className="text-xs text-gray-500 font-medium">
                    {order.items} items: {order.amount}, {order.date}
                  </p>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-black transition-colors" />
              </div>
              
              <div className="mt-auto flex gap-2">
                {/* Thumbnails */}
                <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden">
                  <img src={order.img} alt="order" className="w-full h-full object-cover" />
                </div>
                {order.items > 1 && (
                   <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">
                     +{order.items - 1}
                   </div>
                )}
              </div>
            </div>
          </Link>
        ))}

        {/* Show More Button */}
        <button className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-5 text-gray-500 font-bold hover:bg-gray-50 hover:border-gray-400 transition-all">
          Show more orders <ChevronRight size={18} />
        </button>
      </div>

      {/* 4. Bottom Support Options */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
            <Headphones size={24} />
          </div>
          <div>
            <p className="font-bold">Contact Customer Service</p>
            <p className="text-xs text-gray-500">Available 24/7 for your concerns</p>
          </div>
        </div>
      </div>
    </div>
  );
}