'use client';
import KContainer from '@/lib/Container';
import React, { memo } from 'react';
import License from './License';
import Content from './Content';
import KColors from '@/constants/colors';

const Footer = () => {
  return (
    <KContainer.View>
      <KContainer.View style={{ background: KColors.primary.severe }}>
        <Content />
      </KContainer.View>

      <License />
    </KContainer.View>
  );
};

export default memo(Footer);
