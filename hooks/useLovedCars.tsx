import { toast } from '@/components/ui/use-toast';
import { Car } from '@prisma/client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UseLovedCarsInterface {
  lovedItems: Car[];
  addLovedItem: (car: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsInterface>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (car: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingCar = currentLovedItems.find(
          (item) => item.id === car.id
        );

        if (existingCar)
          return toast({
            title: 'Car already added in the loved list 💖',
          });

        set({ lovedItems: [...get().lovedItems, car] });

        toast({
          title: 'Car added to the loved list 🚗',
        });
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: 'Car removed from the loved list 🗑️',
        });
      },
    }),
    {
      name: 'loved-products-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
