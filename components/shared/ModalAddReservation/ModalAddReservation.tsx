'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Car } from '@prisma/client';
import { CalendarSelector } from './CalendarSelector';
import { useState } from 'react';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

interface Props {
  car: Car;
}
export const ModalAddReservation = ({ car }: Props) => {
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post('/api/checkout', {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });
    window.location = response.data.url;
    toast({
      title: 'Car Reserved 🚗',
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline' className='mt-3 w-full'>
          Reserve Car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Select the dates you want to reserve.
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Reserve Car
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
