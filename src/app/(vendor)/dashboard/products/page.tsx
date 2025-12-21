"use client";

import React from "react";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  ExternalLink,
  MoreHorizontal,
  PackageSearch
} from "lucide-react";
import Link from "next/link";

const productList = [
  { id: 1, name: "M10 TWS Wireless Earbuds", category: "Electronics", price: 450, stock: 85, status: "Active", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=100" },
  { id: 2, name: "Premium GaN 65W Charger", category: "Gadgets", price: 1850, stock: 12, status: "Low Stock", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: 3, name: "Mechanical Keyboard RGB", category: "Accessories", price: 3200, stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=100" },
];

export default function ProductsListPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase">
            Product <span className="text-emerald-500">Inventory</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">Manage your {productList.length} listed products</p>
        </div>
        <Link 
          href="/dashboard/products/new" 
          className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95"
        >
          <Plus size={20} /> Add New Product
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by product name or SKU..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl text-sm outline-none focus:bg-white focus:border-emerald-500 transition-all"
          />
        </div>
        <select className="px-6 py-3 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-500 outline-none focus:bg-white focus:border-emerald-500">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Gadgets</option>
        </select>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                <th className="px-8 py-5">Product</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5">Price</th>
                <th className="px-6 py-5">Stock</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {productList.map((product) => (
                <tr key={product.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl border border-gray-100 overflow-hidden bg-gray-50">
                        <img src={product.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <span className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-xs font-medium text-gray-500">{product.category}</td>
                  <td className="px-6 py-5 font-black text-emerald-700 italic text-sm">৳{product.price}</td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-700">{product.stock}</td>
                  <td className="px-6 py-5">
                    <StockBadge status={product.status} />
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                        <MoreHorizontal size={18} />
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

function StockBadge({ status }: { status: string }) {
  const styles: any = {
    "Active": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Low Stock": "bg-amber-50 text-amber-600 border-amber-100",
    "Out of Stock": "bg-red-50 text-red-600 border-red-100",
  };

  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-tighter ${styles[status]}`}>
      {status}
    </span>
  );
}