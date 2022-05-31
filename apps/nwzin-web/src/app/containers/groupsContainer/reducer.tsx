import { createSlice } from '@reduxjs/toolkit';
import { getGroupsService } from './service';
import { GroupState } from './types';

export const initialState: GroupState = {
   groups: [],
   count: 0,
   pageIndex: 0,
   pageSize: 10,
   pageCount: 1,
   status: "pending",
   serviceStatus: "pristine",
}

export const groupsSlice = createSlice({
    name: 'groupState',
    initialState: initialState,
    reducers:{},
    extraReducers: {
      [getGroupsService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [getGroupsService.fulfilled as unknown as string]: (state, action) => {
        state.status = "fulfilled";
        state.serviceStatus = 'fulfilled';
        state.groups = action.payload?.data?.groups || [];
        state.count = action.payload?.data?.count || 0;
        state.pageCount = action.payload?.data?.pageCount || 1;
        state.pageIndex = action.payload?.data?.pageIndex || 0;
        state.pageSize = action.payload?.data?.pageSize || 10;
      },
      [getGroupsService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
    },
});
