import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode, FC } from 'react';

// CSS Import
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kesef Capital Group',
  description: 'Alternative Funding Company',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
