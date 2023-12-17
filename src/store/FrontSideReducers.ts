import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signFormReducer from "@store/slices/frontside/SignFormSlice";
import widgetListReducer from "@store/slices/frontside/WidgetListSlice";

const persistConfig = {
  key: "frontside",
  storage: storage,
  blacklist: ["signForm", "widgetList"],
};

const frontsideReducer = combineReducers({
  signForm: signFormReducer,
  widgetList: widgetListReducer,
});

const persistedReducer = persistReducer(persistConfig, frontsideReducer);

export type FrontSideRootState = ReturnType<typeof frontsideReducer>;
export default persistedReducer;
