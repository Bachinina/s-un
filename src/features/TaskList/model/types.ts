export type TTaskListFilter = "all" | "completed" | "incomplete";

export interface ITaskListFilterOption {
  title: string;
  value: TTaskListFilter;
}
