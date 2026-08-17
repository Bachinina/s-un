import { AUTH_URL } from "@shared/constants/api";
import { baseApi } from "../../../shared/api/baseApi";
import type { ILogInResponse, IUserResponse, TLogInFormValues } from "../model/types";
import type { TToken } from "@shared/types/common";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logIn: build.mutation<ILogInResponse, TLogInFormValues>({
      query: (body) => ({
        url: `${AUTH_URL}/auth/login`,
        method: "POST",
        body,
      }),
    }),
    getUserName: build.query<IUserResponse, TToken>({
      query: (token) => ({
        url: `${AUTH_URL}/users/me`,
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useLogInMutation, useGetUserNameQuery } = authApi;
