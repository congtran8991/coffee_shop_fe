'use client';

import { IPopupProps } from '@/types/common';
import React, { memo, useImperativeHandle } from 'react';

const KPopup = React.forwardRef<IPopupProps>((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        console.log('popup open');
      },
      dismiss: () => {},
      dismissAll: () => {},
    };
  });
  return <div>popup1</div>;
});

KPopup.displayName = 'KPopup';

export default memo(KPopup);
