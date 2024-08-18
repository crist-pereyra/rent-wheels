'use client';
import { ModalAddReservation } from '@/components/shared/ModalAddReservation';
import { useLovedCars } from '@/hooks/useLovedCars';
import { Car } from '@prisma/client';
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react';
import Image from 'next/image';

interface Props {
  cars: Car[];
}
export const ListCars = ({ cars }: Props) => {
  const addLovedItem = useLovedCars((state) => state.addLovedItem);
  const removeLovedItem = useLovedCars((state) => state.removeLovedItem);
  const lovedItems = useLovedCars((state) => state.lovedItems);
  return (
    <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
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
                <p>${priceDay}/day</p>
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
              <div className='flex items-center justify-center gap-x-4'>
                <ModalAddReservation car={car} />
                <Heart
                  className={`mt-2 cursor-pointer ${likedCar && 'fill-black'}`}
                  onClick={
                    likedCar
                      ? () => removeLovedItem(car.id)
                      : () => addLovedItem(car)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
