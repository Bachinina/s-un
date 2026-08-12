import { Navigate, Route, Routes } from "react-router";

import { TaskPage } from "@pages/TaskPage";
import { EAppRoutes } from "@shared/constants/routes";
import { SignUpPage } from "@pages/SignUpPage";
import { RefExamplesPage } from "@pages/RefExamplesPage";
import { LogInPage } from "@pages/LogInPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProfilePage } from "@pages/ProfilePage";
import { PublicPage } from "@pages/PublicPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={EAppRoutes.Main} element={<PublicPage />} />
      <Route path={EAppRoutes.Login} element={<LogInPage />} />
      <Route path={EAppRoutes.SignUp} element={<SignUpPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={EAppRoutes.Profile} element={<ProfilePage />} />
        <Route path={EAppRoutes.Tasks} element={<TaskPage />} />
        <Route path={EAppRoutes.RefExamples} element={<RefExamplesPage />} />
      </Route>

      <Route path="*" element={<Navigate to={EAppRoutes.Main} replace />} />
    </Routes>
  );
};
