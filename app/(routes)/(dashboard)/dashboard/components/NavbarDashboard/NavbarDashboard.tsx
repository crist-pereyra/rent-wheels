import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SidebarRoutes } from '../SidebarRoutes';
import { UserButton } from '@clerk/nextjs';

export const NavbarDashboard = () => {
  return (
    <nav className='flex h-20 w-full items-center justify-between gap-x-4 border-b bg-background px-2 md:px-6'>
      <div className='block xl:hidden'>
        <Sheet>
          <SheetTrigger className='flex items-center'>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left'>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className='flex w-full items-center justify-end gap-x-2'>
        <UserButton />
      </div>
    </nav>
  );
};
