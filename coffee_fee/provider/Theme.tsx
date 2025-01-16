'use client';

import { ThemeProvider } from 'next-themes';

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

import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles';
// import { getColorRoot } from '@/utils/common';
import KColors from '@/constants/colors';
import { getColorRoot } from '@/utils/common';

declare module '@mui/material/styles' {
  interface Palette {
    ['warning-mild']: Palette['warning'];
    ['warning-moderate']: Palette['warning'];
    ['warning-severe']: Palette['warning'];

    ['info-mild']: Palette['info'];
    ['info-moderate']: Palette['info'];
    ['info-severe']: Palette['info'];

    ['success-mild']: Palette['success'];
    ['success-moderate']: Palette['success'];
    ['success-severe']: Palette['success'];

    ['danger-mild']: Palette['success'];
    ['danger-moderate']: Palette['success'];
    ['danger-severe']: Palette['success'];
  }

  interface PaletteOptions {
    ['warning-mild']?: PaletteOptions['warning'];
    ['warning-moderate']?: PaletteOptions['warning'];
    ['warning-severe']?: PaletteOptions['warning'];

    ['info-mild']?: PaletteOptions['info'];
    ['info-moderate']?: PaletteOptions['info'];
    ['info-severe']?: PaletteOptions['info'];

    ['success-mild']?: PaletteOptions['success'];
    ['success-moderate']?: PaletteOptions['success'];
    ['success-severe']?: PaletteOptions['success'];

    ['grey-mild']?: PaletteOptions['grey'];
    ['grey-moderate']?: PaletteOptions['grey'];
    ['grey-severe']?: PaletteOptions['grey'];
  }
}

export default function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: KColors.border.severe, // Màu border mặc định
                borderWidth: '1px', // Độ dày của border
              },
              '&.Mui-focused fieldset': {
                borderColor: KColors.border.severe, // Màu border khi focus
                borderWidth: '1px', // Độ dày border khi focus
              },
              '&.Mui-error fieldset': {
                borderColor: '#f44336', // Màu border khi có lỗi (màu đỏ)
                borderWidth: '1px', // Độ dày của border khi có lỗi
              },
            },
            '& .MuiInputLabel-root': {
              color: '#000000', // Màu label mặc định
            },
            // Khi có lỗi và focus
            '&.Mui-error .MuiInputLabel-root.Mui-focused': {
              color: '#f44336', // Màu label khi có lỗi và focus (màu đỏ)
            },
            // Khi có lỗi nhưng không focus
            '&.Mui-error .MuiInputLabel-root': {
              color: '#f44336', // Màu label khi có lỗi (màu đỏ)
            },
          },
        },
      },
    },
    // palette: {
    //   mode: 'dark',
    //   primary: {
    //     main: '#00ad5e',
    //   },
    //   secondary: {
    //     main: '#c91a25',
    //   },
    //   //warning
    //   warning: {
    //     main: '#ff9800', //moderate
    //   },
    //   'warning-mild': {
    //     main: getColorRoot('--warning-1'),
    //   },
    //   'warning-moderate': {
    //     main: '#ff9800',
    //   },
    //   'warning-severe': {
    //     main: '#c27400',
    //   },
    //   //info
    //   info: {
    //     main: '#3995c5', //moderate
    //   },
    //   'info-mild': {
    //     main: '#88bfdd',
    //   },
    //   'info-moderate': {
    //     main: '#3995c5',
    //   },
    //   'info-severe': {
    //     main: '#2c7196',
    //   },
    //   //success
    //   success: {
    //     main: '#41fd9a', //moderate
    //   },
    //   'success-mild': {
    //     main: '#74fdbc',
    //   },
    //   'success-moderate': {
    //     main: '#41fd9a',
    //   },
    //   'success-severe': {
    //     main: '#2de27f',
    //   },
    // },
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
