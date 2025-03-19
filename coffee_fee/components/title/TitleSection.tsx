'use client';
import { TypeKColors } from '@/constants/colors';
import KContainer from '@/lib/Container';
import KText from '@/lib/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  color?: TypeKColors;
  title: string;
  description?: string;
}

const TitleSection = ({ color, title, description }: IProps) => {
  const { t } = useTranslation();
  // i18n.changeLanguage
  return (
    <KContainer.View pdX="1rem" pdY="0.75rem">
      <KText.Base
        fontFamily={'arimo'}
        fontWeight="bold"
        color={color}
        fontSize="1.5rem"
        textAlign="center"
        lineHeight="3.5rem"
      >
        {t(title)}
      </KText.Base>

      {description && (
        <KText.Base fontFamily={'arimo'} fontSize="0.75rem" textAlign="center">
          {t(description)}
        </KText.Base>
      )}
    </KContainer.View>
  );
};

export default memo(TitleSection);
