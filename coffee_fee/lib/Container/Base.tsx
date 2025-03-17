'use client';

import React, { memo } from 'react';
import styleHelper from '../common';
import { KViewProps } from './helpers';

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
      ...rest
    } = props;
    const { spacing, layout, remaining } = styleHelper.destructStyles(rest);

    return (
      <div
        ref={ref}
        onClick={onPress}
        className={className}
        style={{
          fontSize,
          ...style,
          ...spacing,
          ...layout,
          ...remaining,
          color,
          width,
          height,
        }}
      >
        {children}
      </div>
    );
  },
);

BaseContainer.displayName = 'ContainerView';

export default memo(BaseContainer);
