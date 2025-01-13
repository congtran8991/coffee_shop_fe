import { useTheme } from '@mui/material/styles';

import { createTheme, Theme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ad5e',
    },
    secondary: {
      main: '#c91a25',
    },
    // Warning
    warning: {
      main: '#ff9800', // moderate
    },
    'warning-mild': {
      main: '#ffc266',
    },
    'warning-moderate': {
      main: '#ff9800',
    },
    'warning-severe': {
      main: '#c27400',
    },
    // Info
    info: {
      main: '#3995c5', // moderate
    },
    'info-mild': {
      main: '#88bfdd',
    },
    'info-moderate': {
      main: '#3995c5',
    },
    'info-severe': {
      main: '#2c7196',
    },
    // Success
    success: {
      main: '#41fd9a', // moderate
    },
    'success-mild': {
      main: '#74fdbc',
    },
    'success-moderate': {
      main: '#41fd9a',
    },
    'success-severe': {
      main: '#2de27f',
    },
  },
});

// Lấy kiểu tất cả các key trong theme.palette
type PaletteKeys = keyof Theme['palette'];

// Loại bỏ các giá trị có thể là undefined
export type ValidPaletteKeys = Exclude<PaletteKeys, undefined>;

// Kết quả:
// 'primary' | 'secondary' | 'warning' | 'warning-mild' | 'warning-moderate' | ...
