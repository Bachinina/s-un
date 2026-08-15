export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export interface IOptimisticTask extends ITask {
  isPending?: boolean;
}
