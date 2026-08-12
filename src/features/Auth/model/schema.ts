import { z } from "zod";

import { ELogInFormFields, LOG_IN_FORM_FIELDS_CONFIG } from "./constants";

const emailErrors = LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Email].errors;
const passwordErrors = LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Password].errors;

export const LOG_IN_FORM_SCHEMA = z.object({
  [ELogInFormFields.Email]: z
    .string()
    .trim()
    .min(1, {
      error: emailErrors.required,
    })
    .pipe(
      z.email({
        error: emailErrors.invalid,
      }),
    ),

  [ELogInFormFields.Password]: z.string().min(1, {
    error: passwordErrors.required,
  }),
});
