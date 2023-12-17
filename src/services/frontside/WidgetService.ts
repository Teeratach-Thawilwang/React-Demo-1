import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { WidgetDetailApiParameter } from "@models/interfaces/frontside/WidgetDetailApiParameter";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";
import { WidgetListApiParameter } from "@models/interfaces/frontside/WidgetListApiParameter";
import { WidgetListSliceInterface } from "@models/interfaces/frontside/WidgetListSliceInterface";
import WidgetListAsyncThunk from "@store/AsyncThunk/frontside/WidgetListAsyncThunk";
import { FrontSideRootState } from "@store/FrontSideReducers";
import store, { RootState, useAppSelector } from "@store/Store";
import { fill } from "@store/slices/frontside/WidgetListSlice";

export class WidgetService {
  public clearWidgetListState() {
    store.dispatch(fill({ widgetList: null, loading: false, error: "" }));
  }

  public getwidgetListState(): WidgetListSliceInterface {
    return useAppSelector((state) => state.frontside.widgetList);
  }

  public getwidgetListStateFromRoot(rootState: RootState): WidgetListSliceInterface {
    const frontsideState: FrontSideRootState = rootState.frontside;
    return frontsideState.widgetList;
  }

  public getWidgetDetail(widgetSlug: string | undefined): WidgetDetailInterface | undefined {
    const widgetListState = this.getwidgetListState();
    if (widgetListState.widgetList == null) {
      return undefined;
    }
    return widgetListState.widgetList?.data.filter((widget: WidgetDetailInterface) => widget.slug == widgetSlug)[0];
  }

  public getWidgetTypeAdvertisement(
    type: BannerTypeEnum.ADVERTISEMENT_SMALL | BannerTypeEnum.ADVERTISEMENT_MEDIUM | BannerTypeEnum.ADVERTISEMENT_GROUP,
  ): WidgetDetailInterface | undefined {
    const widgetListState = this.getwidgetListState();
    if (widgetListState.widgetList == null) {
      return undefined;
    }
    return widgetListState.widgetList.data?.filter((widget: WidgetDetailInterface) => widget.type == type)[0];
  }

  public loadWidgetList(params: WidgetListApiParameter): void {
    store.dispatch(WidgetListAsyncThunk.loadWidgetListAsync(params));
  }

  public loadWidgetDetail(params: WidgetDetailApiParameter): void {
    store.dispatch(WidgetListAsyncThunk.loadWidgetDetailAsync(params));
  }

  public loadWidgetTypeAdvertisement(params: WidgetListApiParameter): void {
    store.dispatch(WidgetListAsyncThunk.loadWidgetTypeAdvertisementAsync(params));
  }
}

export default new WidgetService();
