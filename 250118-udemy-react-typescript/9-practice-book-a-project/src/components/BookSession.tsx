import { FormEvent, useEffect, useRef } from "react";
import Input from "./UI/Input";
import Modal, { ModalHandle } from "./UI/Modal";
import Button from "./UI/Button";
import { Session, useSessionsContext } from "../store/sessions-context";

type BookSessionProps = {
  onDone: () => void;
  loadedSession: Session;
};

export default function BookSession({
  onDone,
  loadedSession,
}: BookSessionProps) {
  const customModal = useRef<ModalHandle>(null);
  const sessionCtx = useSessionsContext();

  /**
   *  useEffect is used to open the Modal via its exposed `open`
   *  method when the component is mounted
   */
  useEffect(() => {
    if (customModal.current) {
      customModal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data

    sessionCtx.bookSession(loadedSession);
    onDone();
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
