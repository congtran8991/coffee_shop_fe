'use client';

import { ISubMenu } from '@/types/common';
import { memo } from 'react';

interface IProps {
  titleTab: string;
  listSub: ISubMenu[];
}

const SubTab = ({ titleTab, listSub }: IProps) => {
  return (
    <div>
      <h4 className="font-bold text-primary-moderate mb-2">{titleTab}</h4>
      {listSub.map((u) => {
        return (
          <ul className="space-y-2" key={u.key}>
            <li>
              <a
                href="#"
                className="text-customGray-severe hover:text-primary-moderate"
              >
                {u.title}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default memo(SubTab);
