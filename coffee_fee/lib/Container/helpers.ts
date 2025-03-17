import { TypeKColors } from '@/constants/colors';
import { SizeText, TypeLayout, TypeSpacing } from '@/constants/spacing';

export interface KViewProps extends TypeSpacing, TypeLayout {
  width?: string | number;
  height?: string | number;
  color?: string | TypeKColors;
  fontSize?: SizeText;
  className?: string;
  style?: React.CSSProperties;
  onPress?: (v?: any) => void;
  children?: any;
}
