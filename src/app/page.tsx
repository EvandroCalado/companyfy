import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='flex min-h-screen flex-col'>
      <Link href='/dashboard' className='underline underline-offset-4'>
        Dashboard
      </Link>
    </main>
  );
};

export default HomePage;
