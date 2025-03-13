
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import Providers from '@/App';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Castelnau Group',
  description: 'Creating exceptional value through disciplined investment.',
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
