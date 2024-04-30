'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { useSession } from 'next-auth/react';
import AccountDropdown from '../AdminLayout/AccountDropdown';

const Navbar = () => {
  const { status } = useSession();

  console.log('session', status);
  const headerRef = useRef<HTMLInputElement>(null);

  const onScroll = () => {
    if (window.pageYOffset > 0) {
      headerRef.current?.classList.add('shadow-lg');
    } else {
      headerRef.current?.classList.remove('shadow-lg');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed z-50 w-full border-b bg-white">
      <nav className="container flex items-center justify-between p-4 py-3 gap-2">
        <Link href={'/'} className="block w-full max-w-[200px] font-extrabold">
          <Image src="/logo.png" alt="logo" width={168} height={27} />
        </Link>
        <div className="relative w-1/2">
          <Input type="search" placeholder="Cari parfum kesukaanmu" className="pr-8 w-full border-none bg-muted" />
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {status === 'loading' ? null : status === 'authenticated' ? (
            <AccountDropdown />
          ) : (
            <>
              <Link href={'/login'} className={buttonVariants({ variant: 'outline', className: 'uppercase tracking-widest' })}>
                MAsuk
              </Link>
              <Button className="uppercase tracking-widest">daftar</Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
