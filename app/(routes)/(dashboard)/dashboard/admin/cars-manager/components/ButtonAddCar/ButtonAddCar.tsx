'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { FormAddCar } from '../FormAddCar';

export const ButtonAddCar = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogTrigger asChild>
        <Button variant='outline' onClick={() => setIsOpenDialog(true)}>
          Add new Car
          <PlusCircle className='ml-2' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormAddCar setOpenDialog={setIsOpenDialog} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
