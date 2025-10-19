import type { NextConfig } from 'next';

// import { i18n } from './next-i18n.config.js'; // Uncomment if you have a separate i18n config file
// import { i18n } from './next-i18n.config'; // Uncomment if you have a separate i18n config file

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'vi', 'default'], // Các ngôn ngữ hỗ trợ
    defaultLocale: 'vi', // Ngôn ngữ mặc định
    localeDetection: false, // Tắt tự động phát hiện ngôn ngữ
  },
  reloadOnPrerender: true,

  reactStrictMode: true,
  images: {
    // domains: ['hcm.fstorage.vn'], // ✅ Thêm domain vào đây
    remotePatterns: [
      // ✅ Thêm domain vào đây
      {
        protocol: 'https',
        hostname: 'hcm.fstorage.vn',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
