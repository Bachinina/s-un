import { EReducerFormStatuses, INITIAL_REDUCER_FORM_STATE } from "../model/constants";
import type { IReducerFormState, TReducerFormAction } from "../model/types";

export const formReducerAction = async (
  previousState: IReducerFormState,
  action: TReducerFormAction,
): Promise<IReducerFormState> => {
  if (action instanceof FormData) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    console.log("Данные формы:", {
      name: action.get("name"),
      email: action.get("email"),
      message: action.get("message"),
    });

    return {
      status: EReducerFormStatuses.Success,
    };
  }

  switch (action.type) {
    case "dirty":
      return {
        ...previousState,
        status: EReducerFormStatuses.Dirty,
      };

    case "reset":
      return INITIAL_REDUCER_FORM_STATE;

    default:
      return previousState;
  }
};
