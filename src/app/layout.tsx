import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "BIP BAZAR | Shop the Best Quality Products",
    template: "%s | BIP BAZAR", // This helps sub-pages (like /cart) still show the brand name
  },
  description: "BIP BAZAR - Shop with BIP for the latest trends, electronics, and daily essentials. High quality products delivered to your door.",
  keywords: ["BIP BAZAR", "BipBazar", "online shopping", "ecommerce store"],
  authors: [{ name: "BIP BAZAR" }],
  // 2. OpenGraph (How your link looks on Facebook/WhatsApp)
  openGraph: {
    title: "BIP BAZAR",
    description: "Shop with BIP for the best experience.",
    url: "https://bipbazar.com", // Replace with your actual URL
    siteName: "BIP BAZAR",
    images: [
      {
        url: "/og-image.jpg", // Put a brand image in your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. Structured Data (JSON-LD) to tell Google "This is a Business"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BIP BAZAR",
    "url": "https://bipbazar.com", // Replace with your actual URL
    "logo": "https://bipbazar.com/logo.png", // Replace with your logo link
    "sameAs": [
      "https://facebook.com/bipbazar", // Add your social links
      "https://instagram.com/bipbazar"
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}