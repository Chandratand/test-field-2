'use client';

import ImageUploader from '@/components/ImageUploader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import ImageInput from '@/components/ui/image-input';
import { Input } from '@/components/ui/input';
import { NumberInput } from '@/components/ui/number-input';
import { CreateProductValidator } from '@/lib/validator/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const AddProductDialog = () => {
  const form = useForm<z.infer<typeof CreateProductValidator>>({
    resolver: zodResolver(CreateProductValidator),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase">Tambah Produk</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-normal txt-lg">Tambah Produk</DialogTitle>
        </DialogHeader>
        <div className="mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))} className="flex flex-col gap-4">
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
                      <ImageUploader />
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
