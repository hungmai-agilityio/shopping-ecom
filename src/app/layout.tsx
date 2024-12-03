import type { Metadata } from 'next';
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
      <body>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
