'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setDateSelected: React.Dispatch<
    React.SetStateAction<{ from: Date | undefined; to: Date | undefined }>
  >;
  carPriceDay: string;
  className?: string;
}
export const CalendarSelector = ({
  setDateSelected,
  className,
  carPriceDay,
}: Props) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  useEffect(() => {
    setDateSelected({ from: date?.from, to: date?.to });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
  const calculateDaysBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / oneDay);
  };
  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;
  return (
    <>
      <div className={cn('grid gap-2', className)}>
        {date?.from && date?.to && (
          <>
            <p className='mt-4 text-lg text-black'>Total days: {daysBetween}</p>
            <p className='mb-4 text-base'>
              Total price: ${daysBetween * Number(carPriceDay)} (including
              taxes)
            </p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id='date'
              variant='outline'
              className={cn(
                'justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 size-4' />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              initialFocus
              mode='range'
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
