import  { AxiosError } from 'axios';

export type  ErrorTypes = 'axios-error' | 'stock-error';

export interface ErrorBase<T> {
   error: Error | AxiosError<T>;
   type:  ErrorTypes;
}

export interface BaseAxiosError<T> extends ErrorBase<T> {
   error: AxiosError<T>;
   type: 'axios-error';
}
export interface StockError<T> extends ErrorBase<T> {
   error: AxiosError<T>;
   type: 'stock-error';
}

export type APIError<T> = BaseAxiosError<T> | StockError<T>;

export interface FormError {
    name: string;
    message: string
}
export interface APIServiceStatus {
  serviceStatus: "pending" | "fulfilled" | "rejected" | "pristine";
  error?: FormError[];
}

export interface APISchema<D, E>{
    status: boolean,
    data: D | null,
    error: E | null
} 