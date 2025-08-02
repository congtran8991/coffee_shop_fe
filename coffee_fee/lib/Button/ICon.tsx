'use client';
import React, { memo } from 'react';
import Base from '../Button/Base';
import { KButtonProps } from './helpers';

const ButtonICon = React.forwardRef<HTMLButtonElement, KButtonProps>(
  (props, ref) => {
    const { startIcon, endIcon, isLoading, onPress } = props;
    return (
      <Base
        ref={ref}
        {...props}
        startIcon={startIcon}
        endIcon={endIcon}
        isLoading={isLoading}
        onClick={onPress}
      />
    );
  },
);

ButtonICon.displayName = 'ButtonIcon';

export default memo(ButtonICon);
