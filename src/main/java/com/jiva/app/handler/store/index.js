import { authService } from "service/authService";
import { globalService } from "service/globalService";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import rootReducer from "./reducers";

export const store = configureStore({
  reducer: {
    ...rootReducer,
    [authService.reducerPath]: authService.reducer,

    [globalService.reducerPath]: globalService.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authService.middleware, globalService.middleware]),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
