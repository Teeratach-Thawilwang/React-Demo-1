import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { WidgetListSliceInterface } from "@models/interfaces/frontside/WidgetListSliceInterface";
import WidgetListAsyncThunk from "@store/AsyncThunk/frontside/WidgetListAsyncThunk";

const initialState: WidgetListSliceInterface = {
  widgetList: null,
  loading: false,
  error: "",
};

const WidgetListSlice = createSlice({
  name: "widgetList",
  initialState: initialState,
  reducers: {
    fill: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<WidgetListSliceInterface>) => {
    Object.getOwnPropertyNames(WidgetListAsyncThunk).forEach((method) => {
      builder.addCase(WidgetListAsyncThunk[method].pending, (state, _action) => {
        state.loading = true;
        state.error = "";
      });

      builder.addCase(WidgetListAsyncThunk[method].fulfilled, (state, action) => {
        state.widgetList = action.payload;
        state.loading = false;
        state.error = "";
      });
      builder.addCase(WidgetListAsyncThunk[method].rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";

        // dispatch toast state
      });
    });
  },
});

export const { fill } = WidgetListSlice.actions;

export default WidgetListSlice.reducer;
