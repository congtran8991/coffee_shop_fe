'use client';

import useIsClientRender from '@/hooks/lib/useIsClientRender';
import { useTheme } from 'next-themes';
import { memo } from 'react';

const TopHeader = () => {
  const { theme, setTheme } = useTheme();

  // const isClient = useIsClientRender();

  // if (!isClient) {
  //   return null;
  // }

  return (
    <div className="border-b-2 text-customGray-moderate border-bord">
      <div className="container flex justify-between items-center h-16 ">
        <div className="flex">
          <div>Logo</div>
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
          <div>hộp thư</div>
          <div>account</div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);

// 'use client';

// import { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

// const TopHeader = () => {
//   const { theme, setTheme } = useTheme();
//   const [clientTranslate, setClientTranslate] = useState<string | null>(null);

//   useEffect(() => {
//     // Truy cập localStorage chỉ có sẵn trên client
//     const storedTranslate = localStorage.getItem('i18nextLng');
//     setClientTranslate(storedTranslate); // Thay đổi state sau khi client render
//   }, []);

//   console.log('NODE_ENV:', process.env.NODE_ENV);

//   // Đảm bảo sự không khớp giữa server và client render
//   if (clientTranslate !== null && clientTranslate === 'vi') {
//     console.warn('Hydration mismatch detected: setClientTranslate !== theme');
//   }

//   return (
//     <div className="border-b-2 text-customGray-moderate border-bord">
//       <div className="container flex justify-between items-center h-16 ">
//         <div className="flex">
//           <div>Logo</div>
//           <div>Search</div>
//         </div>
//         <div className="flex">
//           <div
//             onClick={() => {
//               setTheme((v) => {
//                 if (v === 'dark') {
//                   return 'light';
//                 }
//                 return 'dark';
//               });
//             }}
//           >
//             Theme: {theme}
//           </div>
//           <div>{clientTranslate}</div>{' '}
//           {/* Giá trị này thay đổi khi client render */}
//           <div>chọn phương thức nhận hàng</div>
//           <div>hộp thư</div>
//           <div>account</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;
