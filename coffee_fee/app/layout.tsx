/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '../components/slide/custom-slide.css';
// import { Inter } from 'next/font/google';
import Header from '@/components/header';
// import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';
import ReduxToolkitProvider from '@/provider/ReduxToolkit';
import Theme from '@/provider/Theme';
import { I18nProvider } from '@/provider/I18n';
import KPortal from '@/containers/portal';

import { Arimo } from 'next/font/google';

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'], // Chỉ tải các weight cần thiết
  display: 'swap',
});

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

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
    <html className="light" suppressHydrationWarning>
      <body className={`${arimo.className} antialiased`}>
        <I18nProvider>
          <ReduxToolkitProvider>
            <Theme>
              <ToastProvider>
                <KPortal />
                <Header />
                {children}
                {/* <Footer /> */}
              </ToastProvider>
            </Theme>
          </ReduxToolkitProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
