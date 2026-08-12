import { Route, Routes } from "react-router";

import { TaskPage } from "@pages/TaskPage";
import { EAppRoutes } from "@shared/constants/routes";
import { SignUpPage } from "@pages/SignUpPage";
import { RefExamplesPage } from "@pages/RefExamplesPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={EAppRoutes.Main} element={<TaskPage />} />
      <Route path={EAppRoutes.SignUp} element={<SignUpPage />} />
      <Route path={EAppRoutes.RefExamples} element={<RefExamplesPage />} />
    </Routes>
  );
};
