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
        primary: {
          mild: 'var(--primary-1)',
          moderate: 'var(--primary-2)',
          severe: 'var(--primary-3)',
        },
        secondary: {
          mild: 'var(--secondary-1)',
          moderate: 'var(--secondary-2)',
          severe: 'var(--secondary-3)',
        },
        warning: {
          mild: 'var(--warning-1)',
          moderate: 'var(--warning-2)',
          severe: 'var(--warning-3)',
        },
        border: {
          mild: 'var(--border-1)',
          moderate: 'var(--border-2)',
          severe: 'var(--border-3)',
        },
        danger: {
          mild: 'var(--danger-1)',
          moderate: 'var(--danger-2)',
          severe: 'var(--danger-3)',
        },
        info: {
          mild: 'var(--info-1)',
          moderate: 'var(--info-2)',
          severe: 'var(--info-3)',
        },
        success: {
          mild: 'var(--success-1)',
          moderate: 'var(--success-2)',
          severe: 'var(--success-3)',
        },
        customGray: {
          mild: 'var(--gray-1)',
          moderate: 'var(--gray-2)',
          severe: 'var(--gray-3)',
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
