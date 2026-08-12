import type { FC, ReactNode } from "react";
import styles from "./PageHeader.module.css";

interface IPageHeader {
  title: string;
  rightSlot?: ReactNode;
}

export const PageHeader: FC<IPageHeader> = ({ title, rightSlot }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.rightSlot}>{rightSlot}</div>
    </header>
  );
};
