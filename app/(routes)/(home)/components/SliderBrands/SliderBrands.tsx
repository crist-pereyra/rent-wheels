'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Reveal } from '@/components/shared/Reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { dataBrands } from './SliderBrans.data';
import Image from 'next/image';

export const SliderBrands = () => {
  return (
    <Reveal
      position='bottom'
      className='mb-10 mt-5 flex justify-center gap-x-20 lg:pb-20'
    >
      <Carousel
        className='mx-auto w-full max-w-6xl'
        plugins={[Autoplay({ delay: 2500 })]}
      >
        <CarouselContent>
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className='basis-[4/4] md:basis-2/4 lg:basis-1/6'
            >
              <Image
                src={`/images/brands/${url}`}
                alt={url}
                width={90}
                height={90}
                className='aspect-[3/2] object-contain'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
};
