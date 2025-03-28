'use client';

import React, { memo } from 'react';
import styleHelper from '../common';
import { KViewProps } from './helpers';
import { Box } from '@mui/material';

const BaseContainer = React.forwardRef<HTMLInputElement, KViewProps>(
  (props, ref) => {
    const {
      style,
      className,
      onPress,
      children,
      width,
      height,
      lineHeight,
      ...rest
    } = props;
    const { spacing, layout, textStyle } = styleHelper.destructStyles(rest);

    return (
      <Box
        ref={ref}
        onClick={onPress}
        className={className}
        {...spacing}
        lineHeight={lineHeight}
        style={{
          ...style,
          ...layout,
          ...textStyle,

          width,
          height,
        }}
      >
        {children}
      </Box>
    );
  },
);

BaseContainer.displayName = 'ContainerView';

export default memo(BaseContainer);
