import StoryMock from "@mock/frontside/StoryMock";
import { ChapterListInterface } from "@models/interfaces/frontside/ChapterListInterface";
import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";
import { StoryShowParameterInterface } from "@models/interfaces/frontside/apiParameter/StoryShowParameterInterface";
import api from "@repositories/ApiClient";

class StoryApi {
  private baseUrl = "story";

  public show(params: StoryShowParameterInterface): Promise<StoryInterface | null> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return StoryMock.show(params, true);
    }
    const { slug, ...rest } = params;
    return api.get(`${this.baseUrl}/${slug}`, rest) as Promise<StoryInterface>;
  }

  public chapterList(params: StoryShowParameterInterface): Promise<ChapterListInterface> {
    if (import.meta.env.VITE_IS_MOCK_DATA) {
      return StoryMock.chapterList(params, true);
    }
    const { slug, ...rest } = params;
    return api.get(`${this.baseUrl}/${slug}/chapter_list`, rest) as Promise<ChapterListInterface>;
  }
}

export default new StoryApi();
