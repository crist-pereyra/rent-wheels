import { Navbar } from '@/components/shared/Navbar';
import { db } from '@/lib/db';
import { HeaderCars } from './components/HeaderCars';
import { FiltersAndListCars } from './components/FiltersAndListCars';

const CarsPage = async () => {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl p-6'>
        <HeaderCars />
        <div>
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
