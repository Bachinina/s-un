import { useActionState } from "react";

import {
  ESubscriptionIntent,
  INITIAL_SUBSCRIPTION_WIZARD_STATE,
  SUBSCRIPTION_EMAIL_FIELD,
  SUBSCRIPTION_INTENT_FIELD,
} from "../model/constants";
import { subscriptionWizardAction } from "../model/action";
import styles from "./SubscriptionWizard.module.css";

export const SubscriptionWizard = () => {
  const [state, formAction, isPending] = useActionState(
    subscriptionWizardAction,
    INITIAL_SUBSCRIPTION_WIZARD_STATE,
  );

  if (state.status === "success") {
    return (
      <section className={styles.wizard}>
        <h2>Подписка оформлена</h2>

        <p className={styles.success} role="status">
          {state.message}
        </p>

        <form action={formAction}>
          <button
            type="submit"
            name={SUBSCRIPTION_INTENT_FIELD}
            value={ESubscriptionIntent.Reset}
            disabled={isPending}
          >
            Подписаться другим email
          </button>
        </form>
      </section>
    );
  }

  if (state.step === 1) {
    return (
      <section className={styles.wizard}>
        <h2>Подписка на обновления</h2>
        <p>Шаг 1 из 2</p>

        <form className={styles.form} action={formAction} noValidate>
          <label>
            Email
            <input
              key={state.email}
              type="email"
              name={SUBSCRIPTION_EMAIL_FIELD}
              defaultValue={state.email}
              placeholder="example@mail.com"
              disabled={isPending}
            />
          </label>

          {state.status === "error" && (
            <p className={styles.error} role="alert">
              {state.message}
            </p>
          )}

          {isPending && (
            <p className={styles.pending} aria-live="polite">
              Проверяем email...
            </p>
          )}

          <button
            type="submit"
            name={SUBSCRIPTION_INTENT_FIELD}
            value={ESubscriptionIntent.SubmitEmail}
            disabled={isPending}
          >
            {isPending ? "Отправка..." : "Продолжить"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className={styles.wizard}>
      <h2>Подтверждение подписки</h2>
      <p>Шаг 2 из 2</p>

      <p>
        Подтвердите подписку для: <strong>{state.email}</strong>
      </p>

      <form className={styles.actions} action={formAction}>
        {isPending && (
          <p className={styles.pending} aria-live="polite">
            Подтверждаем подписку...
          </p>
        )}

        <button
          type="submit"
          name={SUBSCRIPTION_INTENT_FIELD}
          value={ESubscriptionIntent.Back}
          disabled={isPending}
        >
          Назад
        </button>

        <button
          type="submit"
          name={SUBSCRIPTION_INTENT_FIELD}
          value={ESubscriptionIntent.Confirm}
          disabled={isPending}
        >
          {isPending ? "Отправка..." : "Подтвердить"}
        </button>
      </form>
    </section>
  );
};
