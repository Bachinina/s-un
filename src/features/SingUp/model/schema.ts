import { z } from "zod";

import { ESignUpFormFields, ESocialLinkFields, SIGN_UP_FORM_FIELDS_CONFIG } from "./constants";

const usernameErrors = SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Username].errors;
const emailErrors = SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Email].errors;
const passwordErrors = SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Password].errors;
const confirmPasswordErrors = SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.ConfirmPassword].errors;
const socialLinksErrors = SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.SocialLinks].errors;

export const SIGN_UP_FORM_SCHEMA = z
  .object({
    [ESignUpFormFields.Username]: z.string().trim().min(1, {
      error: usernameErrors.required,
    }),

    [ESignUpFormFields.Email]: z
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

    [ESignUpFormFields.Password]: z
      .string()
      .min(1, {
        error: passwordErrors.required,
      })
      .min(6, {
        error: passwordErrors.minLength,
      }),

    [ESignUpFormFields.ConfirmPassword]: z.string().min(1, {
      error: confirmPasswordErrors.required,
    }),
    [ESignUpFormFields.SocialLinks]: z.array(
      z.object({
        [ESocialLinkFields.Url]: z
          .string()
          .trim()
          .min(1, {
            error: socialLinksErrors.required,
          })
          .pipe(
            z.url({
              protocol: /^https?$/,
              hostname: z.regexes.domain,
              error: socialLinksErrors.invalid,
            }),
          ),
      }),
    ),
  })
  .refine(
    (formValues) =>
      formValues[ESignUpFormFields.Password] === formValues[ESignUpFormFields.ConfirmPassword],
    {
      error: confirmPasswordErrors.notMatch,
      path: [ESignUpFormFields.ConfirmPassword],
    },
  );
