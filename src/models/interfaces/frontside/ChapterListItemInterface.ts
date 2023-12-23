import { ImageInterface } from "@models/interfaces/frontside/ImageInterface";

export interface ChapterListItemInterface {
  id: number;
  chapter_number: number;
  name: string;
  score: number;
  view_count: number;
  release_date: string;
  cover_image: ImageInterface;
}
