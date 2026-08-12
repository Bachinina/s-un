import { z } from "zod";

import {
  ESubscriptionIntent,
  INITIAL_SUBSCRIPTION_WIZARD_STATE,
  SUBSCRIPTION_EMAIL_FIELD,
  SUBSCRIPTION_INTENT_FIELD,
} from "./constants";
import type { TSubscriptionWizardState } from "./types";

const SUBSCRIPTION_EMAIL_SCHEMA = z
  .string()
  .trim()
  .min(1, {
    error: "Введите email",
  })
  .pipe(
    z.email({
      error: "Введите корректный email",
    }),
  );

const delay = (milliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });

export const subscriptionWizardAction = async (
  previousState: TSubscriptionWizardState,
  formData: FormData,
): Promise<TSubscriptionWizardState> => {
  const intent = formData.get(SUBSCRIPTION_INTENT_FIELD);

  if (intent === ESubscriptionIntent.Reset) {
    return INITIAL_SUBSCRIPTION_WIZARD_STATE;
  }

  if (intent === ESubscriptionIntent.Back) {
    return {
      ...previousState,
      step: 1,
      status: "idle",
      message: null,
    };
  }

  // искусственная задержка, чтобы показать pending
  await delay(800);

  if (intent === ESubscriptionIntent.SubmitEmail) {
    const emailValue = formData.get(SUBSCRIPTION_EMAIL_FIELD);

    const email = typeof emailValue === "string" ? emailValue : "";

    const validationResult = SUBSCRIPTION_EMAIL_SCHEMA.safeParse(email);

    if (!validationResult.success) {
      return {
        step: 1,
        email,
        status: "error",
        message: validationResult.error.issues[0]?.message ?? "Некорректный email",
      };
    }

    return {
      step: 2,
      email: validationResult.data,
      status: "idle",
      message: null,
    };
  }

  if (intent === ESubscriptionIntent.Confirm) {
    if (!previousState.email) {
      return {
        step: 1,
        email: "",
        status: "error",
        message: "Сначала укажите email",
      };
    }

    return {
      step: 2,
      email: previousState.email,
      status: "success",
      message: `Подписка для ${previousState.email} успешно подтверждена`,
    };
  }

  return previousState;
};
