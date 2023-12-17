import WidgetApi from "@api/frontside/WidgetApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { WidgetDetailApiParameter } from "@models/interfaces/frontside/WidgetDetailApiParameter";
import { WidgetListApiParameter } from "@models/interfaces/frontside/WidgetListApiParameter";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";
import WidgetService from "@services/frontside/WidgetService";
import { RootState } from "@store/Store";

class WidgetListAsyncThunk {
  [key: string]: any;

  public loadWidgetListAsync = createAsyncThunk("loadWidgetListAsync", async (params: WidgetListApiParameter, _store) => {
    try {
      return await WidgetApi.widgetList(params);
    } catch (error) {
      console.log("error", error);
      // return null;
      throw error;
    }
  });

  public loadWidgetDetailAsync = createAsyncThunk("loadWidgetDetailAsync", async (params: WidgetDetailApiParameter, store) => {
    try {
      const widgetDetail = await WidgetApi.widgetDetail(params);
      const widgetSliceState = WidgetService.getwidgetListStateFromRoot(store.getState() as RootState);
      let widgetList: WidgetListInterface = {
        ...widgetSliceState.widgetList!,
      };

      if (widgetList != null && "data" in widgetList) {
        widgetList.data = widgetList.data.map((widget) => {
          if (widget.slug == widgetDetail.slug) {
            return widgetDetail;
          }
          return widget;
        });
      } else {
        widgetList = {
          data: [widgetDetail],
          current: 1,
          next: null,
          previous: null,
          last: 1,
          total: 1,
        };
      }

      return widgetList;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });

  public loadWidgetTypeAdvertisementAsync = createAsyncThunk("loadWidgetTypeAdvertisementAsync", async (params: WidgetListApiParameter, store) => {
    try {
      const widgets = await WidgetApi.widgetTypeAdvertisement(params);
      const widgetListState = WidgetService.getwidgetListStateFromRoot(store.getState() as RootState);
      let widgetList: WidgetListInterface = {
        ...widgetListState.widgetList!,
      };

      if (widgetList != null && "data" in widgetList) {
        let widgetListSlug = new Map(widgetList.data.map((widget) => [widget.slug, widget]));
        widgets.data.forEach((widget) => {
          if (widgetListSlug.has(widget.slug)) {
            widgetListSlug.set(widget.slug, { ...widgetListSlug.get(widget.slug), ...widget });
          } else {
            widgetListSlug.set(widget.slug, widget);
          }
        });
        widgetList.data = Array.from(widgetListSlug.values());
      } else {
        widgetList = widgets;
      }

      return widgetList;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
}

export default new WidgetListAsyncThunk();
