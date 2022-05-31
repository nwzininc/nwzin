import { faker } from '@faker-js/faker';
import { GroupSuccessAPISchema } from './types';

export interface PagePayload {
  pageIndex: number;
  pageSize: number;
}

const groups = Array(110000)
  .fill(1)
  .map((item, index) => ({
    usersCount: faker.phone.phoneNumber(),
    name: faker.name.lastName(),
    id: faker.finance.iban(),
  }))

const getGroupSuccessResponse = ({ pageIndex, pageSize }: PagePayload) => {
  const currentPageSize = pageIndex === 0 ? pageSize : (pageIndex + 1) * pageSize;
  return {
    groups: groups.slice((pageIndex) * pageSize,  currentPageSize),
    count: groups.length,
    pageCount: Math.ceil(groups.length / pageSize),
    pageSize: pageSize,
    pageIndex: pageIndex,
  } as unknown as GroupSuccessAPISchema;
};

export const getGroupSuccessMock = ({ pageIndex, pageSize }: PagePayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: getGroupSuccessResponse({ pageIndex, pageSize }),
        error: null,
      });
    }, 200)
  );
};
