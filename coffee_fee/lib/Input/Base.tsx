'use client';

import { KInputProps } from '@/types/common';
import { TextField } from '@mui/material';
import React, { memo } from 'react';
import { useInputProps } from './helpers';

const BaseInput = React.forwardRef<HTMLInputElement, KInputProps>(
  (props, ref) => {
    const s = useInputProps(props, ref);
    return (
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={() => {}}
        value={'Text Field'}
        error
        helperText="Error"
        size="small"
        autoComplete="off" // gợi ý khi điền input
        autoFocus
        onFocus={() => {}}
      />
    );
  },
);

BaseInput.displayName = 'BaseInput';

export default memo(BaseInput);
