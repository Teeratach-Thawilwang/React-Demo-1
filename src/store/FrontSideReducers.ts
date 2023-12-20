import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import catagoryReducer from "@store/slices/frontside/CatagorySlice";
import signFormReducer from "@store/slices/frontside/SignFormSlice";
import widgetReducer from "@store/slices/frontside/WidgetSlice";

const persistConfig = {
  key: "frontside",
  storage: storage,
  blacklist: ["signForm", "widgets", "catagories"],
};

const frontsideReducer = combineReducers({
  signForm: signFormReducer,
  widgets: widgetReducer,
  catagories: catagoryReducer,
});

const persistedReducer = persistReducer(persistConfig, frontsideReducer);

export type FrontSideRootState = ReturnType<typeof frontsideReducer>;
export default persistedReducer;
