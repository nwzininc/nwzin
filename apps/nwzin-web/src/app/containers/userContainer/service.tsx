import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { UserAPISchema } from "./types";
import { getUserSuccessMock, PagePayload } from './_mock';


export const getUsersService = createAsyncThunk<UserAPISchema, PagePayload>('users/getusers', async (payload,{ rejectWithValue }) => {
  return getUserSuccessMock({ pageIndex: payload.pageIndex, pageSize: payload.pageSize});
  try{
    const response = await axios.get('/users');
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});
