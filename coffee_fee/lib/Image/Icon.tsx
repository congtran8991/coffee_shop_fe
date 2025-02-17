'use client';

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { CSSProperties, memo, MouseEventHandler } from 'react';

interface IProps {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>; // Không cần `muiName`
  className?: string;
  style?: CSSProperties;
  onPress?: () => void;
}

const KICon: React.FC<IProps> = ({
  icon: IconComponent,
  style,
  onPress,
  ...rest
}) => {
  if (!IconComponent) {
    console.error('Provided icon is not a valid React component.');
    return null;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={onPress as unknown as MouseEventHandler<HTMLDivElement>}
    >
      <IconComponent {...rest} style={style} />
    </div>
  );
};

export default memo(KICon);
