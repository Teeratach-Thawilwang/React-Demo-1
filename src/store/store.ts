import { configureStore } from "@reduxjs/toolkit";
import { Persistor, persistStore } from "redux-persist";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import backofficeReducer from "@store/BackofficeReducers";
import frontsideReducer from "@store/FrontSideReducers";

const store = configureStore({
  reducer: {
    frontside: frontsideReducer,
    backoffice: backofficeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();
export const persistor: Persistor = persistStore(store);

export default store;
