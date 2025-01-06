import { subTabAbout } from './menus/about';
import { subTabDashboard } from './menus/dashboard';
import { subTabMember } from './menus/member';
import { subTabMenu } from './menus/menu';
import { subTabProduct } from './menus/product';
import { subTabPromotion } from './menus/promotion';
import SubTab from './Nav.SubTab';
import WrapTab from './Nav.WrapTab';

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
const Nav = () => {
  return (
    <div className="shadow-lg shadow-gray-200">
      <ul className="container flex justify-center">
        {menu.map((x, index) => {
          return (
            <WrapTab title={x.title} key={index} isSubTab={!!x.subMenu.length}>
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
  );
};

export default Nav;
