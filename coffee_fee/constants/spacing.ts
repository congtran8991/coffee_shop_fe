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

export interface KSpacing {
  margin?: SizeSpacing;
  marginX?: SizeSpacing;
  marginY?: SizeSpacing;
  marginL?: SizeSpacing;
  marginR?: SizeSpacing;
  marginT?: SizeSpacing;
  marginB?: SizeSpacing;
  padding?: SizeSpacing;
  paddingX?: SizeSpacing;
  paddingY?: SizeSpacing;
  paddingL?: SizeSpacing;
  paddingR?: SizeSpacing;
  paddingT?: SizeSpacing;
  paddingB?: SizeSpacing;
}
