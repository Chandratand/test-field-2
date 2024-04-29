import Sidebar from "@/components/AdminLayout/Sidebar";
import Header from "@/components/AdminLayout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full overflow-auto px-4 pt-20 bg-[#F8F8F8]">{children}</main>
      </div>
    </>
  );
}
