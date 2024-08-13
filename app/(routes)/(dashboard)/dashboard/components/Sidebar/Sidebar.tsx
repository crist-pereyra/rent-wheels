import { LogoDashboard } from '../LogoDashboard';
import { SidebarRoutes } from '../SidebarRoutes';

export const Sidebar = () => {
  return (
    <div className='h-screen'>
      <div className='flex h-full flex-col border-r'>
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
};
