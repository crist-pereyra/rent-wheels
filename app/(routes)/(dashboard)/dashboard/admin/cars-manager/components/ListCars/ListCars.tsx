import { Car } from '@prisma/client';
import { CardCar } from './CardCar';
interface Props {
  cars: Car[];
}
export const ListCars = ({ cars }: Props) => {
  return (
    <div className='my-4 grid grid-cols-2 gap-6 lg:grid-cols-4'>
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
  );
};
