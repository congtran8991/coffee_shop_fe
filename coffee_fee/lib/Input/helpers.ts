import useCombineRefs from '@/hooks/lib/\buseCombineRef';
import { KInputProps } from '@/types/common';

export const useInputProps = (
  props: KInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const { className, size, label, message, value, name, onChange, onFocus } =
    props;

  const refs = useCombineRefs(ref);

  return {};
};
