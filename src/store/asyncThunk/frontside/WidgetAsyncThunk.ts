import { createAsyncThunk } from "@reduxjs/toolkit";

import { WidgetIndexParameterInterface } from "@models/interfaces/frontside/WidgetIndexParameterInterface";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";
import { WidgetShowParameterInterface } from "@models/interfaces/frontside/WidgetShowParameterInterface";
import WidgetApi from "@repositories/frontside/WidgetApi";
import WidgetService from "@services/frontside/WidgetService";
import { RootState } from "@store/Store";

class WidgetAsyncThunk {
  [key: string]: any;

  public index = createAsyncThunk("widgetIndex", async (params: WidgetIndexParameterInterface, _store) => {
    try {
      return await WidgetApi.index(params);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });

  public show = createAsyncThunk("widgetShow", async (params: WidgetShowParameterInterface, store) => {
    try {
      const widgetDetail = await WidgetApi.show(params);
      const widgetSliceState = WidgetService.getStateFromRoot(store.getState() as RootState);
      let widgetList: WidgetListInterface = {
        ...widgetSliceState.widgets!,
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

  public loadWidgetTypeAdvertisement = createAsyncThunk("loadWidgetTypeAdvertisement", async (params: WidgetIndexParameterInterface, store) => {
    try {
      const widgets = await WidgetApi.widgetTypeAdvertisement(params);
      const widgetListState = WidgetService.getStateFromRoot(store.getState() as RootState);
      let widgetList: WidgetListInterface = {
        ...widgetListState.widgets!,
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

export default new WidgetAsyncThunk();
