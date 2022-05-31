import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { APIError } from './types';

const toast = createStandaloneToast();

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export function axiosErrorHandler<T>(
  error: APIError<T>,
  rejectWithValue: (error: APIError<T>) => void
) {
  if (axios.isAxiosError(error)) {
    setTimeout(()=>{
      toast({
      title: 'Error',
      description: "Error While updating",
      status: 'error',
      duration: 1000,
      isClosable: true,
    })}, 100)
    return rejectWithValue({
      error: error,
      type: 'axios-error',
    });
  }
  toast({
    title: 'Error',
    description: error.error.message,
    status: 'error',
    duration: 1000,
    isClosable: true,
  })
  return rejectWithValue({
    error: error as unknown as any,
    type: 'stock-error',
  });
}

export default instance;
