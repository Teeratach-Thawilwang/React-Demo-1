import { StoryInterface } from "@models/interfaces/frontside/StoryInterface";

export interface StorySliceInterface {
  story: StoryInterface | null;
  isLoading: boolean;
  error: string;
}
