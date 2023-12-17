import api from "@api/ApiClient";

import WidgetMock from "@mock/frontside/WidgetMock";
import { WidgetDetailApiParameter } from "@models/interfaces/frontside/WidgetDetailApiParameter";
import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";
import { WidgetListApiParameter } from "@models/interfaces/frontside/WidgetListApiParameter";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";

class WidgetApi {
  private baseUrl = "widgets";

  public widgetList(params: WidgetListApiParameter): Promise<WidgetListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.index(params, true);
    }
    return api.get(this.baseUrl, params) as Promise<WidgetListInterface>;
  }

  public widgetDetail(params: WidgetDetailApiParameter): Promise<WidgetDetailInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.show(params.slug, params.page, true);
    }
    const { slug, ...rest } = params;
    return api.get(`${this.baseUrl}/${slug}`, rest) as Promise<WidgetDetailInterface>;
  }

  public widgetTypeAdvertisement(params: any): Promise<WidgetListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.getAdvertisement(true);
    }
    return api.get(this.baseUrl, params) as Promise<WidgetListInterface>;
  }
}

export default new WidgetApi();
