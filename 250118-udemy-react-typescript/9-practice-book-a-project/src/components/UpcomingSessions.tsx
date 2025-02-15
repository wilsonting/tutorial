import { useEffect, useRef } from "react";
import UpcomingSession from "./UpcomingSession";
import Modal, { ModalHandle } from "./UI/Modal";
import Button from "./UI/Button";
import { useSessionsContext } from "../store/sessions-context";

type UpcomingSessionsType = {
  onDone: () => void;
};

export default function UpcomingSessions({ onDone }: UpcomingSessionsType) {
  const customModalRef = useRef<ModalHandle>(null);
  const { bookedSessions, cancelBookedSession } = useSessionsContext();

  useEffect(() => {
    if (customModalRef.current) {
      customModalRef.current.open();
    }
  }, []);

  function handleOnCancel(id: string) {
    console.log("cancel", id);
    cancelBookedSession(id);
  }

  const hasSessions = bookedSessions.length > 0;
  console.log(bookedSessions);
  return (
    <Modal ref={customModalRef} onClose={onDone}>
      <h2>Upcoming Sessions</h2>
      {!hasSessions && <p>No booked sessions found!</p>}
      {hasSessions && (
        <ul>
          {bookedSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                key={session.id}
                upcomingSession={session}
                onCancel={() => handleOnCancel(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      <p className="actions">
        <Button onClick={onDone}>Close</Button>
      </p>
    </Modal>
  );
}
