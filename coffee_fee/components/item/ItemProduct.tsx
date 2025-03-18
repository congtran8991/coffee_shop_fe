'use client';

import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import KText from '@/lib/Text';
import KColors from '@/constants/colors';
import KContainer from '@/lib/Container';
import Image from 'next/image';
import KButtons from '@/lib/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ItemProduct = () => {
  return (
    <Card>
      <CardActionArea>
        <KContainer.View
          height={'11rem'}
          dp="flex"
          row
          justifyContent="center"
          alignItems="center"
          style={{
            background: KColors.border.moderate,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        >
          <Image
            src="https://hcm.fstorage.vn/images/2025/03/nv-20250305102437.png"
            width={100}
            height={100}
            alt="Picture"
          />
        </KContainer.View>

        <CardContent>
          <KText.Base
            color={KColors.primary.severe}
            fontSize={'0.875rem'}
            fontWeight="500"
            textOverflow="ellipsis"
            whiteSpace={'nowrap'}
            overflow={'hidden'}
            style={{ WebkitLineClamp: 1 }}
          >
            Hồng Trà Latte Nguyên Vị (Ldsdsdsdsds)
          </KText.Base>
          <KText.Base
            fontWeight="bold"
            color={KColors.primary.severe}
            fontSize={'0.875rem'}
          >
            65000
          </KText.Base>
        </CardContent>
      </CardActionArea>

      <KContainer.View pd="1rem" pdT="0rem">
        <KButtons.ICon
          startIcon={<ShoppingCartOutlinedIcon />}
          fullWidth
          title="Đặt mua"
          color={KColors.white}
          fontWeight="500"
          bgC={KColors.primary.severe}
        />
      </KContainer.View>
    </Card>
  );
};

export default memo(ItemProduct);
