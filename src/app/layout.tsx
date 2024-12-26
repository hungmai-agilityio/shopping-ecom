import type { Metadata } from 'next';
import { Monitoring } from 'react-scan/monitoring/next';
import './globals.css';

// Sections
import { Footer, Header } from '@/ui/sections';

// Provider
import { QueryProvider } from '@/Provider';
import { getUserCookie } from '@/libs';

export const metadata: Metadata = {
  title: 'Exclusive shop',
  description:
    'Discover a wide range of products at great prices on our online shopping platform. Shop with ease and enjoy secure payments, fast delivery, and exceptional customer support'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = getUserCookie();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Monitoring
          apiKey="788wgqGBwdxZcVszRqSz8NYf7vax8yYG"
          url="https://monitoring.react-scan.com/api/v1/ingest"
        />
        <QueryProvider>
          <Header user={user} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
