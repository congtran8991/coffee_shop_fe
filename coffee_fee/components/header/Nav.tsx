'use client';
import { memo } from 'react';
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
    path: '/',
    subMenu: subTabDashboard,
  },
  {
    title: 'Menu',
    path: '/',
    subMenu: subTabMenu,
  },
  {
    title: 'Sản phẩm đóng gói',
    path: '/',
    subMenu: subTabProduct,
  },
  {
    title: 'Về chúng tôi',
    path: '/',
    subMenu: subTabAbout,
  },
  {
    title: 'Khuyến mãi',
    path: '/',
    subMenu: subTabPromotion,
  },
  {
    title: 'Hội viên',
    path: '/',
    subMenu: subTabMember,
  },
];
const Nav = () => {
  return (
    <div className="shadow-lg shadow-gray-200">
      {/* <Button variant="contained">Contained</Button> */}
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

export default memo(Nav);
