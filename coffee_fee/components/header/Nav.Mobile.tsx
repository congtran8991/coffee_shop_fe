import KContainer from '@/lib/Container';
import KImage from '@/lib/Image';
import { AbcOutlined } from '@mui/icons-material';
import { memo } from 'react';

const NavMobile = () => {
  const navItems = [
    'Trang chủ',
    'Sản phẩm',
    'Cửa hàng',
    'Hộp thư',
    'Tài khoản',
  ];

  return (
    <KContainer.View className="bg-white w-full border-t shadow-top-light fixed bottom-0 z-10 xl:hidden">
      <KContainer.View className="flex-between px-2 h-14">
        {navItems.map((item, index) => (
          <KContainer.View
            key={index}
            className="flex-1 flex flex-col items-center"
          >
            <KContainer.View>{item}</KContainer.View>
            <KContainer.View>
              <KImage.ICon icon={AbcOutlined} />
            </KContainer.View>
          </KContainer.View>
        ))}
      </KContainer.View>
    </KContainer.View>
  );
};

export default memo(NavMobile);
