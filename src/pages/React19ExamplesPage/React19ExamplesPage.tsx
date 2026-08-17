import { ActionStateWithReducer, FormWithAsyncSave } from "@features/React19Examples";
import { PageHeader } from "@widgets/PageHeader";
import { TaskWidgetOptimistic } from "@widgets/TaskWidget";

export const React19ExamplesPage = () => {
  return (
    <div>
      <PageHeader title="Демонстрация работы хуков из React 19" />
      <br />
      <h2>Работа с формой (useActionState)</h2>
      <FormWithAsyncSave />
      <br />
      <h2>Работа с формой (useActionState with Reducer)</h2>
      <ActionStateWithReducer />
      <br />
      <br />
      <h2>Работа со списком задач (useOptimistic)</h2>
      <TaskWidgetOptimistic />
    </div>
  );
};
