import type { Metadata } from 'next';
import React from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from '@clerk/nextjs';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rent Wheels',
  description: 'Rent Wheels. Your car rental. Fast, efficient, and reliable.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={outfit.className}>
          <NextTopLoader color='#000' />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
