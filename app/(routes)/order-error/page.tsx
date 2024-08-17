import { Navbar } from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const OrderErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-2xl'>Oops something went wrong</h1>
        <p>Try again later</p>
        <Link href='/'>
          <Button>View products again</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderErrorPage;
