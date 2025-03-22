import { TypeLayout, TypeSpacing, TypeStyleText } from '@/constants/spacing';

export interface KViewProps extends TypeSpacing, TypeLayout, TypeStyleText {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onPress?: (v?: any) => void;
  children?: any;
}
