import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';

const primary = Noto_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Companyfy',
  description: 'Gestão de empresas',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body className={`${primary.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
