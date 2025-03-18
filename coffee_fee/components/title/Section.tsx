import { TypeKColors } from '@/constants/colors';
import KContainer from '@/lib/Container';
import KText from '@/lib/Text';
import { memo } from 'react';

interface IProps {
  color: TypeKColors;
  title: string;
}

const TitleSection = ({ color, title }: IProps) => {
  return (
    <KContainer.View pdX="1rem" pdY="0.75rem">
      <KText.Base
        fontWeight="bold"
        color={color}
        fontSize="1.5rem"
        textAlign="center"
      >
        {title}
      </KText.Base>
    </KContainer.View>
  );
};

export default memo(TitleSection);
