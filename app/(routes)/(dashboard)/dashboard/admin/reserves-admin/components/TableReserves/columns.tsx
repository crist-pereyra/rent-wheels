'use client';

import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/formatPrice';
import { Order } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Order Date
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
  {
    accessorKey: 'userId',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Costumer ID
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span className='max-w-[100px] truncate'>{row.original.userId}</span>
      );
    },
  },
  {
    accessorKey: 'carName',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Car
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'orderDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Start
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return new Date(row.original.orderDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
  {
    accessorKey: 'orderEndDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date End
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return new Date(row.original.orderEndDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
  {
    accessorKey: 'totalAmount',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='flex w-full justify-end'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Amount</span>
          <ArrowUpDown className='ml-2 size-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='flex justify-end'>
          <span>{formatPrice(Number(row.original.totalAmount))}</span>
        </div>
      );
    },
    sortingFn: (rowA: any, rowB: any, columnId) => {
      const a = parseFloat(rowA.original[columnId]) || 0;
      const b = parseFloat(rowB.original[columnId]) || 0;
      return a - b;
    },
  },
];
