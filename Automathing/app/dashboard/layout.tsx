import React from 'react';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link href="/dashboard" className="font-bold">Automathing Dashboard</Link>
          <div>
            <Link href="/dashboard/automations" className="mr-4">Automazioni</Link>
            <Link href="/dashboard/history" className="mr-4">Storico</Link>
            <Link href="/dashboard/profile" className="mr-4">Profilo</Link>
            <Link href="/dashboard/settings">Impostazioni</Link>
            {/* Logout button qui */}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto py-8">{children}</main>
      <footer className="text-center p-4 border-t">
        <p>&copy; {new Date().getFullYear()} Automathing</p>
      </footer>
    </div>
  );
} 