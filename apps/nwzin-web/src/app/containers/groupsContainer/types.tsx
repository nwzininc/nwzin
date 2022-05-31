
import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';

export interface GroupsContainerProps{
    id?: string;
}

export interface Group {
  id: string;
  name: string;
  usersCount: number;
}

export interface GroupState extends APIServiceStatus {
  groups: Group[];
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  status: 'fulfilled' | 'pending';
}

export type GroupSuccessAPISchema = Omit<GroupState, 'status' | 'serviceStatus'>;

export type GroupAPISchema = APISchema<GroupSuccessAPISchema, null>;
