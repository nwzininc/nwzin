import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { CurrentDataStoreAPISchema, GetCurrentDataStoreAPIPayload } from "./types";
import { getCurrentGroupSuccessMock } from './_mock';


export const getCurrentDataStoreService = createAsyncThunk<CurrentDataStoreAPISchema, GetCurrentDataStoreAPIPayload>('groups/getCurrentGroup', async (payload,{ rejectWithValue }) => {
  return getCurrentGroupSuccessMock({ dataStoreId: payload.dataStoreId});
  try{
    const response = await axios.get('/users');
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});
