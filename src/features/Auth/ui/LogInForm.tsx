import { useForm, type SubmitHandler } from "react-hook-form";
import {
  DEFAULT_LOG_IN_FORM_VALUES,
  ELogInFormFields,
  LOG_IN_FORM_FIELDS_CONFIG,
} from "../model/constants";
import styles from "./LogInForm.module.css";
import type { TLogInFormValues } from "../model/types";
import { LOG_IN_FORM_SCHEMA } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@shared/lib/hooks/useAuth";
import { useLogInMutation } from "../api/authApi";
import { useNavigate } from "react-router";
import { EAppRoutes } from "@shared/constants/routes";

export const LogInForm = () => {
  const [logIn, { isLoading }] = useLogInMutation();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInFormValues>({
    defaultValues: DEFAULT_LOG_IN_FORM_VALUES,
    resolver: zodResolver(LOG_IN_FORM_SCHEMA),
  });

  const onSubmit: SubmitHandler<TLogInFormValues> = async (formValues) => {
    try {
      const data = await logIn(formValues).unwrap();
      setToken(data.accessToken);
      navigate(EAppRoutes.Profile, { replace: true });
    } catch (error) {
      console.error("Ошибка логина:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        {" "}
        {LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Email].label}
        <input
          type="email"
          placeholder={LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Email].placeholder}
          {...register(ELogInFormFields.Email)}
        />
        <p className={styles.error}>{errors[ELogInFormFields.Email]?.message}</p>
      </label>
      <label>
        {" "}
        {LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Password].label}
        <input
          type="password"
          placeholder={LOG_IN_FORM_FIELDS_CONFIG[ELogInFormFields.Password].placeholder}
          {...register(ELogInFormFields.Password)}
        />
        <p className={styles.error}>{errors[ELogInFormFields.Password]?.message}</p>
      </label>

      <button type="submit" disabled={isLoading}>
        Войти
      </button>
    </form>
  );
};
