import { WidgetDetailInterface } from "@models/interfaces/frontside/WidgetDetailInterface";

export interface WidgetListInterface extends PaginationInterface {
  data: WidgetDetailInterface[];
}
