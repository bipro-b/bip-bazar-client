"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Eye, 
  Truck, 
  CheckCircle, 
  Clock, 
  MoreVertical,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

const orders = [
  { id: "#BIP-9921", date: "21 Dec, 2025", customer: "Arif Rahman", total: "৳1,910", status: "Pending", items: 2 },
  { id: "#BIP-9920", date: "20 Dec, 2025", customer: "Sultana Razia", total: "৳450", status: "Processing", items: 1 },
  { id: "#BIP-9919", date: "19 Dec, 2025", customer: "Imran Khan", total: "৳3,200", status: "Shipped", items: 3 },
  { id: "#BIP-9918", date: "18 Dec, 2025", customer: "Farhana Yeasmin", total: "৳12,500", status: "Delivered", items: 5 },
];

export default function OrdersManagement() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Order <span className="text-emerald-500">Management</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">Manage and track your store sales</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex bg-gray-50 p-1 rounded-2xl w-fit">
          {["All", "Pending", "Processing", "Shipped", "Delivered"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab 
                ? "bg-white text-emerald-600 shadow-sm" 
                : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search Order ID..."
            className="pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-sm outline-none focus:bg-white focus:border-emerald-500 transition-all w-full lg:w-64"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">
                <th className="px-8 py-5">Order Details</th>
                <th className="px-6 py-5">Customer</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-emerald-50/30 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="font-black text-gray-900 italic">{order.id}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{order.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-800">{order.customer}</span>
                      <span className="text-xs text-gray-500">{order.items} Items</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-emerald-700">{order.total}</span>
                  </td>
                  <td className="px-6 py-5">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-100 text-gray-400 hover:text-emerald-600 transition-all">
                        <Eye size={18} />
                      </button>
                      <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100">
                        Ship Now
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const configs: any = {
    Pending: { icon: <Clock size={12} />, color: "bg-amber-50 text-amber-600 border-amber-100" },
    Processing: { icon: <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }}><Truck size={12} /></motion.div>, color: "bg-blue-50 text-blue-600 border-blue-100" },
    Shipped: { icon: <Truck size={12} />, color: "bg-purple-50 text-purple-600 border-purple-100" },
    Delivered: { icon: <CheckCircle size={12} />, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  };

  const { icon, color } = configs[status] || configs.Pending;

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-tighter ${color}`}>
      {icon}
      {status}
    </div>
  );
}