'use client';

import { Power } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

const AccountDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-[10px] text-primary leading-[15px]">Hallo Admin,</p>
            <p className="text-sm leading-[21px]">John Doe</p>
          </div>
          <Button variant="outline" className="relative size-10 rounded-full">
            <Avatar className="size-8">
              <AvatarFallback className="uppercase">JD</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-4 justify-center items-center flex gap-2 flex-col">
          <Avatar className="size-[60px]">
            <AvatarFallback className="uppercase">JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="text-sm">Aden S. Putra</p>
            <p className="text-[10px]">aden@gmail.com</p>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive gap-2 justify-center py-4 mb-5">
          <Power size={24} />
          Keluar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
