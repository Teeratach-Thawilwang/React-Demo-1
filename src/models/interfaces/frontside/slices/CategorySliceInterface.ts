import { CategoryInterface } from "@models/interfaces/frontside/CategoryInterface";

export interface CategorySliceInterface {
  catagories: CategoryInterface[] | null;
  isLoading: boolean;
  error: string;
}
