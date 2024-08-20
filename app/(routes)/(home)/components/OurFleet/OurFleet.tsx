import React from 'react';
import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondOurFleet,
} from './OurFleet.data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export const OurFleet = () => {
  return (
    <div className='mx-auto max-w-6xl p-6 py-12 text-center lg:py-40'>
      <h3 className='text-2xl font-bold lg:text-6xl'>Our Vehicle Fleet</h3>
      <p className='mx-auto mb-5 mt-2 w-full text-center text-lg lg:mb-10 lg:mt-5 lg:text-xl'>
        Don&apos;t deny yourself pleasure of driving the best premium cars
        around the world here and now.
      </p>
      <div className='mx-auto mb-5 grid max-w-2xl grid-cols-2 items-center justify-center gap-4 lg:grid-cols-6'>
        {categoryOurFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              'rounded-xl py-2 px-3',
              active ? 'bg-black text-white' : 'bg-slate-100'
            )}
          >
            {name}
          </div>
        ))}
      </div>
      <div className='mb-10'>
        <div className='mb-6 grid grid-cols-3 gap-x-3 lg:gap-x-6'>
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div key={url}>
              <Image
                src={`/images/${url}`}
                alt='Car'
                width={400}
                height={300}
                className='rounded-xl'
              />
            </div>
          ))}
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-4 gap-x-3 lg:gap-x-6'>
          {dataSecondOurFleet.map(({ url }) => (
            <div key={url}>
              <Image
                src={`/images/${url}`}
                alt='Car'
                width={400}
                height={300}
                className='aspect-[3/2] rounded-xl'
              />
            </div>
          ))}
        </div>
      </div>
      <Link href={'/cars'}>
        <Button className='mt-5 rounded-xl p-6 text-lg' variant='outline'>
          Show all models
          <MoveRight className='ml-2' />
        </Button>
      </Link>
    </div>
  );
};
