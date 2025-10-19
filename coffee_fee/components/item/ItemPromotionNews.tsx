/* eslint-disable @next/next/no-img-element */
'use client';

import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

import KColors from '@/constants/colors';
import KContainer from '@/lib/Container';
// import { useTranslation } from 'react-i18next';

import KImage from '@/lib/Image';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ItemPromotionNews = () => {
  // const { t } = useTranslation();

  return (
    <Card sx={{ border: '1px solid', borderColor: KColors.border.moderate }}>
      <CardActionArea>
        <KContainer.View height={'11rem'}>
          <img
            style={{ height: '180px' }}
            alt="Example"
            src="https://hcm.fstorage.vn/phuclong/2025/03/picture1-20250302145559.jpg"
          />
        </KContainer.View>
        <KContainer.View
          pd="0.75rem"
          dp="flex"
          row
          justifyContent="flex-end"
          lineHeight="1.5rem"
          fontSize="0.75rem"
          color={KColors.customGray.mild}
          style={{
            borderBottom: '1px solid',
            borderColor: KColors.border.moderate,
          }}
        >
          <KImage.ICon
            icon={VisibilityOutlinedIcon}
            sx={{ fontSize: '1rem' }}
          />
          1797
        </KContainer.View>
        <CardContent>
          Tri ân Hội Viên - Phúc Long mời Hội Viên thưởng thức bánh
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(ItemPromotionNews);
