'use client';
import { Button } from '@/components/ui/button';
import { Car } from '@prisma/client';
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import { EditCarButton } from './EditCarButton';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

interface Props {
  car: Car;
}
export const CardCar = ({ car }: Props) => {
  const router = useRouter();
  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: 'Car deleted ❌',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, {
        isPublish: publish,
      });
      toast({
        title: publish ? 'Car Published ✌️' : 'Car Unpublished ⚠️',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className='relative rounded-lg bg-white p-1 shadow-md hover:shadow-lg'>
      <Image src={car.photo} alt={car.name} width={400} height={600} />
      {car.isPublish ? (
        <p className='absolute right-0 top-0 w-full rounded-t-lg bg-green-700 p-1 text-center text-white'>
          Published
        </p>
      ) : (
        <p className='absolute right-0 top-0 w-full rounded-t-lg bg-red-300 p-1 text-center text-white'>
          Not Published
        </p>
      )}
      <div className='relative p-3'>
        <div className='mb-3 flex flex-col gap-x-4'>
          <p className='min-h-16 text-xl lg:min-h-fit'>{car.name}</p>
          <p>${car.priceDay}/day</p>
        </div>
        <div className='grid gap-x-4 md:grid-cols-2'>
          <p className='flex items-center'>
            <Gem className='mr-2 size-4' strokeWidth={2} /> {car.type}
          </p>
          <p className='flex items-center'>
            <Wrench className='mr-2 size-4' strokeWidth={2} />{' '}
            {car.transmission}
          </p>
          <p className='flex items-center'>
            <Users className='mr-2 size-4' strokeWidth={2} /> {car.people}
          </p>
          <p className='flex items-center'>
            <Fuel className='mr-2 size-4' strokeWidth={2} /> {car.engine}
          </p>
          <p className='flex items-center'>
            <Gauge className='mr-2 size-4' strokeWidth={2} /> {car.cv} CV
          </p>
        </div>
        <div className='mt-3 flex justify-between gap-x-4'>
          <Button variant='outline' onClick={deleteCar}>
            Delete <Trash className='ml-2 size-4' />
          </Button>
          <EditCarButton car={car} />
        </div>
        {car.isPublish ? (
          <Button
            className='mt-3 w-full'
            variant='outline'
            onClick={() => handlerPublishCar(false)}
          >
            Unpublish <Upload className='ml-2 size-4' />
          </Button>
        ) : (
          <Button
            className='mt-3 w-full'
            onClick={() => handlerPublishCar(true)}
          >
            Publish <Upload className='ml-2 size-4' />
          </Button>
        )}
      </div>
    </div>
  );
};
