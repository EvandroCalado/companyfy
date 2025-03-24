import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

import { ThemeProvider } from './theme-provider';

const primary = Noto_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CompanyFy',
  description: 'Gestão de empresas',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang='pt-BR' suppressHydrationWarning>
        <body className={`${primary.variable} antialiased`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
