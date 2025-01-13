export interface A {
  s: string;
}

import { Theme } from '@mui/material/styles';

// Lấy kiểu tất cả các key trong theme.palette
type PaletteKeys = keyof Theme['palette'];

export type ValidPaletteKeys = Exclude<PaletteKeys, undefined>;

// Loại bỏ các giá trị có thể là undefined

// Kết quả:
// 'primary' | 'secondary' | 'warning' | 'warning-mild' | 'warning-moderate' | ...

// test

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
