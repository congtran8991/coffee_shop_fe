import { TypeKColors } from '@/constants/colors';
import { TypeSpacing, TypeWeight } from '@/constants/spacing';
import { ButtonProps } from '@mui/material';

export interface KButtonProps
  extends TypeSpacing,
    Omit<ButtonProps, 'color' | 'title'> {
  title?: string | React.ReactNode;
  fontWeight?: TypeWeight;
  bgC?: TypeKColors;
  border?: number;
  borderColor?: TypeKColors;
  color?: TypeKColors;
  isLoading?: boolean;
  onPress?: () => void;
}
