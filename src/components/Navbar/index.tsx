'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const Navbar = () => {
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
        <Link href={'/'} className="font-extrabold">
          LOGO
        </Link>
        <div className="relative w-1/2">
          <Input type="search" placeholder="Cari parfum kesukaanmu" className="pr-8 w-full border-none bg-muted" />
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button className="uppercase tracking-widest" variant={'outline'}>
            masuk
          </Button>
          <Button className="uppercase tracking-widest">daftar</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
