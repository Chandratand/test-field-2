'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginValidator } from '@/lib/validator/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const LoginPage = () => {
  const form = useForm<z.infer<typeof LoginValidator>>({
    resolver: zodResolver(LoginValidator),
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof LoginValidator>) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false });
      console.log('res', res);
      if (res?.ok) {
        router.push('/');
      } else {
        alert('Invalid Credential');
      }
    } catch (error) {
      alert('Invalid Credential');
      console.log('error', error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-primary lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center gap-4 relative overflow-hidden">
        <div className="size-[800px] bg-white/15 rounded-full absolute right-0 top-[339px]" />
        <div className="size-[500px] bg-white/15 rounded-full absolute left-[-258px] top-[-17px]" />
        <h2 className="font-semibold text-5xl uppercase tracking-tight">Nama aplikasi</h2>
        <p className="max-w-[430px] text-sm font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-2">
            <h1 className="text-2xl font-normal">Selemat Datang Admin</h1>
            <p className="text-xs text-muted-foreground">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(async (data) => await onSubmit(data))} className="flex flex-col gap-4">
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
                      <Input type="password" placeholder="Masukan password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 uppercase">
                Masuk
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
