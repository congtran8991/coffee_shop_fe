export interface A {
  s: string;
}

import { SxProps, Theme } from '@mui/material/styles';

// Lấy kiểu tất cả các key trong theme.palette
type PaletteKeys = keyof Theme['palette'];

export type ValidPaletteKeys = Exclude<PaletteKeys, undefined>;

// Loại bỏ các giá trị có thể là undefined

// Kết quả:
// 'primary' | 'secondary' | 'warning' | 'warning-mild' | 'warning-moderate' | ...

// test

export type RootColors =
  | '--default-text-color'
  | '--primary-1'
  | '--primary-2'
  | '--primary-3'
  | '--secondary-1'
  | '--secondary-2'
  | '--secondary-3'
  | '--warning-1'
  | '--warning-2'
  | '--warning-3'
  | '--border-1'
  | '--border-2'
  | '--border-3'
  | '--danger-1'
  | '--danger-2'
  | '--danger-3'
  | '--info-1'
  | '--info-2'
  | '--info-3'
  | '--success-1'
  | '--success-2'
  | '--success-3'
  | '--gray-1'
  | '--gray-2'
  | '--gray-3';

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface ISubMenu {
  key: number;
  title: string;
  url: string;
}
export interface ISubTab {
  key?: number;
  titleTab: string;
  listSub: ISubMenu[];
}

export interface KInputProps {
  className?: string;
  label?: string;
  onChange?: (v?: any) => void;
  onFocus?: (v?: any) => void;
  value?: string;
  message?: string;
  size?: 'small' | 'medium';
  name?: string;
  error?: boolean;
  sx?: SxProps;
  fullWidth?: boolean;
}

export interface IPopupProps {
  open: () => void;
  dismiss: () => void;
  dismissAll: () => void;
}
