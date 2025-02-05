import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { appWithTranslation } from 'next-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en', // Ngôn ngữ mặc định
  interpolation: {
    escapeValue: false, // Không escape HTML
  },
});

export default appWithTranslation;
