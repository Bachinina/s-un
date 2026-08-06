import type { ITaskListFilterOption } from "./types";

export const TASK_LIST_FILTERS: ITaskListFilterOption[] = [
  { title: "Все", value: "all" },
  { title: "Завершённые", value: "completed" },
  { title: "Незавершённые", value: "incomplete" },
];
