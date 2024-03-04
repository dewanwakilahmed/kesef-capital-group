// Necessary Modules Imports
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import type { ReactNode, FC } from 'react';

// CSS Import
import './globals.css';

// Sections Imports
import HeaderSection from '@/sections/HeaderSection';
import FooterSection from '@/sections/FooterSection';

// Font Import
const customFont = Montserrat({
  subsets: ['latin'],
});

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
      <body className={customFont.className}>
        <HeaderSection />
        {children}
        {/* <FooterSection /> */}
      </body>
    </html>
  );
};

export default RootLayout;
