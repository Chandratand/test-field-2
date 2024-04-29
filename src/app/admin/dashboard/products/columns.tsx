'use client';

import Icons from '@/components/Icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/formatter/numberFormatter';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import Image from 'next/image';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  status: 'Aktif' | 'Tidak Aktif';
  createdAt: string;
};

export const columns: ColumnDef<Product>[] = [
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
            Nama Produk <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-5">
        <div className="size-10">
          <AspectRatio ratio={1 / 1}>
            <Image src={row.original.image} fill alt={row.getValue('name') + ' name'} />
          </AspectRatio>
        </div>
        {row.getValue('name')}
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Harga (Rp) <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div> Rp {formatNumber(row.getValue('price'))}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="w-full" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Tanggal Dibuat <Icons.sort className="size-3 ml-2" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div>{format(new Date(row.getValue('createdAt')), 'dd MMMM yyyy')}</div>,
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
