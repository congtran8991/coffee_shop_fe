import { TypeSpacing } from '@/constants/spacing';

export const useSpacingHelper = (props: TypeSpacing) => {
  const {
    margin,
    marginL,
    marginR,
    marginT,
    marginB,
    marginX,
    marginY,
    padding,
    paddingL,
    paddingR,
    paddingT,
    paddingB,
    paddingX,
    paddingY,
  } = props;
  const res = {
    margin,
    marginLeft: marginL,
    marginRight: marginR,
    marginTop: marginT,
    marginBottom: marginB,
    marginX: marginX,
    marginY: marginY,
    padding: padding,
    paddingLeft: paddingL,
    paddingRight: paddingR,
    paddingTop: paddingT,
    paddingBottom: paddingB,
    paddingX: paddingX,
    paddingY: paddingY,
  };

  return res;
};
