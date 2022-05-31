import { faker } from '@faker-js/faker';
import { DataStoreSuccessAPISchema } from './types';

export interface PagePayload {
  pageIndex: number;
  pageSize: number;
}

const dataStores = Array(110000)
  .fill(1)
  .map((item, index) => ({
    name: faker.finance.accountName(),
    id: faker.finance.iban(),
    isView: "true" as unknown as boolean,
  }));

const getDataStoreSuccessResponse = ({ pageIndex, pageSize }: PagePayload) => {
  const currentPageSize = pageIndex === 0 ? pageSize : (pageIndex + 1) * pageSize;
  return {
    dataStore: dataStores.slice((pageIndex) * pageSize,  currentPageSize),
    count: dataStores.length,
    pageCount: Math.ceil(dataStores.length / pageSize),
    pageSize: pageSize,
    pageIndex: pageIndex,
  } as DataStoreSuccessAPISchema;
};

export const getDataStoreSuccessMock = ({ pageIndex, pageSize }: PagePayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: getDataStoreSuccessResponse({ pageIndex, pageSize }),
        error: null,
      });
    }, 200)
  );
};
