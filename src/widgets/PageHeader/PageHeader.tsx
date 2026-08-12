import type { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@shared/lib/hooks/useAuth";
import { EAppRoutes } from "@shared/constants/routes";
import styles from "./PageHeader.module.css";

interface IPageHeader {
  title: string;
  rightSlot?: ReactNode;
}

export const PageHeader: FC<IPageHeader> = ({ title, rightSlot }) => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  return (
    <>
      {location.pathname !== EAppRoutes.Main && <Link to={EAppRoutes.Main}>На главную</Link>}
      <header className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.rightSlot}>
          {rightSlot}

          {isAuthenticated && <button onClick={logout}>Выйти</button>}
        </div>
      </header>
    </>
  );
};
