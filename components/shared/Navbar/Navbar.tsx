'use client';

import { Button } from '@/components/ui/button';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Heart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const { userId } = useAuth();
  return (
    <nav className='mx-auto max-w-5xl py-5'>
      <div className='justify-between lg:flex'>
        <Link href='/' className='flex items-center justify-center gap-x-2'>
          <Image src='/logo.svg' alt='Rental Cars' width={50} height={50} />
          <span className='text-xl font-bold'>Rental Cars</span>
        </Link>
        <div className='flex items-center justify-center gap-x-7'>
          <Link href='/cars'>List Cars</Link>
          <Link href='/dashboard'>Dashboard</Link>
          {userId ? (
            <>
              <Link href='/loved-cars'>
                <Heart strokeWidth={1} className='cursor-pointer' />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href='/sign-in'>
              <Button>
                Sign in <User className='ml-2 size-4' />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
