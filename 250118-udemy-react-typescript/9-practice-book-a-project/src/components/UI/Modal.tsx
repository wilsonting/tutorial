import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = ComponentPropsWithoutRef<"dialog"> & {
  children: ReactNode;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children }: ModalProps,
  ref
) {
  const modal = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        console.log("show Modal");
        modal.current?.showModal();
      },
    };
  });

  return createPortal(
    <>
      <dialog id="modal-root">{children}</dialog>
    </>,
    document.getElementById("modal")!
  );
});

export default Modal;
