import { createSlice } from "@reduxjs/toolkit";

// Initlize state
const initialState = {
  snackbar: {},
  serviceloading: false,
  bookmarks_st: {},
};

// ====================================================
// ==================|| Slice Chunks || ===============
// ====================================================

const serviceloading_func = (state, actionObj) => {
  state.serviceloading = actionObj.payload;
};

function snackbar_func(state, actionObj) {
  state.snackbar = actionObj.payload;
}

function bookmarks_rdcrfunc(state, { payload }) {
  state.bookmarks_st[payload.id] = payload.status;
}

// =======================================================
// ==================|| Slice Controller || ===============
// ========================================================
export const userSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    serviceloading_slice: serviceloading_func,
    snackbar_slice: snackbar_func,
    mybookmark_slice: bookmarks_rdcrfunc,
  },
});

// Exports
export default userSlice.reducer;

export const { serviceloading_slice, snackbar_slice, mybookmark_slice } =
  userSlice.actions;
