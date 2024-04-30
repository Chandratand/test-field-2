'use client';

import { createProduct } from '@/actions/product';
import ImageUploader from '@/components/ImageUploader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NumberInput } from '@/components/ui/number-input';
import { CreateProductValidator } from '@/lib/validator/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const AddProductDialog = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof CreateProductValidator>>({
    resolver: zodResolver(CreateProductValidator),
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="uppercase">Tambah Produk</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-normal txt-lg">Tambah Produk</DialogTitle>
        </DialogHeader>
        <div className="mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (data) => {
                try {
                  await createProduct(data);
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
                    <FormLabel>Nama Produk</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan Nama Produk" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga</FormLabel>
                    <FormControl>
                      <NumberInput placeholder="Masukan Harga" value={field.value} onValueChange={(val) => field.onChange(val.floatValue)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUploader onChange={(event) => field.onChange('/dummy/product1.png')} />
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

export default AddProductDialog;
