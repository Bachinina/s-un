import type { z } from "zod";
import type { SIGN_UP_FORM_SCHEMA } from "./schema";
import type { ESignUpFormFields, ESocialLinkFields } from "./constants";

export type TSignUpDefaultValues = {
  [ESignUpFormFields.Username]: string;
  [ESignUpFormFields.Email]: string;
  [ESignUpFormFields.Password]: string;
  [ESignUpFormFields.ConfirmPassword]: string;
  [ESignUpFormFields.SocialLinks]: Array<{
    [ESocialLinkFields.Url]: string;
  }>;
};

export type TSignUpFormValues = z.infer<typeof SIGN_UP_FORM_SCHEMA>;

export type TSignUpFieldConfig = {
  label: string;
  placeholder: string;
  errors: {
    required: string;
    invalid?: string;
    minLength?: string;
    notMatch?: string;
  };
};
