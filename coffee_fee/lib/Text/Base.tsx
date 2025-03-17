'use client';
import { TypeKColors } from '@/constants/colors';
import { SizeText, TypeSpacing, TypeWeight } from '@/constants/spacing';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';
import { memo } from 'react';
import styleHelper from '../common';

interface CustomTextProps extends TypeSpacing, Omit<TypographyProps, 'mr'> {
  variant?:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  color?: string | TypeKColors;
  fontWeight?: TypeWeight;
  fontSize?: SizeText;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

const StyledTypography = styled(Typography)<CustomTextProps>(
  ({ color, fontWeight, fontSize, textAlign }) => {
    return {
      color: color || 'inherit',
      fontWeight: fontWeight || 400,
      fontSize: fontSize || '1rem',
      textAlign: textAlign || 'left',
    };
  },
);

const TextBase: React.FC<CustomTextProps> = ({ children, ...props }) => {
  const { spacing, remaining } = styleHelper.destructSpacing(props);
  const _props = { ...remaining, ...spacing };
  return <StyledTypography {..._props}>{children}</StyledTypography>;
};

export default memo(TextBase);
