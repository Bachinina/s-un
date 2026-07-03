import { TaskCard } from "@entities/Task";
import type { ITask } from "@entities/Task";

interface ITaskListProps {
  tasks: ITask[];
  onRemoveTask: (id: string) => void;
}

export const TaskList = ({ tasks, onRemoveTask }: ITaskListProps) => {
  if (tasks.length === 0) {
    return <p>Задач по выбранному фильтру нет</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} onRemove={onRemoveTask} />
        </li>
      ))}
    </ul>
  );
};
