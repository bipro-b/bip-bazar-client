"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ClipboardList, 
  Star, 
  User, 
  Ticket, 
  Wallet, 
  Heart, 
  History, 
  MapPin, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define the menu structure
const menuItems = [
  { id: "orders", label: "Your orders", icon: ClipboardList, href: "/account/orders" },
  { id: "reviews", label: "Your reviews", icon: Star, href: "/account/reviews" },
  { id: "profile", label: "Your profile", icon: User, href: "/account/profile" },
  { id: "coupons", label: "Coupons & offers", icon: Ticket, href: "/account/coupons" },
  { id: "credit", label: "Credit balance", icon: Wallet, href: "/account/credit" },
  { id: "followed", label: "Followed stores", icon: Heart, href: "/account/followed-stores" },
  { id: "history", label: "Browsing history", icon: History, href: "/account/history" },
  { id: "addresses", label: "Addresses", icon: MapPin, href: "/account/addresses" },
  { id: "settings", label: "Settings", icon: Settings, href: "/account/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-xl py-3 shadow-sm border border-gray-100">
      <nav className="flex flex-col">
        {menuItems.map((item) => {
          // Check if the current URL matches the link's href
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-6 py-3.5 text-[14px] transition-all border-l-4",
                isActive 
                  ? "bg-orange-50 border-orange-600 text-orange-600 font-bold" 
                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-black"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(
                  "transition-colors",
                  isActive ? "text-orange-600" : "text-gray-400 group-hover:text-black"
                )} 
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Optional: Sign Out Section like Temu */}
      <div className="mt-4 pt-4 border-t border-gray-100 px-6">
        <button className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">
          Sign out
        </button>
      </div>
    </div>
  );
}