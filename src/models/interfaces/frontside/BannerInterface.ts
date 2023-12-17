import { BannerTypeEnum } from "@enums/frontside/BannerTypeEnum";
import { ImageInterface } from "@models/interfaces/frontside/ImageInterface";

export interface BannerInterface {
  id: number;
  name: string;
  title: string;
  type: BannerTypeEnum;
  link: string;
  images: ImageInterface[];
}

// Link
// type Advertisement = open new tab to url
// type Story = go to chapter list [story detail] page url = "/manga/<story-slug>"
// type chapter = go to chapter page url = "/manga/<story-slug>/<chapter_id>"

// For type chapter
// name = chapter name
// title = Story name

// For type story
// name = Banner name, default = Story name
// title = Story name
