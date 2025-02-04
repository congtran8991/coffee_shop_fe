import { RootColors } from '@/types/common';

const brand: Record<
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'border'
  | 'danger'
  | 'info'
  | 'success'
  | 'customGray'
  | 'defaultTextColor',
  Record<'mild' | 'moderate' | 'severe', `var(${RootColors})`>
> = {
  defaultTextColor: 'var(--default-text-color)' as any,
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
};

const KColors = {
  ...brand,
};

export default KColors;

// generate-colors.js
