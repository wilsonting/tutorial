import CourseGoal from "./CourseGoal";

export type CourseGoalModel = {
  title: string;
  description: string;
  id: number;
};

interface CourseGoalListProps {
  goals: CourseGoalModel[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
