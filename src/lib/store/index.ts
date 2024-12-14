import { configureStore } from "@reduxjs/toolkit";

import { checkoutApi, moviesApi } from "@/lib/services";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      [checkoutApi.reducerPath]: checkoutApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(moviesApi.middleware)
        .concat(checkoutApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
