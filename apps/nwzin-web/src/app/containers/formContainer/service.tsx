import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { FormAPISchema } from "./types";
import { getFormSuccessMock } from './_mock';


export const getFormsService = createAsyncThunk<FormAPISchema, undefined>('forms/getForms', async (payload,{ rejectWithValue }) => {
  return getFormSuccessMock();
  try{
    const response = await axios.get('/users');
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});
