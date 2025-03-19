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
      fontSize = '1rem',
      color,
      width,
      height,
      textAlign,
      lineHeight,
      ...rest
    } = props;
    const { spacing, layout, remaining } = styleHelper.destructStyles(rest);

    return (
      <Box
        ref={ref}
        onClick={onPress}
        className={className}
        {...spacing}
        lineHeight={lineHeight}
        style={{
          fontSize,
          ...style,
          ...layout,
          ...remaining,
          color,
          width,
          height,
          textAlign,
        }}
      >
        {children}
      </Box>
    );
  },
);

BaseContainer.displayName = 'ContainerView';

export default memo(BaseContainer);
