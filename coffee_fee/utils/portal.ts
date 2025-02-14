import { popupRef } from '@/constants';

export default class PortalHandle {
  static readonly popup = {
    open: (payload: any) => {
      popupRef.current?.open();
    },
    dismiss: (payload: any) => {
      popupRef.current?.dismiss();
    },
    dismissAll: (payload: any) => {
      popupRef.current?.dismissAll();
    },
  };
}
