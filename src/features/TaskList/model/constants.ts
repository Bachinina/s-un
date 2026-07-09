import type { ITask } from "@entities/Task";
import type { ITaskListFilterOption } from "./types";

export const TASK_LIST_FILTERS: ITaskListFilterOption[] = [
  { title: "Все", value: "all" },
  { title: "Завершённые", value: "completed" },
  { title: "Незавершённые", value: "incomplete" },
];

export const MOCK_TASKS: ITask[] = [
  {
    id: "1",
    title: "Сделать домашнее задание",
    completed: false,
  },
  {
    id: "2",
    title: "Прочитать конспект по React",
    completed: true,
  },
  {
    id: "3",
    title: "Настроить ESLint и Prettier",
    completed: true,
  },
  {
    id: "4",
    title: "Разобраться с FSD-архитектурой",
    completed: false,
  },
];
