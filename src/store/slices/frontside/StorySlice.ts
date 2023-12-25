import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { StorySliceInterface } from "@models/interfaces/frontside/slices/StorySliceInterface";
import StoryAsyncThunk from "@store/asyncThunk/frontside/StoryAsyncThunk";

const initialState: StorySliceInterface = {
  story: null,
  isLoading: false,
  error: "",
};

const storySlice = createSlice({
  name: "story",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<StorySliceInterface>) => {
    Object.getOwnPropertyNames(StoryAsyncThunk).forEach((method) => {
      builder.addCase(StoryAsyncThunk[method].pending, (state, _action) => {
        state.isLoading = true;
        state.error = "";
      });

      builder.addCase(StoryAsyncThunk[method].fulfilled, (state, action) => {
        state.story = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(StoryAsyncThunk[method].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { update } = storySlice.actions;

export default storySlice.reducer;
