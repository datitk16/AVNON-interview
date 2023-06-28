import { Constants } from "../constants";

export class PaginationRequest {
  pageNumber = 1;
  pageSize = Constants.defaultPageSize;
  fieldSorting?: string;
  isSortingDesc?: boolean;
  keyword?: string;
}
