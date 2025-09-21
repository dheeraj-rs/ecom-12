import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royalwood - Premium Furniture Manufacturing',
  description: 'Crafting exceptional bespoke furniture for over 38 years. Discover our premium collection of handcrafted tables, chairs, storage solutions, and custom pieces.',
  keywords: 'furniture manufacturing, bespoke furniture, custom furniture, handcrafted, premium furniture, Royalwood',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}