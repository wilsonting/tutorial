import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <a href="/">Our Mission</a>
          <a href="/sessions">Browse Sessions</a>
          <Button> Upcoming Sessions</Button>
        </ul>
      </nav>
    </header>
  );
}
