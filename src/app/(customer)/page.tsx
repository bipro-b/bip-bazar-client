import FeaturedBrands from "@/components/customer/FeaturedBrand";
import FlashSale from "@/components/customer/FlashSale";
import Hero from "@/components/customer/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      {/* 1. Hero Section (Should be top-level) */}
      <Hero />

      {/* 2. Main Content Area */}
      <div className="container mx-auto px-4">
        {/* Flash Sale Section */}
        <FlashSale />
        <FeaturedBrands/>
        {/* You can add more sections here like 'Top Categories' or 'For You' */}

      </div>
    </div>
  );
}