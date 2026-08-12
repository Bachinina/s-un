export type TSubscriptionWizardStep = 1 | 2;

export type TSubscriptionWizardStatus = "idle" | "error" | "success";

export type TSubscriptionWizardState = {
  step: TSubscriptionWizardStep;
  email: string;
  status: TSubscriptionWizardStatus;
  message: string | null;
};
