import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";

export interface WidgetListSliceInterface {
  widgetList: WidgetListInterface | null;
  loading: boolean;
  error: string;
}
