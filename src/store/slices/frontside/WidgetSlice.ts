import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { WidgetSliceInterface } from "@models/interfaces/frontside/slices/WidgetSliceInterface";
import WidgetAsyncThunk from "@store/asyncThunk/frontside/WidgetAsyncThunk";

const initialState: WidgetSliceInterface = {
  widgets: null,
  isLoading: false,
  error: "",
};

const WidgetSlice = createSlice({
  name: "widget",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<WidgetSliceInterface>) => {
    Object.getOwnPropertyNames(WidgetAsyncThunk).forEach((method) => {
      builder.addCase(WidgetAsyncThunk[method].pending, (state, _action) => {
        state.isLoading = true;
        state.error = "";
      });

      builder.addCase(WidgetAsyncThunk[method].fulfilled, (state, action) => {
        state.widgets = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(WidgetAsyncThunk[method].rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { update } = WidgetSlice.actions;

export default WidgetSlice.reducer;
