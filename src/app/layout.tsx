import type { Metadata } from 'next';
import { DM_Serif_Display, Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import Providers from './providers';
import MainLayout from '@/layouts/MainLayout';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Castelnau Group',
  description: 'Creating exceptional value through disciplined investment.',
  icons: {
    icon: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${poppins.variable} ${dmSerifDisplay.variable} ${poppins.className}`}>
        <Providers>
          <MainLayout>
            {children}
            <Toaster position="bottom-right" />
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
