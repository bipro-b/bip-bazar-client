"use client";

import React from "react";
import { User, Mail, Phone, ShieldCheck, ChevronRight, Camera } from "lucide-react";

export default function ProfileView() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-black mb-8">Your Profile</h1>

      {/* 1. TOP SECTION: IDENTITY */}
      <div className="flex items-center gap-6 p-6 border rounded-xl mb-6 bg-white shadow-sm">
        <div className="relative group cursor-pointer">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-100">
            <User size={48} className="text-gray-300" />
            <img src="https://picsum.photos/200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="absolute bottom-0 right-0 bg-black text-white p-1.5 rounded-full border-2 border-white">
            <Camera size={14} />
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-black text-gray-900">User_BIP8823</h2>
          <p className="text-sm text-gray-500">Member since Jan 2026</p>
          <button className="mt-2 text-xs font-bold text-orange-600 hover:underline">Edit Username</button>
        </div>
      </div>

      {/* 2. ACCOUNT SECURITY BLOCKS */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider ml-1">Login & Security</h3>
        
        <div className="bg-white border rounded-xl divide-y">
          {/* Email Row */}
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Mail size={20} /></div>
              <div>
                <p className="text-sm font-bold">Email address</p>
                <p className="text-xs text-gray-500">user***@gmail.com</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-black" />
          </div>

          {/* Phone Row */}
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Phone size={20} /></div>
              <div>
                <p className="text-sm font-bold">Mobile phone number</p>
                <p className="text-xs text-gray-500">+1 ********90</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Verified</span>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-black" />
            </div>
          </div>

          {/* Password Row */}
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><ShieldCheck size={20} /></div>
              <div>
                <p className="text-sm font-bold">Account password</p>
                <p className="text-xs text-gray-500">Last changed 3 months ago</p>
              </div>
            </div>
            <button className="text-xs font-bold border px-3 py-1 rounded-full hover:bg-black hover:text-white transition-colors">Change</button>
          </div>
        </div>
      </div>

      {/* 3. DANGER ZONE */}
      <div className="mt-12 pt-6 border-t">
        <button className="text-sm font-bold text-gray-400 hover:text-red-600 transition-colors">
          Delete account
        </button>
      </div>
    </div>
  );
}