'use client';

import { TypeSpacing, TypeStyleText } from '@/constants/spacing';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';
import { CSSProperties, memo } from 'react';
import styleHelper from '../common';
import KColors from '@/constants/colors';

interface CustomTextProps
  extends TypeSpacing,
    TypeStyleText,
    Omit<
      TypographyProps,
      'mr' | 'color' | 'fontWeight' | 'fontSize' | 'textAlign' | 'lineHeight'
    > {
  type?: 'span';
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
  style?: CSSProperties;
}

const StyledTypography = styled(Typography)<CustomTextProps>(
  ({ color, fontWeight, fontSize, textAlign }) => {
    return {
      color: color,
      fontWeight: fontWeight || 400,
      fontSize: fontSize || '0.875rem',
      textAlign: textAlign || 'left',
    };
  },
);

const TextBase: React.FC<CustomTextProps> = (props) => {
  const { children, type, style, ...rest } = props;
  const { spacing, layout, textStyle } = styleHelper.destructStyles(rest);
  const _props = { ...spacing, ...layout, ...textStyle };
  return (
    <StyledTypography {..._props} style={style} component={type}>
      {children}
    </StyledTypography>
  );
};

export default memo(TextBase);
