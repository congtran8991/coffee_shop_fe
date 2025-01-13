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
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'top-light':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.05), 0 -2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
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
      fontSize: {
        xs: '0.75rem', // Giá trị mặc định
        sm: '0.875rem', // Giá trị mặc định
        base: '1rem', // Giá trị mặc định
        lg: '1.125rem', // Giá trị mặc định
        xl: '1.25rem', // Giá trị mặc định
        '2xl': '1.5rem', // Giá trị mặc định
        '3xl': '1.875rem', // Giá trị mặc định
        '4xl': '2.25rem', // Giá trị mặc định
        '5xl': '3rem', // Giá trị mặc định
        '6xl': '4rem', // Giá trị mặc định
        // Giá trị custom
        tiny: '0.625rem', // Thêm kích thước mới
        huge: '5rem', // Thêm kích thước mới
        giant: '6rem', // Thêm kích thước mới
      },
    },
  },
  plugins: [],
} satisfies Config;
