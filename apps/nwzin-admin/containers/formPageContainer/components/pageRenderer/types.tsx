import { Dispatch, SetStateAction } from 'react';
import { FormSchema, FormState } from '../../types';

export interface PageProps {
  id?: string;
  formState: FormState;
  height: string;
  width: string;
  isCurrentPage: boolean;
  setPageIndex: Dispatch<SetStateAction<number>>;
  page: FormSchema;
}
export interface PageRendererProps {
  id?: string;
  formState: FormState;
  height: string;
  width: string;
  currentPageIndex: string;
  setPageIndex: Dispatch<SetStateAction<number>>;
  pageIdMap: Record<number, FormSchema>;
  setPageIdMap: Dispatch<SetStateAction<Record<number, FormSchema>>>;
}
