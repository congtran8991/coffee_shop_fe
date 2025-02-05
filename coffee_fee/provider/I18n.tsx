'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    i18next
      .use(HttpApi)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: 'vi',
        supportedLngs: ['en', 'vi'],
        detection: { order: ['path', 'cookie', 'localStorage', 'navigator'] },
        backend: { loadPath: '/locales/{{lng}}.json' },
      })
      .then(() => setIsInitialized(true));
  }, []);

  if (!isInitialized) return null;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
