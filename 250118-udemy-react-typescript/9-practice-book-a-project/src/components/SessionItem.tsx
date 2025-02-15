import { Session } from "../store/sessions-context";
import Button from "./UI/Button";

type SessionItemType = {
  session: Session;
};

export default function SessionItem({ session }: SessionItemType) {
  const { id, image, title, summary } = session;
  return (
    <div id={id} className="session-item">
      <img src={image} alt={image} />
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="actions">
          <Button to={id}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
