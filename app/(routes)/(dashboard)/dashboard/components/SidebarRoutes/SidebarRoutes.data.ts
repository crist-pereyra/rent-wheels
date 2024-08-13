import { Calendar, Car, Heart, SquareGanttChart } from 'lucide-react';

export const generalSidebarData = [
  {
    icon: Car,
    label: 'Cars',
    href: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Cars Reserves',
    href: '/reserves',
  },
  {
    icon: Heart,
    label: 'Loved Cars',
    href: '/loved-cars',
  },
];

export const adminSidebarData = [
  {
    icon: SquareGanttChart,
    label: 'Manage your cars',
    href: '/dashboard/admin/cars-manager',
  },
  {
    icon: Calendar,
    label: 'All reserves',
    href: '/dashboard/admin/reserves-admin',
  },
];
