import React from 'react';
// Layout per le pagine marketing (homepage, pricing, ecc.)
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Potrebbe includere una Navbar/Footer specifici per il marketing */}
      <main className="flex-grow">{children}</main>
    </div>
  );
} 