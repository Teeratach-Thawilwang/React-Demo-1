import { StoryShowParameterInterface } from "@models/interfaces/frontside/apiParameter/StoryShowParameterInterface";
import { StorySliceInterface } from "@models/interfaces/frontside/slices/StorySliceInterface";
import store, { RootState, useAppSelector } from "@store/Store";
import StoryAsyncThunk from "@store/asyncThunk/frontside/StoryAsyncThunk";
import { update } from "@store/slices/frontside/StorySlice";

export class StoryService {
  public clearStoryState() {
    store.dispatch(update({ category: null, isLoading: false, error: "" }));
  }

  public getState(): StorySliceInterface {
    return useAppSelector((state) => state.frontside.story);
  }

  public getStateFromRoot(rootState: RootState): StorySliceInterface {
    return rootState.frontside.story;
  }

  public loadBySlug(params: StoryShowParameterInterface): void {
    store.dispatch(StoryAsyncThunk.show(params));
  }

  public loadChapterList(params: StoryShowParameterInterface): void {
    store.dispatch(StoryAsyncThunk.chapterList(params));
  }
}

export default new StoryService();
