'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Car } from '@prisma/client';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { EditCarForm } from '../EditCarForm';

interface Props {
  car: Car;
}
export const EditCarButton = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={'outline'} onClick={() => setIsOpen(true)}>
          Edit Car <Pencil className='ml-2 size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <EditCarForm setIsOpen={setIsOpen} car={car} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
