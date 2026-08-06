import { TaskWidget } from "@widgets/TaskWidget";
import { Link } from "react-router";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";

export const TaskPage = () => {
  return (
    <div>
      <PageHeader title="Мои задачи" rightSlot={<Link to={EAppRoutes.SignUp}>Регистрация</Link>} />
      <TaskWidget />
    </div>
  );
};
