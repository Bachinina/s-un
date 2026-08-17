import type { FC } from "react";
import styles from "./ConfirmDialog.module.css";
import { createPortal } from "react-dom";
import { useTheme } from "@shared/lib/hooks/useTheme";

const dialogRoot = document.getElementById("dialog-root");

interface IConfirmDialogProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}
export const ConfirmDialog: FC<IConfirmDialogProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  const { theme } = useTheme();

  if (!dialogRoot) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={`${styles.dialog} ${styles[theme]}`}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.actions}>
          <button type="button" onClick={onConfirm}>
            Подтвердить
          </button>

          <button type="button" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>,
    dialogRoot,
  );
};
