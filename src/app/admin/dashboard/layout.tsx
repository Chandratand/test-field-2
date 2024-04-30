import Header from '@/components/AdminLayout/Header';
import Sidebar from '@/components/AdminLayout/Sidebar';
import { getAuthSession } from '@/lib/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getAuthSession();

  if (!session || session.user.role !== 'Admin') return redirect('/');

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
