import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  /**
   * The onClose function prop is used to propagate the default "close"
   * event that can be triggered by <dialog>
   * (for example, when the ESC key is pressed)
   * @returns
   */
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose }: ModalProps,
  ref
) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // useImperativeHandle is used to expose the `open` method to other components
  useImperativeHandle(ref, () => {
    return {
      open() {
        console.log("show Modal");
        modalRef.current?.showModal();
      },
    };
  });

  return createPortal(
    <>
      <dialog
        id="modal-root"
        className="modal"
        ref={modalRef}
        onClose={onClose}
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal")!
  );
});

export default Modal;
