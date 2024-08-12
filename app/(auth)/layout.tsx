import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  return (
    <div className='grid h-full items-center justify-center lg:grid-cols-2'>
      <div className='flex items-center justify-center'>{children}</div>
      <div className='hidden h-full items-center justify-center lg:flex lg:flex-col lg:bg-slate-300'>
        <Image src='/logo.svg' alt='logo' width='80' height='80' />
        <h1 className='text-xl font-bold'>Rent Wheels</h1>
      </div>
    </div>
  );
};

export default AuthLayout;
