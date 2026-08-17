import { Link } from "react-router";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";
import { useGetUserNameQuery } from "@features/Auth";
import { useAuth } from "@shared/lib/hooks/useAuth";
import { skipToken } from "@reduxjs/toolkit/query";

export const ProfilePage = () => {
  const { token } = useAuth();
  const { data } = useGetUserNameQuery(token ?? skipToken);

  return (
    <div>
      <PageHeader title="Профиль" />
      <p>Ваше имя: {data?.name}</p>
      <ul>
        <li>
          <Link to={EAppRoutes.Tasks}>Список задач</Link>
        </li>
        <li>
          <Link to={EAppRoutes.RefExamples}>Примеры Ref</Link>
        </li>
      </ul>
    </div>
  );
};
