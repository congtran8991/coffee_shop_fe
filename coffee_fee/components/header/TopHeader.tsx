'use client';

import KContainer from '@/lib/Container';
// import useHydratedData from '@/hooks/lib/useHydratedData';
// import useIsClientRender from '@/hooks/lib/useIsClientRender';
import { useTheme } from 'next-themes';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { setCookie } from 'cookies-next';
// import { cookies } from 'next/headers';
const TopHeader = () => {
  // const cookieStore = cookies();
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  console.log('theme', theme);

  // const themeClient = useHydratedData(theme);

  // const isClient = useIsClientRender();

  // if (!isClient) {
  //   return null;
  // }

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      setCookie('NEXT_LOCALE', lng, { path: '/' });
      window.location.reload();
    },
    [i18n],
  );

  return (
    <KContainer.View className="border-b-2 text-customGray-moderate border-bord">
      <KContainer.View className="container flex justify-between items-center h-16 ">
        <KContainer.View className="flex">
          <KContainer.View>Logo123</KContainer.View>
          <KContainer.View>Search</KContainer.View>
        </KContainer.View>
        <KContainer.View className="flex">
          <KContainer.View
            onPress={() => {
              setTheme((v) => {
                if (v === 'dark') {
                  return 'light';
                }
                return 'dark';
              });
            }}
          >
            {/* Theme: {theme} */}
          </KContainer.View>
          <KContainer.View>
            {/* {localStorage.getItem('i18nextLng')} */}
          </KContainer.View>
          <KContainer.View>chọn phương thức nhận hàng</KContainer.View>
          <KContainer.View>hộp thư 1234</KContainer.View>
          <KContainer.View>account</KContainer.View>
          <KContainer.View
            onPress={() => {
              changeLanguage('vi');
            }}
          >
            Vietnamese
          </KContainer.View>
          <KContainer.View
            onPress={() => {
              changeLanguage('en');
            }}
          >
            English
          </KContainer.View>
        </KContainer.View>
      </KContainer.View>
    </KContainer.View>
  );
};

export default memo(TopHeader);
