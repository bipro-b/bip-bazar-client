import OrderCard from "@/components/account/OrderCard";

export default function OrdersPage() {
  // In a real app, you would fetch orders here from your DB
  return (
    <div>
      <h1 className="text-xl font-black mb-6">Your Orders</h1>
      <div className="space-y-4">
        <OrderCard
          id="ORD-001"
          status="Refunded"
          date="Jan 08, 2026"
          totalAmount="CA$32.71"
          items={[
            { id: "p1", image: "https://picsum.photos/seed/1/200" },
            { id: "p2", image: "https://picsum.photos/seed/2/200" },
          ]}
        />
        <OrderCard
          id="123"
          status="Shipped"
           date="Jan 08, 2026"
          totalAmount="CA$45.00"
          items={[
            { id: "p1", image: "https://picsum.photos/seed/1/200" },
            { id: "p2", image: "https://picsum.photos/seed/2/200" },
            { id: "p3", image: "https://picsum.photos/seed/3/200" },
            { id: "p4", image: "https://picsum.photos/seed/4/200" },
            { id: "p5", image: "https://picsum.photos/seed/5/200" },
          ]}
        />
      </div>
    </div>
  );
}
