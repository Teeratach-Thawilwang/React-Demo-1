import { CatagoryListInterface } from "@models/interfaces/frontside/CatagoryListInterface";

export interface CatagorySliceInterface {
  catagories: CatagoryListInterface | null;
  isLoading: boolean;
  error: string;
}
