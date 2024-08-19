import React from 'react';
import { ListLovedCars } from './components/ListLovedCars';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const LovedCardPage = () => {
  const { userId } = auth();
  if (!userId) return redirect('/');
  return (
    <div>
      <h1 className='text-2xl font-bold'>Cars you like</h1>
      <ListLovedCars />
    </div>
  );
};

export default LovedCardPage;
