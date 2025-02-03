import Container from "./UI/Container";
import { type Timer as TimerProps } from "../store/timers-context";

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
