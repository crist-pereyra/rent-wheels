import React from 'react';
import { Sidebar } from './dashboard/components/Sidebar';
import { NavbarDashboard } from './dashboard/components/NavbarDashboard';

interface Props {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='flex size-full'>
      <div className='hidden h-full w-80 xl:fixed xl:block'>
        <Sidebar />
      </div>
      <div className='size-full xl:ml-80'>
        <NavbarDashboard />
        <div className='h-max p-6'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
