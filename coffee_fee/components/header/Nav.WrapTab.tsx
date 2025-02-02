'use client';

import { memo } from 'react';

interface IProps {
  children: React.ReactNode;
  title: string;
  isSubTab: boolean;
}
const WrapTab = ({ children, title, isSubTab }: IProps) => {
  return (
    <li className="px-8 py-2 text-customGray-normal focus:outline-none focus:text-white">
      <div className="relative group">
        {/* Menu chính */}
        <button className="text-customGray-severe hover:text-primary-moderate">
          {title}
        </button>

        {/* Menu con */}
        {isSubTab && (
          <div className="absolute left-0 mt-4 w-64 bg-white shadow-lg border border-customGray-light rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {/* Tam giác nhọn */}
            <div className="absolute top-[-8px] left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

            <div className="p-4 grid grid-cols-2 gap-4">{children}</div>
          </div>
        )}
      </div>
    </li>
  );
};

export default memo(WrapTab);
