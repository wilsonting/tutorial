import { NavLink } from "react-router";
import Button from "./UI/Button";
import { useState } from "react";
import UpcomingSessions from "./UpcomingSessions";

export default function Header() {
  const [isUpcomingSession, setIsUpcomingSession] = useState<boolean>(false);

  function handleOnDone() {
    setIsUpcomingSession(false);
  }

  function handleUpcomingSessionOpen() {
    setIsUpcomingSession(true);
  }

  return (
    <header id="main-header">
      {isUpcomingSession && <UpcomingSessions onDone={handleOnDone} />}
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          {/* <a href="/">Our Mission</a> */}
          {/* <a href="/sessions">Browse Sessions</a> */}
          {/** NavLink -
           * navigation links that need to render active and pending states.
           **/}
          <NavLink to="/">Our Mission</NavLink>
          <NavLink to="/sessions">Browse Sessions</NavLink>
          <Button onClick={handleUpcomingSessionOpen}>
            {" "}
            Upcoming Sessions
          </Button>
        </ul>
      </nav>
    </header>
  );
}
