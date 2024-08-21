'use client';

import { ModalAddReservation } from '@/components/shared/ModalAddReservation';
import { SkeletonCars } from '@/components/shared/SkeletonCars';
import { Button } from '@/components/ui/button';
import { useLovedCars } from '@/hooks/useLovedCars';
import { useAuth } from '@clerk/nextjs';
import { Car } from '@prisma/client';
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  cars: Car[] | undefined;
}
export const ListCars = ({ cars }: Props) => {
  const { userId } = useAuth();
  const addLovedItem = useLovedCars((state) => state.addLovedItem);
  const lovedItems = useLovedCars((state) => state.lovedItems);
  const removeLovedItem = useLovedCars((state) => state.removeLovedItem);

  if (!cars) return <SkeletonCars />;
  return (
    <>
      {cars.length === 0 && <p>No vehicles were found with these filters</p>}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {cars.map((car: Car) => {
          const {
            priceDay,
            photo,
            cv,
            engine,
            id,
            people,
            name,
            transmission,
            type,
          } = car;
          const likedCar = lovedItems.some((car) => car.id === id);
          return (
            <div key={id} className='rounded-lg p-1 shadow-md hover:shadow-lg'>
              <Image
                src={photo}
                alt={name}
                width={400}
                height={600}
                className='rounded-lg'
              />
              <div className='p-3'>
                <div className='mb-3 flex flex-col gap-x-4'>
                  <p className='min-h-16 text-xl lg:min-h-fit'>{name}</p>
                  <p>{priceDay}$ /day</p>
                </div>
                <p className='flex items-center'>
                  <Gem className='mr-2 size-4' strokeWidth={1} />
                  {type}
                </p>
                <p className='flex items-center'>
                  <Wrench className='mr-2 size-4' strokeWidth={1} />
                  {transmission}
                </p>
                <p className='flex items-center'>
                  <Users className='mr-2 size-4' strokeWidth={1} />
                  {people}
                </p>
                <p className='flex items-center'>
                  <Fuel className='mr-2 size-4' strokeWidth={1} />
                  {engine}
                </p>
                <p className='flex items-center'>
                  <Gauge className='mr-2 size-4' strokeWidth={1} />
                  {cv} CV
                </p>
                {userId ? (
                  <div className='flex items-center justify-center gap-x-3'>
                    <ModalAddReservation car={car} />
                    <Heart
                      className={`mt-2 cursor-pointer ${likedCar && 'fill-black'}`}
                      onClick={() => {
                        likedCar ? removeLovedItem(car.id) : addLovedItem(car);
                      }}
                    />
                  </div>
                ) : (
                  <div className='mt-2 w-full text-center'>
                    <Link href='sign-in'>
                      <Button variant='outline' className='w-full'>
                        Sing in to reserve
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};