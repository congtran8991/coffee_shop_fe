'use client';

import { SvgIconTypeMap, SxProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { memo, MouseEventHandler } from 'react';
import KContainer from '../Container';
import { TypeLayout, TypeSpacing, TypeStyleText } from '@/constants/spacing';
import styleHelper from '../common';

interface IProps extends TypeStyleText, TypeLayout, TypeSpacing {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>; // Không cần `muiName`
  className?: string;
  sx?: SxProps;
  onPress?: () => void;
}

const KICon: React.FC<IProps> = ({
  icon: IconComponent,
  sx,
  onPress,
  ...rest
}) => {
  if (!IconComponent) {
    console.error('Provided icon is not a valid React component.');
    return null;
  }

  const { textStyle, layout } = styleHelper.destructStyles(rest);

  return (
    <KContainer.View
      className="cursor-pointer"
      onPress={onPress as unknown as MouseEventHandler<HTMLDivElement>}
      {...layout}
      {...rest}
    >
      <IconComponent sx={{ ...textStyle, ...sx }} />
    </KContainer.View>
  );
};

export default memo(KICon);
