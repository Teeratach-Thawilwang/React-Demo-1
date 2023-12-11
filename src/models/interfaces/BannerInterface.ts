import { ImageInterface } from "@models/interfaces/ImageInterface";

export interface BannerInterface {
  id: number;
  name: string;
  title: string;
  type: string;
  link: string;
  images: ImageInterface[];
}
