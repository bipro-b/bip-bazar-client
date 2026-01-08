"use client";

import React from "react";
import { Package, Truck, CheckCircle2, MapPin, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const trackingEvents = [
  { status: "Delivered", time: "Jan 8, 2026 10:30 AM", location: "Dhaka, BD", completed: true },
  { status: "Out for Delivery", time: "Jan 8, 2026 08:00 AM", location: "Dhaka Hub", completed: true },
  { status: "Arrived at Local Facility", time: "Jan 7, 2026 04:15 PM", location: "Gazipur", completed: true },
  { status: "Shipped", time: "Jan 6, 2026 09:00 AM", location: "Warehouse", completed: true },
  { status: "Order Placed", time: "Jan 5, 2026 11:30 PM", location: "Online", completed: true },
];

export default function TrackingPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/account/orders" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-xl font-black">Tracking Details</h1>
      </div>

      {/* Package Summary Card */}
      <div className="bg-orange-50 rounded-2xl p-6 mb-8 flex items-center justify-between border border-orange-100">
        <div>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Estimated Delivery</p>
          <p className="text-2xl font-black text-gray-900">Today, Jan 8</p>
          <p className="text-sm text-gray-500 mt-1">Order ID: {params.id}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
           <Truck size={32} className="text-[#F75B1C]" />
        </div>
      </div>

      {/* Vertical Timeline (Stepper) */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-gray-200">
        {trackingEvents.map((event, index) => (
          <div key={index} className="relative flex items-start gap-6 group">
            {/* Timeline Icon */}
            <div className={cn(
              "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-sm shrink-0",
              event.completed ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"
            )}>
              {index === 0 ? <Package size={18} /> : <CheckCircle2 size={18} />}
            </div>
            
            {/* Event Info */}
            <div className="flex-1 pt-1">
              <div className="flex justify-between items-start mb-1">
                <p className={cn("text-sm font-black", index === 0 ? "text-gray-900" : "text-gray-500")}>
                  {event.status}
                </p>
                <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">{event.time}</span>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <MapPin size={12} /> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}