import { createAsyncThunk } from "@reduxjs/toolkit";

import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";
import { StoryShowParameterInterface } from "@models/interfaces/frontside/apiParameter/StoryShowParameterInterface";
import StoryApi from "@repositories/frontside/StoryApi";
import StoryService from "@services/frontside/StoryService";
import { RootState } from "@store/Store";

class StoryAsyncThunk {
  [key: string]: any;

  public show = createAsyncThunk("storyShow", async (params: StoryShowParameterInterface, store) => {
    try {
      const storyDetail = await StoryApi.show(params);
      const sliceState = StoryService.getStateFromRoot(store.getState() as RootState);
      let state: StoryInterface = {
        ...sliceState.story!,
        ...storyDetail,
      };

      return state;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });

  public chapterList = createAsyncThunk("storyChapterList", async (params: StoryShowParameterInterface, store) => {
    try {
      const chapterList = await StoryApi.chapterList(params);
      const sliceState = StoryService.getStateFromRoot(store.getState() as RootState);
      let state: StoryInterface = {
        ...sliceState.story!,
      };
      state.chapters = chapterList;
      return state;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
}

export default new StoryAsyncThunk();
