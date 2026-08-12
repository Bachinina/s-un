import type { TLogInDefaultValues, TLogInFieldConfig } from "./types";

export enum ELogInFormFields {
  Email = "email",
  Password = "password",
}

export const DEFAULT_LOG_IN_FORM_VALUES = {
  [ELogInFormFields.Email]: "",
  [ELogInFormFields.Password]: "",
} satisfies TLogInDefaultValues;

export const LOG_IN_FORM_FIELDS_CONFIG = {
  [ELogInFormFields.Email]: {
    label: "Email",
    placeholder: "Введите email",
    errors: {
      required: "Введите email",
      invalid: "Введите корректный email",
    },
  },

  [ELogInFormFields.Password]: {
    label: "Пароль",
    placeholder: "Введите пароль",
    errors: {
      required: "Введите пароль",
    },
  },
} satisfies Record<ELogInFormFields, TLogInFieldConfig>;
