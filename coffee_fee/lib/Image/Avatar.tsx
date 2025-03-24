import { memo } from 'react';
import { Avatar, AvatarOwnProps } from '@mui/material';

interface IProps extends AvatarOwnProps {
  size?: string | number;
}

const ImageAvatar = (props: IProps) => {
  const { size, sx, ...rest } = props;
  return <Avatar {...rest} sx={{ height: size, width: size, ...sx }} />;
};

export default memo(ImageAvatar);
