import SupportView from "@/components/help/SupportView";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Container to match your site's max-width */}
      <div className="container mx-auto py-8">
        <SupportView />
      </div>
    </div>
  );
}