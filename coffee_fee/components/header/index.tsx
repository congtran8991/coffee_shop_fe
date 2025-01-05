import SubTab from './SubTab';
import { subTabPromotion } from './menus/promotion';
import { subTabAbout } from './menus/about';
import { subTabDashboard } from './menus/dashboard';
import { subTabMember } from './menus/member';
import { subTabMenu } from './menus/menu';
import { subTabProduct } from './menus/product';

import WrapTab from './WrapTab';

const menu = [
  {
    title: 'Dashboard',
    subMenu: subTabDashboard,
  },
  {
    title: 'Menu',
    subMenu: subTabMenu,
  },
  {
    title: 'Sản phẩm đóng gói',
    subMenu: subTabProduct,
  },
  {
    title: 'Về chúng tôi',
    subMenu: subTabAbout,
  },
  {
    title: 'Khuyến mãi',
    subMenu: subTabPromotion,
  },
  {
    title: 'Hội viên',
    subMenu: subTabMember,
  },
];

const Header = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="border-b-2 border-gray-300">
          <div className="container flex justify-between items-center h-16 ">
            <div className="flex">
              <div>Logo</div>
              <div>Search</div>
            </div>
            <div className="flex">
              <div>chọn phương thức nhận hàng</div>
              <div>hộp thư</div>
              <div>account</div>
            </div>
          </div>
        </div>

        <div className="shadow-lg shadow-gray-200">
          <ul className="container flex justify-center">
            {menu.map((x, index) => {
              return (
                <WrapTab
                  title={x.title}
                  key={index}
                  isSubTab={!!x.subMenu.length}
                >
                  {x.subMenu.map((x) => {
                    return (
                      <SubTab
                        key={x.key}
                        titleTab={x.titleTab}
                        listSub={x.listSub}
                      />
                    );
                  })}
                </WrapTab>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
