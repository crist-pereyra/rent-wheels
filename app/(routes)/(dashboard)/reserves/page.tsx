import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { TableReserves } from './components/TableReserves';

const ReservesPage = async () => {
  const { userId } = auth();

  if (!userId) return redirect('/');
  const orders = await db.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  return (
    <div>
      <h1 className='text-2xl font-bold'>Reserves Cars</h1>
      {orders.length === 0 ? (
        <div className='flex flex-col justify-center gap-4'>
          <h2 className='text-xl'>Don&apos;t have any orders</h2>
          <p>Place your orders through the vehicles page</p>
          <Link href='/dashboard'>
            <Button>Cars List</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
};

export default ReservesPage;
