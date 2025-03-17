'use client';

import Carousel from '@/components/slide/Carousel';
import KColors from '@/constants/colors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import KContainer from '@/lib/Container';
import KInput from '@/lib/Input';
import { increase } from '@/stores/redux-toolkit/counter/slice';
import { showToast } from '@/utils/common';
import PortalHandle from '@/utils/portal';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const count = useAppSelector((state) => state.abc.count);
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <>
      <Carousel />
    </>
  );
}
