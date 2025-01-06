'use client';

import { ThemeProvider } from 'next-themes';

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={['light', 'dark', 'blue']}
      defaultTheme="light"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
