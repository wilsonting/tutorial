import { NavLink } from "react-router";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
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
          <Button> Upcoming Sessions</Button>
        </ul>
      </nav>
    </header>
  );
}
