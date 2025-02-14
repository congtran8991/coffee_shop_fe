'use client';

import { memo } from 'react';
import KPopup from './KPopup';
import { popupRef } from '@/constants';

const KPortal = () => {
  return (
    <>
      <KPopup ref={popupRef} />
    </>
  );
};

export default memo(KPortal);
