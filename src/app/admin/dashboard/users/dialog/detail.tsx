'use client';

import { deleteUser } from '@/actions/user';
import DeleteAlertWrapper from '@/components/DeleteAlertWrapper';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const UserDetailDialog = ({ data }: { data: any }) => {
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
          <div className="grid grid-cols-2 gap-2">
            <p className="font-medium">ID:</p>
            <p>{data.id}</p>
            <p className="font-medium">Name:</p>
            <p>{data.name}</p>
            <p className="font-medium">Email:</p>
            <p>{data.email}</p>
            <p className="font-medium">Phone Number:</p>
            <p>{data.phoneNumber}</p>
            <p className="font-medium">Role:</p>
            <p>{data.role}</p>
            <p className="font-medium">Status:</p>
            <p>{data.status}</p>
          </div>
        </div>
        <DeleteAlertWrapper
          title={data?.name}
          onContinue={() => {
            deleteUser(data?.id);
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

export default UserDetailDialog;
