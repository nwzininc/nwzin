import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';
import { Roles } from '../authWrapper/types';

export interface UserContainerProps {}

export interface User {
  id: string;
  name: string;
  email: string;
  profileUrl: string;
  isAdmin: boolean;
  groupIds: string[];
  role: Roles;
}

export interface UserState extends APIServiceStatus {
  users: User[];
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  status: 'fulfilled' | 'pending';
}

export type UserSuccessAPISchema = Omit<UserState, 'status' | 'serviceStatus'>;

export type UserAPISchema = APISchema<UserSuccessAPISchema, null>;
