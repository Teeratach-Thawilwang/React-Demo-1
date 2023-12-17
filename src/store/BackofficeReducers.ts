import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import SignFormReducer from "@store/slices/backoffice/SignFormSlice";

const persistConfig = {
  key: "backoffice",
  storage,
};

const backofficeReducer = combineReducers({
  signForm: SignFormReducer,
});

const persistedReducer = persistReducer(persistConfig, backofficeReducer);

export type BackofficeRootState = ReturnType<typeof backofficeReducer>;
export default persistedReducer;
