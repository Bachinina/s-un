import { useCallback, useMemo, useState } from "react";

import type { ITask } from "@entities/Task";
import type { TTaskListFilter } from "./types";
import { MOCK_TASKS } from "./constants";

interface IUseTasksReturn {
  tasks: ITask[];
  filter: TTaskListFilter;
  setFilter: (filter: TTaskListFilter) => void;
  removeTask: (id: string) => void;
}

export const useTasks = (): IUseTasksReturn => {
  const [tasks, setTasks] = useState<ITask[]>(MOCK_TASKS);
  const [filter, setFilter] = useState<TTaskListFilter>("all");

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);

      case "incomplete":
        return tasks.filter((task) => !task.completed);

      case "all":
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const removeTask = useCallback((id: string): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
};
