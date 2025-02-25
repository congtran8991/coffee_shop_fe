'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import KInput from '@/lib/Input';
import KForm from '@/lib/Form';
import { increase } from '@/stores/redux-toolkit/counter/slice';
import { showToast } from '@/utils/common';
import PortalHandle from '@/utils/portal';

import * as yup from 'yup';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useResolverForm } from '@/hooks/lib/useResolverForm';
import { Controller } from 'react-hook-form';
export default function Home() {
  const count = useAppSelector((state) => state.abc.count);
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const methods = useResolverForm<{ username: string }>({
    schema: yup.object().shape({}),
    configs: {
      values: {
        username: '',
      },
    },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
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
      </button>
      <KInput.Base
        name="test"
        label="Text"
        message="shhsvh"
        // sx={{ color: KColors.primary.moderate }}
      />
      <div>{localStorage.getItem('i18nextLng')}</div>

      <KForm onSubmit={() => {}}>
        <Controller
          name="username"
          control={methods.control}
          render={({ field: { onChange, onBlur, value } }) => (
            <KInput.Base
              name="test"
              label="Text"
              message="shhsvh"
              // sx={{ color: KColors.primary.moderate }}
            />
          )}
        />
      </KForm>
    </div>
  );
}
