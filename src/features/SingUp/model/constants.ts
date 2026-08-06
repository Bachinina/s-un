import type { TSignUpDefaultValues, TSignUpFieldConfig } from "./types";

export enum ESignUpFormFields {
  Username = "username",
  Email = "email",
  Password = "password",
  ConfirmPassword = "confirmPassword",
  SocialLinks = "socialLinks",
}

export enum ESocialLinkFields {
  Url = "url",
}
export const DEFAULT_SIGN_UP_FORM_VALUES = {
  [ESignUpFormFields.Username]: "",
  [ESignUpFormFields.Email]: "",
  [ESignUpFormFields.Password]: "",
  [ESignUpFormFields.ConfirmPassword]: "",
  [ESignUpFormFields.SocialLinks]: [
    {
      [ESocialLinkFields.Url]: "",
    },
  ],
} satisfies TSignUpDefaultValues;

export const SIGN_UP_FORM_FIELDS_CONFIG = {
  [ESignUpFormFields.Username]: {
    label: "Имя",
    placeholder: "Введите имя",
    errors: {
      required: "Введите имя пользователя",
    },
  },

  [ESignUpFormFields.Email]: {
    label: "Email",
    placeholder: "Введите email",
    errors: {
      required: "Введите email",
      invalid: "Введите корректный email",
    },
  },

  [ESignUpFormFields.Password]: {
    label: "Пароль",
    placeholder: "Введите пароль",
    errors: {
      required: "Введите пароль",
      minLength: "Пароль должен содержать минимум 6 символов",
    },
  },

  [ESignUpFormFields.ConfirmPassword]: {
    label: "Подтвердите пароль",
    placeholder: "Введите пароль повторно",
    errors: {
      required: "Подтвердите пароль",
      notMatch: "Пароли не совпадают",
    },
  },

  [ESignUpFormFields.SocialLinks]: {
    label: "Социальная ссылка",
    placeholder: "https://github.com/username",
    errors: {
      required: "Введите ссылку",
      invalid: "Некорректный URL",
    },
  },
} satisfies Record<ESignUpFormFields, TSignUpFieldConfig>;
