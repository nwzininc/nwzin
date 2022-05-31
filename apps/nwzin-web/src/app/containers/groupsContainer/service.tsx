import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { GroupAPISchema } from "./types";
import { getGroupSuccessMock, PagePayload } from './_mock';


export const getGroupsService = createAsyncThunk<GroupAPISchema, PagePayload>('groups/getgroups', async (payload,{ rejectWithValue }) => {
  return getGroupSuccessMock({ pageIndex: payload.pageIndex, pageSize: payload.pageSize});
  try{
    const response = await axios.get('/users');
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});
