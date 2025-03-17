'use client';

import KContainer from '@/lib/Container';
// import useHydratedData from '@/hooks/lib/useHydratedData';
// import useIsClientRender from '@/hooks/lib/useIsClientRender';
import { useTheme } from 'next-themes';
import { memo } from 'react';

const TopHeader = () => {
  const { theme, setTheme } = useTheme();

  // const themeClient = useHydratedData(theme);

  // const isClient = useIsClientRender();

  // if (!isClient) {
  //   return null;
  // }

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
            Theme: {theme}
          </KContainer.View>
          <KContainer.View>
            {localStorage.getItem('i18nextLng')}
          </KContainer.View>
          <KContainer.View>chọn phương thức nhận hàng</KContainer.View>
          <KContainer.View>hộp thư 1234</KContainer.View>
          <KContainer.View>account</KContainer.View>
        </KContainer.View>
      </KContainer.View>
    </KContainer.View>
  );
};

export default memo(TopHeader);
