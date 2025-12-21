"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; //
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  Bell
} from "lucide-react";

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current URL

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-full flex-col p-6">
          <div className="mb-10 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600" />
            <span className="text-xl font-black italic tracking-tighter">BIP<span className="text-emerald-500">VENDOR</span></span>
          </div>

          <nav className="flex-1 space-y-1">
            <SidebarLink 
              href="/dashboard" 
              icon={<LayoutDashboard size={20} />} 
              label="Overview" 
              active={pathname === "/dashboard"} 
            />
            <SidebarLink 
              href="/dashboard/products" 
              icon={<Package size={20} />} 
              label="Products" 
              active={pathname.startsWith("/dashboard/products")} 
            />
            <SidebarLink 
              href="/dashboard/orders" 
              icon={<ShoppingCart size={20} />} 
              label="Orders" 
              active={pathname.startsWith("/dashboard/orders")} 
            />
            <SidebarLink 
              href="/dashboard/customers" 
              icon={<Users size={20} />} 
              label="Customers" 
              active={pathname.startsWith("/dashboard/customers")} 
            />
          </nav>

          <div className="border-t border-gray-100 pt-6 space-y-1">
            <SidebarLink 
              href="/dashboard/settings" 
              icon={<Settings size={20} />} 
              label="Settings" 
              active={pathname === "/dashboard/settings"} 
            />
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 px-8 backdrop-blur-md">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            {/* Dynamic Title based on Path */}
            {pathname.split("/").pop()?.replace("-", " ") || "Store Overview"}
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors">
              <Bell size={20} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-200" />
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

function SidebarLink({ href, icon, label, active }: any) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
        active 
        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" 
        : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
      }`}
    >
      {icon} {label}
    </Link>
  );
}