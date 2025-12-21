import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react"; // 1. Import Suspense

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 2. Wrap Navbar in Suspense */}
      <Suspense fallback={<div className="h-20 bg-white w-full" />}>
        <Navbar />
      </Suspense>
      
      <main className="flex-1">{children}</main>
      
      <Footer />
    </div>
  );
}