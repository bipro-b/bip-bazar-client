import Sidebar from "@/components/account/Sidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-8 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Sidebar />
          </aside>
          <main className="lg:col-span-9 bg-white rounded-lg shadow-sm p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}