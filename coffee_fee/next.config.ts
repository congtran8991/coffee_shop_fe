

import type { NextConfig } from 'next';
// import path from 'path'
// import { i18n } from './next-i18n.config.js'; // Uncomment if you have a separate i18n config file
// import { i18n } from './next-i18n.config'; // Uncomment if you have a separate i18n config file

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: {
  //   locales: ['en', 'vi', 'default'], // Các ngôn ngữ hỗ trợ
  //   defaultLocale: 'vi', // Ngôn ngữ mặc định
  //   localeDetection: false, // Tắt tự động phát hiện ngôn ngữ
  // },
  reactStrictMode: true,
  images: {
    // domains: ['hcm.fstorage.vn'], // ✅ Thêm domain vào đây
    unoptimized: true,
    remotePatterns: [
      // ✅ Thêm domain vào đây
      {
        protocol: 'https',
        hostname: 'hcm.fstorage.vn',
        pathname: '**',
      },
    ],
  },
  // webpack: (config) => {
  //   config.resolve.alias['@uikit'] = path.resolve(__dirname, '../UICommon')
  //   return config
  // },
  transpilePackages: ['uikit'],
  experimental: {
    externalDir: true,
  },
  output: 'export',
};

export default nextConfig;
