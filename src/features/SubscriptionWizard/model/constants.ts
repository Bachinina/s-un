import type { TSubscriptionWizardState } from "./types";

export const INITIAL_SUBSCRIPTION_WIZARD_STATE: TSubscriptionWizardState = {
  step: 1,
  email: "",
  status: "idle",
  message: null,
};

export const SUBSCRIPTION_EMAIL_FIELD = "email";
export const SUBSCRIPTION_INTENT_FIELD = "intent";

export enum ESubscriptionIntent {
  SubmitEmail = "submit-email",
  Confirm = "confirm",
  Back = "back",
  Reset = "reset",
}
