import { TaskList, useTasks, TASK_LIST_FILTERS } from "@features/TaskList";
import styles from "./TaskWidget.module.css";
import { FilterButton } from "@shared/ui/FilterButton";

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask, isLoading } = useTasks();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <div className={styles.filters}>
        {TASK_LIST_FILTERS.map((item) => (
          <FilterButton
            key={item.value}
            title={item.title}
            disabled={filter === item.value}
            onClick={() => setFilter(item.value)}
          />
        ))}
      </div>

      <TaskList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
};
