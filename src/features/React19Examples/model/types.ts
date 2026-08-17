import { EFormStatuses, EReducerFormStatuses } from "./constants";

export interface IFormState {
  status: EFormStatuses;
}

export interface IReducerFormState {
  status: EReducerFormStatuses;
}

export type TReducerFormAction =
  | FormData
  | {
      type: "dirty";
    }
  | {
      type: "reset";
    };
