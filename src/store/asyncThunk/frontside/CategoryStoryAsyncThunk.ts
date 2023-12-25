import { createAsyncThunk } from "@reduxjs/toolkit";

import { CategoryStoryParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryStoryParameterInterface";
import CategoryApi from "@repositories/frontside/CategoryApi";

class CategoryStoryAsyncThunk {
  [key: string]: any;

  public getStoryByCategorySlug = createAsyncThunk("getStoryByCategorySlug", async (params: CategoryStoryParameterInterface, _store) => {
    try {
      return await CategoryApi.getStoryByCategorySlug(params);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
}

export default new CategoryStoryAsyncThunk();
