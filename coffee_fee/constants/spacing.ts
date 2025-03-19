import { TypeKColors } from './colors';

export type SizeSpacing =
  | '0rem'
  | '0.25rem'
  | '0.5rem'
  | '0.75rem'
  | '1rem'
  | '1.25rem'
  | '1.5rem'
  | '1.75rem'
  | '2rem'
  | '2.5rem'
  | '3rem'
  | '3.5rem'
  | '4rem'
  | '5rem'
  | '6rem'
  | '8rem'
  | '10rem'
  | '12rem'
  | '14rem'
  | '16rem';

export type SizeText =
  | '0.25rem'
  | '0.5rem'
  | '0.75rem'
  | '0.875rem'
  | '1rem'
  | '1.25rem'
  | '1.5rem'
  | '1.75rem'
  | '2rem'
  | '2.25rem'
  | '2.5rem';

export type TypeWeight =
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

export interface TypeSpacing {
  mr?: SizeSpacing;
  mrX?: SizeSpacing;
  mrY?: SizeSpacing;
  mrL?: SizeSpacing;
  mrR?: SizeSpacing;
  mrT?: SizeSpacing;
  mrB?: SizeSpacing;
  pd?: SizeSpacing;
  pdX?: SizeSpacing;
  pdY?: SizeSpacing;
  pdL?: SizeSpacing;
  pdR?: SizeSpacing;
  pdT?: SizeSpacing;
  pdB?: SizeSpacing;
}

export interface TypeLayout {
  dp?: 'inline' | 'block' | 'flex' | 'inline-block' | 'inline-flex' | 'none';
  flex?: number | true; // flex value, if flex === true, it means flex = 1
  flexS?: number; // flexShirk
  flexG?: number; // flexGrow
  flexW?: 'wrap' | 'nowrap' | 'wrap-reverse';
  row?: boolean;
  reverse?: boolean;
  alignItems?:
    | true
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignSelf?:
    | true
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  justifyContent?:
    | true
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  center?: boolean;
  direction?: 'row' | 'column';
  position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
}

export interface TypeStyleText {
  lineHeight?: SizeSpacing;
  color?: string | TypeKColors;
  fontWeight?: TypeWeight;
  fontSize?: SizeText;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}
