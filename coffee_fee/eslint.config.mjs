import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.plugins('react-hooks'),
  ...compat.config({
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Báo lỗi khi vi phạm quy tắc hooks
      'react-hooks/exhaustive-deps': 'warn', // Cảnh báo nếu thiếu dependencies
      'no-console': 'warn', // Ví dụ: Báo cảnh báo khi sử dụng console.log
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }),
];

export default eslintConfig;
