"use client";

import React from "react";
import { Search, ChevronRight, ShieldCheck } from "lucide-react";

// Mock data for the order grid
const recentOrders = [
  { id: "1", status: "Refunded", itemsCount: 4, date: "Dec 26", amount: "AU$0.00", images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"] },
  { id: "2", status: "Delivered", itemsCount: 1, date: "Nov 27", amount: "AU$0.00", images: ["/p5.jpg"] },
  { id: "3", status: "Delivered", itemsCount: 1, date: "Nov 21", amount: "AU$0.00", images: ["/p6.jpg"] },
];

export default function SupportView() {
  return (
    <div className="container mx-auto px-4 max-w-6xl pt-12">
      {/* 1. SEARCH HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-[#FB7701] mb-8">Hi, how can we help you?</h1>
        <div className="relative max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="Have any questions? Ask them here!"
            className="w-full py-4 px-6 pr-16 rounded-full border-2 border-gray-300 focus:border-[#FB7701] outline-none text-lg shadow-sm"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-[#FB7701] text-white px-6 rounded-full hover:bg-orange-600 transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* 2. GUARANTEE BANNER */}
      <div className="mb-10">
        <p className="text-sm font-bold mb-4">Select an order to get help with items, shipping, return or refund problems, etc.</p>
        <div className="bg-[#00A010] text-white px-4 py-2.5 rounded flex items-center justify-between text-[13px] font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-bold"><ShieldCheck size={16}/> Order guarantee</span>
            <span className="opacity-80">|</span>
            <span>CA$5.00 Credit for delay</span>
            <span className="opacity-80">|</span>
            <span>Return if item damaged</span>
            <span className="opacity-80">|</span>
            <span>30-day no delivery refund</span>
          </div>
          <ChevronRight size={18} />
        </div>
      </div>

      {/* 3. ORDER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="bg-white border rounded-lg p-5 hover:shadow-md cursor-pointer transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-900">{order.status}</h3>
                <p className="text-xs text-gray-500">{order.itemsCount} item: {order.amount}, {order.date}</p>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-black transition-colors" />
            </div>
            
            {/* Thumbnail Preview */}
            <div className="flex gap-2">
              {order.images.map((img, i) => (
                <div key={i} className="w-16 h-16 bg-gray-100 rounded border overflow-hidden">
                  <img src={`https://picsum.photos/seed/${order.id + i}/100`} alt="prod" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* VIEW MORE CARD */}
        <button className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-5 text-gray-500 font-bold hover:bg-gray-50 transition-colors">
          Show more orders <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}