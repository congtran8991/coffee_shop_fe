'use client';

import { memo } from 'react';

import * as MuiIcon from '@mui/icons-material';

type MICon = keyof typeof MuiIcon;

interface IProps {
  icon: MICon;
}

const KICon = (props: IProps) => {
  const { icon, ...rest } = props;

  const IconComponent = MuiIcon[icon];

  return <IconComponent {...rest} />;
};

export default memo(KICon);
