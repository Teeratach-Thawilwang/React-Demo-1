import { ChapterListItemInterface } from "@models/interfaces/frontside/ChapterListItemInterface";

export interface ChapterListInterface extends PaginationInterface {
  data: ChapterListItemInterface[];
}
