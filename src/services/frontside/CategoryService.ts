import { CategoryInterface } from "@models/interfaces/frontside/CategoryInterface";
import { CategoryIndexParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryIndexParameterInterface";
import { CategoryStoryParameterInterface } from "@models/interfaces/frontside/apiParameter/CategoryStoryParameterInterface";
import { CategorySliceInterface } from "@models/interfaces/frontside/slices/CategorySliceInterface";
import { CategoryStorySliceInterface } from "@models/interfaces/frontside/slices/CategoryStorySliceInterface";
import store, { RootState, useAppSelector } from "@store/Store";
import CategoryAsyncThunk from "@store/asyncThunk/frontside/CategoryAsyncThunk";
import CategoryStoryAsyncThunk from "@store/asyncThunk/frontside/CategoryStoryAsyncThunk";
import { update } from "@store/slices/frontside/CategorySlice";

export class CategoryService {
  public clearCategoryState() {
    store.dispatch(update({ category: null, isLoading: false, error: "" }));
  }

  public getCategoryState(): CategorySliceInterface {
    return useAppSelector((state) => state.frontside.catagories);
  }

  public getCategoryStoryState(): CategoryStorySliceInterface {
    return useAppSelector((state) => state.frontside.categoryStories);
  }

  public getCategoryStateFromRoot(rootState: RootState): CategorySliceInterface {
    return rootState.frontside.catagories;
  }

  public getStoryStateFromRoot(rootState: RootState): CategoryStorySliceInterface {
    return rootState.frontside.categoryStories;
  }

  public getCategoryBySlug(CategorySlug: string | undefined): CategoryInterface | undefined {
    const state = this.getCategoryState();
    if (state.catagories == null) {
      return undefined;
    }
    return state.catagories?.filter((Category: CategoryInterface) => Category.slug == CategorySlug)[0];
  }

  public getStories(): CategoryInterface[] | undefined {
    const state = this.getCategoryStoryState();
    if (state.stories == null) {
      return undefined;
    }
    return state.stories?.data;
  }

  public loadIndex(params: CategoryIndexParameterInterface): void {
    store.dispatch(CategoryAsyncThunk.index(params));
  }

  public loadStoryByCategorySlug(params: CategoryStoryParameterInterface): void {
    store.dispatch(CategoryStoryAsyncThunk.getStoryByCategorySlug(params));
  }
}

export default new CategoryService();
