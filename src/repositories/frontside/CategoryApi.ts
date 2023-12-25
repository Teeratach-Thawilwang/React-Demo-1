import CategoryMock from "@mock/frontside/CategoryMock";
import { CategoryListInterface } from "@models/interfaces/frontside/CategoryListInterface";
import { CategoryStoryInterface } from "@models/interfaces/frontside/CategoryStoryInterface";
import { CategoryIndexParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryIndexParameterInterface";
import { CategoryStoryParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryStoryParameterInterface";
import api from "@repositories/ApiClient";

class CategoryApi {
  private baseUrl = "category";

  public index(params: CategoryIndexParameterInterface): Promise<CategoryListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return CategoryMock.index(params, true);
    }
    return api.get(this.baseUrl, params) as Promise<CategoryListInterface>;
  }

  public getStoryByCategorySlug(params: CategoryStoryParameterInterface): Promise<CategoryStoryInterface | null> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return CategoryMock.getStoryByCategorySlug(params, true);
    }
    const { slug, ...rest } = params;
    return api.get(`${this.baseUrl}/${slug}`, rest) as Promise<CategoryStoryInterface>;
  }
}

export default new CategoryApi();
