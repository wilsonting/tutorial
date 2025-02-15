import { useParams } from "react-router-dom";
import { useSessionsContext } from "../store/sessions-context";
import Button from "../components/UI/Button";
import BookSession from "../components/BookSession";
import { useState } from "react";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const sessionId = params.id;

  const [isBooking, setIsBooking] = useState<boolean>(false);
  const { sessions } = useSessionsContext();
  const loadedSession = sessions.find((session) => session.id === sessionId);

  function handleBookSessionClick() {
    setIsBooking(true);
  }

  function handleOnDone() {
    setIsBooking(false);
  }

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="session-page">
      {isBooking && (
        <BookSession onDone={handleOnDone} loadedSession={loadedSession} />
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={handleBookSessionClick}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
