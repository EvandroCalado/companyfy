import Link from 'next/link';

import { ChartNoAxesCombined } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Logo = ({ className, ...props }: React.ComponentProps<'a'>) => {
  return (
    <Link
      href='/'
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <ChartNoAxesCombined className='bg-foreground text-background size-8 rounded-full p-1' />
      <h1 className='text-xl'>
        Company<strong className='text-primary'>Fy</strong>{' '}
      </h1>
    </Link>
  );
};
