import { SignedIn, UserButton } from '@clerk/nextjs';

const HomePage = () => {
  return (
    <main>
      <h1 className='flex text-3xl'>Home</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
};

export default HomePage;
