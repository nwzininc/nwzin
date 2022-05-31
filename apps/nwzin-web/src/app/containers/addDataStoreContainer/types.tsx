import { APISchema, APIServiceStatus } from '../../utilities/apiService/types';

export interface AddDataStoreContainerProps {
  id?: string;
}

export interface DataSchema {
  type:
    | 'Text'
    | 'TextArea'
    | 'CheckBox'
    | 'RadioGroup'
    | 'Toggle'
    | 'Number'
    | 'Currency'
    | 'Date'
    | 'DateTime'
    | 'Dropdown'
    | 'MultiSelect'
    | 'Email'
    | 'Phone'
    | 'GeoLocation'
    | 'PersonSign'
    | 'FingerPrint'
    | 'Image'
    | 'File'
    | 'Video'
    | 'User'
    | 'Group'
    | 'DataStore';
  label: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
}
export type DataStoreSchema = Record<string, DataSchema>;
export interface DataStore {
  id: string;
  name: string;
  isLookup?: boolean;
  isView?: boolean;
  dataStoreschema?: DataStoreSchema;
}
export interface DataStoreState {
  currentDataStore?: DataStore;
}

export interface GetCurrentDataStoreAPIPayload {
  dataStoreId: string;
}
export type CurrentDataStoreState = DataStoreState & APIServiceStatus;

export type CurrentDataStoreSuccessAPISchema = Omit<
  CurrentDataStoreState,
  'serviceStatus' | 'error'
>;

export type CurrentDataStoreAPISchema = APISchema<
  CurrentDataStoreSuccessAPISchema,
  null
>;
