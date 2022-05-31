import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosErrorHandler } from "../../utilities/apiService/apiService";
import { APIError } from "../../utilities/apiService/types";
import { CurrentFormAPISchema, GetCurrentFormAPIPayload } from "./types";
import { getCurrentFormSuccessMock } from './_mock';


export const getCurrentFormService = createAsyncThunk<CurrentFormAPISchema, GetCurrentFormAPIPayload>('forms/getCurrentForm', async (payload,{ rejectWithValue }) => {
  return getCurrentFormSuccessMock({ formId: payload.formId});
  try{
    const response = await axios.get('/users');
    return response.data;
  }
  catch(error ){
    const err = error as APIError<any>
    return axiosErrorHandler(err, rejectWithValue);
  }
});
