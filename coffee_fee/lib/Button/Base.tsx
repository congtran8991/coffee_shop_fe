import React, { memo, useMemo } from 'react';
import Button from '@mui/material/Button';
import { KButtonProps } from './helpers';
import { useSpacingHelper } from '../common';
import { pick } from 'lodash';
const BasicButtons = React.forwardRef<HTMLButtonElement, KButtonProps>(
  (props, ref) => {
    const {
      title = 'button',
      size = 'small',
      variant = 'contained',
      color,
      fontWeight = '400',
      bgC,
      border,
      borderColor,
      sx,
      onPress,
      isLoading,
      ...rest
    } = props;

    const spacing = useSpacingHelper(rest);

    return (
      <Button
        ref={ref}
        {...rest}
        variant={variant}
        size={size}
        loading={isLoading}
        sx={{
          color,
          backgroundColor: bgC,
          fontWeight,
          border,
          borderColor,
          ...spacing,
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
