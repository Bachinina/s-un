import { PageHeader } from "@widgets/PageHeader";
import { ETooltipPosition, Tooltip } from "@shared/ui/Tooltip";
import { ConfirmDialog, useConfirmDialog } from "@shared/ui/ConfirmDialog";
import { useTheme } from "@shared/lib/hooks/useTheme";
import { ETheme } from "@shared/constants/theme";

export const PortalShowcase = () => {
  const { theme, setTheme } = useTheme();
  const { dialogOptions, showConfirmDialog, handleConfirm, handleCancel } = useConfirmDialog();

  const handleDelete = async () => {
    const confirmed = await showConfirmDialog({
      title: "Удалить элемент?",
      description: "Это действие необратимо.",
    });

    if (confirmed) {
      console.log("Удаляем");
    }
  };

  const toggleTheme = () => {
    if (theme === ETheme.Dark) {
      setTheme(ETheme.Light);
    } else {
      setTheme(ETheme.Dark);
    }
  };

  return (
    <div>
      <PageHeader title="Демонстрация работы портала" />
      <br />
      <button type="button" onClick={toggleTheme}>
        Текущая тема: {theme}
      </button>
      <br />
      <br />

      {/* стили для ограничения отображения тултипа – он должен рисовать через портал */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Tooltip text="Подсказка" position={ETooltipPosition.Top}>
          <button>Наведи на меня</button>
        </Tooltip>
      </div>

      <br />
      <br />
      <>
        <button type="button" onClick={handleDelete}>
          Удалить
        </button>

        {dialogOptions && (
          <ConfirmDialog
            title={dialogOptions.title}
            description={dialogOptions.description}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </>
    </div>
  );
};
