import { Dialog } from "evergreen-ui";

export function ModalUI({
  children,
  isOpened,
  closeModal,
  onConfirm,
  confirmLabel,
}: {
  children: JSX.Element;
  closeModal: () => void;
  isOpened: boolean;
  onConfirm?: () => void;
  confirmLabel?: string;
}) {
  return (
    <Dialog
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
