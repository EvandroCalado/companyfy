'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MenuLinks } from '@/lib/links';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type NavGroupProps = {
  isOpenMenu?: boolean;
  menuLinks: MenuLinks;
};

export const NavGroup = ({ isOpenMenu = true, menuLinks }: NavGroupProps) => {
  const pathname = usePathname();

  return (
    <nav className='space-y-2'>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            'text-foreground flex items-center gap-2 transition-all duration-300',
            {
              'ml-2': !isOpenMenu,
            },
          )}
        >
          <span>{menuLinks.icon}</span>
          <h3
            className={cn('uppercase transition-all duration-300', {
              'invisible hidden opacity-0': !isOpenMenu,
              'visible opacity-100': isOpenMenu,
            })}
          >
            {menuLinks.title}
          </h3>
        </TooltipTrigger>
        <TooltipContent className={cn({ hidden: isOpenMenu })}>
          {menuLinks.title}
        </TooltipContent>
      </Tooltip>

      {menuLinks.links.map((link) => (
        <Tooltip key={link.id}>
          <TooltipTrigger asChild>
            <Button
              asChild
              className={cn(
                'text-muted-foreground hover:text-primary relative w-full justify-start bg-transparent p-0 shadow-none hover:bg-transparent',
                'hover:before:bg-primary hover:before:absolute hover:before:-left-5 hover:before:h-full hover:before:w-1 hover:before:rounded-r-full hover:before:transition-all hover:before:duration-300 hover:before:content-[""]',

                {
                  'text-primary before:bg-primary before:absolute before:-left-5 before:h-full before:w-1 before:rounded-r-md before:transition-all before:duration-300 before:content-[""]':
                    pathname.startsWith(link.href),
                },
              )}
            >
              <Link href={link.href}>
                {link.icon}{' '}
                <span
                  className={cn(
                    'transition-[visibility,opacity] duration-100',
                    {
                      'invisible hidden opacity-0': !isOpenMenu,
                      'visible opacity-100': isOpenMenu,
                    },
                  )}
                >
                  {link.title}
                </span>
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent side='right' className={cn({ hidden: isOpenMenu })}>
            {link.title}
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
};
