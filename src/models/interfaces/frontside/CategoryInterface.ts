import { CategoryTypeEnum } from "@enums/frontside/CategoryTypeEnum";
import { ImageInterface } from "@models/interfaces/frontside/ImageInterface";

export interface CategoryInterface {
  id: number;
  name: string;
  slug: string;
  type: CategoryTypeEnum;
  images?: ImageInterface[];
}
