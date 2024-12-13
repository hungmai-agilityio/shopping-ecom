import type { Metadata } from 'next';
import { Monitoring } from 'react-scan/monitoring/next';
import './globals.css';

// Sections
import { Footer, Header } from '@/ui/sections';

// Provider
import { QueryProvider } from '@/Provider';

export const metadata: Metadata = {
  title: 'Exclusive shop'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Monitoring
          apiKey="788wgqGBwdxZcVszRqSz8NYf7vax8yYG"
          url="https://monitoring.react-scan.com/api/v1/ingest"
        />
        <QueryProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
