import { startTransition, useActionState, useEffect } from "react";
import { EFormStatuses, INITIAL_FORM_STATE } from "./model/constants";
import { saveFormAction } from "./lib/saveFormAction";

export const FormWithAsyncSave = () => {
  const [state, formAction, isPending] = useActionState(saveFormAction, INITIAL_FORM_STATE);

  // очищение состояния для корректного текста на кнопке
  useEffect(() => {
    if (state.status !== EFormStatuses.Success) {
      return;
    }

    const timeoutId = setTimeout(() => {
      startTransition(() => {
        formAction(null);
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state.status, formAction]);

  return (
    <form action={formAction}>
      <input type="text" name="value" placeholder="Введите значение" />

      <button disabled={isPending}>
        {isPending
          ? "Сохраняем..."
          : state.status === EFormStatuses.Success
            ? "Сохранено!"
            : "Сохранить"}
      </button>
    </form>
  );
};
