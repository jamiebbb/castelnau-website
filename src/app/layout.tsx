import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Providers from './providers';
import MainLayout from '@/layouts/MainLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Castelnau Group',
  description: 'Creating exceptional value through disciplined investment.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/castelnau-website/favicon.ico' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
