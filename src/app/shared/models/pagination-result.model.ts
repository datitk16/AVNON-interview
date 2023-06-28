
export class PaginationResult<T>{
  dataList: Array<T>;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
  totalItems: number;
}
