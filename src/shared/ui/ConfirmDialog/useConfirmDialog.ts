import { useState } from "react";

interface IConfirmDialogOptions {
  title: string;
  description: string;
}

interface IDialogState extends IConfirmDialogOptions {
  resolve: (value: boolean) => void;
}

export const useConfirmDialog = () => {
  const [dialogOptions, setDialogOptions] = useState<IDialogState | null>(null);

  const showConfirmDialog = (options: IConfirmDialogOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setDialogOptions({
        ...options,
        resolve,
      });
    });
  };

  const handleConfirm = () => {
    dialogOptions?.resolve(true);
    setDialogOptions(null);
  };

  const handleCancel = () => {
    dialogOptions?.resolve(false);
    setDialogOptions(null);
  };

  return {
    dialogOptions,
    showConfirmDialog,
    handleConfirm,
    handleCancel,
  };
};
