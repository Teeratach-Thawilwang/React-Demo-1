import { WidgetListInterface } from "@models/interfaces/frontside/WidgetListInterface";

export interface WidgetSliceInterface {
  widgets: WidgetListInterface | null;
  isLoading: boolean;
  error: string;
}
