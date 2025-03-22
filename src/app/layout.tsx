import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-primary text-primary-foreground hover:bg-primary/90',
          footerActionLink: 'text-red-500',
        },
      }}
    >
      <html lang='pt-BR'>
        <body className={`${primary.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
