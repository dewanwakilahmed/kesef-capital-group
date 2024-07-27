import type { Metadata } from 'next';
import { ReactNode, FC } from 'react';
import { Open_Sans } from 'next/font/google';

import '@/app/globals.css';

const primaryFont = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finance Your Business | Kesef Capital Group',
  description:
    'We provide funding for your business needs. Get the capital you need to manage and grow your business.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
