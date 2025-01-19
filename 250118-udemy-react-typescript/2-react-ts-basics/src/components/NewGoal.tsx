import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  //Handle User input in a type-safe way
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  //Handling & Typing events - set type of event (FormEvent)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    /**
     * Method 1: By using FormData, we can pass the HTMLFormElement to the parent.
     * Remember to set the name attribute for each of the input tag
     */
    // new FormData(event.currentTarget);

    /**
     * Method 2: useRef - use current.value to get value of input element
     */
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    //build in method to reset the values inside form element
    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  }

  /**
   * Method 2: useRef - pass in the type of the input element
   */
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        {/** set name="goal" for FormData submission */}
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
