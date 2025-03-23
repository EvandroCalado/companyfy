import { SignedIn, UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <main>
      <h1 className='flex text-3xl'>Home</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button>Teste</Button>
    </main>
  );
};

export default HomePage;
