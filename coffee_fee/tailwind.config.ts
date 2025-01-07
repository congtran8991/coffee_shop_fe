import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
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
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        warning: {
          light: 'var(--warning-1)',
          normal: 'var(--warning-2)',
          dark: 'var(--warning-3)',
        },
        border: {
          light: 'var(--border-1)',
          normal: 'var(--border-2)',
          dark: 'var(--border-3)',
        },
        danger: {
          light: 'var(--danger-1)',
          normal: 'var(--danger-2)',
          dark: 'var(--danger-3)',
        },
        info: {
          light: 'var(--info-1)',
          normal: 'var(--info-2)',
          dark: 'var(--info-3)',
        },
        success: {
          light: 'var(--success-1)',
          normal: 'var(--success-2)',
          dark: 'var(--success-3)',
        },
        customGray: {
          light: 'var(--gray-1)',
          normal: 'var(--gray-2)',
          dark: 'var(--gray-3)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
