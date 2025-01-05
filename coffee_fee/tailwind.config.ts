import type { Config } from 'tailwindcss';
import KColors from './constants/colors';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          dark: KColors.primary.dark,
          normal: KColors.primary.normal,
          light: KColors.primary.light,
        },
        secondary: {
          dark: KColors.secondary.dark,
          normal: KColors.secondary.normal,
          light: KColors.secondary.light,
        },
        warning: {
          dark: KColors.warning.dark,
          normal: KColors.warning.normal,
          light: KColors.warning.light,
        },
        customGray: {
          dark: KColors.gray.dark,
          normal: KColors.gray.normal,
          light: KColors.gray.light,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
