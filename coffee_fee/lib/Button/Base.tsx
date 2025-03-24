'use client';

import React, { memo } from 'react';
import Button from '@mui/material/Button';
import { KButtonProps } from './helpers';
import styleHelper from '../common';

const BasicButtons = React.forwardRef<HTMLButtonElement, KButtonProps>(
  (props, ref) => {
    const {
      title = 'button',
      size = 'small',
      variant = 'contained',
      bgC,
      border,
      borderColor,
      sx,
      onPress,
      isLoading,
      ...rest
    } = props;

    const { spacing, textStyle, remaining } = styleHelper.destructStyles(rest);

    return (
      <Button
        ref={ref}
        {...remaining}
        variant={variant}
        size={size}
        loading={isLoading}
        sx={{
          backgroundColor: bgC,

          border,
          borderColor,
          ...spacing,
          ...textStyle,
          ...sx,
        }}
        onClick={onPress}
      >
        {title}
      </Button>
    );
  },
);

BasicButtons.displayName = 'BaseButton';

export default memo(BasicButtons);
