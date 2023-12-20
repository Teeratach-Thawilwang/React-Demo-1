import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { WidgetIndexParameterInterface } from "@models/interfaces/frontside/WidgetIndexParameterInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { WidgetShowParameterInterface } from "@models/interfaces/frontside/WidgetShowParameterInterface";
import { WidgetSliceInterface } from "@models/interfaces/frontside/WidgetSliceInterface";
import WidgetAsyncThunk from "@store/AsyncThunk/frontside/WidgetAsyncThunk";
import store, { RootState, useAppSelector } from "@store/Store";
import { update } from "@store/slices/frontside/WidgetSlice";

export class WidgetService {
  public clearwidgetsState() {
    store.dispatch(update({ widgets: null, isLoading: false, error: "" }));
  }

  public getState(): WidgetSliceInterface {
    return useAppSelector((state) => state.frontside.widgets);
  }

  public getStateFromRoot(rootState: RootState): WidgetSliceInterface {
    return rootState.frontside.widgets;
  }

  public getBySlug(widgetSlug: string | undefined): WidgetInterface | undefined {
    const state = this.getState();
    if (state.widgets == null) {
      return undefined;
    }
    return state.widgets?.data.filter((widget: WidgetInterface) => widget.slug == widgetSlug)[0];
  }

  public getWidgetTypeAdvertisement(
    type: BannerTypeEnum.ADVERTISEMENT_SMALL | BannerTypeEnum.ADVERTISEMENT_MEDIUM | BannerTypeEnum.ADVERTISEMENT_GROUP,
  ): WidgetInterface | undefined {
    const state = this.getState();
    if (state.widgets == null) {
      return undefined;
    }
    return state.widgets.data?.filter((widget: WidgetInterface) => widget.type == type)[0];
  }

  public loadIndex(params: WidgetIndexParameterInterface): void {
    store.dispatch(WidgetAsyncThunk.index(params));
  }

  public loadBySlug(params: WidgetShowParameterInterface): void {
    store.dispatch(WidgetAsyncThunk.show(params));
  }

  public loadWidgetTypeAdvertisement(params: WidgetIndexParameterInterface): void {
    store.dispatch(WidgetAsyncThunk.loadWidgetTypeAdvertisement(params));
  }
}

export default new WidgetService();
