'use client';

import { ThemeProvider } from 'next-themes';
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    ['warning-mild']: Palette['warning'];
    ['warning-severe']: Palette['warning'];
  }

  interface PaletteOptions {
    ['warning-mild']?: PaletteOptions['warning'];
    ['warning-severe']?: PaletteOptions['warning'];
  }
}

export default function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00ad5e',
      },
      secondary: {
        main: '#c91a25',
      },
      warning: {
        main: '#ff9800', //moderate
      },
      'warning-mild': {
        main: '#ffc266',
      },
      'warning-severe': {
        main: '#c27400',
      },
    },
  });

  return (
    <ThemeProvider
      themes={['light', 'dark']}
      defaultTheme="light"
      attribute="class"
    >
      <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
    </ThemeProvider>
  );
}
