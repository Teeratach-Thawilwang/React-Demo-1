import { BannerInterface } from "@models/interfaces/BannerInterface";

export interface WidgetListInterface {
  id: number;
  sequence: number;
  name: string;
  title: string;
  type: string;
  item?: BannerInterface[];
}
