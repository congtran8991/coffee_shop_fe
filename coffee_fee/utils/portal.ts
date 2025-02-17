import { popupRef } from '@/constants';
import { IPopupProps } from '@/containers/portal/helpers';

export default class PortalHandle {
  static readonly popup = {
    open: (payload: IPopupProps) => {
      popupRef.current?.open(payload);
    },
    dismiss: () => {
      popupRef.current?.dismiss();
    },
    dismissAll: () => {
      popupRef.current?.dismissAll();
    },
  };
}
