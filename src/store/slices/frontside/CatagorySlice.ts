import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { CatagorySliceInterface } from "@models/interfaces/frontside/CatagorySliceInterface";
import CatagoryAsyncThunk from "@store/asyncThunk/frontside/CategoryAsyncThunk";

const initialState: CatagorySliceInterface = {
  catagories: null,
  isLoading: false,
  error: "",
};

const catagorySlice = createSlice({
  name: "catagory",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<CatagorySliceInterface>) => {
    Object.getOwnPropertyNames(CatagoryAsyncThunk).forEach((method) => {
      builder.addCase(CatagoryAsyncThunk[method].pending, (state, _action) => {
        state.isLoading = true;
        state.error = "";
      });

      builder.addCase(CatagoryAsyncThunk[method].fulfilled, (state, action) => {
        state.catagories = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(CatagoryAsyncThunk[method].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { update } = catagorySlice.actions;

export default catagorySlice.reducer;
