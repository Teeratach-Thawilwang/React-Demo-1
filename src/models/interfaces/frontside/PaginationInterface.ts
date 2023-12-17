interface PaginationInterface {
  current: number;
  next: number | null;
  previous: number | null;
  last: number | null;
  total: number | null;
}
