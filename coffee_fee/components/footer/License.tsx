'use client';
import KContainer from '@/lib/Container';

import React, { memo } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InstagramIcon from '@mui/icons-material/Instagram';
import KColors from '@/constants/colors';
import KImage from '@/lib/Image';

const License = () => {
  return (
    <KContainer.View
      className="xl:container"
      dp="flex"
      row
      justifyContent="space-between"
      alignItems="center"
      height={'3rem'}
    >
      <KContainer.View color={KColors.primary.severe} fontSize="0.875rem">
        © Công ty CP Phúc Long Heritage 2025
      </KContainer.View>
      <KContainer.View dp="flex" row>
        <KImage.ICon
          icon={InstagramIcon}
          sx={{ color: KColors.primary.severe }}
          mrR="0.5rem"
        />
        <KImage.ICon
          icon={FacebookOutlinedIcon}
          sx={{ color: KColors.primary.severe }}
          mrR="0.5rem"
        />
        <KImage.ICon
          icon={SmartDisplayIcon}
          sx={{ color: KColors.primary.severe }}
          mrR="0.5rem"
        />
      </KContainer.View>
    </KContainer.View>
  );
};

export default memo(License);
