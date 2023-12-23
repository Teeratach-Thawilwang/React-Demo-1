import { CatagoryTypeEnum } from "@enums/frontside/CatagoryTypeEnum";
import { ChapterListInterface } from "@models/interfaces/frontside/ChapterListInterface";
import { ImageInterface } from "@models/interfaces/frontside/ImageInterface";

export interface StoryInterface {
  id: number;
  slug: string;
  name: string;
  description: string;
  author: {
    customer_id: number;
    customer_name: string;
  };
  score: number;
  view_count: number;
  type: CatagoryTypeEnum;
  cover_image: ImageInterface;
  chapters: ChapterListInterface | null;
}
