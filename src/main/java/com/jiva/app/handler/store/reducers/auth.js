import { httpConfig } from "service/httpConfig";
import { createSlice } from "@reduxjs/toolkit";

// Initlize state
const initialState = {
  user: {},
};

// ====================================================
// ==================|| Slice Chunks || ===============
// ====================================================

function auth_func(state, actionObj) {
  const { access_token, user = {} } = actionObj.payload;

  try {
    if (access_token) {
      localStorage.setItem("access_token", access_token);
      httpConfig(access_token);
    }

    if (user.id) {
      state.user = user;
      state.isAuthenticate = true;
    }
  } catch (err) {}
}

function logout_func(state, actionObj) {
  localStorage.clear();
}

// =======================================================
// ==================|| Slice Controller || ===============
// ========================================================
export const userSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    auth_slice: auth_func,
    logout_slice: logout_func,
  },
});

// Exports
export default userSlice.reducer;

export const { auth_slice, logout_slice } = userSlice.actions;
