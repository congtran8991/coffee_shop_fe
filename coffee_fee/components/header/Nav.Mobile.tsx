import KImage from '@/lib/Image';

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
            <div>
              <KImage.ICon icon="AbcOutlined" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
