import { Reveal } from '@/components/shared/Reveal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const DriveToday = () => {
  return (
    <div className='mx-auto max-w-7xl p-6 lg:my-32'>
      <div className="relative rounded-xl bg-[url('/images/background-2.jpg')] bg-cover bg-center bg-no-repeat p-6 lg:p-32">
        <div className='gap-x-6 lg:flex '>
          <div>
            <h3 className='text-4xl text-white'>Drive your dream car Today</h3>
            <p className='my-5 text-xl text-white'>
              Register and epxlore the world of premium cars
            </p>
            <Link href='/sign-in'>
              <Button variant='outline' size='lg'>
                Register here
              </Button>
            </Link>
          </div>
          <Reveal className='top-5 lg:absolute lg:-right-32' position='bottom'>
            <Image
              src='/images/audi.png'
              alt='Car Drive'
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
