import { Navbar } from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-2xl'>Thank you very much for trusting us! 🎉</h1>
        <p>You will receive all the information via email shortly.</p>
        <p>You can view it within your customer area</p>
        <Link href='/'>
          <Button>View products again</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
