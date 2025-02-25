'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
