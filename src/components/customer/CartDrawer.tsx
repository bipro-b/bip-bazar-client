"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock Cart Data - Later this will come from your Zustand Store
  const cartItems = [
    { id: 1, name: "M10 TWS Earbuds", price: 450, qty: 1, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-emerald-600" size={24} />
                  <h2 className="text-xl font-black italic tracking-tighter uppercase text-emerald-950">Your Haul</h2>
                </div>
                <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                          <p className="text-emerald-600 font-black mt-1">৳{item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                            <button className="p-1 hover:bg-gray-50"><Minus size={14} /></button>
                            <span className="w-8 text-center text-xs font-bold">{item.qty}</span>
                            <button className="p-1 hover:bg-gray-50"><Plus size={14} /></button>
                          </div>
                          <button className="text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center opacity-40">
                    <ShoppingBag size={64} className="mb-4" />
                    <p className="font-bold uppercase tracking-widest">Cart is empty</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-black text-emerald-950">৳{subtotal}</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Shipping and taxes calculated at checkout
                </p>
                <Link 
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 font-bold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] shadow-xl shadow-emerald-200"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full py-2 text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}