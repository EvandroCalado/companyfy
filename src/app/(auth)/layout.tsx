import { Logo } from '@/components/shared/logo';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center gap-4'>
      <Logo className='absolute top-4 left-4' />
      {children}
    </main>
  );
};

export default AuthLayout;
