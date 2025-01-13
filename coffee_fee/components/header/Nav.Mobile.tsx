<<<<<<< Updated upstream
=======
'use client';

import KImage from '@/lib/Image';
import { AbcOutlined } from '@mui/icons-material';
import { memo } from 'react';

>>>>>>> Stashed changes
const NavMobile = () => {
  const navItems = [
    'Trang chủ',
    'Sản phẩm',
    'Cửa hàng',
    'Hộp thư',
    'Tài khoản',
  ];

  return (
    <div className="bg-white w-full border-t shadow-top-light fixed bottom-0 z-10 xl:hidden">
      <div className="flex-between px-2 h-14">
        {navItems.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div>{item}</div>
<<<<<<< Updated upstream
=======
            <div>
              <KImage.ICon icon={AbcOutlined} className="text-danger-mild" />
            </div>
>>>>>>> Stashed changes
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(NavMobile);
