'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useClerk, useUser } from '@clerk/nextjs';
import { ChevronLeft, LogOut } from 'lucide-react';

import { menuLinks } from '@/lib/links';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { NavGroup } from './nav-group';

export const SideMenu = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const pathname = usePathname();

  return (
    <div
      className={cn(
        'dark:bg-card bg-muted-foreground/10 text-muted relative hidden h-full w-[280px] flex-col px-5 py-10 transition-all duration-300 md:flex',
        {
          'w-[80px]': !isOpenMenu,
        },
      )}
    >
      <Button
        size='icon'
        className='bg-background hover:bg-card text-muted-foreground absolute top-5 -right-4 rounded-full'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <ChevronLeft
          className={cn('transition-all duration-300', {
            'rotate-180': !isOpenMenu,
          })}
        />
      </Button>

      <h1 className='text-muted-foreground mb-8 flex items-center justify-center text-center text-2xl font-semibold tracking-tight'>
        <span
          className={cn('transition-all duration-300', {
            'invisible hidden opacity-0': !isOpenMenu,
            'visible opacity-100': isOpenMenu,
          })}
        >
          Company
        </span>
        <span className='text-primary font-bold'>Fy</span>
      </h1>

      <div className='flex h-full flex-1 flex-col justify-between'>
        {menuLinks.map((links, index) => (
          <NavGroup key={index} isOpenMenu={isOpenMenu} menuLinks={links} />
        ))}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='bg-muted-foreground/30 justify-start'
                onClick={() => signOut({ redirectUrl: '/sign-in' })}
              >
                <LogOut />
                <span
                  className={cn({
                    hidden: !isOpenMenu,
                  })}
                >
                  Sair
                </span>
              </Button>
            </TooltipTrigger>

            <TooltipContent
              side='right'
              className={cn({ hidden: isOpenMenu })}
            >
              Sair
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Separator className='bg-muted-foreground/20 my-8' />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='justify-start bg-transparent p-0 shadow-none transition-all duration-300 hover:bg-transparent'>
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
                <span
                  className={cn(
                    'text-muted-foreground line-clamp-1 font-semibold tracking-tighter transition-all duration-300',
                    { hidden: !isOpenMenu },
                  )}
                >
                  {user?.firstName} {user?.lastName}
                </span>
              ) : (
                <Skeleton className='bg-muted-foreground/30 h-3 w-28' />
              )}
            </Button>
          </TooltipTrigger>

          <TooltipContent side='right' className={cn({ hidden: isOpenMenu })}>
            Perfil
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
