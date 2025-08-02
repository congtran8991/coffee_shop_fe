'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import KInput from '@/lib/Input';
import KForm from '@/lib/Form';
// import { increase } from '@/stores/redux-toolkit/counter/slice';
// import { showToast } from '@/utils/common';
// import PortalHandle from '@/utils/portal';

import * as yup from 'yup';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useResolverForm } from '@/hooks/lib/useResolverForm';
import { Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid2';
import { Button, Stack, Typography } from '@mui/material';
import KButtons from '@/lib/Button';
import { useRef } from 'react';
import KColors from '@/constants/colors';
import KImage from '@/lib/Image';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KText from '@/lib/Text';
import KContainer from '@/lib/Container';

export default function Home() {
  const count = useAppSelector((state) => state.abc.count);
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const methods = useResolverForm<{ username: string; password: string }>({
    schema: yup.object().shape({}),
    configs: {
      values: {
        username: '',
        password: '',
      },
    },
  });

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-40"

      // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {/* <button
        onClick={() => {
          PortalHandle.popup.open({
            title: 'popup',
            maxWidth: 'sm',
            content: () => {
              return (
                <div>
                  12scscscscscscscs34 12scscscscscscscs34 12scscscscscscscs34
                  12scscscscscscscs34 12scscscscscscscs34 12scscscscscscscs34
                </div>
              );
            },
          });
        }}
      >
        Call Popup
      </button> */}

      {/* <div>{localStorage.getItem('i18nextLng')}</div> */}

      <KForm onSubmit={methods.handleSubmit(() => {})}>
        <Grid maxWidth={'400px'} container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Controller
              name="username"
              control={methods.control}
              render={({ field }) => (
                <KInput.Base {...field} fullWidth label={t('username')} />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Controller
              name="password"
              control={methods.control}
              render={({ field }) => (
                <KInput.Base {...field} fullWidth label={t('password')} />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }} textAlign={'center'}>
            <KButtons.ICon
              startIcon={<SendOutlinedIcon />}
              variant="contained"
              size="medium"
              bgC={KColors.danger.mild}
              color={KColors.white}
              isLoading={false}
              type="submit"
            />
          </Grid>
        </Grid>
      </KForm>
      <KContainer.Stack direction="row">
        <KText.Base mrR="0.25rem" fontWeight={'200'}>
          s vsvs
        </KText.Base>
        <KText.Base>svsvs</KText.Base>
      </KContainer.Stack>
    </div>
  );
}
