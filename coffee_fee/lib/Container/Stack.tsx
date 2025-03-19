import { Stack, StackProps } from '@mui/material';

import { memo } from 'react';

const StackContainer = (props: StackProps) => {
  return <Stack {...props} />;
};

export default memo(StackContainer);
