import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import {
  DEFAULT_SIGN_UP_FORM_VALUES,
  ESignUpFormFields,
  ESocialLinkFields,
  SIGN_UP_FORM_FIELDS_CONFIG,
} from "../model/constants";
import styles from "./SignUpForm.module.css";
import type { TSignUpFormValues } from "../model/types";
import { SIGN_UP_FORM_SCHEMA } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSignUpFormValues>({
    defaultValues: DEFAULT_SIGN_UP_FORM_VALUES,
    resolver: zodResolver(SIGN_UP_FORM_SCHEMA),
  });

  const {
    fields: socialLinkFields,
    append: appendSocialLink,
    remove: removeSocialLink,
  } = useFieldArray({
    control,
    name: ESignUpFormFields.SocialLinks,
  });

  const onSubmit: SubmitHandler<TSignUpFormValues> = (formValues) => {
    console.log("Данные формы: ", formValues);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        {" "}
        {SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Username].label}
        <input
          type="text"
          placeholder={SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Username].placeholder}
          {...register(ESignUpFormFields.Username)}
        />
        <p className={styles.error}>{errors[ESignUpFormFields.Username]?.message}</p>
      </label>
      <label>
        {" "}
        {SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Email].label}
        <input
          type="email"
          placeholder={SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Email].placeholder}
          {...register(ESignUpFormFields.Email)}
        />
        <p className={styles.error}>{errors[ESignUpFormFields.Email]?.message}</p>
      </label>
      <label>
        {" "}
        {SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Password].label}
        <input
          type="password"
          placeholder={SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.Password].placeholder}
          {...register(ESignUpFormFields.Password)}
        />
        <p className={styles.error}>{errors[ESignUpFormFields.Password]?.message}</p>
      </label>
      <label>
        {" "}
        {SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.ConfirmPassword].label}
        <input
          type="password"
          placeholder={SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.ConfirmPassword].placeholder}
          {...register(ESignUpFormFields.ConfirmPassword)}
        />
        <p className={styles.error}>{errors[ESignUpFormFields.ConfirmPassword]?.message}</p>
      </label>

      <fieldset className={styles.socialLinks}>
        <legend>Социальные ссылки</legend>

        {socialLinkFields.map((socialLinkField, index) => (
          <div className={styles.socialLink} key={socialLinkField.id}>
            <label>
              {SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.SocialLinks].label}

              <input
                type="url"
                placeholder={SIGN_UP_FORM_FIELDS_CONFIG[ESignUpFormFields.SocialLinks].placeholder}
                {...register(
                  `${ESignUpFormFields.SocialLinks}.${index}.${ESocialLinkFields.Url}` as const,
                )}
              />

              <p className={styles.error}>
                {errors[ESignUpFormFields.SocialLinks]?.[index]?.[ESocialLinkFields.Url]?.message}
              </p>
            </label>

            <button type="button" onClick={() => removeSocialLink(index)}>
              Удалить
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            appendSocialLink({
              [ESocialLinkFields.Url]: "",
            })
          }
        >
          Добавить ссылку
        </button>
      </fieldset>

      <button type="submit">Отправить</button>
    </form>
  );
};
