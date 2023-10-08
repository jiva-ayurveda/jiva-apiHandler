import { auth_slice } from "store/reducers/auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  httpConfig,
  httpMiddlewareBoundary,
  onHttpSuccess,
} from "./httpConfig";
import { auth_api } from "./api";

const AUTH_API_PATH_KEY = "authApi";

// Define a service using a base URL and expected endpoints
export const authService = createApi({
  reducerPath: AUTH_API_PATH_KEY,
  baseQuery: httpConfig(),
  endpoints: (builder) => ({
    authCheck: builder.query({
      query: (packet) => {
        return {
          url: auth_api.AUTH_CHECK,
          method: "GET",
        };
      },
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        let response = await httpMiddlewareBoundary(
          dispatch,
          queryFulfilled,
          {}
        );
        if (response) {
          dispatch(auth_slice(response));
        }
      },
    }),
    signIn: builder.mutation({
      query: (packet) => ({
        url: auth_api.SIGNIN,
        method: "POST",
        body: packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const response = await httpMiddlewareBoundary(
          dispatch,
          queryFulfilled,
          args
        );

        if (response) {
          dispatch(auth_slice(response));
        }
      },
    }),
    signUp: builder.mutation({
      query: (packet) => ({
        url: auth_api.SIGNUP,
        method: "POST",
        body: packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        httpMiddlewareBoundary(dispatch, queryFulfilled, args);
      },
    }),
    forgotPassword: builder.mutation({
      query: (packet) => ({
        url: auth_api.FORGOT_PASSWORD,
        method: "POST",
        body: packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        httpMiddlewareBoundary(dispatch, queryFulfilled, args);
      },
    }),
    changePasswod: builder.mutation({
      query: (packet) => ({
        url: auth_api.CHANGE_PASSWORD,
        method: "POST",
        body: packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await httpMiddlewareBoundary(dispatch, queryFulfilled, args);
      },
    }),
    deleteAccount: builder.mutation({
      query: (request) => ({
        url: auth_api.ACCOUNT_DELETE,
        method: "POST",
        body: request.packet,
      }),
      transformResponse: (result, { dispatch }) =>
        onHttpSuccess(result, dispatch),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await httpMiddlewareBoundary(dispatch, queryFulfilled, args);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSignInMutation,
  useSignUpMutation,
  useAuthCheckQuery,
  useChangePasswodMutation,
  useForgotPasswordMutation,
  useDeleteAccountMutation,
} = authService;
