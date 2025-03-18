'use client';

import Carousel from '@/components/slide/Carousel';
import TitleSection from '@/components/title/Section';
import KColors from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import KContainer from '@/lib/Container';
import KInput from '@/lib/Input';
import KText from '@/lib/Text';
import { increase } from '@/stores/redux-toolkit/counter/slice';
import { showToast } from '@/utils/common';
import PortalHandle from '@/utils/portal';
import { Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const count = useAppSelector((state) => state.abc.count);
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <>
      <Carousel />
      <TitleSection
        title={'BST Tea Latte - Bánh Banaberry mới!'}
        color={KColors.primary.severe}
      />

      <KContainer.View className="container">
        <Grid container>
          <Grid size={{ xs: 2.4 }}>1</Grid>
          <Grid size={{ xs: 2.4 }}>1</Grid>
          <Grid size={{ xs: 2.4 }}>1</Grid>
          <Grid size={{ xs: 2.4 }}>1</Grid>
          <Grid size={{ xs: 2.4 }}>1</Grid>
        </Grid>
      </KContainer.View>
    </>
  );
}
