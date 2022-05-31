import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';

export interface FormContainerProps {}

export interface FormSchema {
  schema?: string[];
}

export interface Form {
  id: string;
  name: string;
  formSchema: FormSchema;
  description: string;
}

export interface FormState extends APIServiceStatus {
  forms: Form[];
  count: number;
  status: 'fulfilled' | 'pending';
}

export type FormSuccessAPISchema = Omit<FormState, 'status' | 'serviceStatus'>;

export type FormAPISchema = APISchema<FormSuccessAPISchema, null>;
