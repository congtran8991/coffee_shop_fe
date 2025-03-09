import { TypeKColors } from '@/constants/colors';
import { KSpacing } from '@/constants/spacing';
import { ButtonProps } from '@mui/material';

export interface KButtonProps extends KSpacing, Omit<ButtonProps, 'color'> {
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold';
  bgC?: TypeKColors;
  border?: number;
  borderColor?: TypeKColors;
  color?: TypeKColors;
  isLoading?: boolean;
  onPress?: () => void;
}
