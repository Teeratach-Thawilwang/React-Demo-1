import { WidgetListInterface } from "@models/interfaces/WidgetListInterface";

export interface WidgetListApiInterface {
  current: number;
  next: number | null;
  previous: number | null;
  last: number;
  total: number;
  data: WidgetListInterface[];
}
