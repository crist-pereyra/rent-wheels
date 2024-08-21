import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rent Wheels',
  description:
    'Welcome to Rent Wheels, your go-to solution for renting cars with ease and efficiency! This platform provides a seamless experience for customers looking to book vehicles, as well as a robust admin dashboard to manage listings.',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    images: '/demo1.png',
  },
};
export const viewport: Viewport = {
  themeColor: '#000',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className='selection:bg-cyan-500 selection:text-white'>
        <body className={outfit.className}>
          <NextTopLoader color='#000' />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
