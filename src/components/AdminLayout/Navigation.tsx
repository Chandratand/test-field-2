'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { LucideIcon } from 'lucide-react';
import { LayoutDashboard, PackageSearch, User } from 'lucide-react';

interface NavigationItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon | null;
  label?: string;
  description?: string;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },
  {
    title: 'User',
    href: '/admin/dashboard/users',
    icon: User,
    label: 'Manajemen User',
  },
  {
    title: 'Product',
    href: '/admin/dashboard/products',
    icon: PackageSearch,
    label: 'Manajemen Produk',
  },
];

interface NavigationProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ setOpen }: NavigationProps) => {
  const path = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {NAVIGATION_ITEMS.map((item, index) => {
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '/' : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn('group flex items-center p-3 text-sm font-semibold', {
                  'bg-primary text-primary-foreground': path === item.href,
                  'hover:bg-accent hover:text-accent-foreground': path !== item.href,
                })}
              >
                {item.icon && <item.icon className="mr-2 size-6 font-semibold" />}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default Navigation;
