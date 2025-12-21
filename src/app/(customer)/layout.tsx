
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation will go here */}

      <Navbar/>
      <main className="flex-1">{children}</main>
      {/* Footer will go here */}
      <Footer/>
    </div>
  );
}
