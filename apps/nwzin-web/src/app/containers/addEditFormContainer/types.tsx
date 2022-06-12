import { type } from 'os';
import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';
import { Mode } from './components/formDesigner/types';
import { ColorScale } from './helper';

export interface AddEditFormContainerProps {
  id?: string;
}

export interface FormContainerProps {
  id?: string;
}

export interface DroppedItem {
  id: string;
}

export interface ComponentConfigurations {
  settings: Record<string, any>;
  validations: Record<string, any>;
  dataMapping: Record<string, any>;
}

export interface PageItem {
  id: string; // uniqueId
  parentId: string; // unique Parent Id
  componentType: 'FORM_FIELD' | 'LAYOUT' | 'NON_FORM_FIELD';
  componentId: string; //Generic Component Id
  configurations: ComponentConfigurations;
  childNodes: string[];
}

export interface FormSchema {
  pageItems: Record<'ROOT' | string, PageItem>;
  pageId: string;
  pageName: string;
}

export interface Form {
  pages: FormSchema[];
  isPublished: boolean;
  groups: string[];
  assignedTo: string[];
  isPublic: boolean;
  isAcceptingResponse: boolean;
  lastDateToAccceptResponse?: number;
  startedOn?: number;
}

export interface FormTheme {
  isUpdated: boolean;
  primaryColor: ColorScale;
  backgroundColor: ColorScale;
}

export interface FormState {
  currentForm: Form;
  currentPage: string;
  currentSelectedField?: string;
  currentTheme: FormTheme;
  currentMode: Mode;
  subFieldId: string;
}

export interface GetCurrentFormAPIPayload {
  formId: string;
}

export type CurrentFormState = FormState & APIServiceStatus;

export type CurrentFormSuccessAPISchema = Omit<
  CurrentFormState,
  'serviceStatus' | 'error'
>;

export type CurrentFormAPISchema = APISchema<CurrentFormSuccessAPISchema, null>;
