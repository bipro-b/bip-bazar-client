"use client";

import React, { useState } from "react";
import { 
  Store, 
  CreditCard, 
  Lock, 
  Bell, 
  Camera, 
  CheckCircle2, 
  Smartphone,
  Info
} from "lucide-react";

export default function VendorSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-emerald-950 italic tracking-tighter uppercase">
          Store <span className="text-emerald-500">Settings</span>
        </h1>
        <p className="text-sm text-gray-500 font-medium">Manage your brand presence and payout methods</p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl w-fit">
        <TabBtn active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Store size={16} />} label="Store Profile" />
        <TabBtn active={activeTab === "payout"} onClick={() => setActiveTab("payout")} icon={<CreditCard size={16} />} label="Payouts" />
        <TabBtn active={activeTab === "security"} onClick={() => setActiveTab("security")} icon={<Lock size={16} />} label="Security" />
      </div>

      {/* Profile Section */}
      {activeTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-gray-50">
                <div className="relative group">
                  <div className="h-24 w-24 rounded-3xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-2xl border-4 border-white shadow-lg overflow-hidden">
                    BB
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center text-white cursor-pointer transition-all">
                      <Camera size={20} />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 uppercase tracking-tight">Store Logo</h3>
                  <p className="text-xs text-gray-400">JPG, PNG or SVG. Max 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <SettingInput label="Store Display Name" value="BIP BAZAR Official" />
                </div>
                <SettingInput label="Support Email" value="support@bipbazar.com" />
                <SettingInput label="Public Phone" value="017XXXXXXXX" />
                <div className="md:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Store Biography</label>
                  <textarea 
                    rows={4}
                    className="w-full mt-2 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none focus:bg-white focus:border-emerald-500 transition-all resize-none"
                    placeholder="Describe your store to customers..."
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-950 rounded-3xl p-6 text-white shadow-xl shadow-emerald-900/20">
              <h4 className="font-bold italic text-lg mb-2">Pro Vendor Tips</h4>
              <p className="text-emerald-200/60 text-xs leading-relaxed mb-4">
                Verified stores with detailed biographies see a 40% higher conversion rate in Bangladesh.
              </p>
              <button className="w-full py-3 bg-emerald-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payout Section */}
      {activeTab === "payout" && (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700">
            <Info size={20} className="shrink-0" />
            <p className="text-xs font-medium">Your earnings will be transferred to your selected primary account every Thursday.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PayoutMethod 
              active 
              title="bKash Merchant" 
              number="01712-XXXXXX" 
              icon={<Smartphone className="text-pink-500" />} 
            />
            <PayoutMethod 
              title="Bank Account" 
              number="City Bank (A/C: 1209...)" 
              icon={<CreditCard className="text-blue-500" />} 
            />
            <button className="border-2 border-dashed border-gray-100 rounded-2xl p-6 flex items-center justify-center gap-3 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all group">
              <PlusCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Add New Method</span>
            </button>
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-8">
        <button className="px-8 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-100 transition-all">
          Discard Changes
        </button>
        <button className="px-8 py-3 rounded-2xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition-all flex items-center gap-2">
          Save Settings <CheckCircle2 size={18} />
        </button>
      </div>
    </div>
  );
}

// Helper Components
function TabBtn({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
        active ? "bg-white text-emerald-600 shadow-sm" : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {icon} {label}
    </button>
  );
}

function SettingInput({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type="text" 
        defaultValue={value}
        className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-medium outline-none focus:bg-white focus:border-emerald-500 transition-all"
      />
    </div>
  );
}

function PayoutMethod({ title, number, icon, active = false }: any) {
  return (
    <div className={`p-6 rounded-2xl border-2 transition-all ${active ? "border-emerald-500 bg-emerald-50/30" : "border-gray-50 bg-white"}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-xl bg-white shadow-sm border border-gray-50">{icon}</div>
        {active && <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md tracking-tighter">Primary</span>}
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500 font-medium">{number}</p>
    </div>
  );
}

function PlusCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}