'use client';

import { Power } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function getInitials(nameString: string) {
  return nameString
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('');
}

const AccountDropdown = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === 'loading') return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-[10px] text-primary leading-[15px]">Hallo Admin,</p>
            <p className="text-sm leading-[21px]">{session?.user?.name}</p>
          </div>
          <Button variant="outline" className="relative size-10 rounded-full">
            <Avatar className="size-8">
              <AvatarFallback className="uppercase">{getInitials(session?.user?.name || '')}</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-4 justify-center items-center flex gap-2 flex-col">
          <Avatar className="size-[60px]">
            <AvatarFallback className="uppercase">{getInitials(session?.user?.name || '')}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="text-sm">{session?.user?.name}</p>
            <p className="text-[10px]">{session?.user?.email}</p>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={async () => {
            const role = session?.user?.role;
            await signOut({ redirect: false });
            router.replace(role === 'Admin' ? '/login' : '/');
          }}
          className="text-destructive gap-2 justify-center py-4 mb-5"
        >
          <Power size={24} />
          Keluar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
