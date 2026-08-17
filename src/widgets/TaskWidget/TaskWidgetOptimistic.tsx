import { startTransition, useOptimistic } from "react";

import { TaskList, useTasks } from "@features/TaskList";
import type { ITask } from "@entities/Task";

export interface IOptimisticTask extends ITask {
  isPending?: boolean;
}

export const TaskWidgetOptimistic = () => {
  const { tasks, addTask, removeTask, isLoading } = useTasks();

  const [optimisticTasks, addOptimisticTask] = useOptimistic<IOptimisticTask[], ITask>(
    tasks,
    (currentTasks, newTask) => {
      return [
        {
          ...newTask,
          isPending: true,
        },
        ...currentTasks,
      ];
    },
  );

  const handleAddTask = async (formData: FormData) => {
    const title = formData.get("title");

    if (typeof title !== "string" || !title.trim()) {
      return;
    }

    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    addOptimisticTask(newTask);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    startTransition(() => {
      addTask(newTask);
    });
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <form action={handleAddTask}>
        <input type="text" name="title" placeholder="Название задачи" required />

        <button type="submit">Добавить</button>
      </form>

      <TaskList tasks={optimisticTasks} onRemoveTask={removeTask} />
    </>
  );
};
