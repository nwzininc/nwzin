import { Column, TableInstance, UsePaginationInstanceProps, UsePaginationState } from "react-table";

export interface PagePayload {
    pageIndex: number;
    pageSize: number;
}
export interface DatagridProps<D extends object>{
    data: D[];
    columns: ReadonlyArray<Column<D>>;
    height: number;
    pageSize: number;
    pageIndex: number;
    pageCount: number;
    dataService: (payload: PagePayload) => void;
    addRowButtonLabel: string;
    handleAddRow: () => void;
}

export type PaginationTableInstance<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> & {
    state: UsePaginationState<T>,
  };