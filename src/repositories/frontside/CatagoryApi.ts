import CatagoryMock from "@mock/frontside/CatagoryMock";
import { CatagoryIndexParameterInterface } from "@models/interfaces/frontside/CatagoryIndexParameterInterface";
import { CatagoryInterface } from "@models/interfaces/frontside/CatagoryInterface";
import { CatagoryListInterface } from "@models/interfaces/frontside/CatagoryListInterface";
import { CatagoryShowParameterInterface } from "@models/interfaces/frontside/CatagoryShowParameterInterface";
import api from "@repositories/ApiClient";

class CatagoryApi {
  private baseUrl = "catagory";

  public index(params: CatagoryIndexParameterInterface): Promise<CatagoryListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return CatagoryMock.index(params, true);
    }
    return api.get(this.baseUrl, params) as Promise<CatagoryListInterface>;
  }

  public show(params: CatagoryShowParameterInterface): Promise<CatagoryInterface | null> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return CatagoryMock.show(params, true);
    }
    const { slug, ...rest } = params;
    return api.get(`${this.baseUrl}/${slug}`, rest) as Promise<CatagoryInterface>;
  }
}

export default new CatagoryApi();
