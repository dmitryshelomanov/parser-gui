import { Dialog } from "evergreen-ui";

export function ModalUI({
  children,
  isOpened,
  closeModal,
}: {
  children: JSX.Element;
  closeModal: () => void;
  isOpened: boolean;
}) {
  return (
    <Dialog
      isShown={isOpened}
      title="Token settings"
      onCloseComplete={closeModal}
      hasFooter={false}
      width="65vw"
    >
      {children}
    </Dialog>
  );
}
