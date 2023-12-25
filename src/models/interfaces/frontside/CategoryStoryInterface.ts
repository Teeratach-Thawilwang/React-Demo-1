import { CategoryInterface } from "@models/interfaces/frontside/CategoryInterface";

export interface CategoryStoryInterface extends PaginationInterface {
  data: CategoryInterface[];
}
