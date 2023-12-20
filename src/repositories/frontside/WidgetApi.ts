import WidgetMock from "@mock/frontside/WidgetMock";
import { WidgetIndexParameterInterface } from "@models/interfaces/frontside/WidgetIndexParameterInterface";
import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";
import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";
import { WidgetShowParameterInterface } from "@models/interfaces/frontside/WidgetShowParameterInterface";
import Api from "@repositories/ApiClient";

class WidgetApi {
  private baseUrl = "widgets";

  public index(params: WidgetIndexParameterInterface): Promise<WidgetListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.index(params, true);
    }
    return Api.get(this.baseUrl, params) as Promise<WidgetListInterface>;
  }

  public show(params: WidgetShowParameterInterface): Promise<WidgetInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.show(params.slug, params.page, true);
    }
    const { slug, ...rest } = params;
    return Api.get(`${this.baseUrl}/${slug}`, rest) as Promise<WidgetInterface>;
  }

  public widgetTypeAdvertisement(params: any): Promise<WidgetListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return WidgetMock.getAdvertisement(true);
    }
    return Api.get(this.baseUrl, params) as Promise<WidgetListInterface>;
  }
}

export default new WidgetApi();
