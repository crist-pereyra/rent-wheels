import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';

export const FirstBlock = () => {
  return (
    <div className='grid items-center lg:grid-cols-2 lg:px-0 lg:py-24'>
      <Reveal position='bottom' className='p-6 lg:pl-40'>
        <h1 className='text-6xl font-bold md:text-7xl lg:text-8xl'>
          Premium <span className='block text-cyan-500'>Rental Cars</span> in
          your City
        </h1>
        <p className='mt-2 max-w-sm text-lg lg:mt-5 lg:text-xl'>
          Don&apos;t deny yourself pleasure of driving the best premium cars
          around the world here and now.
        </p>
      </Reveal>

      <Reveal position='right' className='flex justify-end'>
        <Image
          src='/images/porsche.png'
          alt='Rental cars'
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
};
