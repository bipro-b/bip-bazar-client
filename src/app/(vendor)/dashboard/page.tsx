"use client";

import React from "react";
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 1. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="৳128,450" icon={<DollarSign />} trend="+12%" />
        <StatCard title="Total Orders" value="456" icon={<ShoppingBag />} trend="+5%" />
        <StatCard title="Active Customers" value="1,204" icon={<Users />} trend="+18%" />
        <StatCard title="Avg. Order Value" value="৳2,400" icon={<TrendingUp />} trend="-2%" />
      </div>

      {/* 2. Recent Orders Table */}
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
          <button className="text-sm font-bold text-emerald-600 hover:underline">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-xs font-bold uppercase tracking-widest text-gray-400">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Customer</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <OrderRow id="#BIP-9921" name="Tanvir Ahmed" product="M10 TWS Earbuds" amount="৳450" status="Processing" />
              <OrderRow id="#BIP-9920" name="Sultana Razia" product="GaN 65W Charger" amount="৳1,850" status="Shipped" />
              <OrderRow id="#BIP-9919" name="Imran Khan" product="Gaming Keyboard" amount="৳3,200" status="Delivered" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: any) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">{icon}</div>
        <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{trend}</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</p>
      <h4 className="mt-1 text-2xl font-black text-gray-900 italic tracking-tight">{value}</h4>
    </div>
  );
}

function OrderRow({ id, name, product, amount, status }: any) {
  const statusStyles: any = {
    Processing: "bg-blue-50 text-blue-600",
    Shipped: "bg-orange-50 text-orange-600",
    Delivered: "bg-emerald-50 text-emerald-600",
  };

  return (
    <tr className="border-b border-gray-50 group hover:bg-gray-50/50 transition-colors">
      <td className="py-4 font-bold text-emerald-600">{id}</td>
      <td className="py-4 text-gray-600">{name}</td>
      <td className="py-4 font-medium text-gray-900">{product}</td>
      <td className="py-4 font-black">{amount}</td>
      <td className="py-4">
        <span className={`rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-tighter ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}