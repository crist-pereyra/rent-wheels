import React from 'react';
import { ListLovedCars } from './components/ListLovedCars';

const LovedCardPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Cars you like</h1>
      <ListLovedCars />
    </div>
  );
};

export default LovedCardPage;
