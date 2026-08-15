import type { IFormState, IReducerFormState } from "./types";

export enum EFormStatuses {
  Idle = "idle",
  Success = "success",
}

export enum EReducerFormStatuses {
  Idle = "idle",
  Dirty = "dirty",
  Success = "success",
}

export const INITIAL_FORM_STATE: IFormState = {
  status: EFormStatuses.Idle,
};

export const INITIAL_REDUCER_FORM_STATE: IReducerFormState = {
  status: EReducerFormStatuses.Idle,
};
