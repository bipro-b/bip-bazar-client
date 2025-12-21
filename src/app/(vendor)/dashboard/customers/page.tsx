"use client";

import React from "react";
import { 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  MoreVertical, 
  UserPlus,
  ArrowUpRight
} from "lucide-react";

const customers = [
  { id: 1, name: "Arif Rahman", email: "arif@email.com", phone: "01712XXXXXX", location: "Dhaka", orders: 12, spent: "৳15,450", status: "Premium" },
  { id: 2, name: "Sultana Razia", email: "razia.s@email.com", phone: "01822XXXXXX", location: "Chittagong", orders: 5, spent: "৳4,200", status: "Regular" },
  { id: 3, name: "Imran Khan", email: "imran.k@email.com", phone: "01933XXXXXX", location: "Sylhet", orders: 1, spent: "৳3,200", status: "New" },
  { id: 4, name: "Farhana Yeasmin", email: "farhana.y@email.com", phone: "01544XXXXXX", location: "Dhaka", orders: 28, spent: "৳42,900", status: "VIP" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Customer <span className="text-emerald-500">Database</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">Analyze your audience and buying behavior</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95">
          <UserPlus size={20} /> Export Audience
        </button>
      </div>

      {/* Analytics Mini-Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Customers</p>
          <h3 className="text-2xl font-black text-gray-900 mt-1">1,204</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Avg. Lifetime Value</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">৳4,250</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Retention Rate</p>
          <h3 className="text-2xl font-black text-blue-600 mt-1">24.5%</h3>
        </div>
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, phone or email..."
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-sm outline-none focus:bg-white focus:border-emerald-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-emerald-600 px-4 transition-colors">
            All Locations <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50/50">
                <th className="px-8 py-5">Customer Info</th>
                <th className="px-6 py-5">Location</th>
                <th className="px-6 py-5 text-center">Orders</th>
                <th className="px-6 py-5">Total Spent</th>
                <th className="px-6 py-5">Segment</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((user) => (
                <tr key={user.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center font-black text-emerald-700 text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{user.name}</span>
                        <span className="text-[10px] font-medium text-gray-400">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                      <MapPin size={12} className="text-gray-300" />
                      {user.location}, BD
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-bold text-gray-700">{user.orders}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-emerald-700 italic">{user.spent}</span>
                  </td>
                  <td className="px-6 py-5">
                    <SegmentBadge status={user.status} />
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-300 hover:text-emerald-600 transition-colors"><Mail size={16} /></button>
                      <button className="p-2 text-gray-300 hover:text-emerald-600 transition-colors"><Phone size={16} /></button>
                      <button className="p-2 text-gray-300 hover:text-gray-600"><MoreVertical size={16} /></button>
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

function SegmentBadge({ status }: { status: string }) {
  const styles: any = {
    VIP: "bg-purple-100 text-purple-700 border-purple-200",
    Premium: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Regular: "bg-blue-100 text-blue-700 border-blue-200",
    New: "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg border text-[10px] font-black uppercase tracking-tighter ${styles[status]}`}>
      {status}
    </span>
  );
}