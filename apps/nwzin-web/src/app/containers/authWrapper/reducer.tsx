import { createSlice } from '@reduxjs/toolkit';
import { loginService, authCheckService } from './service';
import { AuthState, LoginAPISchema } from './types';

export const initialState: AuthState = {
  isLoggedIn: false,
  serviceStatus: "pristine"
}

export const authSlice = createSlice({
    name: 'authState',
    initialState: initialState,
    reducers:{},
    extraReducers: {
      [loginService.pending as unknown as string]: state => {
        state.serviceStatus = 'pending';
      },
      [loginService.fulfilled as unknown as string]: (state, action) => {
        if(action.payload?.status){
          state.isLoggedIn = action.payload;
        }
        state.error = action.payload.error;

        state.serviceStatus = 'fulfilled';
      },
      [loginService.rejected as unknown as string]: state => {
       state.serviceStatus = 'rejected';
      },
      [authCheckService.pending as unknown as string]: state => {
        state.authAPIstatus = 'pending';
      },
      [authCheckService.fulfilled as unknown as string]: (state, action) => {
        state.isLoggedIn = action.payload?.status;
        state.currentUser = action.payload?.status ? action.payload?.data?.currentUser : undefined;
        state.appMeta = action.payload?.status ? action.payload?.data?.appMeta : undefined;
        state.authAPIstatus ='fulfilled'
      },
      [authCheckService.rejected as unknown as string]: state => {
       state.authAPIstatus = undefined;
      },
    },
});
