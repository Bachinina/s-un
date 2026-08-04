import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useGetTasksQuery, type ITask } from "@entities/Task";
import type { TTaskListFilter } from "./types";

interface IUseTasksReturn {
  tasks: ITask[];
  filter: TTaskListFilter;
  setFilter: (filter: TTaskListFilter) => void;
  removeTask: (id: ITask["id"]) => void;
  isLoading: boolean;
  isError: boolean;
}

export const useTasks = (): IUseTasksReturn => {
  const { data, isLoading, isError } = useGetTasksQuery();

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<TTaskListFilter>("all");

  const hasCopiedTasks = useRef(false);

  useEffect(() => {
    if (!data || hasCopiedTasks.current) {
      return;
    }

    setTasks([...data]);
    hasCopiedTasks.current = true;
  }, [data]);

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

  const removeTask = useCallback((id: ITask["id"]): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    isLoading,
    isError,
  };
};
