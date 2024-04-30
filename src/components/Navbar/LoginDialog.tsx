'use client';

import { registerUser } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginValidator } from '@/lib/validator/authentication';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const LoginDialog = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof LoginValidator>>({
    resolver: zodResolver(LoginValidator),
  });

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="uppercase tracking-widest" variant={'outline'}>
          masuk
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-normal txt-lg">Masuk</DialogTitle>
        </DialogHeader>
        <div className="mt-10">
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
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
