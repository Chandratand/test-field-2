'use client';

import { updateUser } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { EditUserValidator } from '@/lib/validator/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilePenLine } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const EditUserDialog = ({ data }: { data: any }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof EditUserValidator>>({
    resolver: zodResolver(EditUserValidator),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        id: data?.id,
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
        status: data?.status,
        role: data?.role,
      });
    }
  }, [data, form]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button role="button" className="bg-[#EC9024] p-1 text-white rounded-full">
          <FilePenLine size={14} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-normal txt-lg">Edit User</DialogTitle>
        </DialogHeader>
        <div className="mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (data) => {
                try {
                  await updateUser(data);
                  router.refresh();
                  form.reset();
                  setIsOpen(false);
                } catch (error) {
                  console.log(error);
                }
              })}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan Nama" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan Nomor Telepon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Masukan Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Switch checked={field.value === 'Aktif'} onCheckedChange={(val) => field.onChange(val ? 'Aktif' : 'Tidak Aktif')} aria-readonly />
                        <FormLabel className="text-base">{field.value}</FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Switch checked={field.value === 'User'} onCheckedChange={(val) => field.onChange(val ? 'User' : 'Admin')} aria-readonly />
                        <FormLabel className="text-base">{field.value}</FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 uppercase">
                Simpan
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
