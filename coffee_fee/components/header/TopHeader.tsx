'use client';

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
    <div className="border-b-2 text-customGray-moderate border-bord">
      <div className="container flex justify-between items-center h-16 ">
        <div className="flex">
          <div>Logo123</div>
          <div>Search</div>
        </div>
        <div className="flex">
          <div
            onClick={() => {
              setTheme((v) => {
                if (v === 'dark') {
                  return 'light';
                }
                return 'dark';
              });
            }}
          >
            Theme: {theme}
          </div>
          <div>{localStorage.getItem('i18nextLng')}</div>
          <div>chọn phương thức nhận hàng</div>
          <div>hộp thư 1234</div>
          <div>account</div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);
