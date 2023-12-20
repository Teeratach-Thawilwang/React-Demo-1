import { WidgetInterface } from "@models/interfaces/frontside/WidgetInterface";

export interface WidgetListInterface extends PaginationInterface {
  data: WidgetInterface[];
}
