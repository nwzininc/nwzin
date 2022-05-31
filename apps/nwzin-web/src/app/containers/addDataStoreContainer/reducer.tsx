import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDataStoreService } from './service';
import { CurrentDataStoreState } from './types';

export const initialState: CurrentDataStoreState = {
  currentDataStore: undefined,
  serviceStatus: "pristine",
}

export const currentDataStoreSlice = createSlice({
    name: 'currentGroupState',
    initialState: initialState,
    reducers:{
      clearCurrentGroupState: state => {
        state.currentDataStore = undefined;
        state.serviceStatus = "pristine";
        state.error = undefined;
      },
    },
    extraReducers: {
      [getCurrentDataStoreService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [getCurrentDataStoreService.fulfilled as unknown as string]: (state, action) => {
        state.currentDataStore = action.payload.data;
        state.serviceStatus = 'fulfilled';
      },
      [getCurrentDataStoreService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
    },
});


export const { clearCurrentGroupState } = currentDataStoreSlice.actions;