import { CategoryStoryInterface } from "@models/interfaces/frontside/CategoryStoryInterface";

export interface CategoryStorySliceInterface {
  stories: CategoryStoryInterface | null;
  isLoading: boolean;
  error: string;
}
