import { global_api } from "./api";
import { mybookmark_slice } from "store/reducers/global";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  httpConfig,
  httpMiddlewareBoundary,
  onHttpSuccess,
} from "./httpConfig";

const GLOBAL_API_PATH_KEY = "globalService";

// Define a service using a base URL and expected endpoints
export const globalService = createApi({
  reducerPath: GLOBAL_API_PATH_KEY,
  baseQuery: httpConfig(),
  endpoints: (builder) => ({
    bookmarkEndpoint: builder.mutation({
      query: (packet) => ({
        url: global_api.BOOKMARK,
        method: "POST",
        body: packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await httpMiddlewareBoundary(dispatch, queryFulfilled, args);
        dispatch(mybookmark_slice(args));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useBookmarkEndpointMutation } = globalService;
