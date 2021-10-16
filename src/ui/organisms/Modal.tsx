import { Dialog } from "evergreen-ui";

export function ModalUI({
  children,
  isOpened,
  closeModal,
  onConfirm,
  confirmLabel,
  width,
}: {
  children: JSX.Element;
  closeModal: () => void;
  isOpened: boolean;
  onConfirm?: () => void;
  confirmLabel?: string;
  width?: string;
}) {
  return (
    <Dialog
      width={width}
      confirmLabel={confirmLabel}
      isShown={isOpened}
      title="Token settings"
      onCloseComplete={closeModal}
      onConfirm={onConfirm}
    >
      {children}
    </Dialog>
  );
}
