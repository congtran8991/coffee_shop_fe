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
    },
  },
  plugins: [],
} satisfies Config;
