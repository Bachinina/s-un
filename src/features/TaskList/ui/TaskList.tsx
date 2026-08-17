import { TaskCard } from "@entities/Task";
import type { IOptimisticTask } from "@entities/Task";

interface ITaskListProps {
  tasks: IOptimisticTask[];
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
          <TaskCard task={task} onRemove={onRemoveTask} isPending={task.isPending} />
        </li>
      ))}
    </ul>
  );
};
