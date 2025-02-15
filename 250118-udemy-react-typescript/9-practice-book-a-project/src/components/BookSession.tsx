import { FormEvent, useEffect, useRef } from "react";
import Input from "./UI/Input";
import Modal, { ModalHandle } from "./UI/Modal";
import Button from "./UI/Button";

type BookSessionProps = {
  onDone: () => void;
};

export default function BookSession({ onDone }: BookSessionProps) {
  const customModal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (customModal.current) {
      customModal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Modal ref={customModal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input id="name" label="Your Name" />
        <Input id="email" label="Your Email" />
        <p className="action">
          <Button textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
