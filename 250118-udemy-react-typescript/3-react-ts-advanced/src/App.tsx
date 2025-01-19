import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList, {
  type CourseGoalModel,
} from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState<CourseGoalModel[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalModel = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
