import type { ReactNode } from "react";
import { Footer, Navbar } from "@/components/landing";

export default function ClinicCustomerSegmentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>{children}</main>
      <Footer locale="zh" />
    </div>
  );
}
