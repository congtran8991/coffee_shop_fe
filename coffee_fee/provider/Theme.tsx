'use client';

import { ThemeProvider as ThemeProviderNext } from 'next-themes';

import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles';
// import { getColorRoot } from '@/utils/common';
import KColors from '@/constants/colors';
import { getColorRoot } from '@/utils/common';
import useIsClientRender from '@/hooks/lib/useIsClientRender';

declare module '@mui/material/styles' {
  interface Palette {
    ['primary-mild']: Palette['primary'];
    ['primary-moderate']: Palette['primary'];
    ['primary-severe']: Palette['primary'];

    ['secondary-mild']: Palette['secondary'];
    ['secondary-moderate']: Palette['secondary'];
    ['secondary-severe']: Palette['secondary'];

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
    ['primary-mild']?: PaletteOptions['primary'];
    ['primary-moderate']?: PaletteOptions['primary'];
    ['primary-severe']?: PaletteOptions['primary'];

    ['secondary-mild']?: PaletteOptions['secondary'];
    ['secondary-moderate']?: PaletteOptions['secondary'];
    ['secondary-severe']?: PaletteOptions['secondary'];

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

    ['sd']?: PaletteOptions['grey-mild'];
  }
}

export default function Theme({ children }: { children: React.ReactNode }) {
  // const isClient = useIsClientRender();
  // if (!isClient) {
  //   return null;
  // }
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
              '&:hover fieldset': {
                borderColor: KColors.defaultTextColor, // Màu viền khi hover
              },
              '&.Mui-error fieldset': {
                borderColor: KColors.danger.moderate, // Màu border khi có lỗi (màu đỏ)
                borderWidth: '1px', // Độ dày của border khi có lỗi
              },
              '& .MuiInputBase-input': {
                color: KColors.defaultTextColor, // Màu chữ input
              },
            },

            '& .MuiInputLabel-root': {
              color: KColors.defaultTextColor, // Màu label mặc định
            },
            '& .MuiInputLabel-root.Mui-focused': {
              // Màu label focus
              color: KColors.defaultTextColor,
              '&.Mui-error': {
                // Màu label focus có lỗi
                color: KColors.danger.moderate,
              },
            },
          },
        },
      },
    },
    palette: {
      // mode: 'light',
      primary: {
        main: getColorRoot('--primary-3'),
      },
      'primary-mild': {
        main: getColorRoot('--primary-1'),
      },
      'primary-moderate': {
        main: getColorRoot('--primary-2'),
      },
      'primary-severe': {
        main: getColorRoot('--primary-3'),
      },
      secondary: {
        main: getColorRoot('--secondary-2'),
      },
      'secondary-mild': {
        main: getColorRoot('--secondary-1'),
      },
      'secondary-moderate': {
        main: getColorRoot('--secondary-2'),
      },
      'secondary-severe': {
        main: getColorRoot('--secondary-3'),
      },
      //warning
      warning: {
        main: getColorRoot('--warning-2'), //moderate
      },
      'warning-mild': {
        main: getColorRoot('--warning-1'),
      },
      'warning-moderate': {
        main: getColorRoot('--warning-2'),
      },
      'warning-severe': {
        main: getColorRoot('--warning-3'),
      },
      //info
      info: {
        main: getColorRoot('--info-2'), //moderate
      },
      'info-mild': {
        main: getColorRoot('--info-1'),
      },
      'info-moderate': {
        main: getColorRoot('--info-2'),
      },
      'info-severe': {
        main: getColorRoot('--info-3'),
      },
      //success
      success: {
        main: getColorRoot('--success-2'), //moderate
      },
      'success-mild': {
        main: getColorRoot('--success-1'),
      },
      'success-moderate': {
        main: getColorRoot('--success-2'),
      },
      'success-severe': {
        main: getColorRoot('--success-3'),
      },
    },
  });

  return (
    <ThemeProviderNext
      themes={['light', 'dark']}
      // defaultTheme="light"
      attribute="class"
    >
      <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
    </ThemeProviderNext>
  );
}
