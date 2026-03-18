import { Navbar, Footer, Pricing, PricingFAQ } from "@/components/landing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>
        <Pricing locale="zh" />
        <PricingFAQ />
      </main>
      <Footer locale="zh" />
    </div>
  );
}
