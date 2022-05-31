import { createSlice } from '@reduxjs/toolkit';
import { getCurrentGroupService } from './service';
import { CurrentGroupState } from './types';

export const initialState: CurrentGroupState = {
   currentGroup: undefined,
   serviceStatus: "pristine",
}

export const currentGroupSlice = createSlice({
    name: 'currentGroupState',
    initialState: initialState,
    reducers:{
      clearCurrentGroupState: state => {
        state.currentGroup = undefined;
        state.serviceStatus = "pristine";
        state.error = undefined;
      },
    },
    extraReducers: {
      [getCurrentGroupService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [getCurrentGroupService.fulfilled as unknown as string]: (state, action) => {
        state.currentGroup = action.payload.data;
        state.serviceStatus = 'fulfilled';
      },
      [getCurrentGroupService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
    },
});


export const { clearCurrentGroupState } = currentGroupSlice.actions;