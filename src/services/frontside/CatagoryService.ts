import { CatagoryIndexParameterInterface } from "@models/interfaces/frontside/CatagoryIndexParameterInterface";
import { CatagoryInterface } from "@models/interfaces/frontside/CatagoryInterface";
import { CatagoryShowParameterInterface } from "@models/interfaces/frontside/CatagoryShowParameterInterface";
import { CatagorySliceInterface } from "@models/interfaces/frontside/CatagorySliceInterface";
import store, { RootState, useAppSelector } from "@store/Store";
import CatagoryAsyncThunk from "@store/asyncThunk/frontside/CategoryAsyncThunk";
import { update } from "@store/slices/frontside/CatagorySlice";

export class CatagoryService {
  public clearCatagoryState() {
    store.dispatch(update({ category: null, isLoading: false, error: "" }));
  }

  public getState(): CatagorySliceInterface {
    return useAppSelector((state) => state.frontside.catagories);
  }

  public getStateFromRoot(rootState: RootState): CatagorySliceInterface {
    return rootState.frontside.catagories;
  }

  public getBySlug(CatagorySlug: string | undefined): CatagoryInterface | undefined {
    const state = this.getState();
    if (state.catagories == null) {
      return undefined;
    }
    return state.catagories?.data.filter((Catagory: CatagoryInterface) => Catagory.slug == CatagorySlug)[0];
  }

  public loadIndex(params: CatagoryIndexParameterInterface): void {
    store.dispatch(CatagoryAsyncThunk.index(params));
  }

  public loadBySlug(params: CatagoryShowParameterInterface): void {
    store.dispatch(CatagoryAsyncThunk.show(params));
  }
}

export default new CatagoryService();
