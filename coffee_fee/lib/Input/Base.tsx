'use client';

import { TextField } from '@mui/material';
import { memo } from 'react';

interface IProps {
  className: string;
}
const BaseInput: React.FC<IProps> = (props: IProps) => {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />;
};

export default memo(BaseInput);
