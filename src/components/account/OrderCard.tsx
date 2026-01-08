"use client";

import React from "react";
import { ChevronRight, CreditCard, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
// 1. Import Link from next/link
import Link from "next/link";

interface Product {
  id: string;
  image: string;
}

interface OrderCardProps {
  id: string;
  status: "Refunded" | "Shipped" | "Processing" | "Delivered";
  date: string;
  items: Product[];
  totalAmount: string;
  refundMethod?: string;
}

export default function OrderCard({ 
  id, // Ensure id is destructured to use in the link
  status, 
  items = [], 
  totalAmount, 
  refundMethod = "Credit balance" 
}: OrderCardProps) {
  
  const isRefunded = status === "Refunded";
  const displayLimit = 5; 

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4 hover:shadow-md transition-shadow">
      {/* 1. Header Area */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b bg-white">
        <div className="flex items-center gap-2">
           <span className={cn(
            "text-lg font-black tracking-tight",
            isRefunded ? "text-gray-900" : "text-emerald-600"
          )}>
            {status}
          </span>
        </div>
        {/* Wrap "View details" in a link as well for consistency */}
        <Link href={`/account/orders/${id}`} className="flex items-center gap-0.5 text-[13px] font-bold text-orange-600 hover:underline">
          View details <ChevronRight size={14} />
        </Link>
      </div>

      {/* 2. Main Body */}
      <div className="p-5">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
          
          {/* Product Grid (4-5 Items) */}
          <div className="flex items-center gap-2 flex-wrap">
            {items.slice(0, displayLimit).map((item) => (
              <div 
                key={item.id} 
                className="h-20 w-20 flex-shrink-0 rounded-lg border border-gray-100 bg-gray-50 overflow-hidden shadow-sm"
              >
                <img 
                  src={item.image} 
                  alt="Order item" 
                  className="h-full w-full object-cover transition-transform hover:scale-110" 
                />
              </div>
            ))}
            
            {items.length > displayLimit && (
              <div className="h-20 w-12 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <span className="text-xs font-bold text-gray-500">+{items.length - displayLimit}</span>
              </div>
            )}
          </div>

          {/* Status Details */}
          <div className="flex-1 space-y-1">
            <h4 className={cn(
              "text-sm font-bold leading-tight",
              isRefunded ? "text-[#F75B1C]" : "text-gray-900"
            )}>
              {isRefunded 
                ? "Refund issued by BIP BAZAR." 
                : "Package arrives by tomorrow"}
            </h4>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Order contains {items.length} items. 
              {isRefunded ? " The total amount has been credited back." : " Tracking: #BIP8823190"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto">
            <button className="flex-1 lg:w-40 bg-[#F75B1C] text-white text-[13px] font-black py-2.5 rounded-full hover:bg-orange-600 transition-all active:scale-95">
              Buy again
            </button>

            {/* 2. Wrap the Track button in a Link */}
            <Link 
              href={isRefunded ? `/account/help/refund/${id}` : `/account/orders/track/${id}`} 
              className="flex-1 lg:w-auto"
            >
              <button className="w-full lg:w-40 border border-gray-300 text-gray-800 text-[13px] font-bold py-2.5 rounded-full hover:bg-gray-50 transition-all active:scale-95">
                {isRefunded ? "Refund help" : "Track"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Refund Footer */}
      {isRefunded && (
        <div className="px-5 py-3 bg-[#FFF9F5] border-t border-orange-100 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[12px] font-bold text-gray-700">
            <CreditCard size={14} className="text-gray-400" />
            <span>Refund to {refundMethod}</span>
          </div>
          <span className="text-[13px] font-black text-gray-900">{totalAmount}</span>
        </div>
      )}
    </div>
  );
}