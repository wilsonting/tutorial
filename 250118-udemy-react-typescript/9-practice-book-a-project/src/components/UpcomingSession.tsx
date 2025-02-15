import { Session } from "../store/sessions-context";
import Button from "./UI/Button";

type UpcomingSessionType = {
  upcomingSession: Session;
  onCancel: () => void;
};

export default function UpcomingSession({
  upcomingSession,
  onCancel,
}: UpcomingSessionType) {
  const { title, summary } = upcomingSession;
  return (
    <article className="upcoming-session">
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <time dateTime={new Date(upcomingSession.date).toISOString()}>
          {new Date(upcomingSession.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <p className="actions">
        <Button textOnly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  );
}
