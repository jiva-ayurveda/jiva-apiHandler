import { error_msg } from "config/messages";
import { serviceloading_slice, snackbar_slice } from "store/reducers/global";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "store";

export const httpConfig = (token) => {
  return fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const access_token = token ? token : localStorage.getItem("access_token");

      if (access_token) {
        headers.set("authorization", `Bearer ${access_token}`);
      }
      headers.set("Accept", "application/json");
      return headers;
    },
  });
};

export const httpMiddlewareBoundary = async (
  dispatch,
  queryFulfilled,
  args
) => {
  const { progress = true } = args;

  if (progress) {
    dispatch(serviceloading_slice(true));
  }
  try {
    const { data } = await queryFulfilled;

    if (progress) {
      dispatch(serviceloading_slice(false));
    }

    return data?.payload;
  } catch (errObj) {
    if (progress) {
      dispatch(serviceloading_slice(false));
    }

    if (errObj.error.data) {
      const status = errObj.error.status;
      let message = errObj.error.data.msg;

      if (status == 422) return null;

      if (status == 401) {
        message = message || error_msg.UNAUTHORIZED;
      } else if (!message) {
        message = error_msg.SERVER_ERROR;
      }

      dispatch(
        snackbar_slice({
          severity: "error",
          msg: message,
        })
      );
    }
    return null;
  }
};

export const onHttpSuccess = (responseObj) => {
  if (responseObj.msg) {
    store.dispatch(
      snackbar_slice({
        severity: "success",
        msg: responseObj.msg,
      })
    );
  }

  return { status: responseObj.status, payload: responseObj.payload };
};
