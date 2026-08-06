import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@shared/constants/api";
import { ERtkTags } from "@shared/constants/rtkTags";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  tagTypes: [ERtkTags.Tasks],

  endpoints: () => ({}),
});
