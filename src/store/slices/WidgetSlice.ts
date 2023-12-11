import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { widgetListApi } from "@mock/frontside/Widgets";
import { WidgetListApiInterface } from "@models/interfaces/WidgetListApiInterface";
import { WidgetListApiParameter } from "@models/interfaces/WidgetListApiParameter";

interface WidgetSliceInterface {
  widget: WidgetListApiInterface | null;
  loading: boolean;
  error: string;
}

const initialState: WidgetSliceInterface = {
  widget: null,
  loading: false,
  error: "",
};

const WidgetSlice = createSlice({
  name: "widget",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWidgetListAsync.pending, (state) => {
      state.loading = true;
      state.error = "1";
    });
    builder.addCase(getWidgetListAsync.fulfilled, (state, action) => {
      state.widget = action.payload;
      state.loading = false;
      state.error = "2";
    });
    builder.addCase(getWidgetListAsync.rejected, (state, action) => {
      state.widget = null;
      state.loading = false;
      state.error = action.error.message || "3";
    });
  },
});

export const getWidgetListAsync = createAsyncThunk(
  "getWidgetList",
  async (params: WidgetListApiParameter, _store) => {
    try {
      console.log("Call API");
      const widgetReponse = await widgetListApi({
        shouldSuccess: params.shouldSuccess,
      });

      return widgetReponse;
    } catch (error) {
      throw error;
    }
  },
);

export const {} = WidgetSlice.actions;

export default WidgetSlice.reducer;
