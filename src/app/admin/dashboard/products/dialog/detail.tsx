'use client';

import { deleteProduct } from '@/actions/product';
import { deleteUser } from '@/actions/user';
import DeleteAlertWrapper from '@/components/DeleteAlertWrapper';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { formatNumber } from '@/lib/formatter/numberFormatter';
import { format } from 'date-fns';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProductDetailDialog = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button role="button" className="bg-success p-1 text-white rounded-full">
          <Eye size={14} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-normal txt-lg" onClick={() => console.log(data)}>
            Detail User
          </DialogTitle>
        </DialogHeader>
        <div className="mt-10">
          <div className="bg-white shadow-md rounded-md p-4 mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-md">
              <AspectRatio ratio={4 / 3}>
                <Image src={data.image} alt={data.name} fill className="object-contain" />
              </AspectRatio>
            </div>
            <div>
              <p className="text-lg font-semibold">{data.name}</p>
              <p className="text-gray-600 mb-2">Rp {formatNumber(data.price)}</p>
            </div>
            <div className="text-gray-600">
              <p>Status: {data.status}</p>
              <p>Dibuat Tanggal: {format(new Date(data.createdAt), 'dd MMMM yyyy')}</p>
            </div>
          </div>
        </div>
        <DeleteAlertWrapper
          title={data?.name}
          onContinue={() => {
            deleteProduct(data?.id);
            setIsOpen(false);
            router.refresh();
          }}
        >
          <Button variant="destructive" className="uppercase">
            HAPUS
          </Button>
        </DeleteAlertWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
