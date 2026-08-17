import { RefExamples } from "@features/RefExamples";
import { EAppRoutes } from "@shared/constants/routes";
import { PageHeader } from "@widgets/PageHeader";
import { Link } from "react-router";

export const RefExamplesPage = () => {
  return (
    <div>
      <PageHeader title="Примеры Ref" rightSlot={<Link to={EAppRoutes.Profile}>Профиль</Link>} />
      <RefExamples />
    </div>
  );
};
