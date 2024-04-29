import { cn } from '@/lib/utils';
import Link from 'next/link';
import MobileSidebar from './MobileSidebar';
import AccountDropdown from './AccountDropdown';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex items-center justify-between py-3 px-4">
        <div className="hidden lg:block">
          <Link href={'/'} className="text-sm font-bold">
            Logo
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <AccountDropdown />
        </div>
      </nav>
    </div>
  );
}
