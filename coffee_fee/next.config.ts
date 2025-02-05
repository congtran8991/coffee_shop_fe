import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'vi'], // Các ngôn ngữ hỗ trợ
    defaultLocale: 'en', // Ngôn ngữ mặc định
    localeDetection: false, // Tắt tự động phát hiện ngôn ngữ
  },
};

export default nextConfig;
