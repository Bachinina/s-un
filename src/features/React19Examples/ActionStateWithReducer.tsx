import { startTransition, useActionState, useEffect } from "react";

import { EReducerFormStatuses, INITIAL_REDUCER_FORM_STATE } from "./model/constants";

import { formReducerAction } from "./lib/formReducerAction";

export const ActionStateWithReducer = () => {
  const [state, dispatchAction, isPending] = useActionState(
    formReducerAction,
    INITIAL_REDUCER_FORM_STATE,
  );

  const handleDirty = () => {
    if (state.status === EReducerFormStatuses.Dirty || isPending) {
      return;
    }

    startTransition(() => {
      dispatchAction({
        type: "dirty",
      });
    });
  };

  useEffect(() => {
    if (state.status !== EReducerFormStatuses.Success) {
      return;
    }

    const timeoutId = setTimeout(() => {
      startTransition(() => {
        dispatchAction({
          type: "reset",
        });
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state.status, dispatchAction]);

  return (
    <form action={dispatchAction} onChange={handleDirty}>
      <div>
        <input type="text" name="name" placeholder="Имя" required />
      </div>

      <div>
        <input type="email" name="email" placeholder="Email" required />
      </div>

      <textarea name="message" placeholder="Сообщение" required />

      <p>
        {isPending
          ? "Отправляем..."
          : state.status === EReducerFormStatuses.Dirty
            ? "Есть несохранённые изменения"
            : state.status === EReducerFormStatuses.Success
              ? "Сохранено!"
              : "Заполните форму"}
      </p>

      <button type="submit" disabled={isPending}>
        {isPending ? "Сохраняем..." : "Сохранить"}
      </button>
    </form>
  );
};
