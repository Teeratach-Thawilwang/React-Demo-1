import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { CategoryStorySliceInterface } from "@models/interfaces/frontside/slices/CategoryStorySliceInterface";
import CategoryStoryAsyncThunk from "@store/asyncThunk/frontside/CategoryStoryAsyncThunk";

const initialState: CategoryStorySliceInterface = {
  stories: null,
  isLoading: false,
  error: "",
};

const categoryStorySlice = createSlice({
  name: "categoryStory",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<CategoryStorySliceInterface>) => {
    Object.getOwnPropertyNames(CategoryStoryAsyncThunk).forEach((method) => {
      builder.addCase(CategoryStoryAsyncThunk[method].pending, (state, _action) => {
        state.isLoading = true;
        state.error = "";
      });

      builder.addCase(CategoryStoryAsyncThunk[method].fulfilled, (state, action) => {
        state.stories = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(CategoryStoryAsyncThunk[method].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { update } = categoryStorySlice.actions;

export default categoryStorySlice.reducer;
