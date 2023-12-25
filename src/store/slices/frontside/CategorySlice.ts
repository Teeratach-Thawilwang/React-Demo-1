import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { CategorySliceInterface } from "@models/interfaces/frontside/slices/CategorySliceInterface";
import CategoryAsyncThunk from "@store/asyncThunk/frontside/CategoryAsyncThunk";

const initialState: CategorySliceInterface = {
  catagories: null,
  isLoading: false,
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<CategorySliceInterface>) => {
    Object.getOwnPropertyNames(CategoryAsyncThunk).forEach((method) => {
      builder.addCase(CategoryAsyncThunk[method].pending, (state, _action) => {
        state.isLoading = true;
        state.error = "";
      });

      builder.addCase(CategoryAsyncThunk[method].fulfilled, (state, action) => {
        state.catagories = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(CategoryAsyncThunk[method].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { update } = categorySlice.actions;

export default categorySlice.reducer;
