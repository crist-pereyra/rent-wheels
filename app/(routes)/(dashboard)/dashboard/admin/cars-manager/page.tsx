import React from 'react';
import { ButtonAddCar } from './components/ButtonAddCar';
import { ListCars } from './components/ListCars';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { isAdmin } from '@/lib/isAdmin';

const CarsManagerPage = async () => {
  const { userId } = auth();
  if (!userId || !isAdmin(userId)) return redirect('/');
  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} />
    </div>
  );
};

export default CarsManagerPage;
