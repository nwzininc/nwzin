import { createSlice } from '@reduxjs/toolkit';
import { getUsersService } from './service';
import { UserState } from './types';

export const initialState: UserState = {
   users: [],
   count: 0,
   pageIndex: 0,
   pageSize: 10,
   pageCount: 1,
   status: "pending",
   serviceStatus: "pristine",
}

export const usersSlice = createSlice({
    name: 'authState',
    initialState: initialState,
    reducers:{},
    extraReducers: {
      [getUsersService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [getUsersService.fulfilled as unknown as string]: (state, action) => {
        state.status = "fulfilled";
        state.serviceStatus = 'fulfilled';
        state.users = action.payload?.data?.users || [];
        state.count = action.payload?.data?.count || 0;
        state.pageCount = action.payload?.data?.pageCount || 1;
        state.pageIndex = action.payload?.data?.pageIndex || 0;
        state.pageSize = action.payload?.data?.pageSize || 10;
      },
      [getUsersService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
    },
});
