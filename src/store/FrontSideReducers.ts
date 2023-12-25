import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "@store/slices/frontside/CategorySlice";
import categoryStoryReducer from "@store/slices/frontside/CategoryStorySlice";
import signFormReducer from "@store/slices/frontside/SignFormSlice";
import StoryReducer from "@store/slices/frontside/StorySlice";
import widgetReducer from "@store/slices/frontside/WidgetSlice";

const persistConfig = {
  key: "frontside",
  storage: storage,
  blacklist: ["signForm", "widgets", "catagories", "categoryStories", "story"],
};

const frontsideReducer = combineReducers({
  signForm: signFormReducer,
  widgets: widgetReducer,
  catagories: categoryReducer,
  categoryStories: categoryStoryReducer,
  story: StoryReducer,
});

const persistedReducer = persistReducer(persistConfig, frontsideReducer);

export type FrontSideRootState = ReturnType<typeof frontsideReducer>;
export default persistedReducer;
