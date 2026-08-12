import { SignUpForm } from "@features/SingUp";
import { SubscriptionWizard } from "@features/SubscriptionWizard";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";
import { Link } from "react-router";

export const SignUpPage = () => {
  return (
    <div>
      <PageHeader title="Регистрация" rightSlot={<Link to={EAppRoutes.Login}>Войти</Link>} />
      <SignUpForm />
      <hr />
      <SubscriptionWizard />
    </div>
  );
};
