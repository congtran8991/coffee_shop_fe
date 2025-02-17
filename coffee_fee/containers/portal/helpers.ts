export interface IPopupProps {
  title?: string;
  maxWidth: false | 'xs' | 'lg' | 'md' | 'sm' | 'xl';
  content: () => any;
}

export interface IPopupDialogProps {
  open: (payload: IPopupProps) => void;
  dismiss: () => void;
  dismissAll: () => void;
}
