import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';

export interface DataStoreContainerProps {}

export interface DataStore {
  id: string;
  name: string;
  isView: boolean;
}

export interface DataStoreState extends APIServiceStatus {
  dataStore: DataStore[];
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  status: 'fulfilled' | 'pending';
}

export type DataStoreSuccessAPISchema = Omit<DataStoreState, 'status' | 'serviceStatus'>;

export type DataStoreAPISchema = APISchema<DataStoreSuccessAPISchema, null>;
