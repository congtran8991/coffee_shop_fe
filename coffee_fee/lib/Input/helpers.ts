import useCombineRefs from '@/hooks/lib/useCombineRef';
import { KInputProps } from '@/types/common';
import { useRef } from 'react';

export const useInputProps = (
  props: KInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const { message, error, size = 'small', fullWidth, ...rest } = props;
  const innerRef = useRef<HTMLInputElement>(null);
  const combineRefs = useCombineRefs<HTMLInputElement>(ref, innerRef);

  return {
    combineRefs,
    size,
    error: !!message || error,
    helperText: message,
    fullWidth,
    ...rest,
  };
};
