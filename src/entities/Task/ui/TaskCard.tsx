import type { ITask } from "@entities/Task";

interface ITaskCardProps {
  task: ITask;
  onRemove: (id: string) => void;
}

export const TaskCard = ({ task, onRemove }: ITaskCardProps) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.completed ? "Завершена" : "Не завершена"}</p>

      <button type="button" onClick={() => onRemove(task.id)}>
        Удалить
      </button>
    </div>
  );
};
