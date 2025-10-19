'use client';

import KColors from '@/constants/colors';
import KContainer from '@/lib/Container';
import KText from '@/lib/Text';
import { ISubMenu } from '@/types/common';
// import Link from 'next/link';
import { memo } from 'react';

interface IProps {
  titleTab: string;
  listSub: ISubMenu[];
}

const SubTab = ({ titleTab, listSub }: IProps) => {
  return (
    <KContainer.View>
      <KText.Base
        variant="h4"
        fontWeight="700"
        color={KColors.primary.moderate}
        mrB="0.5rem"
      >
        {titleTab}
      </KText.Base>
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
    </KContainer.View>
  );
};

export default memo(SubTab);
