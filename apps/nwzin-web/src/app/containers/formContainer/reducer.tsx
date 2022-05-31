import { createSlice } from '@reduxjs/toolkit';
import { getFormsService } from './service';
import { FormState } from './types';

export const initialState: FormState = {
   forms: [],
   count: 0,
   status: "pending",
   serviceStatus: "pristine",
}

export const formsSlice = createSlice({
    name: 'formState',
    initialState: initialState,
    reducers:{},
    extraReducers: {
      [getFormsService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [getFormsService.fulfilled as unknown as string]: (state, action) => {
        state.status = "fulfilled";
        state.serviceStatus = 'fulfilled';
        state.forms = action.payload?.data?.forms || [];
        state.count = action.payload?.data?.count || 0;
      },
      [getFormsService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
    },
});
