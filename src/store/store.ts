import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import signFormReducer from "@store/slices/SignFormSlice";
import widgetReducer from "@store/slices/WidgetSlice";

const store = configureStore({
  reducer: {
    signForm: signFormReducer,
    widget: widgetReducer,
  },
  devTools: true,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;
