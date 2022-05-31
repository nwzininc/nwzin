
import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';
import { Group } from '../groupsContainer/types';

export interface GroupsContainerProps{
    id?: string;
}

export interface GroupState {
   currentGroup?: Group
}

export interface GetCurrentGroupAPIPayload{
    groupId: string;
}
export type CurrentGroupState=  GroupState & APIServiceStatus;

export type CurrentGroupSuccessAPISchema = Omit<CurrentGroupState, "serviceStatus" | "error">;

export type CurrentGroupAPISchema = APISchema<CurrentGroupSuccessAPISchema, null>;
