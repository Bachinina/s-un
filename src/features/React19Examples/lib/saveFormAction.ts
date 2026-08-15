import { EFormStatuses, INITIAL_FORM_STATE } from "../model/constants";
import type { IFormState } from "../model/types";

export const saveFormAction = async (
  _previousState: IFormState,
  formData: FormData | null,
): Promise<IFormState> => {
  if (formData === null) {
    return INITIAL_FORM_STATE;
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  console.log("Данные формы:", formData.get("value"));

  return {
    status: EFormStatuses.Success,
  };
};
