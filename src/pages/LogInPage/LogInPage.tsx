import { LogInForm } from "@features/Auth";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";
import { Link } from "react-router";

export const LogInPage = () => {
  return (
    <div>
      <PageHeader title="Войти" rightSlot={<Link to={EAppRoutes.SignUp}>Регистрация</Link>} />
      <LogInForm />
    </div>
  );
};
