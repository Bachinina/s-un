import type { ITask } from "@entities/Task";
import styles from "./TaskCard.module.css";
import { memo } from "react";

interface ITaskCardProps {
  task: ITask;
  onRemove: (id: string) => void;
}

export const TaskCard = memo(({ task, onRemove }: ITaskCardProps) => {
  return (
    <div className={styles.card}>
      <h2>{task.title}</h2>
      <p>{task.completed ? "Завершена" : "Не завершена"}</p>

      <button type="button" onClick={() => onRemove(task.id)}>
        Удалить
      </button>
    </div>
  );
});

TaskCard.displayName = "TaskCard";
