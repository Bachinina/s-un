import type { ITask } from "../model/types";
import { ERtkTags } from "@shared/constants/rtkTags";
import { baseApi } from "@shared/api";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<ITask[], void>({
      query: () => "/todos",
      providesTags: [ERtkTags.Tasks],
      transformErrorResponse: (response) => response,
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
