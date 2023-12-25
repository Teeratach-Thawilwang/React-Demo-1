import { createAsyncThunk } from "@reduxjs/toolkit";

import { CategoryIndexParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryIndexParameterInterface";
import CategoryApi from "@repositories/frontside/CategoryApi";

class CategoryAsyncThunk {
  [key: string]: any;

  public index = createAsyncThunk("categoryIndex", async (params: CategoryIndexParameterInterface, _store) => {
    try {
      const response = await CategoryApi.index(params);
      return response.data;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
}

export default new CategoryAsyncThunk();
