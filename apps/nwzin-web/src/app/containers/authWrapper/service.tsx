import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { LoginAPIPayload, LoginAPISchema, MetaAPISchema } from "./types";
import { loginFailureMock, loginSuccessMock, metaFailureMock, metaSuccessMock} from './_mock';


export const loginService = createAsyncThunk<LoginAPISchema,LoginAPIPayload>('auth/login', async (userDetails,{ rejectWithValue }) => {
  return loginSuccessMock();
  try{
    const response = await axios.post('/login', userDetails);
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});

export const authCheckService = createAsyncThunk<MetaAPISchema>('auth/meta', async (payload,{ rejectWithValue }) => {
    return metaSuccessMock();
    try{
      const response = await axios.get('/meta');
      return response.data;
    }
    catch(error ){
      const err = error as APIError<any>
      return axiosErrorHandler(err, rejectWithValue);
    }
  });