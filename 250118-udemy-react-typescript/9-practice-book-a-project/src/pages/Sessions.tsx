import SessionItem from "../components/SessionItem.tsx";
import { useSessionsContext } from "../store/sessions-context.tsx";

export default function SessionsPage() {
  const { sessions } = useSessionsContext();
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <div id="sessions-list">
        {sessions.map((session) => (
          <SessionItem key={session.id} session={session} />
        ))}
      </div>
    </main>
  );
}
