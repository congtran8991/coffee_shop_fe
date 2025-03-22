import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: {
  //   locales: ['en', 'vi', 'default'], // Các ngôn ngữ hỗ trợ
  //   defaultLocale: 'default', // Ngôn ngữ mặc định
  //   localeDetection: false, // Tắt tự động phát hiện ngôn ngữ
  // },
  // reloadOnPrerender: true,

  reactStrictMode: true,
  images: {
    domains: ['hcm.fstorage.vn'], // ✅ Thêm domain vào đây
  },
};

export default nextConfig;
