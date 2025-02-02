/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';
import ReduxToolkitProvider from '@/provider/ReduxToolkit';
import Theme from '@/provider/Theme';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxToolkitProvider>
          <Theme>
            <ToastProvider>
              <Header />
              {children}
              <Footer />
            </ToastProvider>
          </Theme>
        </ReduxToolkitProvider>
      </body>
    </html>
  );
}
