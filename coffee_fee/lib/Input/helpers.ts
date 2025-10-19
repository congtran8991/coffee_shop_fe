import useCombineRefs from '@/hooks/lib/useCombineRef';
import { SxProps } from '@mui/material';
import { useRef } from 'react';

export interface KInputProps {
  className?: string;
  label?: string;
  onChange?: (_v?: any) => void;
  onFocus?: (_v?: any) => void;
  value?: string;
  message?: string;
  size?: 'small' | 'medium';
  name?: string;
  error?: boolean;
  sx?: SxProps;
  fullWidth?: boolean;
  inputLabel?: {
    shrink: boolean;
  };
}

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
