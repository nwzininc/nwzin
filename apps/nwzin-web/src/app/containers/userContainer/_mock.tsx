import { faker } from '@faker-js/faker';
import { UserSuccessAPISchema } from './types';

export interface PagePayload {
  pageIndex: number;
  pageSize: number;
}

const users = Array(110000)
  .fill(1)
  .map((item, index) => ({
    email: faker.name.firstName(),
    name: index.toString(),
    // name: faker.name.lastName(),
    id: faker.finance.iban(),
    isAdmin: true,
    role: 'admin',
    profileUrl:
      'https://res.cloudinary.com/nwzin/image/upload/v1648142995/ben-parker-OhKElOkQ3RE-unsplash_zau5gn.jpg',
    groupIds: ['finance', 'it'],
  }));

const getUserSuccessResponse = ({ pageIndex, pageSize }: PagePayload) => {
  const currentPageSize = pageIndex === 0 ? pageSize : (pageIndex + 1) * pageSize;
  return {
    users: users.slice((pageIndex) * pageSize,  currentPageSize),
    count: users.length,
    pageCount: Math.ceil(users.length / pageSize),
    pageSize: pageSize,
    pageIndex: pageIndex,
  } as UserSuccessAPISchema;
};

export const getUserSuccessMock = ({ pageIndex, pageSize }: PagePayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: getUserSuccessResponse({ pageIndex, pageSize }),
        error: null,
      });
    }, 200)
  );
};
