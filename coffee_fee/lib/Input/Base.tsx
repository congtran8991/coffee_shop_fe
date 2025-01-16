'use client';

import { TextField } from '@mui/material';
import { memo } from 'react';

interface IProps {
  className: string;
}
const BaseInput: React.FC<IProps> = (props: IProps) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={() => {}}
      // value={'Text Field'}
      error
      helperText="Error"
      size="small"
      autoComplete="off" // gợi ý khi điền input
      autoFocus
      onFocus={() => {}}
    />
  );
};

export default memo(BaseInput);
