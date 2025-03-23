'use client';

import { TextField } from '@mui/material';
import React, { memo } from 'react';
import { KInputProps, useInputProps } from './helpers';

const BaseInput = React.forwardRef<HTMLInputElement, KInputProps>(
  (props, ref) => {
    const { name, combineRefs, sx, inputLabel, ...rest } = useInputProps(
      props,
      ref,
    );
    return (
      <TextField
        id={name}
        color="info"
        inputRef={combineRefs}
        slotProps={{ input: { sx }, inputLabel }}
        {...rest}
      />
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default memo(BaseInput);
