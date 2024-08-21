'use client';

import { useAuth } from '@clerk/nextjs';
import { adminSidebarData, generalSidebarData } from './SidebarRoutes.data';
import { SidebarItem } from './SidebarItem';
import { Separator } from '@/components/ui/separator';
import { isAdmin } from '@/lib/isAdmin';

export const SidebarRoutes = () => {
  const { userId } = useAuth();
  return (
    <div className='flex h-full flex-col justify-between'>
      <div>
        <div className='p-2 md:p-6'>
          <p className='mb-2 text-slate-500'>GENERAL</p>
          {generalSidebarData.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        {isAdmin(userId) && (
          <div className='p-2 md:p-6'>
            <p className='mb-2 text-slate-500'>ADMIN</p>
            {adminSidebarData.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>

      <div>
        <Separator />

        <footer className='mt-3 p-3 text-center'>
          {`© ${new Date().getFullYear()}`}. All rights reserved
        </footer>
      </div>
    </div>
  );
};
