import { BannerInterface } from "@models/interfaces/frontside/BannerInterface";

export interface WidgetDetailInterface {
  id: number;
  sequence: number;
  slug: string;
  title: string;
  type: string;
  item?: BannerInterface[];
  paginate?: PaginationInterface;
}
