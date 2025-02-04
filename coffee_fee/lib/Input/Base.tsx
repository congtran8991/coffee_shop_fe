'use client';

import { KInputProps } from '@/types/common';
import { TextField } from '@mui/material';
import React, { memo } from 'react';
import { useInputProps } from './helpers';

const BaseInput = React.forwardRef<HTMLInputElement, KInputProps>(
  (props, ref) => {
    const { name, combineRefs, sx, ...rest } = useInputProps(props, ref);
    return (
      <TextField
        id={name}
        color="info"
        inputRef={combineRefs}
        slotProps={{ input: { sx } }}
        {...rest}
      />
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default memo(BaseInput);
