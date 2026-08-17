import type { z } from "zod";
import type { LOG_IN_FORM_SCHEMA } from "./schema";
import type { ELogInFormFields } from "./constants";
import type { TToken } from "@shared/types/common";

export type TLogInDefaultValues = {
  [ELogInFormFields.Email]: string;
  [ELogInFormFields.Password]: string;
};

export type TLogInFormValues = z.infer<typeof LOG_IN_FORM_SCHEMA>;

export type TLogInFieldConfig = {
  label: string;
  placeholder: string;
  errors: {
    required: string;
    invalid?: string;
  };
};

export interface ILogInResponse {
  accessToken: TToken;
}

export interface IUserResponse {
  name: string;
}
