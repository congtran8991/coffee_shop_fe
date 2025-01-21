'use client';

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { CSSProperties, memo } from 'react';

interface IProps {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>; // Không cần `muiName`
  className?: string;
  style?: CSSProperties;
}

const KICon: React.FC<IProps> = ({ icon: IconComponent, style, ...rest }) => {
  if (!IconComponent) {
    console.error('Provided icon is not a valid React component.');
    return null;
  }

  return <IconComponent {...rest} style={style} color="primary" />;
};

export default memo(KICon);
