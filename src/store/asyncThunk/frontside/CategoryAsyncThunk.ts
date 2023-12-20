import { createAsyncThunk } from "@reduxjs/toolkit";

import { CatagoryIndexParameterInterface } from "@models/interfaces/frontside/CatagoryIndexParameterInterface";
import { CatagoryListInterface } from "@models/interfaces/frontside/CatagoryListInterface";
import { CatagoryShowParameterInterface } from "@models/interfaces/frontside/CatagoryShowParameterInterface";
import CatagoryApi from "@repositories/frontside/CatagoryApi";
import CatagoryService from "@services/frontside/CatagoryService";
import { RootState } from "@store/Store";

class CatagoryAsyncThunk {
  [key: string]: any;

  public index = createAsyncThunk("categoryIndex", async (params: CatagoryIndexParameterInterface, _store) => {
    try {
      return await CatagoryApi.index(params);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });

  public show = createAsyncThunk("categoryShow", async (params: CatagoryShowParameterInterface, store) => {
    try {
      const catagoryDetail = await CatagoryApi.show(params);
      const sliceState = CatagoryService.getStateFromRoot(store.getState() as RootState);
      let state: CatagoryListInterface = {
        ...sliceState.catagories!,
      };

      if (state != null && "data" in state && catagoryDetail != null) {
        state.data = state.data.map((catagory) => {
          if (catagory.slug == catagoryDetail.slug) {
            return catagoryDetail;
          }
          return catagory;
        });
      } else if (catagoryDetail == null) {
        state = {
          data: [],
        };
      } else {
        state = {
          data: [catagoryDetail],
        };
      }

      return state;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  });
}

export default new CatagoryAsyncThunk();
