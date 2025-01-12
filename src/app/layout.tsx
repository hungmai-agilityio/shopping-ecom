import type { Metadata } from 'next';
import './globals.css';

// Sections
import { Footer, Header } from '@/ui/sections';

// Provider
import { QueryProvider } from '@/providers/QueryClientProvider';
import { ToastContainer } from '@/ui/components';

export const metadata: Metadata = {
  title: 'Exclusive shop',
  description:
    'Discover a wide range of products at great prices on our online shopping platform. Shop with ease and enjoy secure payments, fast delivery, and exceptional customer support',
  icons: '/favicon.png'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <QueryProvider>
          <Header />
          <ToastContainer />

          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
