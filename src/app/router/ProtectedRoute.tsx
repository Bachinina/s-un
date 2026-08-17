import { EAppRoutes } from "@shared/constants/routes";
import { useAuth } from "@shared/lib/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={EAppRoutes.Login} replace />;
  }

  return <Outlet />;
};
