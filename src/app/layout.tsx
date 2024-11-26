import type { Metadata } from 'next';
import './globals.css';

// Sections
import { Header } from '@/ui/sections';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
