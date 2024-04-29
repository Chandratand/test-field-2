'use client';

import Icons from '@/components/Icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';

export type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  status: 'Aktif' | 'Tidak Aktif';
};

export const columns: ColumnDef<User>[] = [
  {
    id: 'no',
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Nama Lengkap <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Email <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            No. Telepon <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Status <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="uppercase flex justify-center">
          {row.getValue('status') === 'Aktif' ? (
            <Badge variant={'success'} className="w-[100px] flex justify-center">
              Aktif
            </Badge>
          ) : (
            <Badge variant={'destructive'} className="w-[100px] flex justify-center">
              Tidak Aktif
            </Badge>
          )}
        </div>
      );
    },
  },
];
