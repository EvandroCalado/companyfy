'use client';

import { usePathname } from 'next/navigation';

import { Search } from 'lucide-react';

import { Input } from '../ui/input';
import { DarkMode } from './dark-mode';

export const Header = () => {
  const pathname = usePathname();

  const routeName = pathname?.split('/').pop();

  return (
    <header className='flex items-center justify-between gap-2 border-b p-5'>
      <h1 className='text-2xl font-semibold capitalize'>{routeName}</h1>

      <div className='flex w-full max-w-sm items-center gap-2'>
        <div className='relative w-full'>
          <Input type='search' placeholder='Pesquisar...' className='pr-7' />
          <Search className='text-muted-foreground absolute top-1/2 right-3 size-5 -translate-y-1/2' />
        </div>

        <DarkMode />
      </div>
    </header>
  );
};
