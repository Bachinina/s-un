import { Link } from "react-router";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";
import { useAuth } from "@shared/lib/hooks/useAuth";

export const PublicPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <PageHeader title="Добро пожаловать" />
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to={EAppRoutes.Login}>Войти</Link>
            </li>
            <li>
              <Link to={EAppRoutes.SignUp}>Зарегистрироваться</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={EAppRoutes.Profile}>Профиль</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
