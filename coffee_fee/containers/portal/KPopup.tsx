'use client';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { memo, useCallback, useImperativeHandle, useState } from 'react';
import { IPopupDialogProps, IPopupProps } from './helpers';
import KColors from '@/constants/colors';
import KImage from '@/lib/Image';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const KPopup = React.forwardRef<IPopupDialogProps>((_, ref) => {
  const [data, setData] = useState<IPopupProps[]>([]);

  const dismiss = useCallback(() => {
    const newArr = data.splice(0, -1);
    setData(newArr);
  }, [data]);

  useImperativeHandle(ref, () => {
    return {
      open: (payload: IPopupProps) => {
        setData([...data, payload]);
      },
      dismiss,
      dismissAll: () => {
        setData([]);
      },
    };
  });

  if (data.length === 0) {
    return null;
  }

  return data.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <Dialog
          open={true}
          keepMounted
          onClose={dismiss}
          fullWidth
          maxWidth={item?.maxWidth || 'sm'}
        >
          {item?.title && (
            <DialogTitle
              borderBottom={'1px solid var(--gray-1)'}
              borderColor={KColors.border.moderate}
              sx={{ m: 0, p: 1.5, pl: 2 }}
            >
              <div className="flex-between">
                <div> {item?.title}</div>
                <KImage.ICon
                  icon={CloseOutlinedIcon}
                  style={{ color: KColors.customGray.moderate }}
                  onPress={dismiss}
                />
              </div>
            </DialogTitle>
          )}
          <DialogContent>{item?.content()}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  });
});

KPopup.displayName = 'KPopup';

export default memo(KPopup);
