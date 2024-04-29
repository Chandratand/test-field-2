'use client';

import { cn } from '@/lib/utils';
import Navigation from './Navigation';

export default function Sidebar() {
  return (
    <nav className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="space-y-1">
            <Navigation />
          </div>
        </div>
      </div>
    </nav>
  );
}
