'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useClerk, useUser } from '@clerk/nextjs';
import { LogOut, Menu } from 'lucide-react';

import { links } from '@/lib/links';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Skeleton } from '../ui/skeleton';
import { Logo } from './logo';

export const MobileMenu = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const pathname = usePathname();

  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger className='flex cursor-pointer items-center justify-center'>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>Menu de navegação</SheetDescription>
          </SheetHeader>

          <div className='flex h-full flex-1 flex-col justify-between p-4'>
            <nav className='space-y-2'>
              {links.map((link) => (
                <Button
                  key={link.id}
                  asChild
                  className={cn(
                    'text-muted-foreground hover:text-primary relative w-full justify-start bg-transparent p-0 shadow-none hover:bg-transparent',
                    'hover:before:bg-primary hover:before:absolute hover:before:-left-4 hover:before:h-full hover:before:w-1 hover:before:rounded-r-full hover:before:transition-all hover:before:duration-300 hover:before:content-[""]',

                    {
                      'text-primary before:bg-primary before:absolute before:-left-4 before:h-full before:w-1 before:rounded-r-md before:transition-all before:duration-300 before:content-[""]':
                        pathname.startsWith(link.href),
                    },
                  )}
                >
                  <Link href={link.href}>
                    {link.icon} <span>{link.title}</span>
                  </Link>
                </Button>
              ))}
            </nav>

            <Button
              className='bg-muted-foreground/30 justify-start'
              onClick={() => signOut({ redirectUrl: '/sign-in' })}
            >
              <LogOut />
              <span>Sair</span>
            </Button>
          </div>

          <Separator className='bg-muted-foreground/20 my-4' />

          <Button className='text-muted-foreground mb-4 justify-start bg-transparent shadow-none transition-all duration-300 hover:bg-transparent'>
            {isLoaded ? (
              <Avatar>
                <AvatarImage src={user?.imageUrl} className='m-0' />
                <AvatarFallback className='bg-muted-foreground font-semibold uppercase'>
                  {user?.firstName?.charAt(0)}
                  {user?.lastName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Skeleton className='bg-muted-foreground/30 size-8 rounded-full' />
            )}
            {isLoaded ? (
              <span>
                {user?.firstName} {user?.lastName}
              </span>
            ) : (
              <Skeleton className='bg-muted-foreground/30 h-3 w-28' />
            )}
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
