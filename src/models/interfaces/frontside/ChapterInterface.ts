import { ImageInterface } from "./ImageInterface";

export interface ChapterInterface {
  id: number;
  chapter_number: string;
  name: string;
  score: number;
  view_count: number;
  images: ImageInterface[];
}
