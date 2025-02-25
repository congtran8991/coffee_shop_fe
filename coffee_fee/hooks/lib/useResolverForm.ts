import { useForm, FieldValues, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useResolverForm = <T extends FieldValues>({
  schema,
  configs,
}: {
  schema: any;
  configs: UseFormProps<T>;
}) => {
  return useForm<T>({ ...configs, resolver: yupResolver(schema) as any });
};
